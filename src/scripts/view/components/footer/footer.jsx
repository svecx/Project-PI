import React from "react";
import { styled } from "@mui/material";
import { Box, Container } from "@mui/system";
import FooterLink from "./footerLink";
import NavbarBrand from "../navbar/navbarBrand";
import SocialMediaFooter from "./socialMediaFooter";

export default function Footer() {
  const FooterTextLink = styled("p")(() => ({
    fontWeight: 400,
    fontSize: "14px",
  }));

  return (
    <Container
      component="footer"
      sx={{
        maxWidth: {
          xs: "100%",
          lg: "100%",
          xl: "1200px",
        },
        padding: {
          xs: "32px 24px",
          md: "32px 80px",
        },
        backgroundColor: "#2E582C",
        color: "#FFFFFF",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        alignItems: "flex-start",
        gap: {
          xs: "32px",
          md: "24px",
        },
      }}
    >
      <Box
        sx={{
          width: {
            xs: "100%",
            md: "40%",
          },
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <NavbarBrand />
        <FooterTextLink
          sx={{
            fontFamily: "manrope",
            fontWeight: "300",
            fontSize: "14px",
            color: "#E7E7E7",
            lineHeight: "24px",
          }}
        >
          Daulsa adalah platform bank sampah digital untuk membantu dan
          memudahkan masyarakat dalam pengelolaan sampah.
        </FooterTextLink>

      </Box>
      <FooterLink />
      <SocialMediaFooter />
    </Container>
  );
}
