import styled from 'styled-components';
import ImgAbt from '../Images/group1.png';

const AboutMeWrap = styled.section`
  width: 100%;
  padding: 72px 0 64px;
  background: #262626;

  @media only screen and (max-width: 600px) {
    padding: 56px 0 40px;
  }
`;

const Row1 = styled.div`
  width: 90%;
  max-width: 1140px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 40px;
  align-items: center;

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;

const Col1 = styled.div`
  width: 100%;
`;

const Col2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media only screen and (max-width: 900px) {
    justify-content: center;
  }
`;

const About = styled.h2`
  margin: 0 0 14px;
  font-family: 'Crete Round', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 72px;
  line-height: 1.05;
  color: #ff985c;

  @media only screen and (max-width: 600px) {
    font-size: 52px;
  }
`;

const MyDescription = styled.p`
  margin: 0 0 24px;
  max-width: 620px;
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.5;
  color: #f4f5f7;
`;

const FStack = styled.h3`
  margin: 0 0 20px;
  max-width: 460px;
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 1.2;
  color: #ffffff;

  @media only screen and (max-width: 600px) {
    font-size: 38px;
  }
`;

const Resume = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0 16px;
  background-color: #ff985c;
  color: #ffffff;
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  transition: border-radius 0.2s ease, color 0.2s ease;

  &:hover {
    color: #f4f5f7;
    text-decoration: none;
    border-radius: 20px;
  }
`;

const ImgDesign = styled.img`
  width: 100%;
  max-width: 460px;
  display: block;
`;

const Divider = styled.div`
  width: 90%;
  max-width: 1140px;
  height: 1px;
  margin: 48px auto 32px;
  background: #ffffff;
`;

const Row2 = styled.div`
  width: 90%;
  max-width: 1140px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const RotateRec = styled.div`
  width: 18px;
  height: 18px;
  background: #ff985c;
  transform: rotate(-45deg);
`;

const Rec = styled.div`
  width: 18px;
  height: 18px;
  background: #ff985c;
`;

const Circle = styled.div`
  width: 18px;
  height: 18px;
  background: #ff985c;
  border-radius: 50%;
`;

const Heading = styled.h3`
  margin: 0 0 12px;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 26px;
`;

const ListItem = styled.p`
  margin: 0 0 8px;
  color: #ffffff;
  font-size: 18px;
`;

const AboutMe = () => (
  <AboutMeWrap id="about">
    <Row1>
      <Col1>
        <About>About Me</About>
        <MyDescription>
          Hello I&apos;m a software engineer! I can help you build a product,
          feature or website. Take a look at some of my work and experience!
          So if you&apos;d like to work together, please get in touch.
        </MyDescription>
        <FStack>Full Stack Software Engineer</FStack>
        <Resume
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.google.com/document/d/15ORaVl9x50n_nSYa0_JAnQvXzvONjBF4qSuVUqk5_hg/edit"
        >
          View My Resume
        </Resume>
      </Col1>
      <Col2>
        <ImgDesign src={ImgAbt} alt="helper design" />
      </Col2>
    </Row1>
    <Divider />
    <Row2>
      <Lan>
        <Heading>
          <RotateRec />
          Languages
        </Heading>
        <ListItem>JavaScript</ListItem>
        <ListItem>Ruby</ListItem>
        <ListItem>HTML</ListItem>
        <ListItem>CSS</ListItem>
        <ListItem>Solidity</ListItem>
      </Lan>
      <Fram>
        <Heading>
          <Rec />
          Frameworks
        </Heading>
        <ListItem>Ruby on Rails</ListItem>
        <ListItem>React</ListItem>
        <ListItem>Redux</ListItem>
        <ListItem>Bootstrap</ListItem>
        <ListItem>Material UI</ListItem>
        <ListItem>Styled Components</ListItem>
        <ListItem>TailwindCSS</ListItem>
      </Fram>
      <Skll>
        <Heading>
          <Circle />
          Skills
        </Heading>
        <ListItem>GitHub</ListItem>
        <ListItem>Terminal</ListItem>
        <ListItem>GitLab</ListItem>
        <ListItem>Heroku</ListItem>
        <ListItem>Truffle</ListItem>
        <ListItem>Ganache</ListItem>
      </Skll>
    </Row2>
  </AboutMeWrap>
);

export default AboutMe;
