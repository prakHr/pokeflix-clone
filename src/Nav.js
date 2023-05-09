import React, { useEffect, useState } from 'react';
import "./Nav.css";
import { useHistory } from 'react-router-dom';
function Nav(){
    const [show,handleShow] = useState(false);
    const history = useHistory();
    const transitionNavBar=()=>{
        if(window.srollY>100){
            handleShow(true);

        }else{
            handleShow(false);
        }
    }
    useEffect(()=>{
    window.addEventListener("scroll",transitionNavBar);
    return () => window.removeEventListener("scroll",transitionNavBar);
    },[])
    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className='nav__contents'>
                <img
                    onClick = {()=> history.push("/")}
                    className = "nav__logo"     
                    src = "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt = "">
                </img>
                <img
                    onClick = {()=> history.push("/profile")}
                    className = "nav__avatar" 
                    src = "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/ahoqmsnvkxq7axavwrud">
                </img>
            </div>
        
            
       
        </div>
    )
}
export default Nav

