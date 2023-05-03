import styled from "styled-components";
const Heading = styled.h1`
  color: var(--text-color-main);
  font-size: 36px;
  line-height: 40px;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
`;

const TextWhite = styled.p`
  font-family: NeuweltLight;
  font-size: 16px;
  line-height: 20px;
  margin-block-start: 0em;
  margin-block-end: 0em;
  color: var(--text-color-main);
`;
const TextGrey = styled.p`
  font-family: NeuweltLight;
  font-size: 16px;
  line-height: 20px;
  margin-block-start: 0em;
  margin-block-end: 0em;
  color: var(--text-color-light);
`;

const TextError = styled.p`
  font-size: 13px;
  color: var(--text-color-error);
  margin-block-start: 0em;
  margin-block-end: 0em;
`;
const SubHeading = styled.h3`
  font-size: 17px;
  font-weight: 400;
  line-height: 20px;
  margin-block-start: 0em;
  margin-block-end: 0em;
  color: var(--text-color-main);
  font-family: NeuweltRegular;
`;

export { TextWhite, TextGrey, Heading, TextError, SubHeading };
