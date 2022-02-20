import miniprof from "./img/elon_mini.jpg";
import './Messages.css'
import {Link, Route, Routes, Outlet} from "react-router-dom";

export default function Messages(props) {

    return (
        <div className="Messages">
            <div className="Messages__messages">

                {Object.entries(props.dialogs).map(([id, dialog]) => (
                    <Link to={id} key={id}>
                        <div className="Messages__dialog">
                            <div>
                                <img src={miniprof} className="Messages__mini-ava" alt=""/>
                                <span className="Messages__name">{dialog.name}</span>

                            </div>
                        </div>
                    </Link>))}
            </div>
            <Outlet/>
        </div>
    )
}