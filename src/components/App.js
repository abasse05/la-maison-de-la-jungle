import Banner from './Banner'
import ShoppingList from './ShoppingList'
// eslint-disable-next-line
import QuestionForm from './QuestionForm'
import Footer from './Footer'
import Cart from './Cart'
import '../styles/Layout.css'
import { useState, useEffect } from 'react'


function App() {
    const [IsFooterShow, updateIsFooterShow] = useState(true)
    const savedCart = localStorage.getItem('cart')

    const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    return ( <
        div >
        <
        Banner / >
        <
        div className = 'lmj-layout-inner' >

        <
        Cart cart = { cart }
        updateCart = { updateCart }
        />  <
        ShoppingList cart = { cart }
        updateCart = { updateCart }
        />  <
        /div>  <
        br / >
        <
        button onClick = {
            () => updateIsFooterShow(!IsFooterShow) } > Cacher < /button> {
        IsFooterShow && < Footer cart = { cart }
        />}  <
        /div>
    );
}

export default App;