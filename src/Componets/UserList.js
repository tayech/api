

import React, {useState, useEffect} from "react";
import axios from 'axios';
import './UserList.css';
import {Card} from 'react-bootstrap'
const TableList=()=> {
   let i=0;
    const [users, setUsers] = useState([]);
    const urlJson= 'https://jsonplaceholder.typicode.com/users';
 
     useEffect(()=>{
         const fetchData = async ()=>{
             const users_data = await axios(urlJson);
             setUsers(users_data);
         };
         fetchData();
      },[setUsers])
 
    console.log(users)
 
 return (
 <div >
    
     <h1  >USERS</h1>
   <ul style={{
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
  textDecoration: "none",
  }} >      
     {(users.length !== 0)
         ?
       users.data.map(item => (
        <Card className="card-user">
          <li key={item.id} style={{display:"block",flexDirection: "column",backgroundColor:"gray"}} >
          <Card.Title>{item.name}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{item.username}</Card.Subtitle>
    <Card.Text>{item.email}</Card.Text>
    <Card.Text>{item.address.street}</Card.Text>
    <Card.Text>{item.address.suite}</Card.Text>
    <Card.Text>{item.address.city}</Card.Text>
    <Card.Text>{item.address.zipcode}</Card.Text>
    <Card.Text>{item.address.geo.lat}</Card.Text>
    <Card.Text>{item.address.geo.lng}</Card.Text>
    <Card.Text>{item.phone}</Card.Text> 
    <Card.Text>{item.website}</Card.Text> 
    <Card.Text>{item.company.name}</Card.Text> 
    <Card.Text>{item.company.catchPhrase}</Card.Text>
    <Card.Text>{item.company.bs}</Card.Text> 
    
         </li>
         
         </Card>
         
       ))
       
       : <h1>Sorry info not found</h1>
     }
   </ul>
 </div>
 )
 }
export default TableList