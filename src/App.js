import React, { useState } from 'react'
import {io} from 'socket.io-client'

const App = ()=> {

    // const [time, setTime] = React.useState('fetching')  
    // const [connected, setConnected] = useState(false)
    const socket = io('https://socket-be-test.onrender.com')
    const [id, setId] = useState()

    // React.useEffect(() => {
        socket.on('connect', () => {
            // console.log(`${socket.id} is connected`)
        })
        socket.on('connect_error', () => {
            setTimeout(() => socket.connect(), 5000)
        })
        socket.emit('joined', Math.random())
        socket.on('userJoined', (data) => {
            console.log(data);
        })
        socket.on('disconnect',() => console.log('you are disconnected'))
    // },[])

    // socket.on("hello", (arg) => {
    //     console.log(arg); // world
    // });

    // const socket = io('localhost:5000')
    // socket.on('connection', (socket) => {
    //     console.log(`⚡: ${socket.id} user just connected!`);
    //     socket.on('disconnect', () => {
    //         console.log('🔥: A user disconnected');
    //     });
    // });

    const clickHandler = () => {
        // if (!connected) {
        //     socket.on('connect', ()=>console.log(socket.id))
        //     socket.on('connect_error', () => {
        //         setTimeout(() => socket.connect(), 5000)
        //     })
        // } else {
        //     socket.on('disconnect',()=>setTime('server disconnected'))    
        // }
        // setConnected(!connected)
        // const socket = io('localhost:5000')
        // socket.on('connect', ()=>console.log(socket.id))
        // socket.on('connect_error', () => {
        //     setTimeout(() => socket.connect(), 5000)
        // })
        // // socket.on('time', (data)=>setTime(data))
        // socket.on('newUser', (data) => console.log(data))
        // socket.on('disconnect',()=>setTime('server disconnected'))    
    }

    return (
        <div className="App">
            {/* <button onClick={clickHandler}>
                {connected ? "Disconnect" : "Connect"}
            </button> */}
            {/* {time} */}
        </div>
    )
}
export default App;