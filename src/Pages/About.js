import React from "react";
import Layout from "../components/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p:2,
          "& h4": {
            fontWeight: "bold",
            my:2,
            fontSize:"2rem",
          },
          "& p": {
            textAlign: "justify",
          },
        "@media (max-width:600px)":{
          mt:0,
          "& h4 ":{
            fontSize:"1.5rem",
          }
        }
        }}
      >
        <Typography variant="h4">Welcome to Indori Sawad</Typography>
        <p>
          Chappan Dukan (56 Shops) is a must-visit place for all foodies where
          you can find all street food, namkeens (Indian snacks), and other
          food/noon-food items !! This street is famous for delicious & cheap
          snacks and sweets of Indore !! Right from 6:00 AM everyday when the
          Indore's ubiquitous breakfast Pohaa is served at various shops, till
          late in the evenings (around 10:00 PM) !! This market is abuzz with a
          huge variety of items - you can have many types of snacks, chaat,
          sweets, foods, hotdog (banjos), momos, and hot & cold drinks such as
          coffees, teas, milkshakes, juices, etc., all at one place !!
        </p>
        <br />
        <p>
          Three of the famous Indian sweets makers of Indore - Agrawal Sweets,
          Madhuram Sweets, and Gangaur Sweets - have their big outlets here !!
          The mornings and days are business-as-usual, and evenings are
          happening and colourful as when youngsters, singles, couples, and
          families keep hopping from one food joint to the other, savouring
          their favourite foods !! Then, for the enjoyment of kids, there are
          various options including pony-rides, camel-rides, small swings,
          balloon shooting, etc., which keep changing from time to time !! There
          are a whole lot of convenience shops too, here !! You might wonder why
          has this place been named as Chappan Dukan, which literally means 56
          shops !! Originally, when the market started, there were actually 56
          shops here and thus the name !! However, as time passed by, some of
          the retailers sold their shops to the ones next-door, who wanted to
          make their shops bigger !! Even today, if you count the number of
          pillars between the shops, you'll actually see that there are exactly
          56 shops !! Now, the foodie & convenience market is not confined to
          just these shops on the main street, but has also extended in the area
          behind and around these original shops - the whole area being called
          as Chappan Dukan (56 Shops) !! Below is the list of some of the eating
          joints and Indian sweetmeat shops (mithai) present there: * FYI *
          Rollacosta * Cakes 365 * Rolls Mania * Pizza World * Jumbo King * Dosa
          Centre * Café Yummy * Tibb's Frankie * Johny Hot Dog * Agrawal Sweets
          * Gangour Sweets * TAB - Taste a Bite * Vijay Chaat House * New
          Chappan Bhog * Milap - the Paan Destination * Madhuram Sweets &
          Namkeen and many more........................ Adjoining or very close
          to Chappan Dukan (56 Shops) are the following hotels, restaurants,
          cafés: * Hotel Kanchan Tilak and its restaurants The Roof and
          Impression * Hotel Sapphire Star and its restaurant Taas Greens *
          Slice Square & Ice Balls * Udipi King Express * Mangosteen Café * Mama
          Loca * Mars * Alav Check out more on IndoreRocks.com for Indore's best
          restaurants, food festivals, offers, deals, hotels, events, cinemas,
          movies, attractions, places to visit, and much more !!
        </p>
      </Box>
    </Layout>
  );
};

export default About;
