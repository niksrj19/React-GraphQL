import {
    gql,
    useQuery
  } from '@apollo/client';
import { Link } from 'react-router-dom';

export default gql`
{
    songs{
        id
        title
    }
}
`;