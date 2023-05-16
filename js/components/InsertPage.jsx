// js/components/InsertPage.jsx
import { useRouter } from 'next/router';

export default function InsertPage() {
    const router = useRouter();

	const insertRecord = (event) => {
		event.preventDefault();
		const nume = document.getElementById("nume").value;
        const varsta = document.getElementById("varsta").value;
		const descriere = document.getElementById("descriere").value;
		const data = {nume, varsta, descriere};
		fetch("/api/records", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}).then(() => {
			console.log("New record inserted");
			document.getElementById("nume").value = "";
            document.getElementById("varsta").value = "";
			document.getElementById("descriere").value = "";
		});
	}

	return (
		<section className="bg-sky-100">
			<div className="container px-6 py-10 mx-auto text-sky-800">
				<h1 className="w-[1000px] mx-auto text-center text-6xl">CanineCare</h1>
				<p className="w-[1000px] mx-auto text-center mt-4 text-3xl">Insereaza datele pentru caine</p>
                <div className={"flex justify-center mt-4"}>
								<button type="button"
								        onClick={() => router.push('/')}
								        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Vizualizeaza cainii
								</button>
				</div>

				<form>
					<div className="mb-6">
						<label htmlFor="nume" className="block mb-2 text-sm font-medium text-gray-900 text-sky-800">Numele cainelui</label>
						<input type="text" id="nume"
						       className="bg-sky-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						       placeholder="Azorel" required/>
					</div>
                    <div className="mb-6">
						<label htmlFor="varsta" className="block mb-2 text-sm font-medium text-gray-900 text-sky-800">Varsta cainelui</label>
						<input type="text" id="varsta"
						       className="bg-sky-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						       placeholder="2 ani" required/>
					</div>
					<div className="mb-6">
						<label htmlFor="descriere"
						       className="block mb-2 text-sm font-medium text-gray-900 text-sky-800">Descrierea cainelui</label>
						<textarea id="descriere"
						       className="bg-sky-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						       required/>
					</div>
					<button type="submit"
					        onClick={ insertRecord }
					        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Adauga
					</button>
				</form>
			</div>
		</section>
	)
}