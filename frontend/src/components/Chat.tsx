import React, { useState } from 'react';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSendMessage = async () => {
        if (input.trim()) {
            const newMessages = [...messages, { user: 'user', text: input }];
            setMessages(newMessages);
            setInput('');

            try {
                const response = await fetch('http://127.0.0.1:5000/create_bot', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ role: 'user', content: input }),
                });

                if (response.ok) {
                    const data = await response.json();
                    setMessages([...newMessages, { user: 'bot', text: data.response }]);
                } else {
                    const errorData = await response.json();
                    setMessages([...newMessages, { user: 'bot', text: `Error: ${errorData.error || 'Unknown error'}` }]);
                }
            } catch (error) {
                setMessages([...newMessages, { user: 'bot', text: `Error communicating with the bot: ${error.message}` }]);
            }
        }
    };

    return (
        <div className="max-w-md mx-auto my-8 ">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="px-100 py-10 ">
                    <div className="chat-box h-400 overflow-y-auto ">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message mb-2 ${msg.user === 'user' ? 'text-right' : 'text-left'}`}>
                                <div className={`inline-block p-2 rounded ${msg.user === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-10">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                            className="w-full p-4 border rounded"
                            placeholder="Type your message..."
                        />
                        <button onClick={handleSendMessage} className="w-full mt-2 p-2 bg-blue-500 text-white rounded">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
