import React, { useState } from 'react';
import {
    gql,
    useQuery,
    useMutation
  } from '@apollo/client';
const LyricsCreate = ({songId}) => {

    const [content,setContent] =useState("")
    
    const  [createLink] = useMutation(mutation,{
        variables: {
            content,
            songId
        },// rerun query after mutation is succeffuly exectued
       // refetchQueries:[{ query }]
      });
      
      const onSubmit=(event)=>{
          event.preventDefault();
          createLink()
          .then((res)=>{
            console.log(res);
            setContent('')
          //  navigate("/");
          })
          .catch((error)=>{
    
          })
      }
      

    return (
        <form onSubmit={onSubmit}>
            <label>Add a Lyric</label>
            <input type="text" 
            value={content}
            onChange={(event)=>setContent(event.target.value)}
            />
        </form>
    );
};

const mutation= gql`
mutation addLyToSong($content: String,$songId:ID!,){
  
    addLyricToSong(songId:$songId,content:$content){
      id
      title
      lyrics{
          id
        content
        likes
      }
     }
      
    }
`;

export default LyricsCreate;