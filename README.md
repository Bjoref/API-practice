На основе https://gorest.co.in/ создайте блог, который состоит из 2-х видов страниц (2-х html файлов):

Список статей блога, который можно получить запросом GET https://gorest.co.in/public-api/posts?page=10, где page - номер страницы для постраничной навигации. Номер страницы должен браться из URL страницы из параметра page. На странице должны выводиться:
Список статей, где каждый элемент должен быть ссылкой на статью вида post.html?id=10 (вместо 10 - id соответствующей статьи). Сам список находится в свойстве data в ответе на список статей.
Постраничная навигация, построенная на основе свойства из ответа на список статей meta.pagination с информацией о кол-ве статей и страниц. Каждая ссылка должна вести на index.html?page=10 (вместо 10 - номер соответствующей страницы). При этом ссылка на первую страницу не должна иметь параметров, то есть должна просто вести на страницу index.html без параметров, так как 1 - это значение по умолчанию и его необязательно явно проставлять.
Детальная страница статьи, которую можно получить запросом https://gorest.co.in/public-api/posts/{id статьи}. При этом id статьи должен браться из URL страницы из параметра id. На странице должны выводиться:
Заголовок (в тэге h1, свойство title из ответа на запрос) загруженной статьи.
Содержимое (в тэге p, свойство body из ответа на запрос).
Комментарии к статье в виде списка с именем автора и содержимым к каждому комментарию. Получить список комментариев к конкретной статье можно запросом GET https://gorest.co.in/public-api/comments?post_id=4 (вместо 4 - id статьи).


-----------------------------------------------------------------------------------

Based on https://gorest.co.in/ create a blog that consists of 2 types of pages (2 html files):

A list of blog posts that can be obtained with a GET request https://gorest.co.in/public-api/posts?page=10, where page is the page number for pagination. The page number must be taken from the URL of the page in the page parameter. The page should display:
List of articles, where each element should be a link to an article of the form post.html?id=10 (instead of 10 - the id of the corresponding article). The list itself is in the data property in the response to the list of articles.
Pagination based on the property from the response to the list of articles meta.pagination with information about the number of articles and pages. Each link should lead to index.html?page=10 (instead of 10 - the number of the corresponding page). In this case, the link to the first page should not have parameters, that is, it should simply lead to the index.html page without parameters, since 1 is the default value and it is not necessary to explicitly put it down.
Detail page of the article, which can be obtained by requesting https://gorest.co.in/public-api/posts/{article id}. In this case, the article id must be taken from the page URL from the id parameter. The page should display:
The title (in the h1 tag, the title property from the query response) of the loaded article.
Content (in the p tag, the body property from the response to the request).
Comments to the article in the form of a list with the name of the author and the content for each comment. You can get a list of comments on a specific article by GET request https://gorest.co.in/public-api/comments?post_id=4 (instead of 4 - article id).
