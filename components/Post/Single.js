import Link from 'next/link'

export default function Post({
  id,
  label,
  createdAt,
  author,
  content
}) {
  return (
    <li>
      <header>
        <h2>{label}</h2>
        <time>{createdAt}</time>
      </header>
      <article>{content}</article>
      <footer>
        Added by {author.firstName} {author.lastName}
        <Link href={ { pathname: `/post/${id}` } }>
          <a>Read more</a>
        </Link>
      </footer>
    </li>
  )
}
