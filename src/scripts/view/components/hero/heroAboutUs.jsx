import React from "react";
import AboutLogo from "../aboutLogo/aboutLogo";
import { Container, Box } from "@mui/system";
import { Typography } from "@mui/material";

export default function HeroAboutUs() {
  return (
    <Container
      sx={{
        "&.MuiContainer-root": {
          padding: "0",
        },
        maxWidth: {
          xs: "100%",
          lg: "100%",
          xl: "1200px",
        },
        minHeight: "400px",
        margin: "5rem auto",
        backgroundColor: "#F5F5F5",
      }}
    >
      <Box
        sx={{
          width: {
            xs: "100%",
            lg: "1200px",
          },
          height: "100%",
          margin: "0 auto",
          padding: {
            xs: "40px 24px",
            md: "40px 80px",
          },
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          justifyContent: "space-between",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Typography
            variant="h3"
            mb={2}
            sx={{
              fontFamily: "Manrope",
              fontSize: {
                xs: "32px",
                md: "40px",
              },
              fontWeight: "800",
              color: "#2E582C",
              lineHeight: "52px",
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
            Tentang Kami
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "14px",
                md: "16px",
              },
              fontWeight: "400",
              color: "#7D7D7D",
              lineHeight: "24px",
              marginBottom: "32px",
              fontFamily: "Manrope",
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
            Daulsa merupakan aplikasi berbasis web yang dirancang untuk
            memudahkan pengelolaan sampah menjadi uang, aplikasi ini sangat
            bermanfaat dan mudah digunakan. Seiring dengan perkembangan
            teknologi, kami mengupayakan inovasi dan fasilitasi masyarakat,
            tidak hanya pada daur ulang sampah, kami juga menyediakan cara-cara
            mengatasi sampah, edukasi tentang jenis-jenis sampah dan informasi
            bermanfaat yang berkaitan dengan daur ulang sampah. agar lingkungan
            bersih dan mendapatkan keuntungan juga.
          </Typography>
        </Box>
        <AboutLogo />
      </Box>
    </Container>
  );
}
