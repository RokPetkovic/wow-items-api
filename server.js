const express = require('express')
const app = express()
const PORT = 5000
const cors = require('cors')

const items = {

    "deathbringer" : {
        "minDmg": 114,
        "maxDmg": 213,
        "type": "One-Handed Axe",
        "drops from": "Onyxia"
    },

    "kingsfall" : {
        "minDmg": 114,
        "maxDmg": 213,
        "type": "Dagger",
        "drops from": "Kel'Thuzad"
    },

    "hammer of the twisting nether" : {
        "minDmg": 37,
        "maxDmg": 121,
        "type": "One-Handed Mace",
        "drops from": "Kel'Thuzad"
    },

    "maul of the redeemed crusader" : {
        "minDmg": 244,
        "maxDmg": 367,
        "type": "Two-Handed Mace",
        "drops from": "Four Horsemen"
    },

    "non-existant" : {
        "minDmg": 0,
        "maxDmg": 0,
        "type": "Nothing",
        "drops from": "No One"
    },

    "maul of the redeemed crusader2" : {
        "minDmg": 244,
        "maxDmg": 367,
        "type": "Two-Handed Mace",
        "drops from": "Four Horsemen"
    }

}

app.use(cors())

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/homepage.html')
})

app.get('/api', (request, response) => {
    console.log(items)
    response.json(items)
})

app.get('/api/:itemName', (request, response) => {
    const ourItem = request.params.itemName.toLowerCase()

    if(items[ourItem]) {
        response.json(items[ourItem])
    }else {
        response.json(items["Non-Existant"])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Streznik tece na portu ${PORT}`)
})