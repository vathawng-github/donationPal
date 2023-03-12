import "./ProfilePage.css";

import { useNavigate, Navigate } from "react-router-dom";

function Profile({name, picture, email, phone, streetNum, streetName, city, state, dob}) {
    const navigate = useNavigate();


    const logOut = (event) => {
        localStorage.removeItem("accessToken");
        navigate("/");
     }
    return(
        <>
        <div className="profile">
            <h1>My Profile</h1>
            
            <div className="profileCard">
                <h3>Hello, {name}</h3>
                <img id = "profile" src = {picture} alt="profile pic"/>
                <h3>Email: {email}</h3>
                <h3>Phone: {phone}</h3>
                <h3>Address: {streetNum} {streetName}., {city}, {state}</h3>
                <h3>DOB: {JSON.stringify(dob)}</h3>
            </div>
            <button className = "logout" onClick={logOut}>Log Out</button>
        </div>
        </>
    )
}

export default Profile;