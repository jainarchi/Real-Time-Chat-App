import { useState, useEffect, useRef } from "react"
import "./chat.css"



const Chat = ({ socket, username, room }) => {
    const [currentMessage, setcurrentMessage] = useState("")
    const [messageList, setmessageList] = useState([])



    useEffect(() => {
        const handleReceiveMsg = (data) => {
            setmessageList((list) => [...list, data]);
        };
        socket.on("receive_message", handleReceiveMsg);

        return () => {
            socket.off("receive_message", handleReceiveMsg);
        };
    }, [socket]);

    const containRef = useRef(null)

    useEffect(() => {
        containRef.current.scrollTop = containRef.current.scrollHeight;
    }, [messageList])





    const sendMessage = async () => {
        if (currentMessage !== "") {
            const messageData = {
                id: Math.random(), // uid use here
                room: room,
                author: username,
                message: currentMessage,
                time: new Date(Date.now()).getHours() % 24 + ':' + new Date(Date.now()).getMinutes()

            }

            await socket.emit("send_message", messageData)
            setmessageList((list) => [...list, messageData])
            setcurrentMessage("");
        }
    }





    return (
        <>
        
            <div className="chat_container">
                <h2 >welcome {username}</h2>

                <div className="chat_box">
                    <div
                        className="auto-scrolling-div"
                        ref={containRef}
                        style={{
                            height: "100%",
                            overflowY: "auto",
                            // border: "2px solid red",
                        }}
                    >


                    {messageList.map((data) => (
                        <div
                            key={data.id}
                            className="message_content"
                            id={username == data.author ? "you" : "other"}
                        >
                            <div>
                                <div className="msg" id={username == data.author ? "y" : "b"}>
                                    <p>{data.message}</p>
                                </div>
                                <div className="msg_detail">
                                    <p>{data.author}</p>
                                    <p>{data.time}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>

                </div>

                  <div className="chat_body">
                        <input type="text" placeholder="Type Your Message" value={currentMessage} onChange={(e) => setcurrentMessage(e.target.value)} />
                        <button onClick={sendMessage}>&#9658;</button>
                    </div>


            </div>

        </>
    )
}

export default Chat
