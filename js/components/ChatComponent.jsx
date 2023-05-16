import React, {useState} from 'react';
import MessageBox from "@/js/components/MessageBox";
import { useRouter } from 'next/router';

function ChatComponent(props) {
	const [chatMessages, setChatMessages] = useState([]);
    const router = useRouter();

	const filterChatHistory = chatHistory => {
		let filteredChatHistory = [];
		for( let i = 0; i < chatHistory.length; i++ ){
			const currMessage = chatHistory[i];
			const nextMessage = chatHistory[i+1];

			if( i === chatHistory.length - 1 || (currMessage.type !== 'error' && nextMessage?.type !== 'error' && currMessage.role !== nextMessage?.role) ){
				filteredChatHistory.push(currMessage);
			}
		}

		return filteredChatHistory;
	}

	const buildResponseMessageObject = response => {
		let responseMessageObject;

		responseMessageObject = response.data.message;

		return responseMessageObject;
	}

	const handleKeyDown = async (e) => {
		if(e.key === 'Enter'){
			if(!e.target.value){
				return;
			}

			const currentMessage = e.target.value;
			e.target.value = '';
			e.target.disabled = true;

			const currentMessageObject = {
				role: 'user',
				content: currentMessage,
			}

			setChatMessages(prevChatMessages => [...prevChatMessages, currentMessageObject]);
			const currentChatHistory = [...chatMessages, currentMessageObject];
			const filteredChatHistory = filterChatHistory(currentChatHistory);

			try{
				let response = await fetch('/api/answer', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						messages: filteredChatHistory,
						type: 'michael_scott',
					}),
					signal: AbortSignal.timeout(20000),
				});
				response = await response.json();

				e.target.disabled = false;
				e.target.focus();
				console.log(response);

				const responseMessageObject = buildResponseMessageObject(response);
				setChatMessages(prevChatMessages => [...prevChatMessages, responseMessageObject]);
			}
			catch(error){
				console.log(error);
			}
		}
	}

	return (
		<div className={"w-full max-w-[1500px] mx-auto my-10 bg-sky-50"}>
			<div className={"border border-b-0 rounded-lg border-gray-300'"}>
				<div className={'border-b text-center px-[20px] py-[10px]'}>
                    <div className="mb-10 mt-10">
                        <span className={' text-md font-bold text-sky-800'}>
						    Intreba-l pe PawSavant orice nelamurire ai legata de caini!
					    </span>
                    </div>
					
				</div>
                <div className={"flex justify-center mt-4"}>
								<button type="button"
								        onClick={() => router.push('/')}
								        className="mb-10 mt-5 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Vizualizeaza cainii
								</button>
				</div>
				<MessageBox chatMessages={chatMessages}/>
			</div>
			<input
				id={'chat-input'}
				type={'text'}
				className="bg-gray-50 border border-gray-300 border-x-0 text-sky-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
				placeholder="Intreaba-ma orice despre rasele de caini"
				onKeyDown={handleKeyDown}
			/>
		</div>
	);
}

export default ChatComponent;