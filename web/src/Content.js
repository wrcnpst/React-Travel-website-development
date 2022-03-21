import React from 'react';
import './Content.css';

function ContentItem(props) {
    const {content, setSearchText, fetchApi} = props
    var shortDescription = content.description.substring(0, 140)

    return (
        <div className="app-main-grid">
            <div className="app-left-grid">
                <img src= {content.photos[0]} className="Main-Image" alt="main-pic"/>
            </div>
            
            <div className="app-right-nested-grid">
                <div>
                    <div className='Content-Title'>
                        <a className='Content-Title' href={content.url} target="_blank" rel="noopener noreferrer">
                            {content.title}
                        </a>
                    </div>
                    <div className='Content-Description'>
                        {shortDescription}
                        ....
                        <a className="App-link" href={content.url} target="_blank" rel="noopener noreferrer">
                            อ่านต่อ
                        </a>
                    </div>
                </div>
                <div className='Content-Tag'>
                    หมวด · 
                    {
                        content.tags.map((tag, index, arr) => {
                            if (arr.length - 1 > index) {
                                return (
                                    <span 
                                    key={index} 
                                    className="spacer" 
                                    onClick={() => {
                                        setSearchText(tag)
                                        fetchApi(tag)
                                    }}>
                                        {tag}
                                    </span>
                                )}
                            }
                        )
                    }
                    และ
                    <span  
                        className="spacer" 
                        onClick={() => {
                        let lastTag = content.tags[content.tags.length - 1]
                        setSearchText(lastTag)
                        fetchApi(lastTag)
                    }}>
                        {content.tags[content.tags.length - 1]}
                    </span>
                </div>
                <div className='imgage-nested-grid'>
                    <img src= {content.photos[1]} className="Content-SubImage" alt="Image"/>
                    <img src= {content.photos[2]} className="Content-SubImage" alt="Image"/>
                    <img src= {content.photos[3]} className="Content-SubImage" alt="Image"/>
                </div>
            </div>
        </div>
    );
}

export default ContentItem;