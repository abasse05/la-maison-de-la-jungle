import monstera from '../assets/monstera.jpg'
import lyrata from '../assets/lyrata.jpg'
import pothos from '../assets/pothos.jpg'
import succulent from '../assets/succulent.jpg'
import olivier from '../assets/olivier.jpg'
import basil from '../assets/basil.jpg'
import mint from '../assets/mint.jpg'
import calathea from '../assets/calathea.jpg'
import cactus from '../assets/cactus.jpg'

export const plantList = [{
        name: 'monstera',
        categories: 'classique',
        id: '1ed',
        isBestSale: true,
        isSpecialOffer: false,
        light: 2,
        water: 3,
        cover: monstera,
        cout: 10
    },
    {
        name: 'ficus lyrata',
        categories: 'classique',
        id: '2ab',
        isBestSale: false,
        isSpecialOffer: true,
        light: 2,
        water: 1,
        cover: lyrata,
        cout: 9
    },
    {
        name: 'pothos argenté',
        categories: 'classique',
        id: '3sd',
        isBestSale: true,
        isSpecialOffer: false,
        light: 1,
        water: 2,
        cover: pothos,
        cout: 15
    },
    {
        name: 'calathea',
        categories: 'classique',
        id: '4kk',
        isBestSale: false,
        isSpecialOffer: true,
        light: 1,
        water: 1,
        cover: calathea,
        cout: 18
    },
    {
        name: 'olivier',
        categories: 'extérieur',
        id: '5pl',
        isBestSale: true,
        isSpecialOffer: false,
        light: 1,
        water: 3,
        cover: olivier,
        cout: 12
    },
    {
        name: 'cactus',
        categories: 'extérieur',
        id: '6uo',
        isBestSale: true,
        isSpecialOffer: true,
        light: 2,
        water: 1,
        cover: cactus,
        cout: 16
    },
    {
        name: 'basilique',
        categories: 'extérieur',
        id: '7ie',
        isBestSale: false,
        isSpecialOffer: false,
        light: 2,
        water: 2,
        cover: basil,
        cout: 14
    },
    {
        name: 'mint',
        categories: 'plante grasse',
        id: '8fp',
        isBestSale: true,
        isSpecialOffer: true,
        light: 3,
        water: 3,
        cover: mint,
        cout: 20
    },
    {
        name: 'succulente',
        categories: 'plante grasse',
        id: '9vn',
        isBestSale: false,
        isSpecialOffer: true,
        light: 1,
        water: 3,
        cover: succulent,
        cout: 20
    }
]