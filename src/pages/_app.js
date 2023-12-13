import Layout from '../components/Layout'
import Navbar from '../components/navbar'
import '../styles/globals.css'
import {Inter} from "next/font/google"

const inter = Inter({ subsets: ["latin"] });
function App ({Component,pageProps} ){
    return ( <>
    <Component {...pageProps}  />

    </>)
}

export default App