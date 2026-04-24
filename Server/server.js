import express from 'express'
import cors from 'cors'
import {Server} from 'socket.io'
import http from 'http'


const app = express();
const port = process.env.PORT || 3000;
const server = http.createServer(app);


const io = new Server(server , {
    cors:{
        origin: "*",
        methods: ["GET" , "POST"]
    }
})


io.on("connection" , (socket) =>{
    console.log(socket.id);


    socket.on("join_room" , (data)=> {
        socket.join(data)
        console.log(`User ID : ${socket.id} joined room : ${data} `);
        
    })

    socket.on("disconnect" , () =>{
        console.log("User Disconnected.." , socket.id);
        
    })

    socket.on("send_message" , (data) => {
        socket.to(data.room).emit("receive_message" , data)
        
    })
    
} )



app.use(cors());


server.listen(port , ()=>{
    console.log(`server listen on port ${port}`);
    
})
