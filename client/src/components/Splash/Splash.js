import 'src/components/Splash/Splash.css';

function Splash( {Logo} ) {
    return(
        <>
        <div className='Splash-wrapper'>
            <h1>Donation Is An Act Of A Soft Heart.</h1>
            <img src={Logo} alt="hearts"></img>
        </div>
        <div className='divider'></div>
        <div>
        </div></>
    )
}

export default Splash;