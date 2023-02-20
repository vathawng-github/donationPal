import react from 'react';
import Campaigns from './Campaigns';
import '../Campaigns/Campaigns.css'

const AllCampaigns = ({allCampaigns}) => {
    return(
        <div className='row'>
            {allCampaigns.map ((items) => <Campaigns key={items._id} {...items}/>)}
        </div>
    )
}

export default AllCampaigns;