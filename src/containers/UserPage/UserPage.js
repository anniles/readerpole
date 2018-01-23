import React from 'react';
import { user, news } from './../../constants';
import { NewsBox } from './../../components/NewsBox';
import mapUsersArcticles from './utils/mapUsersArticles';
// import normalizeCatTtitle from './utils/normalizeCatTtitle';
import './../../css/userPage.css';

const UserPage = () => {
  const usersArticleData = mapUsersArcticles(user, news);

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
          {usersArticleData.map(data =>
            <div key={data.name} className="profile__category-wrapper">
              <h2 className="profile__category-title">{data.name}</h2>

              <div className="profile__category-line">
                {data.usersArticles.map(article =>
                  <NewsBox
                    key={article.id}
                    actions={article.actions}
                    category={article.category}
                    logo={article.logo}
                    image={article.image}
                    description={article.description} />
                )}
            </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserPage;
