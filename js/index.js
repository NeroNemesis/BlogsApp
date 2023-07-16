const container = document.querySelector('.blogs');
const searchFrom = document.querySelector('.search');


const renderPosts = async (searchString) => {
    let uri = 'http://localhost:3000/posts';
    if(searchString)
        uri += `?&q=${searchString}`;

    const res = await fetch(uri);
    const posts = await res.json();

    let template = '';
    posts.forEach(post => {
        template +=`
            <div class="post">
                <h2>${post.title}</h2>
                <p><small>${post.likes} likes</small></p>
                <p>${post.body.slice(0,150)}</p>
                <a href="/details.html?id=${post.id}">read more...</a>
            </div>
        `
    });

    container.innerHTML = template;

}

searchFrom.addEventListener('submit', (e) => {
    e.preventDefault();

    renderPosts(searchFrom.searchString.value.trim());
})

window.addEventListener('DOMContentLoaded', () => renderPosts());