import 'src/components/Campaigns/Campaigns.css';

function Campaigns( {name, goal}){
    return(
        <>
        {/* <div className='Campaigns-wrapper'>
            <h3 class = "name">{name}</h3>
            <p class = "goal">{goal}</p>    
        </div> */}
        <div className='Campaigns-wrapper'>
            <div class = "Campaign-card">
                <h3 class="name">Help a single mother pay for her daughter's medical expenses</h3>
                <div class = "bottom">
                     <h4 class="goal">Goal: $34900</h4>
                    <button><a href="#">Read more</a></button>
                </div>
            </div>
            <div class = "Campaign-card">
                <h3 class="name">Support a student's dream of studying abroad</h3>
                <div class = "bottom">
                    <h4 class="goal">Goal: $27300</h4>
                    <button><a href="#">Read more</a></button>
                </div>
            </div>
            <div class = "Campaign-card">
                <h3 class="name">Assist a small business owner affected by COVID-19</h3>
                <div class = "bottom">
                    <h4 class="goal">Goal: $3600</h4>
                    <button><a href="#">Read more</a></button>
                </div>
            </div>
            <div class = "Campaign-card">
                <h3 class="name">Fund a community garden project in a low-income neighborhood</h3>
                <div class = "bottom">
                    <h4 class="goal">Goal: $36000</h4>
                    <button><a href="#">Read more</a></button>
                </div>
            </div>    
            <div class = "Campaign-card">
                <h3 class="name">Fund a community garden project in a low-income neighborhood</h3>
                <div class = "bottom">
                    <h4 class="goal">Goal: $36000</h4>
                    <button><a href="#">Read more</a></button>
                </div>
            </div>
            <div class = "Campaign-card">
                <h3 class="name">Fund a community garden project in a low-income neighborhood</h3>
                <div class = "bottom">
                    <h4 class="goal">Goal: $36000</h4>
                    <button><a href="#">Read more</a></button>
                </div>
            </div>  
            <div class = "Campaign-card">
                <h3 class="name">Fund a community garden project in a low-income neighborhood</h3>
                <div class = "bottom">
                    <h4 class="goal">Goal: $36000</h4>
                    <button><a href="#">Read more</a></button>
                </div>
            </div>  
            <div class = "Campaign-card">
                <h3 class="name">Fund a community garden project in a low-income neighborhood</h3>
                <div class = "bottom">
                    <h4 class="goal">Goal: $36000</h4>
                    <button><a href="#">Read more</a></button>
                </div>
            </div>  
            <div class = "Campaign-card">
                <h3 class="name">Fund a community garden project in a low-income neighborhood</h3>
                <div class = "bottom">
                    <h4 class="goal">Goal: $36000</h4>
                    <button><a href="#">Read more</a></button>
                </div>
            </div>  
        </div>
        </>
    )
}

export default Campaigns;