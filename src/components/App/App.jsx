import './App.css';
import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import Messages from "../Messages/Messages";
function App() {
    return (
        <div className="App">
            <Header/>
            <Nav/>
            <main className="Main">
                <Profile/>

                {/*<Messages/>*/}
            </main>
        </div>
    );
}

export default App;
