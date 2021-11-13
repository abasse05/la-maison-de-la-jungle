import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'
import Categories from './Categories'
import { useState } from 'react'

function ShoppingList({ cart, updateCart }) {
    // eslint-disable-next-line
    const categories = plantList.reduce(
        (acc, plant) => acc.includes(plant.categories) ? acc : acc.concat(plant.categories), []
    )
    const [activeCategory, setActiveCategory] = useState('')

    function addToCart(name, cout) {
        const currentPlantAdded = cart.find((plant) => plant.name === name)

        if (currentPlantAdded) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )

            updateCart([
                ...cartFilteredCurrentPlant,
                { name, cout, amount: currentPlantAdded.amount + 1 }
            ])
        } else {
            updateCart([
                ...cart,
                { name, cout, amount: 1 }
            ])
        }
    }

    return ( <
        div className = 'lmj-shopping-list' >
        <
        Categories categories = { categories }
        setActiveCategory = { setActiveCategory }
        activeCategory = { activeCategory }
        />

        <
        ul className = 'lmj-plant-list'
        style = {
            { width: '100%' } } > {
            plantList.map(({ id, cover, name, water, light, cout, categories }) =>
                !activeCategory || activeCategory === categories ?
                ( <
                    div key = { id } >
                    <
                    PlantItem id = { id }
                    cover = { cover }
                    name = { name }
                    water = { water }
                    light = { light }
                    cout = { cout }
                    /> <
                    button onClick = {
                        () => addToCart(name, cout) } > Ajouter < /button> <
                    /div>
                ) : null
            )
        } <
        /ul> <
        /div>
    )
}

export default ShoppingList