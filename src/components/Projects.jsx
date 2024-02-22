import { Project } from './helperComponents/Project';
import { Box, Divider, Typography } from "@mui/material";

import { colors } from "../theme/colors";
import { fonts } from "../theme/fonts";
export default function Projects() {

    const projects = [
        {
            githubLink: 'https://github.com/barmin15/k-osz',
            description: `This is my pet project, that I'm doing for a friend. My goal is to learn more about design, and to create a beautiful website that feels alive. For now, I'm concentrating on the client side, using React, Material UI and other libraries. You can view it here`,
            viewLink: 'https://glowing-treacle-d1fe7d.netlify.app/'
        },
        {
            githubLink: 'https://github.com/barmin15/vilagszep-mesetar',
            description: `This is my latest work. I used postgreSQL, Spring, Reactjs and material UI. It's a Hungarian website where you can view stories. This was my first project, where I had to communicate with the clients. The most difficult part was the design and the responsiveness of the website. I had to somehow convey a database and it's interactions through a simple UI.`,
            viewLink: null
        }
    ]
    return (
        <Box
            sx={{ width: '90vw', margin: 'auto', marginTop: 12, marginBottom: 12, paddingBottom: 7, textAlign: 'center' }}
        >
            <Typography variant="h4" sx={{ textAlign: 'center', paddingTop: 7, color: colors().darkBrown, fontFamily: fonts().primary }}>Some of my Projects</Typography>
            <Divider></Divider>
            {projects?.map((project, index) => (
                    <Project project={project}  key={index}  />
                ))}
        </Box>
    )
}