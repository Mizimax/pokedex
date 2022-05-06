import styled from 'styled-components';

const SearchBox = styled.input`
  background-image: url(/images/search.png);
  background-repeat: no-repeat;
  background-position: top 5px right 5px;
  background-size: 48px;
  font-family: ${(props) => props.theme.fonts.content};
  font-size: 40px;
  border: 1px solid #e6e6e6;
  width: 100%;
  height: 60px;
`;

export default SearchBox;
