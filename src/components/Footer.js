import { useState } from 'react'
import '../styles/Footer.css'
import { useEffect } from 'react'

function Footer({ cart }) {
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        return () =>
            console.log("element retiré du DOM")
    })


    function handeInput(e) {
        setInputValue(e.target.value)
    }

    function handleBlur() {
        if (!inputValue.includes('@')) {
            alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
        }
    }

    return ( <
        footer className = 'lmj-footer' >
        <
        div className = 'lmj-footer-elem' >
        Pour les passionné· e· s de plantes🌿🌱🌵 <
        /div> <
        div className = 'lmj-footer-elem' > Laissez - nous votre mail: < /div> <
        div >
        <
        input placeholder = 'Entrer votre mail'
        value = { inputValue }
        onChange = { handeInput }
        onBlur = { handleBlur }
        /> <
        /div> <
        /footer>
    )
}



export default Footer