import styled from 'styled-components'

export const HeaderStyled = styled.header`
  background-color: ${({ theme })=> theme.colors.header };
  font-size: 1.5rem;
  padding: 30px 20px;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  @media(max-width: ${({theme})=>theme.mobile.small}) {
    flex-direction: column;
  }
`
export const Logo = styled.img`
  margin: 0px 30px 0 0;
`

export const Image = styled.img`
width: 350px;
border-radius: 15px 5px 15px 5px;
margin-left: 30px;

@media(max-width: ${({theme})=>theme.mobile.small}) {
  margin: 20px 0  0 30px;
}

`
