import { useRef } from "react"
import classes from "./Login.module.css"
import CartContext from "../Store/cart-context"
import { useContext } from "react"
import { useHistory } from "react-router-dom"
const Login=()=>{
    const emailInputRef=useRef()
    const passwordInputRef=useRef()
    const cartCtx = useContext(CartContext)
    const history = useHistory()
    const formSubmitHandler=(e)=>{
    e.preventDefault()
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDYjaLcAC5qmLJlbncFS7ReOiqRNXFDyBg',
      {
        method: 'POST',
        body : JSON.stringify({
        email : enteredEmail,
        password : enteredPassword,
        returnSecureToken : true
        }),
        headers : {'Content-Type':'application/json'}
      }).then(res=>{
        if(res.ok){
          res.json().then(data=>{
            cartCtx.login(data.idToken)
            history.replace('/')
          })
        }else{
          return res.json().then((data)=>{
            let errorMessage = 'Authentication failed'
            if(data && data.error && data.error.message){
              errorMessage = data.error.message
            }
            alert(errorMessage)
          })
        }
      })
    }
    return(
        <section className={classes.auth}>
            <form onSubmit={formSubmitHandler}>
                <div className={classes.control}>
                    <label htmlFor='email'>Your Email</label>
                    <input type='email' id='email' required ref={emailInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Your Password</label>
                    <input
                    type='password'
                    id='password'
                    required
                    ref={passwordInputRef}
                    />
                </div>
                <div className={classes.actions}>
                    <button>Login</button>
                </div>
        </form>
    </section>
    )
}
export default Login