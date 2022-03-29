import React, { Component } from 'react';


import {
    gql,
    useQuery,
    useMutation
  } from '@apollo/client';
import { Link } from 'react-router-dom';
import query from '../queries/fetchSongs';

 
function SongLists(props){
    const { loading, error, data } = useQuery(query);
    const  [createLink] = useMutation(mutation)// rerun query after mutation is succeffuly exectued
        // refetchQueries:[{ query }];

      const onSongDelete=(id)=>{
        createLink({
            variables: {
              id
            },
            refetchQueries:[
                {query:query}
            ]
        })
        .then(()=>{
          console.log("deleted");
          
        })
        .catch((error)=>{
  
        })
      }
       const renderSongs=()=>{
           return data.songs.map(({id, title})=>{
               return <li 
               className='collection-item'
               key={id} >
                <Link to={`/song/${id}`} >
                <i >{title} </i>
                 </Link>
                <i
                className='material-icons'
                onClick={()=> onSongDelete(id)}
                >
                    delete
                </i>
               </li>
           })
       }
        console.log(loading, error, data)
        return (
            <div>
                <ul  className='collection'>
                { data && renderSongs()} 
                </ul>

                <Link className='btn-floating btn-large red light' to="/createsong" >

                    <i className='material-icons'>add</i>
                </Link>

                
                
            
            </div>
        );
    
}

const mutation=gql`
  mutation DeleteSong($id:ID){
    deleteSong(id:$id){
     id
   }
 }
`;

export default SongLists;