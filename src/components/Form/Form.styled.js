import styled from 'styled-components';

export const Form = styled.form`
  width: 400px;
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  border: 1px solid black;
  border-radius: 4px;
`;
export const Label = styled.label`
  font-size: 20px;
  font-weight: 500;
`;
export const Input = styled.input`
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
export const Button = styled.button`
  cursor: pointer;
  width: 120px;
  height: 40px;
  border-radius: 4px;
  border: none;
  color: white;
  background-color: rgba(245, 68, 59, 1);
`;
