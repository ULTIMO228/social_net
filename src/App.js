import './App.css';
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import prof from './img/elon.jpg';
import miniprof from './img/elon_mini.jpg'
function App() {
    return (
        <div className="App">
            <Header/>
            <Nav/>
            <main className="Main">
                <div className="profile">
                <img className="ava" src={prof} alt=""/>
                <span className="name">Elon Mask</span>
                </div>
                <section className="posts">
                    <p className="name">My posts</p>
                    <button>
                        
                    </button>
                    <div className="post">
                        <div className="mini-profile">
                        <img src={miniprof} className="mini-ava"  alt=""/>
                        <span>Elon Mask</span>
                        </div>
                        <div className="posted">
                            <p>Some text</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
