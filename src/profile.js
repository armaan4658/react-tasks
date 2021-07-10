import { useContext } from "react";
import { useParams } from "react-router"
import {CardThing} from './card';
import Grid from '@material-ui/core/Grid';
import {DataContext} from './App';
export function Profile(){
    const data = useContext(DataContext);
    const {id} = useParams();
    const profile = data.filter((ele)=>ele._id===id)
    return(
        <Grid className="profile">
            <CardThing 
            profile={profile}
            />
        </Grid>
    )
}


