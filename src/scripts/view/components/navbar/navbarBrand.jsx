import React from "react";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
const navbarBrand = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <img
        className="logo-image"
        src={process.env.PUBLIC_URL + "/svg/Asset 3s.svg"}
        alt="Daulsa"
      />
      <Link to="/">
      <h1 className="logo-name">Daulsa</h1>
      </Link>
    </Box>
  );
};

export default navbarBrand;
