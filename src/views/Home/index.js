import React from 'react';

// Custom Components
import Header from './Header';
import SubredditCard from './SubredditCard';

// Static Data
import subreddits from '../../static/subreddits';

// Material Components
import { Box } from '@material-ui/core';

// Modular Scss
import classes from './subredditCard.module.scss';

// React Component
const CardGrid = ({ className, ...rest }) => {
  // // const [reddit, setReddit] = useState({
  // //   currentSubreddit: '',
  // //   files: [],
  // //   after: null,
  // //   before: null,
  // //   currentPage: 1
  // // });

  // const searchSubreddit = useCallback(
  //   async (subreddit) => {
  //     try {
  //       await setRetry(false);
  //       const response = await axios.get(
  //         `${CORS_PROXY}${URL}${subreddit}.json?raw_json=1`
  //       );

  //       if (isMountedRef.current) {
  //         setCurrentSubreddit(subreddit);
  //         setFiles(response.data.data.children);
  //       }
  //       // setReddit({
  //       //   ...reddit,
  //       //   currentSubreddit: subreddit,
  //       //   files: response.data.data.children
  //       // });
  //     } catch (err) {
  //       setRetry(true);
  //       console.error(err);
  //     }
  //   },
  //   [isMountedRef]
  // );

  // useEffect(() => {
  //   files.forEach((element) => {
  //     if (element.data.preview) {
  //       console.log(element.data.preview.images[0].source.URL);
  //     }
  //   });
  // }, [files]);

  // // Test
  // useEffect(() => console.log('retry changed! yay'), [retry]);

  // const getNextPage = useCallback(async () => {
  //   const response = await axios.get(
  //     `${URL}${currentSubreddit}.json?count=${
  //       currentPage * itemsPerPage
  //     }&after=${after}&raw_json=1`
  //   );

  //   if (isMountedRef.current) {
  //     setFiles(response.data.data.children);
  //     after.current = response.data.data.after;
  //     before.current = response.data.data.before;
  //     setCurrentPage((prev) => prev + 1);
  //   }
  //   // setReddit({
  //   //   ...reddit,
  //   //   files: response.data.data.children,
  //   //   after: response.data.data.after,
  //   //   before: response.data.data.before,
  //   //   currentPage: reddit.currentPage + 1
  //   // });
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: 'smooth'
  //   });
  // }, [isMountedRef, currentPage, currentSubreddit]);

  // const getPrevPage = useCallback(async () => {
  //   const response = await axios.get(
  //     `${URL}${currentSubreddit}.json?count=${
  //       (currentPage - 1) * 25 - 1
  //     }&before=${before}&raw_json=1`
  //   );

  //   if (isMountedRef.current) {
  //     setFiles(response.data.data.children);
  //     after.current = response.data.data.after;
  //     before.current = response.data.data.before;
  //     if (currentPage > 1) {
  //       setCurrentPage((prev) => prev - 1);
  //     }
  //   }
  //   // setReddit({
  //   //   ...reddit,
  //   //   files: response.data.data.children,
  //   //   after: response.data.data.after,
  //   //   before: response.data.data.before
  //   // });
  //   window.scrollTo(0, 0);
  // }, [isMountedRef, currentPage, currentSubreddit]);

  // const resetSubreddit = () => {
  //   setCurrentSubreddit('');
  // };

  // Render React
  return (
    <Box className={className}>
      <Header title="Browse Some From Here" />
      <div className={classes['card-container']}>
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
      </div>
    </Box>
  );
};

export default CardGrid;
