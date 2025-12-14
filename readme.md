# 💬 Real-Time Chat Application

A real-time chat web application that allows users to communicate instantly in shared chat rooms.  
This project demonstrates real-time, event-based communication using WebSockets and follows a clean separation between frontend and backend services.

The application is fully deployed and tested in a live production environment.


## 🛠 Tech Stack

### Frontend
- React (Vite)
- Socket.IO Client
- CSS (Responsive UI)

### Backend
- Node.js
- Express
- Socket.IO
- CORS

### Deployment
- Frontend: **Vercel**
- Backend: **Render**

---

## ✨ Features

- Users can join chat rooms using a Room ID
- Real-time messaging without page refresh
- Room-based message broadcasting
- Responsive and user-friendly interface
- WebSocket-based communication using Socket.IO

---

## 📂 Project Structure
📂 Project Structure

Real-Time-Chat-App/
│
├── Client/                     # Frontend (React)
│   ├── public/
│   │   └── index.html
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── join-room/
│   │   │   │   ├── JoinRoom.jsx
│   │   │   │   └── JoinRoom.css
│   │   │   │
│   │   │   └── chat/
│   │   │       ├── Chat.jsx
│   │   │       └── chat.css
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── Server/                     # Backend (Node + Socket.IO)
│   ├── server.js
│   ├── package.json
│   └── node_modules/
│
├── .gitignore
└── README.md



---

## ⚙️ How the Application Works

- Users enter a **username** and **room ID** on the frontend
- Socket.IO establishes a real-time connection with the backend
- Users joining the same room can send and receive messages instantly
- Messages are broadcast only to users within the same room

---

## 🧪 Testing the Application

- Open the application in two different browsers or tabs
- Join the same room using the same Room ID
- Send messages and observe real-time communication

---

## 📝 Notes

- Opening the backend URL in a browser may show `Cannot GET /`, which is expected for a Socket.IO server
- On Render’s free plan, the backend may sleep after inactivity and wake up on the next request

---

## 👩‍💻 Author

**Archi Jain**  
GitHub: https://github.com/jainarchi

---

## 📌 Future Improvements

- User authentication
- Online/offline user status
- Message timestamps
- Typing indicator
- File and image sharing

---

⭐ If you like this project, feel free to star the repository!

