import { Box, styled, Typography } from "@mui/material";
import React from "react";
import Cards from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Container } from "@mui/system";

const Card = () => {
  const GuidesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    width: "100%",
    gap: "24px",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0",
      flexDirection: "column",
    },
  }));

  const GuideBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "24px",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "5rem",
        padding: {
          xs: "0 24px",
          md: "0 80px",
        },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: "35px",
          fontWeight: "bold",
          color: "#2E582C",
          my: 3,
          padding: "12px",
          // borderTop: "3px solid #CFFE64",
        }}
      >
        Tentang Saya
      </Typography>

      <GuidesBox>
        <GuideBox>
          <Cards sx={{ maxHeight: 445 }}>
            <CardMedia
              component="img"
              height="340"
              image={process.env.PUBLIC_URL + "/images/56419075 .jpg"}
              alt="Sinatra"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Sinatra Kusuma
              </Typography>
              <Typography variant="body2" color="text.secondary">
                4IA02 ~ 56419075
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Universitas Gunadarma | Teknik Informatika
              </Typography>
            </CardContent>
          </Cards>

          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></Box>
        </GuideBox>
      </GuidesBox>
    </Container>
  );
};

export default Card;
