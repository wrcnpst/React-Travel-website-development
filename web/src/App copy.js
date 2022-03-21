import React, { useState } from 'react';
import './App.css';
import ContentItem from './Content';
import Contents from './Database/db';
import axios from 'axios';

const url ="http://localhost:5000/trips/";

function App() {

    fetch('http://localhost:5000/trips/')
    .then((response) => response.json())
    .then((data) => getData(data))
    
    function getData(data) {
        var getTrips = data
        console.log(getTrips)
        console.log(typeof getTrips);

        const contentElements = getTrips.map((content, index) => {
            return <ContentItem key={index} content={content} />
        })
    }



    const [searchText, setSearchText] = useState('')

    const filteredTrips = Contents.filter((content) => {
        return content.title.includes(searchText) ||
        content.description.includes(searchText) ||
        content.tags.includes(searchText)
    })

    //const result = Array.isArray(getTrips)

    
    //console.log(typeof Contents);

    

    const contentElements = filteredTrips.map((content, index) => {
        return <ContentItem key={index} content={content} />
    })


    return (
        <div className='app'>
            <header className="App-header">
                เที่ยวไหนดี
            </header>

            <div className="Search-Input">
                <input 
                    type="text" 
                    placeholder="หาที่เที่ยวแล้วไปกัน..." 
                    size="64"
                    value={searchText}
                    onChange={(event) => {setSearchText(event.target.value)}}
                />
            </div>

            <div>
                {contentElements}
            </div>
            
        </div>
    );
}

export default App;
