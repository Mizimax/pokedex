import React from 'react';
import styled from 'styled-components';

import { Box } from '../Base';

const ActionBarWrapper = styled(Box)`
  position: relative;
  margin-top: auto;
  width: 100%;
  height: 70px;
  flex: 0 0 70px;
  background-color: ${(props) => props.theme.colors.primary['500']};
`;

const ActionButton = styled((props) => <Box as={'button'} {...props} />)`
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);

  background-color: ${(props) => props.theme.colors.primary['500']};
  border-radius: 50%;
  border: none;
  cursor: pointer;
  width: 120px;
  height: 120px;
  color: white;
  font-size: 64px;
`;

const ActionBar = ({ onAction, ...props }) => {
  return (
    <ActionBarWrapper {...props}>
      <ActionButton onClick={onAction}>+</ActionButton>
    </ActionBarWrapper>
  );
};

export default ActionBar;
