import miniprof from "./img/elon_mini.jpg"
import './Dialog.css'
import { useParams } from "react-router-dom";
import Message from "../Message/Message";
export default function Dialog(props) {
    let params = useParams();
    const messageIds = props.dialogs[params.dialogId].m
    console.log(messageIds)
    return (
        <div className="Dialog__messages">

            {
                Object.entries(props.messages).map(([id,message])=>{
                    if(messageIds.indexOf(id*1)!=-1) return(<Message key={id} author={message.author} text={message.text}/>)
                    else return null
                })
            }
        </div>
    )
}