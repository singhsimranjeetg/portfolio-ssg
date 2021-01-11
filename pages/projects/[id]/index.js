import { useRouter } from 'next/router';
import { graphql } from '@octokit/graphql'

const Project = async () => {

  const graphqlWithAuth = graphql.defaults({
    headers: {
      authorization: `token 09cc45fca275ae94cb655b179b5d6a88014a9a44`,
    },
  });
  const { repository } = await graphqlWithAuth(`
    {
      viewer {
        login
      }
    }
  `);

  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <h1>Hi from Projects</h1>
      <p>id : {repository}</p>

    </>

  )
}

export default Porject;


Project.getInitialProps = async ({ query }) => {

  return;
} 