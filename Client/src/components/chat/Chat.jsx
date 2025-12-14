import { useState } from "react"
import "./chat.css"



const Chat = ({socket , username , room}) => {
     const [currentMessage, setcurrentMessage] = useState("")

     const sendMessage = async ()=>{
        if(currentMessage !== ""){
            const messageData ={
                id:Math.random(), // uid use here
                room: room , 
                author: username ,
                message: currentMessage,
                time : new Date(Date.now()).getHours() % 24 + ':' + new Date(Date.now()).getMinutes()

            }

            await socket.emit("send_message" , messageData)
        }
     }

  return (
    <>
    <div className="chat_container">
        <h1>welocome {username}</h1>

        <div className="chat_box">

            <div className="chat_body">
                <input type="text" placeholder="Type Your Message" value={currentMessage} onChange={(e) => setcurrentMessage(e.target.value)} />
                <button onClick={sendMessage}>send</button>
            </div>
        </div>

      
    </div>

    </>
  )
}

export default Chat
