import React, { Component ,useState} from 'react';
import { useNavigate } from "react-router-dom";
import query from "../queries/fetchSongs";
import {
    gql,
    useQuery,
    useMutation
  } from '@apollo/client';
import { BrowserRouter, Link } from 'react-router-dom';
function SongCreate(props) {
   let navigate =useNavigate();
   const [title,setTitle]= useState(''); 
   const  [createLink] = useMutation(mutation,{
    variables: {
      title
    },// rerun query after mutation is succeffuly exectued
    refetchQueries:[{ query }]
  });
  
  const onSubmit=(event)=>{
      event.preventDefault();
      createLink()
      .then(()=>{
        console.log("Hello");
        navigate("/");
      })
      .catch((error)=>{

      })
  }
  
    
        return (
            <div className='container'>
                <h3>Create a new song</h3>
                <form onSubmit={onSubmit}>
                    <label>Song Title:</label>
                    <input type="text"
                     onChange={event => setTitle(event.target.value)}
                     value={title}
                    />
                   
                </form>
                <Link className='btn-floating btn-large red light' to="/" >

<i >back</i>
</Link>
            </div>
        );
    
}

const mutation= gql`
mutation AddSong($title:String){
  
    addSong(title:$title){
      id
      title
    }
  }
`;
export default SongCreate;