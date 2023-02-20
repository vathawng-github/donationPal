import 'src/components/Campaigns/Campaigns.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Campaigns( {name, goal, description, start_date, end_date, _id}){
    return(
        <>
        {/* <div className='Campaigns-wrapper'>
            <h3 class = "name">{name}</h3>
            <p class = "goal">{goal}</p>    
        </div> */}
        <div className='Campaigns-wrapper'>
            <div class = "Campaign-card">
                <h3 class="name">{name}</h3>
                <div class = "bottom">
                     <h4 class="goal">Goal: {goal}</h4>
                    <button><a href={`/Campaigns/${_id}`}>More ></a></button>
                </div>
            </div>
            {/* <div class = "Campaign-card">
                <h3 class="name">Support a student's dream of studying abroad</h3>
                <div class = "bottom">
                    <h4 class="goal">Goal: $27300</h4>
                    <button><a href="`/Campaigns/${_id}`">More ></a></button>
                </div>
            </div>
            <div class = "Campaign-card">
                <h3 class="name">Assist a small business owner affected by COVID-19</h3>
                <div class = "bottom">
                    <h4 class="goal">Goal: $3600</h4>
                    <button><a href="`/Campaigns/${_id}`">More ></a></button>
                </div>
            </div>
            <div class = "Campaign-card">
                <h3 class="name">Fund a community garden project in a low-income neighborhood</h3>
                <div class = "bottom">
                    <h4 class="goal">Goal: $36000</h4>
                    <button><a href="`/Campaigns/${_id}`">More ></a></button>
                </div>
            </div>    
            <div class = "Campaign-card">
                <h3 class="name">Donate towards a family's home renovation after a fire</h3>
                <div class = "bottom">
                    <h4 class="goal">Goal: $32100</h4>
                    <button><a href="`/Campaigns/${_id}`">More ></a></button>
                </div>
            </div>
            <div class = "Campaign-card">
                <h3 class="name">Help a veteran with unexpected medical costs</h3>
                <div class = "bottom">
                    <h4 class="goal">Goal: $49300</h4>
                    <button><a href="`/Campaigns/${_id}`">More ></a></button>
                </div>
            </div>  
            <div class = "Campaign-card">
                <h3 class="name">Contribute to a non-profit organization's mission</h3>
                <div class = "bottom">
                    <h4 class="goal">Goal: $14100</h4>
                    <button><a href="`/Campaigns/${_id}`">More ></a></button>
                </div>
            </div>  
            <div class = "Campaign-card">
                <h3 class="name">Fund a young entrepreneur's startup idea</h3>
                <div class = "bottom">
                    <h4 class="goal">Goal: $49700</h4>
                    <button><a href="`/Campaigns/${_id}`">More ></a></button>
                </div>
            </div>  
            <div class = "Campaign-card">
                <h3 class="name">Support a family whose home was destroyed by a natural disaster</h3>
                <div class = "bottom">
                    <h4 class="goal">Goal: $17500</h4>
                    <button><a href="`/Campaigns/${_id}`">More ></a></button>
                </div>
            </div>   */}
        </div>
        </>
    )
}

export default Campaigns;