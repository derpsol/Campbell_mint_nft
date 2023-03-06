import { ReactNode } from "react";
import { Box, Typography } from "@mui/material";

interface IListItem {
  icon: ReactNode;
  text: string;
}

function ListItem(props: IListItem) {
  const { icon, text } = props;
  return (
    <Box display="flex" flexDirection="row" alignItems="center">
      {icon && icon}
      <Typography
        fontWeight={600}
        fontSize={10}
        textTransform="uppercase"
        ml={1.5}
      >
        {text}
      </Typography>
    </Box>
  );
}

export default ListItem;
