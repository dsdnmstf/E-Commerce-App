import styled from "styled-components"
import Announcment from "../components/Announcment"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Container = styled.div``
const Wrapper = styled.div`
padding: 20px;`;
const Title = styled.h1`
font-weight: 300;
text-align:center;
`;
const Top = styled.div`
display: flex;
align-items: center;
justify-content: center;`

const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor:pointer;
border: ${(props) => props.type === "filled" && "none"};
background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div``
const TopText=styled.span`
text-decoration:underline;
cursor:pointer;
margin:0 10px;
`

const Bottom = styled.div`
`;



const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcment />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>CONTINOU SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wish List(1)</TopText>
          </TopTexts>
          <TopButton type="filled" >CHECKOUT NOW</TopButton>
        </Top>
        <Bottom></Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Cart