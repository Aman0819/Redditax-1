import { Button } from '@material-ui/core';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 8em auto 2em;
`;

export const StyledButton = styled(Button)`
  &&& {
    color: ${({ theme }) => theme.palette.ternaryLight};
    background-color: ${({ theme }) => theme.palette.primary};
    margin-top: 1em;

    :hover {
      background-color: ${({ theme }) => theme.palette.primaryDark};
    }
  }
`;
