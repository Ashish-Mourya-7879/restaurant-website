import React from "react";
import Layout from "../components/Layout";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
const Contact = () => {
  return (
    <Layout>
      <Box sx={{my:5,ml:10,"& h4":{fontWeight:'bold',mb:2}}}>
        <Typography variant="h4">Contact of Indori Sawad</Typography>
        <p>
          Through our unparalleled reach to the city’s youth, Indore Rocks
          provides advertisers maximum return on investment by taking their
          messages directly to the target audience, through a number of
          platforms favoured by the youth !! 
        </p>
      </Box>
      <Box sx={{m:3, width: "600px", ml: 10,"@media (max-width:600px)":{
        width:'300px',
      }}}>
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:'black',color:'white',}}
                align="center">
                  Contact Detail
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <HelpCenterIcon  sx={{color:'silver',pt: 1,}}/> 1800-00-0000 (toll free)
                </TableCell>
                
              </TableRow>
              <TableRow>
                <TableCell>
                  <EmailIcon  sx={{color:'skyblue',pt: 1,}}/> ashishmourya7879@gmail.com
                </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                  <CallIcon sx={{color:'blue',pt: 1,}}/>917870729128
                </TableCell>
                </TableRow>
            </TableBody>
          </Table>

        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
