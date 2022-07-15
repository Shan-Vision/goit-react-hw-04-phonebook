import styled from 'styled-components';
export const FilterBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 14px;
  margin-bottom: 25px;
`;
export const FilterLabel = styled.label`
  font-size: 20px;
  font-weight: 500;
`;
export const FilterInput = styled.input`
  display: inline-block;
  width: 250px;
  height: 40px;
  border-radius: 4px;
  outline: none;
  border: 2px solid black;
  font-size: 16px;
  font-family: inherit;
  :hover,
  :focus {
    border: 2px solid #719ece;
  }
`;