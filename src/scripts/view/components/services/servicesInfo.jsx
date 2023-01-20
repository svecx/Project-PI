import React from "react";
import { Box, Container } from "@mui/system";
import HeadingSectionText from "../headingSectionText/headingSectionText";
import CardInfo from "../Info/cardServicesInfo";

const servicesInfo = () => {
  return (
    <Container
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "5rem auto",
        minHeight: "400px",
        "&.MuiContainer-root": {
          padding: {
            xs: "40px 24px",
            md: "40px 80px",
          },
        },
      }}
    >
      <HeadingSectionText
        headingText="Layanan Kami"
        helperText="Berikut merupakan layanan yang tersedia di website kami"
      />

      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <CardInfo
          number="01."
          title="Bank Sampah"
          content="Merupakan fitur yang digunakan dalam pengelolaan sampah anda. Bank sampah merupakan konsep pengumpulan sampah kering dan dipilah serta memiliki manajemen layaknya perbankan tapi yang ditabung bukan uang melainkan sampah"
        />
        <CardInfo
          number="02."
          title="Pick-Up Sampah"
          content="Kenyamanan pengguna adalah hal yang paling penting bagi kami. Anda tidak harus datang sendiri ke TPA. Cukup dengan aplikasi, tim kami akan langsung mengambil sampah Anda."
        />
        <CardInfo
          number="03."
          title="Transaksi Secara Digital"
          content="Transaksi  dilakukan melalui metode transfer, jadi memudahkan anda dalam menerima keuntungan dari transaksi tukar sampah."
        />
        <CardInfo
          number="04."
          title="Bantuan Daur Ulang Sampah"
          content="Kami juga menawarkan informasi tentang daur ulang sampah menjadi produk yang bermanfaat."
        />
      </Box>
    </Container>
  );
};

export default servicesInfo;
