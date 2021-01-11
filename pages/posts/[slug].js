
import Head from 'next/head'
import { fetchEntryBySlug, fetchEntries } from '../../utils/contentful'
import Post from '../../components/post'

export default function SinglePost({ post }) {
  return (
    <>
      <Head>
        <title>
          Blog
        </title>
      </Head>
      {post.length > 0
        ? post.map((p) => (
          <Post
            id={p.sys.id}
            alt={p.fields.image.map(i => i.fields.description)}
            date={p.fields.date}
            key={p.fields.title}
            image={p.fields.image.map(i => i.fields.file.url)}
            title={p.fields.title}
            url={p.fields.url}
            slug={p.fields.slug}
          />
        ))
        : null}
    </>
  )
}
export async function getStaticProps({ params }) {
  const data = await fetchEntryBySlug(params.slug)

  return {
    props: {
      post: data

    },
  }
}

export async function getStaticPaths() {
  const allPosts = await fetchEntries()
  const paths = allPosts.map((post) => {
    return {
      params: {
        slug: post.fields.slug
      }
    }
  });
  return {
    paths,
    fallback: false,
  }
}
