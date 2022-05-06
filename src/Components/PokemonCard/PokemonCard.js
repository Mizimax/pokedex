import React from 'react';
import styled from 'styled-components';

import Card from '../Card';
import { Box, Flex, Text } from '../Base';
import HappinessImage from '../../cute.png';

export const ACTIONS = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
};

const ImageWrapper = styled(Box)`
  max-width: 150px;
  width: 100%;
`;

const LevelTubeWrapper = styled(Box)`
  width: 100%;
  height: 30px;
  border-radius: 15px;
  background-color: #e4e4e4;
  box-shadow: 5px 5px 15px 0px #d4d4d4;
`;

const LevelTubeValue = styled(Box)`
  height: 100%;
  border-radius: 15px;
  background-color: #f3701a;
`;

const CTAButton = styled.div`
  display: none;
  position: absolute;
  right: 20px;
  top: 0;
  font-family: ${(props) => props.theme.fonts.header};
  color: #dc7777;
  font-size: 36px;
  cursor: pointer;
`;

const StyledCard = styled(Card)`
  &:hover {
    & > ${CTAButton} {
      display: block;
    }
  }
`;

const LevelTube = ({ progress }) => {
  return (
    <LevelTubeWrapper>
      <LevelTubeValue width={`${progress}%`}></LevelTubeValue>
    </LevelTubeWrapper>
  );
};

const LevelStatus = ({ status, level }) => {
  return (
    <Flex mt={1} alignItem={'center'}>
      <Box flex={'0 0 80px'}>
        <Text mr={4} my={0} fontSize={3} fontFamily={'header'}>
          {status}
        </Text>
      </Box>
      <LevelTube progress={level} />
    </Flex>
  );
};

const PokemonCard = ({ title, status, imageUrl, action, onActionClick, ...props }) => {
  const { hp, strength, weakness, happiness } = status || {};
  return (
    <StyledCard p={3} style={{ position: 'relative' }} {...props}>
      <CTAButton onClick={onActionClick}>{action === ACTIONS.ADD ? 'ADD' : 'X'}</CTAButton>
      <Flex>
        <ImageWrapper>
          <img width={'100%'} src={imageUrl} alt={title} />
        </ImageWrapper>
        <Box pl={3} flex={'1'}>
          <Text my={0} fontSize={'40px'} fontFamily={'content'}>
            {title}
          </Text>
          <LevelStatus status={'HP'} level={hp} />
          <LevelStatus status={'STR'} level={strength} />
          <LevelStatus status={'WEAK'} level={weakness} />
          <Box mt={2}>
            {Array.from({ length: happiness }, () => (
              <img
                src={HappinessImage}
                alt={'Pokemon happiness'}
                width={'45px'}
                style={{ marginLeft: '6px' }}
              />
            ))}
          </Box>
        </Box>
      </Flex>
    </StyledCard>
  );
};

export default PokemonCard;
