import React from 'react';
import {
    gql,
    useMutation
  } from '@apollo/client';
const LyricList = ({lyrics}) => {

    const  [createLink] = useMutation(mutation);
    

    const likeMe=(id,likes)=>{
       
        createLink( {variables: {id },
        optimisticResponse:{
           __typename:"Mutation" ,
           likeLyric:{
               id,
               __typename:'LyricType',
               likes:likes+1
           }
        }
        })
        .then((res)=>{
          console.log(res);
          
        //  navigate("/");
        })
        .catch((error)=>{
  
        })
    }
  const  renderlyrics=()=>{
        return lyrics.map(({id,content,likes})=>{
            return(
                <li key={id} className="collection-item">
                    {content}
                    <div className='vote-box'><i className='material-icons' 
                     onClick={()=>likeMe(id,likes)}
                    >
                      thumb_up 
                    </i> {likes}
                    </div>
                </li>
            )
        })
    }
    return (
        <ul className='collection'>
            {renderlyrics()}
        </ul>
    );
};



const mutation= gql`
mutation onLike($id:ID){
    likeLyric(id:$id){
      id
      likes
      
    }
  }
`;



export default LyricList;