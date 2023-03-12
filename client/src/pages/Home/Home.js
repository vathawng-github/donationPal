import 'src/pages/Home/Home.css';
import Campaigns from 'src/pages/Campaigns/Campaigns';
import Header from 'src/components/Header/Header';
import Splash from 'src/components/Splash/Splash';
import splashImg from 'src/assets/images/heart.jpeg';


function Home( {name, goal, description, start_date, end_date, _id}){
    return(
        <div>
            <Header></Header>
            <Splash Logo = {splashImg}></Splash>
            <Campaigns></Campaigns>
        </div>
    )
}

export default Home;