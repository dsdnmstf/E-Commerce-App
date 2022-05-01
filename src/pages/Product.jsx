import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcment from "../components/Announcment";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
const Container = styled.div``;
const Wrapper = styled.div``;
const ImgContainer = styled.div``;
const Image = styled.img``;
const InfoContainer = styled.div``;
const Title = styled.h1``;
const Desc = styled.p``;
const Price = styled.span``;
const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcment />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title></Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In aperiam
            ut magni labore blanditiis ipsum non fugiat facilis? Labore quisquam
            omnis ullam, enim fuga excepturi earum. Ratione reprehenderit
            consequatur repellat.
          </Desc>
          <Price>$ 20</Price>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;
