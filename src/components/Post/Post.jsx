import './Post.css'
import miniprof from "./img/elon_mini.jpg";

export default function Post(props){
    return(
        <>
            <div className="Profile__post">
                <div>
                    <img src={miniprof} className="Profile__mini-ava"  alt=""/>
                    <span>Elon Mask</span>
                </div>
                <div >
                    <p>{props.text}</p>
                </div>
            </div>
            {/*<p>Hello my friend, i want to say that I appeared in a new social net,don't forget me and I went</p>*/}
            {/*<p>Creator this social is best</p>*/}


        </>
    )
}