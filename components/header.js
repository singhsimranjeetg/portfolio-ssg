import Link from 'next/link'

export default function Header() {
  return (
    <section>
      <h2 className="text-1xl md:text-2xl text-center font-bold italic tracking-tight md:tracking-tighter leading-tight mb-4 mt-8">
        <Link href="/">
          <a className="hover:underline">Simranjeet Singh</a>
        </Link>
      </h2>
      <nav>
        <ul className="flex justify-center">
          <li><Link href="/">
            <a className="hover:underline mx-4">🏠 Home</a>
          </Link></li>
          <li><Link href="/projects">
            <a className="hover:underline mx-4">👩‍💻 Projects</a>
          </Link></li>
          <li><Link href="/clients">
            <a className="hover:underline mx-4">🚀 Clients</a>
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
