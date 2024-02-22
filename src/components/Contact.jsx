/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import { colors } from "../theme/colors";
import { fonts } from "../theme/fonts";

export default function Contact({ contactRef }) {
    return (
        <Box ref={contactRef} display="flex" justifyContent="center" alignItems="center" flexDirection="column" paddingBottom={3} paddingTop={3}>
            <Box display="flex" alignItems="center" paddingTop={1}>
                <LocalPhoneIcon sx={{ marginRight: '0.5rem', color: colors().white,  fontSize: {xs: 16, sm: 18}}} />
                <Typography sx={{  overflowWrap: 'break-word', color: colors().white, fontSize: {xs: 16, sm: 18}, fontFamily: fonts().primary }}>
                    06 20 323 7307
                </Typography>
            </Box>

            <Box display="flex" alignItems="center" paddingTop={1}>
                <EmailIcon sx={{ marginRight: '0.5rem', color: colors().white,  fontSize: {xs: 16, sm: 18} }} />
                <Typography sx={{  overflowWrap: 'break-word', color: colors().white, fontSize: {xs: 16, sm: 18}, fontFamily: fonts().primary}}>
                    bokorarmin4@gmail.com
                </Typography>
            </Box>

            <Box display="flex" alignItems="center" paddingTop={1}>
                <GitHubIcon sx={{ marginRight: '0.5rem', color: colors().white,  fontSize: {xs: 16, sm: 18} }} />
                <a href="https://github.com/barmin15" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <Typography sx={{  overflowWrap: 'break-word', color: colors().white, fontSize: {xs: 16, sm: 18}, fontFamily: fonts().primary }}>
                        https://github.com/barmin15
                    </Typography>
                </a>
            </Box>

            <Box display="flex" alignItems="center" paddingTop={1}>
                <LinkedInIcon sx={{ marginRight: '0.5rem', color: colors().white,  fontSize: {xs: 16, sm: 18} }} />
                <a href="https://www.linkedin.com/in/barmin/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <Typography sx={{  overflowWrap: 'break-word', color: colors().white, fontSize: {xs: 16, sm: 18}, fontFamily: fonts().primary}}>
                        https://www.linkedin.com/in/barmin/
                    </Typography>
                </a>
            </Box>
        </Box>
    )
}
