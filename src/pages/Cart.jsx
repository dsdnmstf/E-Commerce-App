import { Add, Remove } from "@material-ui/icons"
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
justify-content: center;
padding: 20px;
`

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
display: flex;
justify-content:space-between;

`;

const Info = styled.div`
flex:3;
`;

const Product = styled.div`
display: flex;
justify-content:space-between;
`
const ProductDetail = styled.div`
flex:2;
display: flex;
`;

const Image = styled.img`
width: 200px;`;

const Details = styled.div`
padding: 20px;
display: flex;
flex-direction:column;
justify-content:space-around;

`;
const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius:50%;
background-color: ${props=>props.color};
`;
const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content:center;
`;

const ProductAmountContainer=styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`
const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;`;

const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
`;

const Hr = styled.hr`
background-color:#eee;
border:none;
height:1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid black;
  border-radius:10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
font-weight: 200;
`
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type == "total" && 500};
  font-size: ${(props) => props.type == "total" && "24px"};
`;
const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
width: 100px;
padding: 10px;
background-color:black;
color:white;
font-weight: 600;
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
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://media.istockphoto.com/photos/blue-sneakers-isolated-on-white-background-picture-id1308274455?b=1&k=20&m=1308274455&s=170667a&w=0&h=S3UYmEJ1hUri2rB8jRhJ4wNY31lMrHysLHbl9YD8j_Q=" />
                <Details>
                  <ProductName>
                    <b>Product:</b> JESSIE THUNDER SHOESS
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 938564521
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://media.istockphoto.com/photos/blue-sneakers-isolated-on-white-background-picture-id1308274455?b=1&k=20&m=1308274455&s=170667a&w=0&h=S3UYmEJ1hUri2rB8jRhJ4wNY31lMrHysLHbl9YD8j_Q=" />
                <Details>
                  <ProductName>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 938564521
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemText>$ 80</SummaryItemText>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemText>$ 5.90</SummaryItemText>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemText>$ 5.90</SummaryItemText>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemText>$ 80</SummaryItemText>
            </SummaryItem>
            <Button>CHECK OUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Cart