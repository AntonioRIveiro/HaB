/**
 * Entregable semana 2
 * 
 * Escribe el código necesario para decidir en qué
 * fotografías sale Pablo. Como resultado se debe
 * obtener un array de strings con los nombres de las
 * fotografías.
 *  
 */
let peopleSelect = 'Pablo'
const photos = [
    {
        name: 'Cumpleaños de 13',
        people: ['Maria', 'Pablo']
    },
    {
        name: 'Fiesta en la playa',
        people: ['Pablo', 'Marcos']
    },
    {
        name: 'Graduación',
        people: ['Maria', 'Lorenzo']
    },
]
photo = []

for (i = 0; i < photos.length; i++) {
    if (photos[i].people.indexOf(peopleSelect) != -1) {
        photo.push(photos[i].name);
    }

};

console.log(`${peopleSelect} sale en "${photo}"`)
