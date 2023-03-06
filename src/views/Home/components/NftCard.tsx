import { Box, Typography } from "@mui/material";

import EtherImage from "../../../assets/icons/ether.png";

interface INftCard {
  title: string;
  price: number;
  img: string;
}

function NftCard(props: INftCard) {
  const { title, price, img } = props;
  return (
    <Box
      display="flex"
      flexDirection="column"
      boxSizing="border-box"
      border="2px solid #000000"
      borderRadius="12px"
      sx={{
        width: {
          xs: `calc(50% - ${8}px)`,
          sm: `calc(50% - ${8}px)`,
          md: `calc(25% - ${16}px)`,
        },
        padding: { xs: "6px", md: "12px" },
        backgroundColor: "#FFFFFF",
        boxShadow: {
          xs: "2px 2px 0px 2px #000000",
          md: "4px 4px 0px 4px #000000",
        },
      }}
    >
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography
          variant="h6"
          fontWeight={600}
          fontSize={10}
          textTransform="uppercase"
        >
          {title}
        </Typography>
        <Box display="flex" flexDirection="row" alignItems="center">
          <Box
            component="img"
            src={EtherImage}
            width="12px"
            height="12px"
            alt=""
            mr={1}
          />
          <Typography variant="h6" fontWeight={600} fontSize={10}>
            {price.toString()} $
          </Typography>
        </Box>
      </Box>
      <Box
        component="img"
        src={img}
        width="100%"
        alt=""
        mt={1.5}
        boxSizing="border-box"
        borderRadius="12px"
        sx={{
          border: { xs: "2px solid #000000", md: "4px solid #000000" },
        }}
      />
    </Box>
  );
}

export default NftCard;
