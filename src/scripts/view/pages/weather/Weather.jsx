import React from "react";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import Cuaca from "./SearchPage";

import { Container } from "@mui/system";

export default function WasteBank() {
  return (
    <div className="container">
      <Navbar />
      <Container
        component="main"
        sx={{
          "&.MuiContainer-root": {
            padding: "0",
          },
          maxWidth: {
            xs: "100%",
            lg: "100%",
            xl: "1200px",
          },
        }}
      >
       <Cuaca/>
      </Container>
      <Footer />
    </div>
  );
}
