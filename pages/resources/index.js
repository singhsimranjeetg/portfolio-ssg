import { useResources } from '../../graphql/hooks';
import { withApollo } from '../../graphql/apollo-client';


function Resources() {

  const { data, loading } = useResources();
  const { resources } = data;
  return (
    <>
      <h1>Resources</h1>
      {
        resources.map(r => {
          return (
            <div className=' items-center my-5'>
              <h3 className='text-3xl'>{r.name}</h3>
              <p>{r.description}</p>
            </div>
          )
        })
      }
    </>
  )
}

export default withApollo(Resources, {
  ssr: false
});