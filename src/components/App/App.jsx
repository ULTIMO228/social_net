import './App.css';
import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import Messages from "../Messages/Messages";
import {Route, Routes} from "react-router-dom";
import Dialog from "../Dialog/Dialog";

function App(props) {
    return (
        <div className="App">
            <Header/>
            <Nav/>
            <main className="Main">
                <Routes>
                    {/*<Route path="/" element={<Profile />} />*/}
                    <Route path="profile" element={<Profile posts={props.state.posts}/>}/>
                    <Route path="messages" element={<Messages dialogs={props.state.messages.dialogs}/>}>
                        <Route path=":dialogId" element={<Dialog dialogs={props.state.messages.dialogs} messages={props.state.messages.messages}/>}/>
                    </Route>
                </Routes>
            </main>
        </div>
    );
}

export default App;
