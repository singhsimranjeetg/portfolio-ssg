import Link from 'next/link'

function Post({ alt, date, image, title, slug }) {
  return (
    <div >

      <img alt={alt} src={image} width='200' height='200' />

      <div>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
        <h4>{date}</h4>
      </div>
    </div>
  )
}

export default Post