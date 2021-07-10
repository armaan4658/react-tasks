//card thing
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import {  grey, red } from '@material-ui/core/colors';
import CreateIcon from '@material-ui/icons/Create';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import {UpdateContext,DeleteContext} from './App';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 360,
    backgroundColor:grey[400],
  },
  media: {
    height: 0,
    width:'400px',
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export function CardThing({profile}) {
  const update = useContext(UpdateContext);
  const del = useContext(DeleteContext);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string(),
    avatar: Yup.string().url('Enter a valid URL')
    });

    const onSubmit = (data) =>{
        update(profile[0]._id,data);
    }

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: yupResolver(validationSchema) });
  return (
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className="card">
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                <img src={profile[0].avatar} alt="profile"></img>
              </Avatar>
            }
            title={profile[0].name}
          />
          <CardMedia
            className={classes.media}
            image={profile[0].avatar}
            title="Paella dish"
          />
          <CardActions disableSpacing>
            <IconButton aria-label="delete" onClick={()=>del(profile[0]._id)}>
              <DeleteForeverIcon />
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <CreateIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <Input {...register("name")} placeholder="Enter a name" color="primary"/>
                    {errors.name && (<p>{errors.name.message}</p>)}<br/>
                    <Input {...register("avatar")} placeholder="Enter avatar url" color="primary"/>
                    {errors.avatar && (<p>{errors.avatar.message}</p>)}<br/>
                    <Input type='submit' color="primary"/><br/>
            </form>
            </CardContent>
          </Collapse>
        </Card>
    </Grid>
  );
}
