import React from 'react';

// Utilities
import clsx from 'clsx';

// Modular Scss
import classes from './subredditCard.module.scss';

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
  // Render react
  return (
    <div className={clsx(className, classes.card)}>
      <div className={classes.rank}>{rank}</div>

      <div className={classes.front}>
        <img src={url} alt={alt} className={classes['img-main']} />
        <h3 className={classes['sr-name']}>r/{name}</h3>
        <div className={classes['details']}>
          <p className={classes['sr-subs']}>{subcount}</p>
          <div className={classes['reddit-logo']}>
            <i className={clsx('fab', 'fa-reddit')}></i>
          </div>
        </div>
      </div>

      <div className={classes.back}>
        <div className={classes['sr-details']}>
          <h4 className="sr-sub-count">{subcount} members</h4>
          <p className={classes['sr-caption']}>{description}</p>
        </div>
        <div className={classes['reddit-logo']}>
          <i className={clsx('fab', 'fa-reddit')}></i>
          <p className={classes['reddit-name']}>Reddit</p>
        </div>
      </div>

      <div className={classes.background}>
        <div className={classes.rank}>{rank}</div>
      </div>
    </div>
  );
};

export default SubredditCard;
