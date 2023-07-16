const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.details');
const deleteButton = document.querySelector('.delete'); 

const renderPost = async () => {
    let uri = 'http://localhost:3000/posts/' + id;

    const response = await fetch(uri);
    const post = await response.json();

    const template=`
        <h1>${post.title}</h1>
        <p>${post.body}</p>
    `;

    container.innerHTML = template;
}

deleteButton.addEventListener('click', async (e) => {
    const response = await fetch("http://localhost:3000/posts/" + id, {
        method: 'DELETE'
    });

    window.location.replace('/index.html');
})

window.addEventListener('DOMContentLoaded', () => renderPost());