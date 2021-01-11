
import { graphql } from '@octokit/graphql'
import { useEffect } from 'react'

export default function Projects() {

  useEffect(() => {
    const graphqlWithAuth = graphql.defaults({
      headers: {
        authorization: `Bearer 09cc45fca275ae94cb655b179b5d6a88014a9a44`,
      },
    });

    const { repository } = graphqlWithAuth(`
    {
      viewer {
       topRepositories(first: 6, orderBy: {field:PUSHED_AT, direction:ASC} ) {
        edges {
          node {
            name
            description
          }
        }
        
      }
    }
      }
  
`).then((data) => console.log(data))

  }, [])

  return (
    <>
      <h1>Hi</h1>
      <p>nam </p>
    </>
  )
}
