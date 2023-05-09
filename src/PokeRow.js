import React, { useEffect, useState } from "react";
import "./PokeRow.css";
import axios from "axios";

function PokeRow({ title ,fetchUrl}){
    const [num, setNum] = useState("1");
    const [name,setName] = useState("");
    const [moves,setMoves] = useState([]);
    const [sendRequest, setSendRequest] = useState(false);

    useEffect(()=>{
        if(sendRequest){
            //send the request
            setSendRequest(false);
         }
        async function getData(){
            
            const request = await axios.get(`${fetchUrl}${num}`);
            // console.log("`${fetchUrl}${num}`");
            // console.log(`${fetchUrl}${num}`);
            // console.log(request);
            setName(request.data.name);
            // console.log(request.data.moves);
            setMoves(request.data.moves);
            return request;
        }
        getData();
    },[sendRequest]);
    // console.log(`${fetchUrl}${num}`);
    // console.log(name);
    // console.log("moves=");
    // moves.map(move=>(console.log(move.move.name)));
    return (
        
        <div className="pokerow">
            {/* <h2 className="poke__Description">You choose {num} value ...</h2> */}
            <h1 className="poke__Description">{title}</h1>
            <input
                type="text"
                placeholder="Enter your favourite Number!"
                value={num}
                onChange={(event)=>{
                    setNum(event.target.value);
                }}
            />
            <input 
                type="button" 
                disabled={sendRequest} 
                onClick={() => setSendRequest(true)}
                value =  "Select your movie-pokemon"
                className="poke__SelectButton"
            >
                {/*  */}
            </input>
            <h5 className="poke__Name">Your favourite movie-mon is {name}!</h5>
            <h5 className="poke__Moves">Your favourite moves are :-</h5>
            <div className="pokerow__posters">
                {moves.map(move =>(
                    (move.move.name && move.move.url) && (
                        <figure className={`pokerow__poster`}>
                        <img src="picture.jpg" alt=""/>
                        <figcaption>{move.move.name}</figcaption>
                        </figure>
                        
                    )

                ))}
            </div>
        </div>
    )
}
export default PokeRow