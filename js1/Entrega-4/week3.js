// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/posts/1

// a) Generar contador de mensajes por usario
// b) Generar una lista con la siguiente estructura:
/*[
    {
        userId: <userId>,
        posts: [
            {
                title: <title>
                body: <body>     // hay que obtenerlo de la segunda petición
            },
            {
                title: <title>
                body: <body>
            },
        ]
    }

]
*/
function messagesForUser(messages) {
    let contador = {};

    for (let message of messages) {
        if (contador[message.userId] != undefined) {
            contador[message.userId]++
        } else (
            contador[message.userId] = 1
        )
    }
    return contador;
}
/*
function NameMessagesForUser(messages) {
    let contador = {};

    for (let user of users) {
        userPromises.push(axios.get(`${URLPost}${user.id}`));
    } else (
            contador[message.id] = 1
        )
    }
    return contador;
}
*/
const axios = require('axios');

const URLTotal = 'https://jsonplaceholder.typicode.com/posts';
const URLPost = 'https://jsonplaceholder.typicode.com/posts/';

axios.get(URLTotal)
    .then(data => {
        //console.log(data.data)
        const counterMessagesForUser = messagesForUser(data.data);
        console.log('el numero de mensajes por cada usuario es:', counterMessagesForUser)

    });

async function NameMessagesForUser() {
    axios.get(URLTotal)
        .then(response => {
            const posts = response.data
            for (let post of posts) {
                const respuesta = await axios.get(`${URLPost}${post.id}`);
                console.log(respuesta)
                /*               detailedPost = {}
               
                               if (users[detailedPost.userId] === undefined) {
                                   users[detailedPost.userId] = {
                                       UserId: detailedPost.userId,
                                       posts: [
                                           {
                                               title: detailedPost.title,
                                               body: detailedPost.body
                                           }
                                       ]
                                   }
                               } else {
                                   users[detailedPost.userId].posts.push({
                                       title: detailedPost.title,
                                       body: detailedPost.body
                                   });
                               }
                               return detailedPost
                               */
            }
        })
    }

console.log(detailedPost)
console.log(response)
