import { Box } from "@mui/material";

interface IListIcon {
  icon: string | undefined;
  backgroundColor: string;
  size?: number;
}

function ListIcon(props: IListIcon) {
  const { icon, backgroundColor, size } = props;
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width={size ? `${size * 1.6}px` : "16px"}
      height={size ? `${size * 1.6}px` : "16px"}
      borderRadius="999px"
      border="1px solid #000000"
      sx={{ backgroundColor: backgroundColor }}
    >
      <Box
        component="img"
        src={icon}
        width={size ? `${size}px` : "10px"}
        height={size ? `${size}px` : "10px"}
        alt=""
      />
    </Box>
  );
}

export default ListIcon;
