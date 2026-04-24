import "./JoinRoom.css";
import { useState } from "react";
import Chat from '../chat/Chat'



const JoinRoom = ({socket}) => {
 
  const [username, setUsername] = useState("")
  const [room, setRoom] = useState("")
  const [showChat, setshowChat] = useState(false)

  
  const joinChat = ()=>{
      if (username.trim() === "" || room.trim() === "") {
      alert("Please enter both username and room ID");
      return;
    }
      socket.emit("join_room" , room);
      setshowChat(true)

    
  }


  return (
   <>
  

   { !showChat && (

     <div className="fullscreen">
    <div className="join-room">
      <h1>SyncChat</h1>
      <h2>Join or Create a Chat Room</h2>
      <p>Enter your name and room ID to start chatting instantly</p>
       <input type="text" placeholder="Name" onChange={(e) => setUsername(e.target.value)} />
      <input type="text" placeholder="Room ID" onChange={(e) => setRoom(e.target.value)} />
      <button onClick={joinChat}>Join</button>
    </div>

    </div>
   )}
   

   {
    showChat && (
      <Chat socket={socket} username={username} room ={room}/>   
    )
   }

   
   </>
  );
};

export default JoinRoom;
