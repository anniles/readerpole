import React from 'react';

export const NewsBox = props => {
  const { actions, title, image, description } = props;

  const imgBg = {
    backgroundImage: `url(${image})`
  };

  return (
    <div className='newsBox'>
      <div className="newsBox__image-wrapper">
        <div className="newsBox__image" style={imgBg} ></div>
        <div className="newsBox__actions">
          <p>{actions}</p>
        </div>
      </div>

      <div className="newsBox__info">
        <div className="newsBox__category">
          <h3>{title}</h3>
        </div>

        <div className="newsBox__title">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}
