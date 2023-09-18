let container = document.querySelector('.users-container');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(response => {
        for (let i = 0; i < 10; i++){
            let div = document.createElement('div');
            div.setAttribute('class', 'user-item')
            div.append(response[i].name);
            container.append(div)

            div.addEventListener('click', () => {

            })
        }
    });



