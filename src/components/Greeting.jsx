import { Box, Typography, useMediaQuery } from "@mui/material";
import { colors } from "../theme/colors";
import armin1 from '../images/armin.jpeg';
import armin2 from '../images/armin3.jpeg';

import { fonts } from "../theme/fonts";

// eslint-disable-next-line react/prop-types
export default function Greeting({ homeRef }) {
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', marginTop: 90 }}>
            <div ref={homeRef} style={{ position: 'absolute', top: '-90px' }}></div>
            <Box sx={{ width: isMobile ? '100vw' : '50vw', paddingTop: { xs: '10vh', sm: '25vh' }, paddingBottom: { xs: '10vh', sm: 0 }, bgcolor: colors().white }}>
                <Typography variant="h2" sx={{ fontFamily: fonts().primary, textAlign: 'center', color: colors().darkBrown }}>Bokor Ármin</Typography>
                <Typography variant="h5" sx={{ fontFamily: fonts().primary, textAlign: 'center', color: colors().darkBrown }}>Full-Stack Developer</Typography>
                <Typography sx={{display: {xs: 'none', sm: 'block'}, fontSize: 18, margin: '0px 25px', paddingTop: 3, textAlign: 'center', fontFamily: fonts().primary, color: colors().darkBrown }}>"I mentored Ármin throughout some parts of his journey in Codecool, and I really liked his dedication and enthusiasm for learning. Armin's diligence was evident in his approach to every task, and he had an eagerness to grasp new concepts quickly. He possesses an ability to absorb complex ideas, thanks to his self-development skills. He seamlessly integrated into the team and into the Codecool community with his positive attitude. He took care of the high quality of his work by focusing on the details and clean coding. I wholeheartedly recommend Armin for his first job. His technical prowess, coupled with his passion for continuous learning and collaborative nature, make him an ideal candidate."
                    <br />
                    - Dániel Hatás</Typography>
            </Box>

            <Box sx={{ width: isMobile ? '100vw' : { xs: '50vw', sm: '50vw' }, marginTop: isMobile ? '20px' : '0', marginBottom: isMobile ? '20px' : '0' }}>
                <Box sx={{
                    margin: { xs: 'auto', sm: 0 },
                    backgroundImage: `url(${armin1})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: { xs: '85vw', sm: '40vw', lg: '26vw' },
                    height: isMobile ? '50vh' : '48vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden'
                }}></Box>
                <Box sx={{
                    display: { xs: "none", sm: 'block' },
                    backgroundImage: `url(${armin2})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: { xs: '85vw', sm: '43vw', lg: '26vw' },
                    height: isMobile ? 'auto' : '48vh',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                    marginTop: isMobile ? '20px' : '0',
                    float: 'right',
                }}></Box>
            </Box>
            <Box>
            <Typography sx={{display: {xs: 'block', sm: 'none'}, fontSize: 16, margin: '10px 25px', paddingTop: 3, textAlign: 'center', fontFamily: fonts().primary, color: colors().white }}>"I mentored Ármin throughout some parts of his journey in Codecool, and I really liked his dedication and enthusiasm for learning. Armin's diligence was evident in his approach to every task, and he had an eagerness to grasp new concepts quickly. He possesses an ability to absorb complex ideas, thanks to his self-development skills. He seamlessly integrated into the team and into the Codecool community with his positive attitude. He took care of the high quality of his work by focusing on the details and clean coding. I wholeheartedly recommend Armin for his first job. His technical prowess, coupled with his passion for continuous learning and collaborative nature, make him an ideal candidate."
            <br />
            - Dániel Hatás</Typography>
            </Box>
        </div >
    )
}
