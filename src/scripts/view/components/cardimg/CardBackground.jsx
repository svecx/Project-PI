// import { Box } from "@mui/material";
import React from "react";
import "./cardbackground.scss";
import Cardimg from "./Cardimg";
import { Container, Box } from "@mui/system";
import { Link } from "react-router-dom";
import HeadingSectionText from "../headingSectionText/headingSectionText";

const CardBackground = () => {
  return (
    <Container
      sx={{
        width: "100%",
        minHeight: "400px",
        padding: {
          xs: "40px 24px",
          md: "40px 80px",
        },
        margin: "5rem auto",
      }}
    >
      <HeadingSectionText headingText="Hasil Daur Ulang Sampah" />
      <Container
        className="hero-section"
        sx={{
          "&.MuiContainer-root": {
            padding: "0",
          },
        }}
      >
        <Box className="carding-grid">
          <Link className="carding" href="#">
            <Cardimg backgroundImage=" url(./images/d.jpg)" />
            <Box className="carding__content">
              <h3 className="carding__heading">Cangkir</h3>
            </Box>
          </Link>
          <Link className="carding" href="#">
            <Cardimg backgroundImage=" url(./images/e.jpg)" />
            <Box className="carding__content">
              <h3 className="carding__heading">Vas</h3>
            </Box>
          </Link>
          <Link className="carding" href="#">
            <Cardimg backgroundImage=" url(./images/f.jpg)" />
            <Box className="carding__content">
              <h3 className="carding__heading">Dekorasi</h3>
            </Box>
          </Link>
          <Link className="carding" href="#">
            <Cardimg backgroundImage=" url(./images/g.jpg)" />
            <Box className="carding__content">
              <h3 className="carding__heading">Piring</h3>
            </Box>
          </Link>
          <Link className="carding" href="#">
            <Cardimg backgroundImage=" url(./images/h.jpg)" />
            <Box className="carding__content">
              <h3 className="carding__heading">Hiasan</h3>
            </Box>
          </Link>
          <Link className="carding" href="#">
            <Cardimg backgroundImage=" url(./images/i.jpg)" />
            <Box className="carding__content">
              <h3 className="carding__heading">Totebag</h3>
            </Box>
          </Link>
          <Link className="carding" href="#">
            <Cardimg backgroundImage=" url(./images/l.jpg)" />
            <Box className="carding__content">
              <h3 className="carding__heading">Gelas</h3>
            </Box>
          </Link>
          <Link className="carding" href="#">
            <Cardimg backgroundImage=" url(./images/k.jpg)" />

            <Box className="carding__content">
              <h3 className="carding__heading">Ornamen</h3>
            </Box>
          </Link>
        </Box>
      </Container>
    </Container>
  );
};

export default CardBackground;
