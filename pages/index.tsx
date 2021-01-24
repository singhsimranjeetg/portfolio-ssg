import Intro from '../components/intro'
import SectionSeperator from '../components/section-separator'
import Head from 'next/head'
import Latest from '../components/latest'



export default function Index() {
  return (
    <>
      <Head>
        <title>Simranjeet Portfolio</title>
      </Head>  
      <Intro />
      <Latest />

    </>
  )
}

