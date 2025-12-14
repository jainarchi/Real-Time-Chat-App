import "./JoinRoom.css";
import { useState } from "react";
import Chat from '../chat/Chat'



const JoinRoom = ({socket}) => {
 
  const [username, setUsername] = useState("")
  const [room, setRoom] = useState("")

  
  const joinChat = ()=>{
    if(username !== "" && room !== ""){
      socket.emit("join_room" , room)

    }
  }


  return (
   <>

    <div className="fullscreen">
    <div className="join-room">
      <h2>Join Room</h2>
       <input type="text" placeholder="Name" onChange={(e) => setUsername(e.target.value)} />
      <input type="text" placeholder="Room ID" onChange={(e) => setRoom(e.target.value)} />
      <button onClick={joinChat}>Join</button>
    </div>

    </div>

    <Chat socket={socket} username={username} room ={room}/>
   </>
  );
};

export default JoinRoom;
