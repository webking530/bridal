import 'bootstrap/dist/css/bootstrap.min.css';
// import "animate.css"
import "aos/dist/aos.css";
import '../styles/globals.scss'
import "./../styles/header.scss"
import "./../styles/homepage.scss"
import "./../styles/footer.scss"
import "./../styles/schedule.scss"
import "./../styles/blog.scss"
import "./../styles/style.css"

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
