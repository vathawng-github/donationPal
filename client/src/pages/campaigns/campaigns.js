import { useState, useEffect, useParams } from 'react';
import axios from 'axios';
import Campaign from 'src/components/Campaign/Campaign';
import './Campaigns.css';

function Campaigns( {apiURL} ) {
    
const [isLoading, setIsLoading] = useState(false);
const [dataCampaigns, setCampaigns] = useState([]);

useEffect( () => {
    //console.log(`My API URL in Campaigns page is ${apiURL}`);
    const loadCampaigns = async () => {
        try {
            // const apiResponse = await axios.get(apiURL + '/campaign/')
            const apiResponse = await axios.get('http://localhost:8080/api/v1/campaigns/');
            // await console.log(apiResponse.data);
            await console.log(apiResponse.data);                        
            setCampaigns((dataCampaigns) => [...apiResponse.data]);

        }
        catch (error) {
            console.log("Error :(");
        }
        finally {
            setIsLoading(false);
        }
    };

    // set isload to true
    setIsLoading(true);
    loadCampaigns();
}, []);

return  (
    <div>
        <div>
            {isLoading ? 
                (<span className='loading'><div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></span>)
                : (
                <div className = "Campaigns-wrapper">
                    {dataCampaigns.map((c) => (
                        <Campaign 
                            key={c._id}
                            name={c.name}
                            goal={c.goal}
                            desc={c.description}
                            start_date={c.start_date}
                            end_date={c.end_date}
                        />
                        ))} 
                </div>
            )}
        </div>
    </div>
)

}

export default Campaigns;