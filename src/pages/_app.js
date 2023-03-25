import '@/styles/globals.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function App({ Component, pageProps }) {
  <link href="https://fonts.cdnfonts.com/css/sf-pro-display" rel="stylesheet"></link>
  return <>
   <Navbar/>
   <Component {...pageProps} />
   <Footer/>

   </>
}
