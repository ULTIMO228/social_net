import miniprof from "./img/elon_mini.jpg";
import './Messages.css'
import {Link, Route, Routes, Outlet} from "react-router-dom";

export default function Messages(){

    return(
        <div className="Messages">
            <div className="Messages__messages">
                <Link to="1">
            <div className="Messages__dialog">
                <div>
                    <img src={miniprof} className="Messages__mini-ava"  alt=""/>
                    <span className="Messages__name">Elon Mask</span>

                </div>
            </div>
                </Link>

            </div>
            <Outlet />
        </div>
    )
}