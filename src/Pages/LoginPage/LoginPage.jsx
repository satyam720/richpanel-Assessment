import "./styles.css";
import CardComponent from "../../Components/Card/cardComponent";
import Box from '@mui/material/Box';



const LoginPage=()=> (
    <div className="register">
    
    <Box className="card-pos">
    <CardComponent 
    title="Login to your account"
    
    email="Email"
    password="Password"
    action="LogIn"
    prompt="New To MyApp?"
    link="/"
    linkName="Sign Up"
    event="login"/>
    </Box>
   
       
    </div>
)

export default LoginPage;