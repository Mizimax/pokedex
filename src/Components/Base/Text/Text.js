import React from 'react';
import styled from 'styled-components';
import { typography, textStyle } from 'styled-system';

import Box from '../Box';

const Text = styled((props) => <Box as={'p'} {...props} />)`
  ${typography};
  ${textStyle};
`;

export default Text;
