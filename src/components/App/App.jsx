import './App.css';
import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import Messages from "../Messages/Messages";
import {Route, Routes} from "react-router-dom";
import Dialog from "../Dialog/Dialog";

function App() {
    return (
        <div className="App">
            <Header/>
            <Nav/>
            <main className="Main">
                <Routes>
                    {/*<Route path="/" element={<Profile />} />*/}
                    <Route path="profile" element={<Profile/>}/>
                    <Route path="messages" element={<Messages/>}>
                        <Route path=":dialogId" element={<Dialog/>}/>
                    </Route>
                </Routes>
            </main>
        </div>
    );
}

export default App;
