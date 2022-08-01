//Grupo 1: Mariano Perez, Mathias Ezequiel Latronico, Cecilia Kuckiewicz, Emmanuel Enrique Mombelli, Enzo Marchesi
const URL_API = 'https://jsonplaceholder.typicode.com/todos';

fetch(URL_API)
    .then((response) => response.json())
    .then((data) => renderData(data))

function renderData(data) {
    let body = '';
    data.forEach(element => {
        body += `
            <div>
                <h2>Title: ${element.title}</h2>
                <p>Id: ${element.id}</p>
                <p>User Id:${element.userId}</p>
                <p>Status: ${element.completed}</p>
            </div>
        `
    });

    document.getElementById('fetch-render').innerHTML = body;
}