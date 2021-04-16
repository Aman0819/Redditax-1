import React from 'react';
import SubredditCard from './SubredditCard';

import subreddits from '../../static/subreddits';
import StyledCardContainer, { Header as StyledHeader } from './styles';

// React Component
const Home = ({ className, ...rest }) => (
  <section className={className}>
    <StyledHeader>Browse Some From Here</StyledHeader>
    <StyledCardContainer>
      {subreddits.map((subreddit) => (
        <SubredditCard
          name={subreddit.name}
          url={subreddit.url}
          alt={subreddit.alt}
          subcount={subreddit.subcount}
          description={subreddit.description}
          rank={subreddit.rank}
          key={subreddit.rank}
        />
      ))}
    </StyledCardContainer>
  </section>
);

export default Home;
