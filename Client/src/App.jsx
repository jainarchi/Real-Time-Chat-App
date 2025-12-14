
import {io} from 'socket.io-client'
import JoinRoom from "./components/join-room/JoinRoom"


const socket = io("https://chat-backend-b4zb.onrender.com" , {
   transports: ["websocket"], // Render ke liye stable connection
})


const App = () => {
  return (
    <>

     <JoinRoom socket={socket}/>
     
      
    </>
  )
}

export default App





// import io from 'socket.io-client'
// import JoinRoom from "./components/join-room/JoinRoom"


// const socket = io.connect("https://chat-backend-b4zb.onrender.com")

// const App = () => {
//   return (
//     <>

//      <JoinRoom socket={socket}/>
      
//     </>
//   )
// }
