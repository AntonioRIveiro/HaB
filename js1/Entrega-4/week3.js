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

const axios = require("axios");

let idInterval;

async function dataFrom() {
  const dataSource = "https://jsonplaceholder.typicode.com/posts";

  const Id = (data) => data.id;
  const infoFromURL = (id) => axios.get(`${dataSource}/${id}`);
  let calls = await axios.get(dataSource);

  calls = calls.data.map(Id).map(infoFromURL);

  const accessToForum = await Promise.all(calls);

  return accessToForum;
}

function nameMessagesForUser(informacion) {
  let userMessage = {};
  const countuserMessage = (message) => {
    if (userMessage[`Usuario ${message.data.userId}`] == undefined) {
      userMessage[`Usuario ${message.data.userId}`] = 1;
    } else {
      userMessage[`Usuario ${message.data.userId}`]++;
    }
  };
  informacion.forEach(countuserMessage);
  return userMessage;
}

function listUserMessage(messages) {
  let userMessage = [];
  let userDetected = [];
  for (let message of messages) {
    if (userDetected.indexOf(message.data.userId) === -1) {
      userDetected.push(message.data.userId);
      userMessage.push({
        userId: message.data.userId,
        post: [
          {
            title: message.data.title,
            body: message.data.body,
          },
        ],
      });
    } else {
      userMessage[userDetected.indexOf(message.data.userId)]["post"].push({
        title: message.data.title,
        body: message.data.body,
      });
    }
  }

  return userMessage;
}

dataFrom().then((data) => {
  clearInterval(idInterval);
  console.log(nameMessagesForUser(data));
  const test = listUserMessage(data);
  console.log(Object.values(test));
});
