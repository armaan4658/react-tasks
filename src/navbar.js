import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {Link} from "react-router-dom";



export function SimpleBreadcrumbs() {
  return (
    <Breadcrumbs aria-label="breadcrumb" className="navbar">
      <Link to = '/'>
        <h1>Home</h1>
      </Link>
      <Link to = '/add-user'>
        <h1>Add user</h1> 
      </Link>
    </Breadcrumbs>
  );
}
