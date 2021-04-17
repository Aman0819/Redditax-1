import React from 'react';
import clsx from 'clsx';
import { useHistory } from 'react-router';

const SubredditCard = ({
  rank,
  url,
  alt,
  name,
  subcount,
  description,
  className,
  ...rest
}) => {
  const history = useHistory();

  // Render JSX
  return (
    <div
      className={clsx(className, 'card')}
      onClick={() => history.push('/subreddits/' + name)}
    >
      <div className="rank">{rank}</div>

      <div className="front">
        <img src={url} alt={alt} className="img-main" />
        <h3 className="sr-name">r/{name}</h3>
        <div className="details">
          <p className="sr-subs">{subcount}</p>
          <div className="reddit-logo">
            <i className={clsx('fab', 'fa-reddit')}></i>
          </div>
        </div>
      </div>

      <div className="back">
        <div className="sr-details">
          <h4 className="sr-sub-count">{subcount} members</h4>
          <p className="sr-caption">{description}</p>
        </div>
        <div className="reddit-logo">
          <i className={clsx('fab', 'fa-reddit')}></i>
          <p className="reddit-name">Reddit</p>
        </div>
      </div>

      <div className="background">
        <div className="rank">{rank}</div>
      </div>
    </div>
  );
};

export default SubredditCard;
