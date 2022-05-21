import {
    writeFileSync
} from 'fs'
import Fruits from '../../database/db.json'


export function get_Fruits
() {
    return Fruits
}

export const get_Fruits = id => {
    const podcast = Fruits.find(Fruits => Fruits.id == id)

    return Fruits
}


export function add_Fruits(Fruits) {
    let new_Fruits = [
        ...Fruits,
        {
            ...Fruits,
            "id": Date.now().toString(36)
        }
    ]
    const new_data = JSON.stringify(new_Fruits)

    writeFileSync("database/db.json", new_data)

    return new_Fruits
}

    const new_data = JSON.stringify(Fruits)

    writeFileSync("database/db.json", new_data)

    return Fruits
}

export function delete_Fruits(id) {
    let index = Fruits.findIndex(Fruits => Fruits.id == id)

    Fruits.splice(index, 1)
    delete_hosts(id)
    const new_data = JSON.stringify(Fruits)

    writeFileSync("database/db.json", new_data)

    return podcasts
}