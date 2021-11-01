import styled, { css } from "styled-components";

const CardContainer = styled.div`
  border-color: rgba(192, 192, 192, 0.5);
  border-width: 1px;
  border-style: solid;
  border-radius: 0.5em;
  width: ${(props) => props.width || "100%"};
  -webkit-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
`;

const CardImage = styled.img`
  width: 100%;
  border-top-right-radius: 0.5em;
  border-top-left-radius: 0.5em;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
`;

const CardPrice = styled.h5`
  font-family: sans-serif;
  font-size: 1.25em;
  margin-bottom: 1em;
  margin: 0;
`;

const CardProductName = styled.h6`
  font-family: sans-serif;
  font-size: 1.25em;
  font-weight: 600;
  margin: 0;
  margin-bottom: 0.5em;
  color: grey;
`;

export { CardContainer, CardImage, CardBody, CardPrice, CardProductName };
