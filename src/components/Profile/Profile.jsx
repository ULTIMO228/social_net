import prof from './img/elon.jpg';
import './Profile.css'
import Post from "../Post/Post";
import React from "react";

 export default function Profile(props){
     let postInput=React.createRef()
    return(
        <>
            <div className="Profile__profile">
                <img className="Profile__ava" src={prof} alt=""/>
                <span className="Profile__name">Elon Mask</span>
            </div>
            <section className="Profile__posts">
                <p className="Profile__name">My posts</p>
                <input type="text" ref={postInput} placeholder="enter the post"/>
                <button onClick={()=>{alert(postInput.current.value)}}>
                    Add post
                </button>
                {Object.entries(props.posts).map(([id,post])=>(<Post text={post.text} key={id}/>))}
                {/*<Post text={"Griffon Mask, please read my messages"}/>*/}
                {/*<Post text={"Hello my friend, i want to say that I appeared in a new social net,don't forget me and I went"}/>*/}
                {/*<Post text={"Creator this social is best"}/>*/}

            </section>

        </>
    )
}