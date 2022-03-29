import styled from 'styled-components'

export const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;

  p{
    text-align: ${({align})=>align};
  }
`

export const FlexContainer = styled.div`
  display:flex;
  align-items: center;
  flex-direction: row;

  @media(max-width: ${({theme})=>theme.mobile.small}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

  }
`
