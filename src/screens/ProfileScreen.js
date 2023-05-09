import React from "react";
import "./ProfileScreen.css";
import Nav from "../Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";

function ProfileScreen(){
    const user = useSelector(selectUser);
    return (

    <div className="profileScreen">
        
        <Nav/>
        <div className="profileScreen__body">
            <h1>Sign Out User!</h1>
            <div className="profileScreen__info">
                   
                <div className="profileScreen__details">
                    <h2>{user.email}</h2>
                    <div className="profileScreen__plans">
                        <button onClick={()=>{auth.signOut()}} className="profileScreen__signOut">Sign Out</button>
                    </div>
                </div>
            </div>

            
        </div>
    </div>
    );
}
export default ProfileScreen;