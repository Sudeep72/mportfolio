import styled from 'styled-components';
import { Highlight, Split } from '../theme/GlobalStyles';
export default function Footer() {
  return (
    <FooterContainer>
    © Copyright 2022
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0 20px;
`;