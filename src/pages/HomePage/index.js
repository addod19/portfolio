import React from 'react';

import Nav from '../../components/Nav';
import Intro from '../../components/Intro';
import RecentWorks from '../../components/RecentWorks';
import AboutMe from '../../components/AboutMe';
import Contact from '../../components/Contact';

const HomePage = () => (
  <>
    <Nav />
    <Intro />
    <RecentWorks />
    <AboutMe />
    <Contact />
  </>
);

export default HomePage;
