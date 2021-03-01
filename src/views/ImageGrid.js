import React from 'react';

import ImagePost from './ImagePost.js';

const ImageGrid = ({ files, getPrevPage, getNextPage }) => {
  return (
    <div className="image-grid__container">
      <div className="image-grid">
        {files.map((file) => (
          <ImagePost key={file.data.id} file={file} />
        ))}
      </div>
      {/* <Box display="flex" justifyContent="space-between">
        <Tooltip title="Previous Page" aria-labelledby="previous_page">
          <IconButton onClick={getPrevPage}>
            <ArrowBackIosIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Next Page" aria-labelledby="next_page">
          <IconButton onClick={getNextPage}>
            <ArrowForwardIosIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      </Box> */}
    </div>
  );
};

export default ImageGrid;
