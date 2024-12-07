import { useEffect, useState } from "react";
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles=makeStyles({
  inp:{
    fontSize:60,
    margin:10,
    width:500,
  }
})

function Login(){
  const classes=useStyles();

    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

   async function Submit(e){
        e.preventDefault()

        let movie=await fetch('http://localhost:5000/admin',{
            method:'POST',
            body:JSON.stringify({email,password}),
            headers:{'content-Type':'application/json'}
          })
          .then((resp)=>resp.json())
          .then((json)=>json.data);

          alert("Submitted Successfully")
           
          
       setEmail("")
       setPassword("")
    }



    return (
        <div className="formContainer">
        <br />
          <form onSubmit={Submit}>
            <TextField className={classes.inp} variant="outlined" value={email} type="text" name="name" id="name" label="Email" onInput={(e)=>setEmail(e.target.value)} required/> <br />
            <TextField className={classes.inp} variant="outlined" value={password} type="password" name="rating" id="rating" label="Password" min="0" max="10"  onInput={(e)=>setPassword(e.target.value)} required/> <br />
            <input type="submit" id="submitBtn"/>
           </form>
        </div>
    )
}

export default Login;