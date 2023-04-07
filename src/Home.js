import "./styles.css";
import React, { useState } from "react";
import { Chatbot } from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import MessageParser from "./chatbot/MessageParser";
import config from "./chatbot/config";
import ActionProvider from "./chatbot/ActionProvider";
import { GoMarkGithub } from "react-icons/go";
import { IconContext } from "react-icons";
import { ReactComponent as Button } from "./assets/robot.svg";
import pizzas from "./assets/Pizza-png.png"
import background from "./assets/peakpx.jpg"
import {useNavigate} from "react-router-dom";
import toast from 'react-hot-toast';

function Home({ children }) {
  const [showBot, setBot] = useState(true);
  const navigate = useNavigate();
  const logout = async () => {
    await localStorage.removeItem("token");
    toast.success('LoggedOut successfully');
    navigate('/')
  }

  function handleBot() {
    const botState = !showBot;
    setBot(botState);
  }

  return (
    <div className="App" >
      {/* <img src={background} alt="back"/> */}
      <div className="header">
        <h4 style={{fontFamily: 'Itim, cursive',fontSize:'25px',paddingLeft:'40px',backgroundColor:"rgb(178,190,181",height:"50px",margin:"0 auto"}}>
          Try out 𝐓𝐍𝟑𝟑 𝐇𝐔𝐁 the best food on wheels in town 🍕🍔🌮
          {/* placing your food order! */}
          <button type="button" className='logout' onClick={logout} style={{float:"right"}} >
      logout
    </button>
        </h4>
        </div>
        {/* <h4 style={{margin:"0 auto",textAlign:"center"}}>Mobile food for mobile world </h4> */}
        {/* <p>HSR Layout- Sector 3 block-4,Bengaluru-530068</p> */}
        
   
      {showBot && (
        <Chatbot style={{float:"left"}}
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
        
      )}
      
      <div className="footer" style={{backgroundColor: "rgb(178,190,181)",fontSize:"18px"}}>
        <b><p>Made by @RS</p></b>
        <IconContext.Provider value={{ color: "black", size: "1.3em" }}>
          <a href="https://github.com/kmroja">
            <GoMarkGithub />
          </a>
        </IconContext.Provider>
      </div>
      <button className="app-chatbot-button" onClick={handleBot}>
        <Button className="app-chatbot-button-icon" />
      </button>
    </div>
  );
}
export default Home;