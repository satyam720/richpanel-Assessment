import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import './styles.css';
import { useEffect,useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

const bull = (
  <Box
    component="span"
    sx={{  mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function CardComponent(props) {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [eventcheck, setEventcheck] = useState();

    useEffect(()=> {
        console.log("name :", name);
        console.log("email :", email);
        console.log("password :", password);

    },[name,email, password]);

    let navigate = useNavigate();

    const handleSubmit=async(e)=> {
      

      e.preventDefault();
      
      console.log('data', name, email, password);
      
      console.log(eventcheck);
      if(name){
        try{
          const {data} = await axios.post(`http://localhost:8000/api/register`,{
            name,
            email,
            password
          });
  
          window.alert("Registration Successfull, Please Login");
          setName("");
          setEmail("");
          setPassword("");
          navigate("/login", { replace: true });
        } catch (err) {
          window.alert(err.response.data);
          
          
      }
      
      }
      if(!name){
        try{
          const {data} = await axios.post(`http://localhost:8000/api/login`,{
            
            email,
            password
          });

      console.log("login res", data);

  
          window.alert("Login Successfull");
          
          setEmail("");
          setPassword("");
          navigate("/fbpage", { replace: true });
        } catch (err) {
          window.alert(err.response.data);
          
          
      }
      }
      
    

    };
    
  return (
    <form onSubmit={handleSubmit}>

    <Card  sx={{ padding: "10%" }}>

      
      <CardContent  sx={{textAlign : "left",}}>
        <Typography variant="h5" gutterBottom sx={{textAlign: "center"}} >
          {props.title}
        </Typography>
        <Typography  component="div">
          {props.name ? props.name : null}
        </Typography>
        {props.name ? <TextField 
        required
        sx={{marginBottom: "5%", opacity: '0.8'}} 
        id="name" 
        fullWidth 
        variant="outlined" 
        size="small"
        value={name}
        onChange={(e)=>setName(e.target.value)}/> : null}

        <Typography  component="div">
          {props.email ? props.email : null}
        </Typography>
        <TextField required type="email" sx={{marginBottom: "5%", opacity: '0.8'}} className="input-edit" id="email" fullWidth variant="outlined" size="small"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}/>

        <Typography  component="div">
          {props.password ? props.password : null}
        </Typography>
        <TextField required type="password" sx={{marginBottom: "5%", opacity: '0.8'}} className="input-edit" id="password" fullWidth variant="outlined" size="small"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}/>
        <FormControlLabel control={<Checkbox />} label="Remember Me" />
       
        
      </CardContent>
      <CardActions>
      <Button type="submit" sx={{backgroundColor: '#044c9c', borderRadius: "5px"}} variant="contained" fullWidth>{props.action}</Button>
     
    
      </CardActions>
      <Typography sx={{marginTop: "5%"}} component="body">{props.prompt} <Link to={props.link}>{props.linkName}</Link></Typography>
      
    </Card>
    </form>
  );
}


