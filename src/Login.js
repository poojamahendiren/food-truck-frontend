import React , { useState }from "react";
import {Link} from 'react-router-dom';
import {Typography, TextField, Button} from '@mui/material';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import toast from 'react-hot-toast';
import Burger from "./assets/Burger.png"


export default function Login() {
    const navigate = useNavigate();
const [formData, setFormData] = useState({
    email:"",
    password:""
});
const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/register/signin`,{...formData});  
    console.log(response);
    toast.success('SignedIn successfully');
    if(response.data){
        localStorage.setItem("token",response.data);
        navigate("/home");
        //toast.success('SignedIn successfully');
    }
  };

  const [user,setUser] = useState( {
    name: "",
    email: "",
    password: ""
  });
  const register = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/register/signup`, {...user});
      console.log(res);
      toast.success('Registered successfully');
    } catch (err) {
      console.log(err);
      toast.error('Something went wrong');
    }
  };

    return(
        <div>
          <header >
            <img src={Burger} style={{display:"block",marginLeft:"auto",marginRight:"auto",width:"150px",height:"150px"}} />
            <p style={{textAlign:"center",fontFamily: "Itim, cursive",fontSize:"40px",marginTop:"0"}}><b>TN33 Hub</b></p>
          </header>
        <div style={{display:"inline-block",paddingLeft:"120px"}}>
            <form style={{backgroundColor:"white"}} onSubmit={handleSubmit}> 
                <div style={{paddingLeft:"20px",paddingRight:"20px",paddingTop:"20px"}}>
                    < TextField id="outlined-basic" variant="outlined" type="email" name="email" label="Email"
                    //value={email} 
                    //onChange={(e) => setEmail(e.target.value)}
                    onChange = {(e)=> setFormData({...formData,email:e.target.value})}
                    />
                </div> <br/>
                <div style={{paddingLeft:"20px",paddingRight:"20px"}}>
                    <TextField id="outlined-basic" label="Password" variant="outlined" type="password" name="password"
                     onChange = {(e)=> setFormData({...formData,password:e.target.value})} 
                    //value={password} 
                    //onChange={(e) => setPassword(e.target.value)}
                     />
                </div> <br/>
                {/* <Button variant="contained" type="submit" > Submit </Button> */}
                <div style={{paddingLeft:"20px",paddingRight:"20px"}}>
                {/* <Link
                          to={"/home"}> */}
                          
                        <Button variant="outlined" type="submit">
                          Login
                          </Button>
                          <br/><br/> 
                        {/* </Link>*/}
                
                </div>     

            </form>
        </div>
        <div style={{display:"inline-block",paddingLeft:"800px",align:"left"}}>
            <form style={{backgroundColor:"white"}} onSubmit={register} > 
            <div style={{paddingLeft:"20px",paddingTop:"20px"}}>
            <TextField id="outlined-basic" label="Name" variant="outlined"  type="text" value={user.name} onChange = {(e)=> setUser({...user,name:e.target.value})} />
            </div>
                <div style={{paddingLeft:"20px",paddingRight:"20px",paddingTop:"20px"}}>
                    < TextField type="email" id="outlined-basic" label="Email" variant="outlined"value={user.email} onChange = {(e)=> setUser({...user,email:e.target.value})}
                    //value={email} 
                    //onChange={(e) => setEmail(e.target.value)}
                    />
                </div> <br/>
                <div style={{paddingLeft:"20px",paddingRight:"20px"}}>
                    <TextField id="outlined-basic" label="Password" type="password" value={user.password} variant="outlined" onChange = {(e)=> setUser({...user,password:e.target.value})} 
                    //value={password} 
                    //onChange={(e) => setPassword(e.target.value)}
                     />
                </div> <br/>
                
                <div style={{paddingLeft:"20px",paddingRight:"20px",paddingBottom:"20px"}}>
                
                <Button variant="outlined" type="submit">Register</Button>
                </div>     

            </form>
        </div>
        </div>

    )
}