import React, {useEffect, useRef} from 'react';

function MessageBox(props) {
	const messagesEndRef = useRef(null);
	const { chatMessages, } = props;

	const scrollToBottom = () => {
		messagesEndRef.current.scrollIntoView({ behavior: 'smooth', });
	}
	useEffect(() => {
		scrollToBottom()
	}, [chatMessages]);

	return (
		<div className={'h-[400px] overflow-auto px-[20px]'}>
			<ul className={'divide-y divide-gray-200'}>
				<li className={ 'py-3' }>
							<span className={ `block text-sky-800 font-bold` }>
                            PawSavant:
							</span>
					<span className={ 'block' }>
								Salut, eu sunt PawSavant. Cum te pot ajuta?
							</span>
				</li>
				{
					chatMessages.map((message, index) => {
						return (
							<li className={'py-3'} key={index}>
								<span className={ `block ${message.role === 'assistant' ? 'text-sky-800' : 'text-blue-800'} font-bold` }>
									{
										message.role === 'assistant' ? 'PawSavant:' : 'You:'
									}
								</span>
								<span className={ 'block' }>
									{
										message.content
									}
								</span>
							</li>
						)
					})
				}
			</ul>
			<div ref={ messagesEndRef } />
		</div>
	);
}

export default MessageBox;