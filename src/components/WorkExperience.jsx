/* eslint-disable react/prop-types */
import { Box, Divider, Typography } from "@mui/material";

import { colors } from "../theme/colors";
import { fonts } from "../theme/fonts";

export default function WorkExperience({ resumeRef }) {

    const workExperiences = [
        { company: 'Világszép Alapítvány', title: 'Full-Stack Developer', when: '2024-2024' },
        { company: 'Various Organizations', title: 'Event Photographer', when: '2021-2024' },
        { company: 'Flashback Photo Studio', title: 'Event Photographer', when: '2020-2021' },
    ]


    return (
        <Box ref={resumeRef} sx={{width: '80vw', margin: 'auto', marginTop: 12, marginBottom: 12, paddingBottom: 7 }}>
            <Typography variant="h4" sx={{textAlign: 'center', paddingTop: 7, color: colors().darkBrown, fontFamily: fonts().primary }}>Work Experience</Typography>
            <Divider></Divider>
            {workExperiences.map((work, index) => (     
                    <Typography key={index} sx={{ paddingTop: 2, textAlign: 'center',color: colors().darkBrown, fontSize: {xs: 16, sm: 18}, fontFamily: fonts().primary}}>{work.company} - {work.title}  {work.when}</Typography>

            ))}
        </Box>
    )
}