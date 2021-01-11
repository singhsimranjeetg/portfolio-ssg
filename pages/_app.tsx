import Container from '../components/container'
import Layout from '../components/layout'
import '../styles/index.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Container>

  )
}
