import styled from "styled-components";
import { categories } from "../utils/data";
import CategoryItem from "./CategoryItem";
const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;
const Categories = () => {
  console.log(categories);
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem key={item.id} {...item} />
      ))}
    </Container>
  );
};

export default Categories;
