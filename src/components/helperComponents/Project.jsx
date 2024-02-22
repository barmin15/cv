/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";

import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";
export function Project({
    project
}) {
    return <Box marginTop={3}>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" style={{
            textDecoration: 'none'
        }}>
            <Typography sx={{
               overflowWrap: 'break-word',
                fontSize: {
                    xs: 17,
                    md: 19
                },
                fontWeight: 'bold',
                color: colors().green,
                fontFamily: fonts().primary,
                margin: '12px 7px',
                '&:hover': {
                    color: colors().darkBrown,
                    cursor: 'pointer'
                }
            }}>
                {project.githubLink}
            </Typography>
        </a>
        <Typography sx={{
            overflowWrap: 'break-word',
            fontFamily: fonts().primary,
            fontSize: {
                xs: 15,
                md: 17
            }
        }}>
            {project.description}
            <br />
            <a href={project.viewLink} target="_blank" rel="noopener noreferrer" style={{
                textDecoration: 'none',
                color: colors().green
            }}>
                <Typography variant="spam" sx={{
                    fontFamily: fonts().primary,
                    margin: '12px 7px',
                    '&:hover': {
                        color: colors().darkBrown,
                        cursor: 'pointer'
                    }
                }}>
                    {project.viewLink}
                </Typography>
            </a>
        </Typography>
    </Box>;
}
