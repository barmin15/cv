import { Box, Divider, Typography, useMediaQuery } from "@mui/material";

import { IoLogoJavascript } from "react-icons/io5";
import { FaGitAlt, FaJava } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaDocker } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { colors } from "../theme/colors";
import { fonts } from "../theme/fonts";

export default function Skills() {
    const isMobile = useMediaQuery("(max-width:600px)");

    // Array of icon components
    const icons = [
        IoLogoJavascript,
        FaJava,
        FaNode,
        FaReact,
        SiSpringboot,
        SiMongodb,
        SiMui,
        IoLogoCss3,
        FaHtml5,
        BiLogoPostgresql,
        FaDocker,
        FaGithub,
        FaGitAlt,
    ];

    return (
        <Box
            sx={{width: '90vw', margin: 'auto', marginTop: 12, marginBottom: 12, paddingBottom: 7 }}
        >
            <Typography variant="h4" sx={{ textAlign: 'center', paddingTop: 7, color: colors().darkBrown, fontFamily: fonts().primary }}>Hard Skills</Typography>
            <Divider></Divider>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: isMobile ? 'wrap' : 'nowrap',
                    paddingTop: 5,
                }}
            >
                {icons.map((Icon, index) => (
                    <Icon
                        key={index}
                        style={{
                            color: colors().darkBrown,
                            fontSize: isMobile ? '3rem' : '3.4rem',
                            margin: 10,
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
}