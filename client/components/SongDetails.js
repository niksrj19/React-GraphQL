import React, { useEffect }  from 'react';
import { useParams } from 'react-router';

import {
    gql,
    useQuery,
    useMutation
  } from '@apollo/client';
import { Link } from 'react-router-dom';
import query from '../queries/fetchSongs';
import fetchSongById from '../queries/fetchSongById';
import { getBlockStringIndentation } from 'graphql/language/blockString';
import { Query } from 'react-apollo';
import LyricsCreate from './LyricsCreate';
import LyricList from './LyricList';


const SongDetails = (props) => {
    const {id} = useParams();
    const { loading, error, data ,refetch } = useQuery(fetchSongById, {variables:{id:id}});
    
    if(loading) return "...loading";

    console.log("data=",data)
    
  
    return (
        <div className='container'>
            <button variant="outlined"><Link to="/" >back</Link></button>
            { data && <h1>Song Title :{data.song.title}</h1>}
            <LyricList lyrics={data.song.lyrics}/>
            <LyricsCreate songId={id} />
          {/* <Query query={fetchSongById}  variables={{id}} >
              {({loading,error,data})=>{
                  if(loading) return "....loading";
                  if(error) console.log(error);
                  if(data) return(
                      <div>
                          <h1>Song Title :{data.title}</h1>
                          <h2>SOng id :{data.id}</h2>
                      </div>
                  )
              }}
          </Query> */}
        </div>
    );
};

export default SongDetails;