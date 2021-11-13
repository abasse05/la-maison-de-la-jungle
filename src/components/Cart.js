import '../styles/Cart.css'
import { useState, useEffect } from 'react'

function Cart({ cart, updateCart }) {
    const [isOpen, setIsOpen] = useState(true)

    const total = cart.reduce(
        (acc, plantType) => acc + plantType.amount + plantType.cout, 0
    )

    useEffect(() => {
        document.title = `LMJ: ${total}€ d'achats`
    }, [total])

    return isOpen ? ( <
        div className = 'lmj-cart' >
        <
        button className = 'lmj-cart-toggle-button'
        onClick = {
            () => setIsOpen(false) } > Fermer < /button>

        {
            cart.length > 0 ? ( <
                div >
                <
                h2 > Panier < /h2> {
                    cart.map(({ name, cout, amount }, index) =>
                        <
                        div key = { index } > { name } { cout }
                        x { amount }€ <
                        /div>
                    )
                }

                <
                h3 > Total: { total }€ < /h3> <
                br / >
                <
                button onClick = {
                    () => updateCart([]) } > Réinitialiser le Panier < /button> <
                /div>
            ) : ( <
                div > Votre panier est vide < /div>
            )
        } <
        /div>
    ) : ( <
        div className = 'lmj-cart-closed' >
        <
        button className = 'lmj-cart-toggle-button'
        onClick = {
            () => setIsOpen(true) } > Ouvrir le Panier < /button> <
        /div>
    )
}

export default Cart