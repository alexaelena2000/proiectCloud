// js/components/MainPage.jsx
import {useEffect, useState} from "react";
import { useRouter } from 'next/router';

export default function MainPage() {
	const [records, setRecords] = useState([]);
    const router = useRouter();

	useEffect(() => {
		try{
			fetch('/api/records', {
				method: 'GET',
			})
				.then(response => response.json())
				.then(json => setRecords(json.data));
		}
		catch (error) {
			console.log(error);
		}
	}, []);

	const deleteRecord = (event) => {
		event.preventDefault();
		const id = event.target.id;
		try {
			fetch(`/api/records?id=${id}`, {
				method: 'DELETE',
			})
				.then(response => response.json())
				.then(json => {
						setRecords(records.filter(record => record._id !== id));
				});
		}
		catch (error) {
			console.log(error);
		}
	}

	return (
		<section className="bg-sky-100">
			<div className="container px-6 py-10 mx-auto text-sky-800">
				<h1 className="w-[1000px] mx-auto text-center text-6xl">CanineCare</h1>
				<p className="w-[1000px] mx-auto text-center mt-4 text-3xl">Cainii disponibili pentru adoptie</p>

                <div className={"flex justify-center mt-4"}>
								<button type="button"
								        onClick={() => router.push('/insert')}
								        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Adauga un caine
								</button>
				</div>
                <div className={"flex justify-center mt-4"}>
								<button type="button"
								        onClick={() => router.push('/chat')}
								        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">PawSavant
								</button>
				</div>
				<div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
					{records.map(record => (
						<div
							key={record._id}
							className="block max-w-sm p-6 bg-sky-50 border border-gray-200 rounded-lg shadow hover:bg-blue-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
							<div className="inline-flex items-center">
                                <label>Nume:</label>
                                <p className="text-base font-bold leading-7 text-gray-900 dark:text-white pl-1">
								    {record.nume}
							    </p>
                            </div>
                            <br></br>
                            <div className="inline-flex items-center">
                                <label>Varsta:</label>
                                <p className="text-base font-bold leading-7 text-gray-900 dark:text-white pl-1">
								    {record.varsta}
							    </p>
                            </div>
                            <br></br>
                                <label>Descriere:</label>
							    <p className="text-base font-semibold leading-7 text-gray-900 pl-1">
								    {record.descriere}
							    </p>
							<div className={"flex justify-center mt-4"}>
								<button type="button"
								        id={record._id}
								        onClick={deleteRecord}
								        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Sterge
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}