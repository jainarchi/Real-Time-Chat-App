
import io from 'socket.io-client'
import JoinRoom from "./components/join-room/JoinRoom"


const socket = io.connect("http://localhost:3000")


const App = () => {
  return (
    <>

     <JoinRoom socket={socket}/>
     
      
    </>
  )
}

export default App
