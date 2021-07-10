
import Grid from '@material-ui/core/Grid';
import {RecipeReviewCard} from './matcard';
import { useHistory } from 'react-router';
import React, { useContext } from 'react';
import {DataContext} from './App';
export function Home(){
    const history = useHistory();
    const userData = useContext(DataContext);
    return(
        <Grid style={{display:'flex',gap:'10px',flexWrap:'wrap',justifyContent:'space-around'}}>
        {userData.map(ele=>(
            <Grid item xs={6} sm={4} md={3} lg={3} xl={3} onClick={()=>{
                history.push(`/users/${ele._id}`);
            }}>
            <RecipeReviewCard 
            name = {ele.name} 
            avatar = {ele.avatar}
            />
            </Grid>
        ))}
        </Grid>
    )
}