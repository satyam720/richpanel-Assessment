import "./styles.css";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const FbPage=()=> (
    <div className="fb">
    
    <Box className="card__pos">
    <Card  sx={{ padding: "10%" }}>

      
      <CardContent  sx={{textAlign : "left",}}>
        <Typography variant="h5" gutterBottom sx={{textAlign: "center"}} >
         Facebook Page Integration
        </Typography>
      

      
       
        
      </CardContent>
      <CardActions>
      <Button type="submit" sx={{backgroundColor: '#044c9c', borderRadius: "5px"}} variant="contained" fullWidth>Connect Page</Button>
     
    
      </CardActions>
      
      
    </Card>
    </Box>
   
       
    </div>
)

export default FbPage;