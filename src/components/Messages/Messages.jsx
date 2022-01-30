import miniprof from "./img/elon_mini.jpg";
import './Messages.css'
export default function Messages(){
    return(
        <>
            <div className="Messages__messages">
            <div className="Messages__user">
                <div>
                    <img src={miniprof} className="Messages__mini-ava"  alt=""/>
                    <span className="Messages__name">Elon Mask</span>
                </div>
            </div>
            <div className="Messages__user">
                <div>
                    <img src={miniprof} className="Messages__mini-ava"  alt=""/>
                    <span className="Messages__name">Griffon Mask</span>
                </div>
            </div>
            </div>
        </>
    )
}