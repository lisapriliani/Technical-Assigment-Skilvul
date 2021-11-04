import styled from "styled-components";

const FlexContainer = styled.div`
  flex-wrap: wrap;
  height: 100vh;
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
`;

export default FlexContainer;
