import { useEffect, useState } from 'react'
import Head from 'next/head'
import Post from '../components/post'
import { fetchEntries } from '../utils/contentful'
import type { GetStaticProps } from 'next'
import { PostData, IImage } from '../utils/interfaces'

type Props = {
  posts: PostData[]
}

function HomePage({ posts }: Props) {


  console.log(posts)
  return (
    <>
      <Head>
        <title>Next.js + Contentful</title>
      </Head>
      {posts ? posts.map((p) => (
        <Post
          alt={p.fields.image.map((i: IImage) => i.fields.description)}
          date={p.fields.date}
          key={p.sys.id}
          image={p.fields.image.map((i: IImage) => i.fields.file.url)}
          title={p.fields.title}
          slug={p.fields.slug}
        />
      ))
        : null}
    </>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  let post: string;
  let allPosts = await fetchEntries(post)

  return {
    props: {
      posts: allPosts
    }
  }
}

export default HomePage