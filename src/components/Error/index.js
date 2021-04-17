import React from 'react';
import { useHistory } from 'react-router';
import { Typography } from '@material-ui/core';
import { StyledContainer, StyledButton } from './styles';

const Error = () => {
  const history = useHistory();

  return (
    <StyledContainer>
      <Typography variant="h4">
        Looks like some error has occurred, would you like to
      </Typography>
      <StyledButton
        onClick={() => history.push('/')}
        size="large"
        variant="contained"
      >
        Go Back
      </StyledButton>
    </StyledContainer>
  );
};

export default Error;
