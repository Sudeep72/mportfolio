import { forwardRef } from "react";
import styled from "styled-components";
import { Highlight, Container, Split } from "../theme/GlobalStyles";
import Cloud from "../components/Cloud";
import Anime from "react-anime";

const About = (props: any, ref: any) => {
  const config = {
    duartion: 1000,
    translateX: ["-100em", 0],
    opacity: [0, 1],
  };

  return (
    <Container mt="20px" ref={ref} {...props}>
    <FoldDivider ref={ref} {...props}>
        <Div>
            <Split>
            <H1>
        <Split>
          About<Highlight>.</Highlight>
        </Split>
      </H1>
            </Split>
        </Div>
        
      <OuterDiv>

        <Div>
          <Anime delay={(el: Element, index: number) => 500} {...config}>
            <H2>
              Hi Everyone! I am <Highlight>Sudeep</Highlight> from TamilNadu, India.
            </H2>
          </Anime>
          <Anime delay={(el: Element, index: number) => 1000} {...config}>
            <H2>
            I am a junior pursuing <Highlight>BE Computer Science </Highlight> and
            </H2>
          </Anime>
          <Anime delay={(el: Element, index: number) => 1000} {...config}>
            <H2>
            <Highlight> Engineering </Highlight> in College of Engineering Guindy,
            </H2>
          </Anime>
          <Anime delay={(el: Element, index: number) => 1500} {...config}>
          <H2>
          Anna University, Chennai.
            </H2>
          </Anime>
          
        </Div>
        <CloudPos>
          <Cloud />
        </CloudPos>
      </OuterDiv>
    </FoldDivider>
    </Container>
  );
}

export default forwardRef(About);

interface ColorStyle {
  readonly dim?: boolean;
}

const FoldDivider = styled(Container)`
  min-height: 100vh;
  z-index: -1;
`;

const OuterDiv = styled.div<ColorStyle>`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-bottom: 200px;

  @media only screen and (max-width: 700px) {
    margin-bottom: 0;
    margin-top: 150px;
  }
  @media only screen and (max-width: 500px) {
    margin-bottom: 0;
    margin-top: 50px;
  }
`;

const Div = styled.div<ColorStyle>`
  padding: 0 30px;
`;

const H1 = styled.h1`
  font-size: 48px;
`;

const H2 = styled.h2`
  font-size: 36px;
`;

const SubText = styled.div`
  color: ${(props) => props.theme.colors.textDim};
  font-size: 24px;
`;

const CloudPos = styled.div`
  margin: 100px auto 0 auto;
  width: 100%;
  height: 230px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;
