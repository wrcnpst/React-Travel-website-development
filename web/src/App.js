import React, { useEffect, useState } from 'react';
import './App.css';
import ContentItem from './Content';
const axios = require('axios')

function App() {
    const [getTrips, setGetTrips] = useState([]);
    const [searchText, setSearchText] = useState('')

    const contentElements = getTrips.map((content, index) => {
        return <ContentItem key={index} content={content} setSearchText={setSearchText} fetchApi={fetchApi}/>
    })

    useEffect(() => {
        fetchApi('');
      }, []);

    async function fetchApi(keyword) {
        await axios(`http://localhost:5000/trips/${keyword}`)
        .then(res => {
            setGetTrips(res.data);
            console.log(res.data);
        })
        .catch(error => console.log(error))
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
