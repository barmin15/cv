/* eslint-disable react/prop-types */
import { Box } from "@mui/material";

export default function FullWidthLayout({display, bgcolor}){
return <Box sx={{width: '100vw'}} bgcolor={bgcolor}>{display}</Box>;
}