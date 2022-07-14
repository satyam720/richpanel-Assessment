import "./styles.css";
import CardComponent from "../../Components/Card/cardComponent";
import Box from '@mui/material/Box';



const RegisterPage=()=> (
    <div className="register">
    
    <Box className="card-pos">
    <CardComponent 
    title="Create Account"
    name="Name"
    email="Email"
    password="Password"
    action="Sign Up"
    prompt="Already have an account?"
    link="/login"
    linkName="login"
    event="register"/>
    </Box>
   
       
    </div>
)

export default RegisterPage;