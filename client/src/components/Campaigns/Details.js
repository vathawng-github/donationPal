import '../Campaigns/Campaigns.css';

function Details ({name, description, goal, start_date, end_date, _id, message}){
    return(
            <div>
                <div>
                    <h2 >{name}</h2>
                    <hr></hr>
                    <p >{description}</p>  
                    <h3 >Goal: {goal}</h3>
                    <p >Duration: {start_date} - {end_date}</p>
                    <button > Donate now</button>
                </div>

                <div>
                    <h2>{message}</h2>

                </div>
            </div>

    )
}

export default Details;