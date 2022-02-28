import "./Message.css"
export default function Message(props){
return(
    <div className="Message">
        {props.author}
        <br/>
        {props.text}

    </div>
)
}
