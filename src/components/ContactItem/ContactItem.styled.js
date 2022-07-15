import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  gap: 8px;
  list-style: none;
`;
export const ItemButton = styled.button`
  width: 70px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid black;
  color: #0c0b0b;
  margin-left: auto;
  cursor: pointer;
  :hover,
  :focus {
    border: 2px solid #719ece;
  }
`;
