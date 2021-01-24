import Link from 'next/link'

export default function Header() {
  return (
    <section className='my-10'>
      <nav>
        <ul className="flex justify-center">
          <li><Link href="/about">
            <a className="hover:underline mx-4">🚀 About</a>
          </Link></li>
          <li><Link href="/projects">
            <a className="hover:underline mx-4">👩‍💻 Projects</a>
          </Link></li>
          <li><Link href="/blogs">
            <a className="hover:underline mx-4">✍ Blogs</a>
          </Link></li>
          <li><Link href="/resources">
            <a className="hover:underline mx-4">👨‍🎓 Resources</a>
          </Link></li>
        </ul>
      </nav>
    </section>

  )
}
