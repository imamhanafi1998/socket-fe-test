import React from 'react'
import {io} from 'socket.io-client'

const App = ()=> {

    // const socket = io('https://socket-be-test.onrender.com')
    const socket = io('localhost:5000')


    React.useEffect(() => {
        // socket.on('connect', () => {
        //     console.log(`${socket.id} is connected`)
        // })

        socket.on('userJoined', data => {
            console.log(`${data} is joined`)
        })

        socket.on('connect_error', () => {
            setTimeout(() => socket.connect(), 5000)
        })

        socket.on('disconnect',() => console.log('you are disconnected'))
    },[])

    return (
        <div className="App">
            
        </div>
    )
}
export default App;