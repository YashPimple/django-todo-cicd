// //import React from "react";
// import { ChatEngine } from "react-chat-engine";
// import './App.css';
// import Chatfeed from './components/ChatFeed'
// import LoginForm from "./components/LoginForm";

// const projectID = '912b0ecc-0bb2-4aab-82f5-b18c29bda022'
// const App = () =>{

//     if(!localStorage.getItem('username'))return <LoginForm />




//     return (
//         <ChatEngine 
//             height="100vh"
//             projectID={projectID}
//             userName={localStorage.getItem('username')}
//             userSecret={localStorage.getItem('password ')}
//             renderChatFeed={(chatAppProps) =>< Chatfeed {...chatAppProps}/>}
//         />
        
//     )
// }


// export default App


//import React from "react";
import { ChatEngine } from "react-chat-engine";
import './App.css';
import Chatfeed from './components/ChatFeed'
import LoginForm from "./components/LoginForm";

const projectID = ''
const App = () =>{

   // if(!localStorage.getItem('username'))return <LoginForm />




    return (
        <ChatEngine 
            height="100vh"
            projectID="912b0ecc-0bb2-4aab-82f5-b18c29bda022"
            userName="Punk"
            userSecret="12345"
            renderChatFeed={(chatAppProps) =>< Chatfeed {...chatAppProps}/>}
        />
        
    )
}

export default App