import 'src/components/Header/Header.css';
// import {Link as RouterLink} from 'react-router-dom';


function Header() {
    return(
        <div className='Header-wrapper'>
            <h2>DonationPal</h2>
            {/* <nav>
                <RouterLink to='/' className='Header-Link'>
                    Home
                </RouterLink>
                <RouterLink to='/campaigns' className='Header-Link'>
                    Campaigns
                </RouterLink>
            </nav> */}
            <nav>
                <h4><a href= "#">Home</a></h4>
                <h4><a href= "#">Campaigns</a></h4>
                <h4 class = "red"><a href= "#">Donate</a></h4>
            </nav>
        </div>
    )
}

export default Header;