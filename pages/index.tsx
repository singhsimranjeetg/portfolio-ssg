import Intro from '../components/intro'
import Head from 'next/head'
import Latest from '../components/latest'
import MyForm from '../components/message-form'


export default function Index() {
  return (
    <>
      <Head>
        <title>Simranjeet Portfolio</title>
      </Head>
      <Intro />
      <Latest />
      <MyForm />
    </>
  )
}

