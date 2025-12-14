import express from 'express'
import cors from 'cors'
import {Server} from 'socket.io'
import http from 'http'


const app = express();
const port = 3000;
const server = http.createServer(app);


const io = new Server(server , {
    cors:{
        origin: "http://localhost:5173",
        methods: ["GET" , "PUT"]
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
        console.log("send messag data" , data);
        
    })
    
} )

app.use(cors());

server.listen(port , ()=>{
    console.log(`server listen on port ${port}`);
    
})