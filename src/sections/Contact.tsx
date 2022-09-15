import { forwardRef } from "react";
import styled from "styled-components";
import { Container, H1, H2, Highlight, Split } from "../theme/GlobalStyles";
import { BsGithub} from 'react-icons/all';
import {BsTwitter} from 'react-icons/all';
import { FaLinkedinIn,FaDiscord } from "react-icons/fa";
import { MdOutlineMenuBook } from "react-icons/md";

const Contact = (props: any, ref: any) => {
  return (
    <Container mt="10px" ref={ref} {...props}>
      <H1>
        <Split>
          Find Me On<Highlight>.</Highlight>
        </Split>
      </H1>
      <InnerCont>
        <LinkStyle href="mailto:mail@sudeepdev.software">
          <H2 loc="Contact">mail@sudeep.me</H2>
        </LinkStyle>

        <SocialWrap>
        
  
          <Social target="_blank" href="https://github.com/Sudeep72">
            <BsGithub />
          </Social>
          
          <Social target="_blank" href="https://twitter.com/Sudeep15765761">
            <BsTwitter />
  </Social>
          <Social target="_blank" href="https://www.linkedin.com/in/sudeep-r-878022233/">
            <FaLinkedinIn />
            
          </Social>

          <Social target="_blank" href="https://discord.com/users/749582193248043119">
            <FaDiscord />
          </Social>
          <Social target="_blank" href="https://sudeep.carrd.co/">
            < MdOutlineMenuBook />
          </Social>
        </SocialWrap>
      </InnerCont>
    </Container>
  );
};

export default forwardRef(Contact);

const InnerCont = styled.div`
  margin-top: 50px;
  @media screen and (max-width: 1350px) {
    margin-top: 50px;
  }
`;

const LinkStyle = styled.a`
  ${H2} {
    text-align:center;
    transition: color 0.2s ease;
    &:hover {
      color: ${(props: any) => props.theme.colors.primary};
    }
  }
`;


const SocialWrap = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 20px;
`;

const Social = styled.a`
  font-size: 30px;
  color: ${(props) => props.theme.colors.textLight};
  transition: color 0.2s ease;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;
