import miniprof from "./img/elon_mini.jpg"
import './Dialog.css'
import sendButton from "./img/pngwing.com.png"
import { useParams } from "react-router-dom";
import Message from "../Message/Message";
import React from "react";
export default function Dialog(props) {
    let params = useParams();
    const messageIds = props.dialogs[params.dialogId].m
    console.log(messageIds)
    return (
        <>
        <div className="Dialog__messages">

            {
                Object.entries(props.messages).map(([id,message])=>{
                    if(messageIds.indexOf(id*1)!=-1) return(<Message key={id} author={message.author} text={message.text}/>)
                    else return null
                })
            }
        </div>
        <SendMessage sendMessage={props.sendMessage} dialogId={params.dialogId}/>

        </>
)
}
function SendMessage(props) {
    let messageInput=React.createRef()
    const style={
        width:"30px",
        backgroundColor:"#141938"
    }
    return(
    <div className="Dialog__send">
        <input type="text" placeholder="Напишите сообщение" ref={messageInput}/>
        <img className="Dialog__sendImg" src={sendButton} style={style}  alt="" onClick={()=>{
            props.sendMessage(messageInput.current.value,"#",props.dialogId)}} />
    </div>
    )
}
