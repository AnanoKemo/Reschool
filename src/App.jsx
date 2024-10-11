import React from 'react';
import cardData from './data';  
import Card from './components/Card'; 
import './App.css'; 

const App = () => {
    const openLink = () => {
        window.open('https://lichess.com', '_blank');
    };

    return (
        <div className="app-container">
            <button onClick={openLink} className="navigate-button">
                Go to Lichess
            </button>
            <div className="card-container">
                {cardData.map(card => (
                    <Card 
                        key={card.id} 
                        title={card.title} 
                        description={card.description} 
                        imageUrl={card.imageUrl} 
                        color={card.color} 
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
