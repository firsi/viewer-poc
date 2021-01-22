import styled from "styled-components";

const BorderedContainer = styled.div`
  border: ${({ theme }) => `1px solid ${theme.palette.grayscale[3]}`};
  border-radius: 4px;
  padding: 1px;
  margin: 0 10px;
`;

export default BorderedContainer;
