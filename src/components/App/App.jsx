import './App.css';
import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import Messages from "../Messages/Messages";
import {Route, Routes} from "react-router-dom";
import Dialog from "../Dialog/Dialog";
import {useState} from "react";
import {state} from "../../store/store";

function App(props) {
    const [dialogs, setDialogs] = useState({
        1: {name: "34", m: [/*1, 2, 3*/]},
        2: {name: "s0-", m: [/*4, 5, 6*/]}
    })
    const [messages, setMessages] = useState({
        // 1: {author: "21", text: "21-21"},
        // 2: {author: "21", text: "21-21"},
        // 3: {author: "21", text: "21-21"},
        // 4: {author: "21", text: "21-21"},
        // 5: {author: "21", text: "21-21"},
        // 6: {author: "21", text: "21-21"}
    },)
    const [messageLastId,setMessageLastId]=useState(6)




    const [posts,setPosts]=useState(
        {
            1:{author:"21",text:"21-21"},
            3:{author:"21",text:"21-21"},

        }
    )
    const [postLastId,setPostLastId]=useState(
        3
    )
    function addPost(text,author) {
        const newPosts = JSON.parse(JSON.stringify(posts))
        newPosts[postLastId + 1] = {
            text: text, author: author
        }
        setPosts(newPosts)
        setPostLastId(postLastId+1)
    }
    function sendMessage(text,author,dialogId){
        const newMessages = JSON.parse(JSON.stringify(messages))
        newMessages[messageLastId + 1] = {
            text: text, author:author
        }

        const newDialogs = JSON.parse(JSON.stringify(dialogs))
        newDialogs[dialogId].m.push(messageLastId+1)

        setMessages(newMessages)
        setMessageLastId(messageLastId+1)
        setDialogs(newDialogs)

    }


return (
        <div className="App">
            <Header/>
            <Nav/>
            <main className="Main">
                <Routes>
                    {/*<Route path="/" element={<Profile />} />*/}
                    <Route path="profile" element={<Profile posts={posts} addPost={addPost}/>}/>
                    <Route path="messages" element={<Messages dialogs={dialogs}/>}/>
                    <Route path="messages/:dialogId" element={<Dialog dialogs={dialogs} messages={messages} sendMessage={sendMessage}
                    />}/>
                </Routes>
            </main>
        </div>
    );
}

export default App;
