import * as React from "react";
import {Box, Typography, Paper} from "@mui/material";
import image from '../../assets/img.png'


export default function RecipeReviewCard() {
  return (
    
    <Paper  padding='30px'  sx={{backgroundImage:{image},color:'purple', width:'675px', maxWidth:"675px", backgroundColor:'green'}}>
      <Box height='auto' sx={{color:'black', border:'1px solid black', borderRadius:'10px'}} >
        <Typography gutterBottom variant="h3" components="div">
          React
        </Typography>
        <Typography variant="body2" color="blue">
          Lorem IpsumFugit porro explicabo. Amet sit incidunt nemo ad dignissimos explicabo quas inventore. Et nulla qui veniam.
        </Typography>     
      </Box> 
    </Paper>
       
  );
}
