import { HeaderStyled, Nav, Logo, Image } from "./styles/Header.style";
import { Container, FlexContainer } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";

export default function Header() {
  return (
    <>
      <HeaderStyled>
        <Container>
          <Nav>
            <Logo src="logoipsum-logo-51.svg" alt="logo"></Logo>
            <Button bg="#5829a7">Sign Up</Button>
          </Nav>
          <FlexContainer>
            <div>
              <h3>City Simulator</h3>
              <p>
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested. Sections 1.10.32 and
                1.10.33 from "de Finibus Bonorum et Malorum".
              </p>
              <Button bg="#b5179e">Play Now</Button>
            </div>
            <Image src="istockphoto-1279840008-612x612.jpeg" alt="img"></Image>
          </FlexContainer>
        </Container>
      </HeaderStyled>
    </>
  );
}
