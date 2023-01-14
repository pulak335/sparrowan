
import Footer from '../src/components/Footer/Footer'
import NavScroll from '../src/components/NavScroll'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return( 
    <>
      <NavScroll/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}
