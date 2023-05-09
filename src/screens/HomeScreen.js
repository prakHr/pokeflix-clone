import React from 'react';
import "./HomeScreen.css";
import Nav from '../Nav';
import Banner from '../Banner';
import requests from '../Requests';
import Row from '../Row';
import PokeRow from '../PokeRow';
function HomeScreen(){
    return (
        <div className='HomeScreen'>
            {/*Nav*/}
            <Nav/>
           
           
            {/*Banner*/}
            <Banner/>
            {/*Row*/}
            <Row
                title = 'NETFLIX ORIGINALS'
                fetchUrl = {requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row title = 'Top Rated' fetchUrl = {requests.fetchTopRated}/>
            <Row title = 'Action' fetchUrl = {requests.fetchActionMovies}/>
            <Row title = 'Comedy' fetchUrl = {requests.fetchComedyMovies}/>
            <Row title = 'Horror' fetchUrl = {requests.fetchHorrorMovies}/>
            <Row title = 'Romance' fetchUrl = {requests.fetcRomanceMovies}/>
            <Row title = 'Documentaries' fetchUrl = {requests.fetcDocumentaries}/>

            <PokeRow title = 'Fav Pokemon' fetchUrl={requests.fetchPokemon}/>
        </div>
    )
}
export default HomeScreen