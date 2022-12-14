import { forwardRef, useState, useEffect } from "react";
import styled from "styled-components";
import { Container, H1, H2, Highlight, Split } from "../theme/GlobalStyles";
import { GoLinkExternal } from 'react-icons/all';
import brainy from "../assets/brainy.png";
//import holidazePic from "../assets/1i3h0.jpg";
import Anime from "react-anime";
import useIsVisible from "../utils/isVisible";
import { Interface } from "readline";



const Work = (props: any, ref: any) => {
  const [ autoplayState, setAutoplayState ] = useState(false);

  const isElmVisible = useIsVisible(ref);
  
  let configLeft = {
    duartion: 1000,
    translateX: ["-5em", 0],
    opacity: [0, 1],
    autoplay: false,
  };
  let configRight = {
    duartion: 1000,
    translateX: ["5em", 0],
    opacity: [0, 1],
    autoplay: false,
  };


  useEffect(() => {
    if (isElmVisible) {
      setAutoplayState(true);
    }
  }, [isElmVisible]);

  return (
    <Container mt="-100px" ref={ref} {...props}>
      <H1>
        <Split>
          Highlighted Work<Highlight>.</Highlight>
        </Split>
      </H1>
      <ProjectsCont>
        <ProjectPos>
          <Anime
            delay={(el: Element, index: number) => 500}
            {...configLeft}
            autoplay={autoplayState}
          >
            <Project>
              <Img src={brainy} />
              <ProjectInfoWrap
                target="_blank"
                href="https://kui-z.tech"
              >
                <ProjectInfo>
                  <ProjectInfoTextWrap>
                    <ProjectInfoTextWrapInner>
                      <ProjectInfoPos>
                        <H2 work>Brainy Hub</H2>
                        <ProjectInfoText>
                          A website that boosts your knowledge 
                          skills.
                          
      {/*<a target="_blank" href="https://kui-z.tech"><button id="foot"><button className="button-os">Live</button></button></a> */}
                        </ProjectInfoText>
                      </ProjectInfoPos>
                      <ProjectLink>
                        <GoLinkExternal />
                      </ProjectLink>
                    </ProjectInfoTextWrapInner>
                  </ProjectInfoTextWrap>
                </ProjectInfo>
                <ProjectLangsWrap>
                <ProjectLang>React JS</ProjectLang>
                  <ProjectLang>JS</ProjectLang>
                  <ProjectLang>HTML</ProjectLang>
                  <ProjectLang>CSS</ProjectLang>
                </ProjectLangsWrap>
                <CloudPos></CloudPos>
              </ProjectInfoWrap>
            </Project>
          </Anime>

         {/*} <Anime
            delay={(el: Element, index: number) => 500}
            {...configRight}
            autoplay={autoplayState}
          >
            <Project inverted>
              <Img src={holidazePic} />
              <ProjectInfoWrap
                inverted
                target="_blank"
                href="https://github.com/TuttiFrooti/holidaze-booking-proof-concept"
              >
                <ProjectInfo>
                  <ProjectInfoTextWrap>
                    <ProjectInfoTextWrapInner>
                      <ProjectInfoPos>
                        <H2 work>Holidaze booking</H2>
                        <ProjectInfoText>
                          A rough mock of a accomodation booking website with
                          focus on Bergen, Norway
                        </ProjectInfoText>
                      </ProjectInfoPos>
                      <ProjectLink>
                        <GoLinkExternal />
                      </ProjectLink>
                    </ProjectInfoTextWrapInner>
                  </ProjectInfoTextWrap>
                </ProjectInfo>
                <ProjectLangsWrap inverted>
                  <ProjectLang>REACT</ProjectLang>
                  <ProjectLang>JS</ProjectLang>
                  <ProjectLang>HTML</ProjectLang>
                  <ProjectLang>CSS</ProjectLang>
                </ProjectLangsWrap>
              </ProjectInfoWrap>
            </Project>
  </Anime>*/}
        </ProjectPos>
      </ProjectsCont>
    </Container>
  );
}

export default forwardRef(Work);

const ProjectsCont = styled.div`
  margin-top: 60px;
  width: 100%;

  @media screen and (max-width: 1350px) {
    margin-top: 50px;
  }
`;

const ProjectPos = styled.div`
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  overflow: hidden;
`;


interface ProjectsStyle {
  readonly inverted?: boolean;
}

const Project = styled.div<ProjectsStyle>`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.inverted ? "row-reverse" : "row")};

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const Img = styled.img`
  border-radius: 5px;
  max-width: 700px;
  width: 100%;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    border-radius: 5px 5px 0 0;
  }
`;


const ProjectInfoWrap = styled.a<ProjectsStyle>`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: ${({ theme }) => theme.colors.textLight};
  margin-left: ${({ inverted }) => (inverted ? "0" : "-80px")};
  margin-right: ${({ inverted }) => (inverted ? "-80px" : "0")};
  margin-top: 16px;
  position: relative;

  @media screen and (max-width: 1200px) {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    max-width: 700px;
    width: 100%;
  }

  :hover {
    ${H2} {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const ProjectInfo = styled.div`
  width: 100%;
`;

const ProjectInfoTextWrap = styled.div`
  background-color: ${(props) => props.theme.colors.raisinBlack};
  height: 150px;
  border-radius: 5px;

  @media screen and (max-width: 320px) {
    height: 170px;
  }

  @media screen and (max-width: 1200px) {
    border-radius: 0 0 5px 5px;
  }
`;

const ProjectInfoTextWrapInner = styled.div`
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
`;

const ProjectInfoText = styled.p`
  max-width: 350px;
  line-height: 1.4;
`;

const ProjectLink = styled.div`
  width: 30px;
  height: 30px;
  margin-top: 10px;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  font-size: 30px;
  transition: color 0.2s ease;

  @media only screen and (max-width: 600px) {
    font-size: 20px;
    margin-top: 5px;
  }
`;

const ProjectLangsWrap = styled.div<ProjectsStyle>`
  display: flex;
  gap: 15px;
  justify-content: ${(props) => (props.inverted ? "flex-start" : "flex-end")};
  height: 15px;

  @media screen and (max-width: 1200px) {
    justify-content: flex-end;
  }
`;

const ProjectLang = styled.div`
  color: ${(props) => props.theme.colors.textDim};
`;

const ProjectInfoPos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CloudPos = styled.div`
  position: absolute;
`;
