import { Box, Typography } from "@mui/material";
import StarItem from "./components/StarItem";

import SpaceManImage from "../../assets/imgs/space_man.png";
import EyeIcon from "../../assets/icons/eye.png";
import LikeIcon from "../../assets/icons/like.png";
import DescriptionIcon from "../../assets/icons/description.png";
import EtherIcon from "../../assets/icons/ether.png";

function PendingMotion() {
  return (
    <Box
      display="flex"
      gap={10}
      py={8}
      px={6}
      bgcolor="#9747FF"
      sx={{ flexDirection: { xs: "column", md: "row" } }}
    >
      <Box
        display="flex"
        flexDirection="column"
        sx={{ width: { xs: "100%", md: "50%" } }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="140px"
          height="36px"
          border="2px solid #000000"
          boxShadow="5px 5px 0px -2px #000000"
          bgcolor="#FFF"
        >
          <Typography
            variant="h6"
            fontWeight={700}
            fontSize={20}
            fontFamily="Montserrat Medium"
            textTransform="uppercase"
          >
            NFT Name
          </Typography>
        </Box>

        <Typography
          variant="h6"
          fontWeight={700}
          fontSize={16}
          fontFamily="Montserrat Medium"
          my={1.5}
        >
          Owned by :8FAFC6
        </Typography>

        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          border="2px solid #000000"
          boxShadow="4px 4px 0px -2px #000000"
          bgcolor="#FFF"
          p={0.5}
          my={1.5}
          sx={{ width: "max-content" }}
        >
          <Box display="flex" flexDirection="row" alignItems="center">
            <Box component="img" src={EyeIcon} height={14} alt="" />
            <Typography
              variant="h6"
              fontWeight={500}
              fontSize={14}
              color="#666666"
              ml={1}
            >
              262 views
            </Typography>
          </Box>
          <Box display="flex" flexDirection="row" alignItems="center" ml={2}>
            <Box component="img" src={LikeIcon} height={16} alt="" />
            <Typography
              variant="h6"
              fontWeight={500}
              fontSize={14}
              color="#666666"
              ml={1}
            >
              4 favorites
            </Typography>
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          border="2px solid #000000"
          boxShadow="5px 5px 0px -2px #000000"
          bgcolor="#FFF"
          py={1}
          px={2}
          mt={5}
          mb={3}
          sx={{ width: "max-content" }}
        >
          <Box
            component="img"
            src={DescriptionIcon}
            height={14}
            alt=""
            mr={2}
          />
          <Typography
            variant="h6"
            fontWeight={700}
            fontSize={20}
            fontFamily="Montserrat Medium"
          >
            Description
          </Typography>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
          border="2px solid #000000"
          boxShadow="5px 5px 0px -2px #000000"
          bgcolor="#FFF"
          p={1.5}
        >
          <Typography
            variant="h6"
            fontWeight={500}
            fontSize={14}
            fontFamily="Montserrat Medium"
            textTransform="uppercase"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas
            purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris
            rhoncus aenean vel elit scelerisque In egestas erat imperdiet sed
            euismod nisi porta lorem mollis Morbi tristique senectus et netus
          </Typography>
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          width="100%"
          border="2px solid #000000"
          boxShadow="5px 5px 0px -2px #000000"
          bgcolor="#FFF"
          mt={2}
          p={1.5}
        >
          <Typography
            variant="h6"
            fontWeight={700}
            fontSize={16}
            fontFamily="Montserrat Medium"
          >
            Current Price
          </Typography>
          <Box component="img" src={EtherIcon} height={14} alt="" ml={2} />
          <Typography variant="h6" fontWeight={400} fontSize={14} ml={1.5}>
            0.078
          </Typography>
          <Typography
            variant="h6"
            fontWeight={700}
            fontSize={16}
            fontFamily="Montserrat Medium"
            ml={2}
          >
            ETH
          </Typography>
          <Typography
            variant="h6"
            fontWeight={400}
            fontSize={16}
            ml={1.5}
            color="#666"
          >
            178 $
          </Typography>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
          border="2px solid #000000"
          boxShadow="5px 5px 0px -2px #000000"
          bgcolor="#FFC700"
          mt={2}
          p={1.5}
          sx={{ cursor: "pointer" }}
        >
          <Typography
            variant="h6"
            fontWeight={700}
            fontSize={24}
            fontFamily="Montserrat Medium"
          >
            Exit
          </Typography>
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        py={4}
        px={2}
        border="2px solid #000000"
        boxShadow="5px 5px 0px -2px #000000"
        bgcolor="#FFF"
        sx={{ width: { xs: "100%", md: "50%" } }}
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap={1}
        >
          <Typography
            variant="h6"
            fontWeight={700}
            fontSize={20}
            fontFamily="Montserrat Medium"
            textTransform="uppercase"
          >
            You won
          </Typography>
          <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
            <StarItem status={true} />
            <StarItem status={true} />
            <StarItem status={true} />
            <StarItem status={false} />
            <StarItem status={false} />
          </Box>
        </Box>

        <Typography variant="h6" fontWeight={500} fontSize={18} my={1.5}>
          Space man NFT
        </Typography>

        <Box width="100%" height={0} borderTop="2px solid #666" my={2} />

        <Box display="flex" mt={2} px={1}>
          <Box component="img" src={SpaceManImage} width="100%" alt="" />
        </Box>
      </Box>
    </Box>
  );
}

export default PendingMotion;
