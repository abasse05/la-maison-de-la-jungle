import CareScale from './CareScale'
import '../styles/PlantItem.css'


function PlantItem({ id, cover, name, water, light, cout }) {

    return ( <
        li key = { id }
        className = 'lmj-plant-item' >
        <
        div >
        <
        div className = 'lmj-sales' > { cout }€ < /div>	 <
        img className = 'lmj-plant-item-cover'
        src = { cover }
        alt = { `${name} cover` }
        /> <
        /div> { name } <
        div >
        <
        CareScale careType = 'water'
        scaleValue = { water }
        /> <
        CareScale careType = 'light'
        scaleValue = { light }
        />

        <
        /div> <
        /li>
    )
}

// eslint-disable-next-line
function handleClick(plantWater, plantLight) {
    if (plantWater === 1) {
        if (plantLight === 1) {
            alert(`Cette plante requiert peu d'arrosage et peu lumière`)
        } else if (plantLight === 2) {
            alert(`Cette plante requiert peu d'arrosage et modérement lumière`)
        } else {
            alert(`Cette plante requiert peu d'arrosage et beaucoup lumière`)
        }
    } else if (plantWater === 2) {
        if (plantLight === 1) {
            alert(`Cette plante requiert modérement d'arrosage et peu lumière`)
        } else if (plantLight === 2) {
            alert(`Cette plante requiert modérement d'arrosage et modérement lumière`)
        } else {
            alert(`Cette plante requiert modérement d'arrosage et beaucoup lumière`)
        }
    } else {
        alert(`Cette plante requiert beaucoup d'arrosage`)
        if (plantLight === 1) {
            alert(`Cette plante requiert beaucoup d'arrosage et peu lumière`)
        } else if (plantLight === 2) {
            alert(`Cette plante requiert beaucoup d'arrosage et modérement lumière`)
        } else {
            alert(`Cette plante requiert beaucoup d'arrosage et beaucoup lumière`)
        }
    }
}



export default PlantItem