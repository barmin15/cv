/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import { fonts } from "../theme/fonts";
import { colors } from "../theme/colors";

export default function About({aboutRef}) {
    return (
        <Box ref={aboutRef} sx={{width: '80vw', margin: 'auto', marginTop: 10}}>
            <Typography variant="h4" sx={{textAlign: 'center', paddingTop: 7, color: colors().darkBrown, fontFamily: fonts().primary}}>About me</Typography>
            <Divider></Divider>
            <Typography sx={{fontSize: {xs: 16, sm: 18}, margin: '30px 0px', paddingBottom: 7, textAlign: 'center', color: colors().darkBrown, fontFamily: fonts().primary}}>I like to think I'm an ambitious, adventurous, energetic and empathetic person. I have strong interpersonal skills, that enable me to openly and happily talk to anyone from any walk of life. It also enables me to confront and work through any issue that may arise from situations. I like to voice my opinion when I’m in a comfortable space, however I’m not stubborn, and listen to guidance. I'm looking for a tight knit community and a diverse job, where I can grow. I've also lived in England, so my english isn't too bad. (:</Typography>
            </Box>
    )
}