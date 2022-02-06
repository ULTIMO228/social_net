import miniprof from "./img/elon_mini.jpg"
import './Dialog.css'
import { useParams } from "react-router-dom";
export default function Dialog() {
    let params = useParams();
    return (
        <>
{params.dialogId}
        </>
    )
}