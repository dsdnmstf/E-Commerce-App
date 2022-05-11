import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://cdn.pixabay.com/photo/2021/11/25/13/05/woman-6823558__340.jpg");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
padding: 20px;
width: 40%;
background-color:white;
`;
const Form = styled.form`
display: flex;
flex-wrap:wrap;`

const Title = styled.h1`
font-style: 24px;
font-weight: 300;`;

const Input = styled.input`
flex:1;
min-width:40%;
margin: 20px 10px 0px 0px;
padding:10px;

`;

const Agreement = styled.span`
font-style: 12px;
margin:20px 0;
`;
const Button = styled.button`
width: 40%;
border: none;
padding:15px 20px;
cursor:pointer;
background-color:teal;
color:white;

`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
