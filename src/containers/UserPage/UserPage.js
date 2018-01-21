import React from 'react';
import { user, news } from './../../constants';
import './../../css/userPage.css';
import { NewsBox } from './../../components/NewsBox';

const UserPage = () => {
  const usersArticles = [];
  const fachionArticles = [];
  const politicsArticles = [];
  const newsArticles = [];

  const mapUsersArcticles = () => {
    user.articles.map(article =>
      {news.map(item => {
        if (item.id === article) {
          switch (item.category) {
            case 'fashion':
              fachionArticles.push(item)
              break;

            case 'politics':
              politicsArticles.push(item)
              break;

            case 'news':
              newsArticles.push(item)
              break;

          }
          // usersArticles.push(item)
        }
      })
    })
  }
  mapUsersArcticles();

  return (
    <div className="main">
      <div className="profile__wrapper">
        <div className="profile__user">
          <div className="profile__user-avatar">
            <img src={user.avatar} alt={`${user.username} avatar`}/>
          </div>

          <div className="profile__user-info">
            <p>{user.firstName} {user.lastName}</p>
            <p>{user.role}</p>
          </div>
        </div>

        <div className="profile__categories-boxes">
          <div className="profile__category-wrapper">
            <h2 className="profile__category-title">{newsArticles && newsArticles.length ? 'News' : ''}</h2>

            <div className="profile__category-line">
              {newsArticles.length
                ? newsArticles.map(article =>
                  <NewsBox
                    key={article.id}
                    actions={article.actions}
                    category={article.category}
                    logo={article.logo}
                    image={article.image}
                    description={article.description} />
                  )
                : null
              }
            </div>
          </div>

          <div className="profile__category-wrapper">
            <h2 className="profile__category-title">{fachionArticles && fachionArticles.length ? 'Fashion' : ''}</h2>

            <div className="profile__category-line">
              {fachionArticles.length
                ? fachionArticles.map(article =>
                  <NewsBox
                    key={article.id}
                    actions={article.actions}
                    category={article.category}
                    logo={article.logo}
                    image={article.image}
                    description={article.description} />
                  )
                : null
              }
            </div>
          </div>

          <div className="profile__category-wrapper">
            <h2 className="profile__category-title">{politicsArticles && politicsArticles.length ? 'Politics' : ''}</h2>

            <div className="profile__category-line">
              {politicsArticles.length
                ? politicsArticles.map(article =>
                  <NewsBox
                    key={article.id}
                    actions={article.actions}
                    category={article.category}
                    logo={article.logo}
                    image={article.image}
                    description={article.description} />
                  )
                : null
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// {usersArticles.map(article =>
//   <NewsBox
//     key={article.id}
//     actions={article.actions}
//     category={article.category}
//     logo={article.logo}
//     image={article.image}
//     description={article.description} />
// )}

export default UserPage;
