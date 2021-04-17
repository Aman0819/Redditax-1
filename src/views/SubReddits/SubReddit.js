import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { StyledSubReddit, StyledCircularProgressContainer } from './styles';

const SubReddit = ({ file }) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src =
      file.data.preview.images[0].resolutions[
        file.data.preview.images[0].resolutions.length - 1
      ].url;

    image.addEventListener('load', onLoad);
    image.addEventListener('error', onError);

    return () => {
      image.removeEventListener('load', onLoad);
      image.removeEventListener('error', onError);
    };
  }, [file.data.preview.images]);

  const onLoad = () => {
    setLoading(false);
  };

  const onError = (e) => {
    console.error(e);
    setLoading(false);
  };

  const renderSubReddit = () =>
    isLoading ? (
      <StyledCircularProgressContainer>
        <CircularProgress />
      </StyledCircularProgressContainer>
    ) : (
      <StyledSubReddit>
        <div className="normal">
          <a href={file.data.url} target="_blank" rel="noopener noreferrer">
            <img
              src={
                file.data.preview.images[0].resolutions[
                  file.data.preview.images[0].resolutions.length - 1
                ].url
              }
              alt={file.data.title}
            />
          </a>
        </div>
        <div className="onhover">
          <div className="overlay"></div>
          {/* <h3 className="author">{}</h3> */}
          <div className="top">
            <h3 className="subreddit">{`r/${file.data.subreddit}`}</h3>
            <h4 className="caption">{file.data.title}</h4>
          </div>
          <div className="bottom">
            <h4 className="upvotes">
              {file.data.score}&nbsp;
              <i className="fas fa-arrow-up"></i>
            </h4>
            <a
              href={'https://reddit.com' + file.data.permalink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-reddit"></i>
            </a>
          </div>
        </div>
      </StyledSubReddit>
    );

  return <React.Fragment>{renderSubReddit()}</React.Fragment>;
};

export default SubReddit;
