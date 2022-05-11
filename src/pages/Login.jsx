import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://cdn.pixabay.com/photo/2021/11/25/13/05/woman-6823558__340.jpg");
  background-size:cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
`;
const Form = styled.form`
  display: flex;
  flex-direction:column
`;

const Title = styled.h1`
  font-style: 24px;
  font-weight: 300;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  cursor: pointer;
  background-color: teal;
  color: white;
  margin-bottom: 10px;
`;

const Link = styled.a`
margin: 5px 0;
font-style: 12px;
text-decoration: underline;
cursor:pointer;
`
const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>Do Not You REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
