import { ReactNode } from "react";
import { Box } from "@mui/material";

interface INFTItem {
  img: string;
}

function NFTItem(props: INFTItem) {
  const { img } = props;
  return (
    <Box
      component="img"
      src={img}
      width="100%"
      alt=""
      boxSizing="border-box"
      border="2px solid #000000"
      sx={{
        boxShadow: {
          xs: "2px 2px 0px 2px #000000",
          md: "4px 4px 0px 4px #000000",
        },
      }}
    />
  );
}

export default NFTItem;
