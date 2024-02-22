import FullWidthLayout from '../layout/simple/FullWidthLayout';

import About from '../components/About';
import Greeting from '../components/Greeting';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import WorkExperience from '../components/WorkExperience';
import Contact from '../components/Contact';

import { colors } from '../theme/colors';
// eslint-disable-next-line react/prop-types
export default function LandingPage({ aboutRef, homeRef, contactRef, resumeRef }) {

    return (
        <>
            <FullWidthLayout bgcolor={colors().green} display={<Greeting homeRef={homeRef} />} />
            <FullWidthLayout bgcolor={colors().white} display={<About aboutRef={aboutRef} />} />
            <FullWidthLayout bgcolor={colors().white} display={<WorkExperience resumeRef={resumeRef} />} />
            <FullWidthLayout bgcolor={colors().white} display={<Projects />}/>
            <FullWidthLayout bgcolor={colors().green} display={<Skills />}/>
            <FullWidthLayout bgcolor={colors().darkBrown} display={<Contact contactRef={contactRef}/>} />
        </>
    )
}