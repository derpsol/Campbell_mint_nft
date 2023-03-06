import { Box, Typography } from "@mui/material";

import StarIcon from "../../../assets/icons/star.png";
import StarYellowIcon from "../../../assets/icons/star_yellow.png";

function StarItem({ status }: { status: boolean }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width={22}
      height={22}
      borderRadius={10}
      bgcolor="#000"
    >
      {status ? (
        <Box
          component="img"
          src={StarYellowIcon}
          width={12}
          height={12}
          alt=""
        />
      ) : (
        <Box component="img" src={StarIcon} width={12} height={12} alt="" />
      )}
    </Box>
  );
}

export default StarItem;
