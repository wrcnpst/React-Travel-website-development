import React, { useState } from 'react';
import './App.css';
import ContentItem from './Content';

function App() {
    const [getTrips, setGetTrips] = useState([]);
    const [searchText, setSearchText] = useState('')

    const contentElements = getTrips.map((content, index) => {
        return <ContentItem key={index} content={content} />
    })

    function fetchApi(keyword) {
        fetch(`http://localhost:5000/trips/${keyword}`)
        .then((response) => response.json())
        .then((data) => {
            setGetTrips(data);
            console.log(data);
        })
        .catch(error => console.log(error))
      }

    function initail() {
        if (searchText == false){
            fetchApi(searchText)
        }
    }
    

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

                    onChange={(event) => {
                        setSearchText(event.target.value)
                        fetchApi(event.target.value)
                    }}
                />
            </div>

            <div>
                {contentElements}
            </div>
            
        </div>
    );
}

export default App;
