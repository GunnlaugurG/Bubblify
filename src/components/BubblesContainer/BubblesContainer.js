import React from 'react';
import BubbleList from '../BubbleList/BubbleList';


const BubblesContainer = () => { 
    return (
        <div className="bubble-container">
            <ul>
                <BubbleList />
            </ul>
        </div>
    )
};



export default BubblesContainer;