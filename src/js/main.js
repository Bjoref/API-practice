(() => {
  const itemsList = document.querySelector('.main__list');
  localStorage.clear()

  async function loadCardItems (page = 1) {
    const response = await fetch(`https://gorest.co.in/public-api/posts?page=${page}`);
    const data = await response.json();

    dataToDom(data);
  };

  loadCardItems();

  const dataToDom = (data) => {
    const arrayItems = data.data;

    arrayItems.forEach((item) => {
      let container = document.createElement('li'),
          title = document.createElement('h2');

      container.setAttribute('id', item.id);
      container.setAttribute('user-id', item.user_id);
      container.classList.add('main__list-item');

      title.classList.add('main__list-title');
      title.textContent = item.title;

      container.append(title);

      itemsList.append(container)

    });

    let items = document.querySelectorAll('.main__list-item');

    items.forEach((item) => {
      item.addEventListener('click', getBlogDesc)
    })
  };

  const getBlogDesc = (event) => {
    let id;
    if(event.target.tagName !== 'LI') {
      id = event.target.closest('.main__list-item').getAttribute('id')
    } else {
      id = event.target.getAttribute('id');
    };
    loadBlogDest(id)
  };

  const loadBlogDest = (id) => {
    localStorage.setItem('itemId', id);
    window.location.href = './blogDesc.html';
  };
})();