//Grupo 1: Mariano Perez, Mathias Ezequiel Latronico, Cecilia Kuckiewicz, Emmanuel Enrique Mombelli, Enzo Marchesi
const URL_API = 'https://jsonplaceholder.typicode.com/todos';

fetch(URL_API)
    .then((response) => response.json())
    .then((data) => renderData(data))

function renderData(data) {
    let body = '';
    data.forEach(element => {
        body += `
            <div class="container">
                <h2 class="title"> <span> Title: </span> ${element.title}</h2>
                <p class="id"> <span> Id: </span> ${element.id}</p>
                <p class="user-id"> <span>User Id: </span>${element.userId}</p>
                <p class="status"> <span>Status: </span> ${element.completed}</p>
            </div>
        `
    });

    document.getElementById('fetch-render').innerHTML = body;
}