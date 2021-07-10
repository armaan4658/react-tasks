import './App.css';
import {useState,useEffect} from 'react';
import {
  Route,
  Switch,
  useHistory
} from 'react-router-dom';
import React from 'react';
import {Home} from './home';
import {AddUser} from './adduser';
import {Profile} from './profile';
import {SimpleBreadcrumbs} from './navbar';
export const DataContext = React.createContext(null);
export const PostContext = React.createContext(null);
export const UpdateContext = React.createContext(null);
export const DeleteContext = React.createContext(null);
function App() {
    // const [data,setData] = useState([{"createdAt":"2021-07-08T18:41:09.143Z","name":"Brendan Ernser","avatar":"https://cdn.fakercloud.com/avatars/stushona_128.jpg","id":"1"},{"createdAt":"2021-07-08T09:07:27.969Z","name":"Heather Labadie","avatar":"https://cdn.fakercloud.com/avatars/coreyginnivan_128.jpg","id":"2"},{"createdAt":"2021-07-08T14:37:07.914Z","name":"Deanna Treutel","avatar":"https://cdn.fakercloud.com/avatars/andresenfredrik_128.jpg","id":"3"},{"createdAt":"2021-07-08T06:36:37.906Z","name":"Dennis Fay","avatar":"https://cdn.fakercloud.com/avatars/ricburton_128.jpg","id":"4"},{"createdAt":"2021-07-08T06:05:40.435Z","name":"Kristy Nienow","avatar":"https://cdn.fakercloud.com/avatars/chaabane_wail_128.jpg","id":"5"},{"createdAt":"2021-07-08T04:59:32.386Z","name":"Johnnie Murray","avatar":"https://cdn.fakercloud.com/avatars/GavicoInd_128.jpg","id":"6"},{"createdAt":"2021-07-08T23:47:10.892Z","name":"Dean Botsford","avatar":"https://cdn.fakercloud.com/avatars/soyjavi_128.jpg","id":"7"},{"createdAt":"2021-07-08T17:03:51.607Z","name":"Veronica Goyette","avatar":"https://cdn.fakercloud.com/avatars/stalewine_128.jpg","id":"8"},{"createdAt":"2021-07-08T15:28:37.100Z","name":"Heather Volkman","avatar":"https://cdn.fakercloud.com/avatars/GavicoInd_128.jpg","id":"9"},{"createdAt":"2021-07-08T16:48:52.713Z","name":"Margie Ratke","avatar":"https://cdn.fakercloud.com/avatars/mvdheuvel_128.jpg","id":"10"},{"createdAt":"2021-07-08T14:22:06.223Z","name":"Ron Nolan","avatar":"https://cdn.fakercloud.com/avatars/frankiefreesbie_128.jpg","id":"11"},{"createdAt":"2021-07-08T08:29:39.272Z","name":"Terrance Hayes","avatar":"https://cdn.fakercloud.com/avatars/croakx_128.jpg","id":"12"},{"createdAt":"2021-07-08T06:15:17.251Z","name":"Priscilla Wisoky","avatar":"https://cdn.fakercloud.com/avatars/lowie_128.jpg","id":"13"},{"createdAt":"2021-07-08T20:41:37.487Z","name":"Velma Aufderhar","avatar":"https://cdn.fakercloud.com/avatars/cofla_128.jpg","id":"14"}]);
  const [data,setData] = useState([]);
  const history = useHistory();
  const getData = () =>{
    fetch('https://react-task-4-server.herokuapp.com/users',{method:'GET'})
    .then(res=>res.json())
    .then(res=>setData(res))
    .catch(e=>console.log(e))
  };
  const postData = (data) =>{
    fetch('https://react-task-4-server.herokuapp.com/users',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    }).then(res=>getData())
  }
  const deleteUser = (id) =>{
    fetch(`https://react-task-4-server.herokuapp.com/users/${id}`,{method:'DELETE'})
    .then(res=>res.json())
    .then(res=>console.log(res))
    .then(res=>history.push('/'))
    .then(res=>getData())
    .catch(res=>console.log(res))
  
  }
  const updateUser = (id,data) =>{
    fetch(`https://react-task-4-server.herokuapp.com/users/${id}`,{
      method:'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(res=>getData())
    .catch(res=>console.log(res))
  }
  useEffect(getData,[]);
  // Create a Context
  
  return (
    
    <div className="App">
      <DataContext.Provider value={data}>
        <PostContext.Provider value={postData}>
          <UpdateContext.Provider value={updateUser}>
            <DeleteContext.Provider value={deleteUser}>
              <nav>
                <SimpleBreadcrumbs />
              </nav>
              <Switch>
                <Route exact path='/'> <Home/> </Route>
                <Route path='/add-user'> 
                    <AddUser/>
                 </Route>
                 <Route path='/users/:id'>
                    <Profile/>
                 </Route>
              </Switch>
            </DeleteContext.Provider>
          </UpdateContext.Provider>
        </PostContext.Provider>
      </DataContext.Provider>
    </div>
   
  );
}

export default App;








