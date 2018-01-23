export default (user, news) => {
  const usersArticles = [];
  const categories = new Set();
  const usersArticleData = [];

  user.articles.map(article =>
    {news.map(item => {
      if (item.id === article) {
        categories.add(item.category);
        usersArticles.push(item)
      }
    })
  })

  categories.forEach(category => {
    usersArticleData.push({
      name: category,
      usersArticles: [],
    });
  })

  usersArticles.forEach(article => {
    usersArticleData.forEach(cat => {
      if (cat.name === article.category) {
        cat.usersArticles.push(article);
      }
    });
  })


  usersArticleData.forEach(data => {
    data.name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
  })

  return usersArticleData;
};