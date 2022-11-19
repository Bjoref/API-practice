(() => {
    const home = './index.html'
    const button = document.querySelector('.main__back-btn');

    button.addEventListener('click', () => {
        localStorage.clear()
        window.location.href = home;
    });

    let id = localStorage.getItem('itemId')

    async function getItem (id) {
        const response = await fetch(` https://gorest.co.in/public-api/posts/${id}`);
        const data = await response.json();

        let item = data.data;

        let blogDesk = document.querySelector('.main__desk-content')
        
        let container = document.createElement('div'),
        text = document.createElement('p'),
        title = document.createElement('h2');

        
        container.classList.add('main__list-item_primary');
        container.classList.add('main__list-item');

        title.classList.add('main__list-title');
        title.textContent = item.title;
        
        text.textContent = item.body;
        
        container.append(title);
        container.append(text);
        
        blogDesk.prepend(container)

        getItemCommentary(id)
    }

    async function getItemCommentary (id) {
        const response = await fetch(`https://gorest.co.in/public-api/comments?post_id=${id}`);
        const data = await response.json();

        let array = data.data;

        array.forEach((item) => {
            let blogDesk = document.querySelector('.main__commentary-list')
        
            let container = document.createElement('li'),
            text = document.createElement('p'),
            email = document.createElement('h4'),
            name = document.createElement('h3');
            
            container.classList.add('main__list-item_minor');
            container.classList.add('main__list-item');
            container.classList.add('mb-2');

            
            text.textContent = item.body;
            email.textContent = item.email;
            name.textContent = item.name;
            
            container.append(name);
            container.append(email);
            container.append(text);
            
            blogDesk.append(container)
        })
    }
    getItem(id)

})()