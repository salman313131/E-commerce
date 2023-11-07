import { database } from "./firebase"
import { collection, addDoc } from "firebase/firestore"
import { useRef, useState } from "react"
import classes from "./Contact.module.css"
const Contact=()=>{
    const db = collection(database,'ContactUs')
    const [msg,setMsg] = useState(false)
    const name = useRef()
    const email = useRef()
    const number = useRef()
    const submitHandler=(e)=>{
        e.preventDefault()
        const data={
            name:name.current.value,
            email:email.current.value,
            number:number.current.value
        }
        addDoc(db,data).then(res=>{
            name.current.value=''
            email.current.value=''
            number.current.value=''
            setMsg(true)
            setTimeout(()=>setMsg(false),2000)
        }).catch(err=>console.log(err.message))
    }
    return(
        <form onSubmit={submitHandler} className={classes['contact-form']}>
            <label>Name</label>
            <input type='text' ref={name}></input>
            <lable>Email</lable>
            <input type='email' ref={email}></input>
            <label>Number</label>
            <input type='number' ref={number}></input>
            <button>Send</button>
            {msg && <p>Send Successfully!!!!</p>}
        </form>
    )
}
export default Contact