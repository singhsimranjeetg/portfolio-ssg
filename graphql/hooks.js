import { useQuery } from '@apollo/react-hooks';
import { GET_RESOURCES_QUERY } from './queries';


export const useResources = () => {
  const { loading, error, data } = useQuery(GET_RESOURCES_QUERY);

  if (!loading && data) {
    return {
      loading,
      error,
      data
    };
  }

  return {
    loading,
    error,
    data
  };
};