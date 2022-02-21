import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../components/layout/Layout'
import { CssBaseline } from '@mui/material'

const MyApp = ({ Component, pageProps }: AppProps ) => {
  return (
    <>
    <Head>
      <title>Ratestaurant</title>
      <meta name="viewport" content="initial-scale=1, width=device-width"/>
    </Head>
    <Layout>
      <CssBaseline/>
      <Component {...pageProps} />
    </Layout>
    </>
  ) 
}

export default MyApp
