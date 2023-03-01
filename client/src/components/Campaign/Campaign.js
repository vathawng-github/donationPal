import 'src/components/Campaign/Campaign.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Campaign( {name, goal, description, start_date, end_date, _id}){
    return(
        <>
            <div className = "Campaign-card">
                <h3 className="name">{name}</h3>    
                <div className = "bottom">
                     <h4 className="goal">Goal: {goal}</h4>
                    <button><a href={`/Campaigns/${_id}`}>More ></a></button>
                </div>
            </div>
        </>
    )
}

export default Campaign;