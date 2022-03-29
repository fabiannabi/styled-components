import styled from 'styled-components'

export const Button = styled.button`
  border: 1px solid #fff;
  border-radius: 5px;
  background-color: ${({bg})=>bg};
  color: ${({color})=>color || '#fff'};
  font-size: 1.1rem;
  padding: 10px;

  &:hover {
    opacity: 0.8;
    transform: scale(0.95)
  }

`
