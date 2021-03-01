import React from 'react';
import { useHistory } from 'react-router';
import StyledLogo from './styles';

const Logo = () => {
  const history = useHistory();

  return (
    <StyledLogo onClick={() => history.push('/')}>
      <span aria-hidden="true">Redditax</span> <span>Reddit</span>ax
      <span aria-hidden="true">Redditax</span>
    </StyledLogo>
  );
};

export default Logo;
