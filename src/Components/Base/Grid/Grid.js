import { grid, layout, border } from 'styled-system';
import styled from 'styled-components';

import Box from '../Box';

const Grid = styled(Box)`
  display: grid;
  ${grid};
  ${layout};
  ${border};
`;

export default Grid;
