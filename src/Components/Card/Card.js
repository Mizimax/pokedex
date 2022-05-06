import styled from 'styled-components';

import { Box } from '../Base';

const Card = styled(Box)`
  background-color: #f3f4f7;
  box-shadow: 5px 5px 15px 0px #d5d6dc;
  cursor: pointer;

  &:hover {
    box-shadow: 5px 5px 15px 0px #aeaeae;
  }
`;

export default Card;
