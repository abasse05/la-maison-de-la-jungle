import '../styles/Banner.css'
import logo from '../assets/logo.png'
// import Recommendation from './Recommendation'

function Banner() {
    const title = "La maison jungle"
    return ( <
        div className = "lmj-banner" >
        <
        div className = "lmj-banner-row" >
        <
        img src = { logo }
        alt = 'La maison jungle'
        className = 'lmj-logo'
        style = {
            { float: 'left' } }
        /> <
        h1 > { title } < /h1> <
        /div> { /* <Recommendation /> */ } <
        /div>
    )
}

export default Banner