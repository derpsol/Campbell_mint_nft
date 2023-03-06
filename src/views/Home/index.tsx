import { Box, Grid, Typography } from "@mui/material";
import useResponsive from "../../hooks/useResponsive";

import ListIcon from "./components/ListIcon";
import ListItem from "./components/ListItem";
import NftCard from "./components/NftCard";
import NFTItem from "./components/NFTItem";

import QrcodeImage from "../../assets/imgs/qrcode.png";
import NFTImage from "../../assets/imgs/rabbit.png";
import NFT1Image from "../../assets/imgs/nft_1.png";
import NFT2Image from "../../assets/imgs/nft_2.png";
import NFT3Image from "../../assets/imgs/nft_3.png";
import NFT4Image from "../../assets/imgs/nft_4.png";
import NFT5Image from "../../assets/imgs/nft_5.png";
import NFT6Image from "../../assets/imgs/nft_6.png";
import OTHER_NFTS from "../../assets/imgs/other_nfts.png";
import QRScanImage from "../../assets/icons/scan_qr.png";
import WaitingImage from "../../assets/icons/waiting.png";
import Connect2MetaImage from "../../assets/icons/connect_meta.png";
import ClockImage from "../../assets/icons/clock.png";

function Home() {
  const isMobile = useResponsive("down", "sm");
  return (
    <Box display="flex" flexDirection="column" width="100%">
      <Box display="flex">
        <Box
          display="flex"
          width="100%"
          gap={2}
          py={2}
          sx={{
            flexDirection: { xs: "column", sm: "row", md: "column" },
          }}
        >
          <Box
            display="flex"
            gap={2}
            justifyContent="space-between"
            sx={{
              width: { xs: "100%", sm: "50%", md: "100%" },
              flexDirection: { xs: "column", md: "row" },
              flexGrow: { xs: 1, sm: 0, md: 1 },
              flexShrink: { xs: 0, sm: 1, md: 0 },
            }}
          >
            <Box
              display="flex"
              flexDirection="column"
              sx={{ width: { xs: "100%", md: "50%" }, gap: { xs: 1.5, md: 2 } }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                p={1}
                border="2px solid #000000"
                boxShadow="5px 5px 0px -2px #000000"
                lineHeight="36px"
                textAlign="center"
                fontFamily="Montserrat Medium"
                sx={{ width: "max-content", backgroundColor: "#FFFFFF" }}
              >
                <Typography
                  variant="h6"
                  fontWeight={700}
                  sx={{ fontSize: { xs: 12, md: 16 } }}
                >
                  Scan QR Code
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                p="24px 24px"
                boxSizing="border-box"
                width="100%"
                border="2px solid #000000"
                borderRadius="12px"
                sx={{
                  backgroundColor: "#FFFFFF",
                  boxShadow: {
                    xs: "2px 2px 0px 2px #000000",
                    md: "4px 4px 0px 4px #000000",
                  },
                }}
              >
                <Box
                  component="img"
                  src={QrcodeImage}
                  width="120px"
                  height="120px"
                  alt=""
                />
              </Box>
            </Box>
            <Box
              display="flex"
              position="relative"
              boxSizing="border-box"
              mt={1}
              px={2}
              pt="45px"
              pb="20px"
              border="2px solid #000000"
              sx={{
                width: { xs: "100%", md: "50%" },
                marginTop: { xs: 0, md: "40px" },
                backgroundColor: "#FFF",
                boxShadow: {
                  xs: "2px 2px 0px 2px #000000",
                  md: "4px 4px 0px 4px #000000",
                },
              }}
            >
              <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                sx={{ gap: { xs: 1, md: 2 } }}
              >
                <ListItem
                  icon={
                    <ListIcon icon={QRScanImage} backgroundColor="#1199FF" />
                  }
                  text="Scan qr code"
                />
                <ListItem
                  icon={
                    <ListIcon
                      icon={Connect2MetaImage}
                      backgroundColor="#FFCB11"
                    />
                  }
                  text="Connect to meta mask wallet"
                />
                <ListItem
                  icon={
                    <ListIcon icon={ClockImage} backgroundColor="#11FF1B" />
                  }
                  text="Wating for win NFT"
                />
                <ListItem
                  icon={
                    <ListIcon icon={WaitingImage} backgroundColor="#FF9211" />
                  }
                  text="Wating to ready win NFT"
                />
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                position="absolute"
                boxSizing="border-box"
                left={-2}
                top={-7}
                width="75px"
                height="30px"
                border="2px solid #000000"
                boxShadow="5px 5px 0px -2px #000000"
                sx={{ backgroundColor: "#FFCB11" }}
              >
                <Typography variant="h6" fontWeight={700} fontSize={12}>
                  User Flow
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            sx={{
              width: { xs: "100%", sm: "50%", md: "100%" },
              flexGrow: { xs: 1, md: 0 },
              gap: { xs: 1.5, md: 2 },
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              p={1}
              border="2px solid #000000"
              boxShadow="5px 5px 0px -2px #000000"
              lineHeight="36px"
              textAlign="center"
              fontFamily="Montserrat Medium"
              sx={{ width: "max-content", backgroundColor: "#FFFFFF" }}
            >
              <Typography
                variant="h6"
                fontWeight={700}
                sx={{ fontSize: { xs: 12, md: 16 } }}
              >
                Top 8 Expensive NFTS
              </Typography>
            </Box>
            <Box
              display="flex"
              flexWrap="wrap"
              flexDirection="row"
              justifyContent="space-between"
              sx={{ gap: { xs: 1.5, md: 2 } }}
            >
              <NftCard title="Retro NFT" price={178} img={NFTImage} />
              <NftCard title="Retro NFT" price={178} img={NFTImage} />
              <NftCard title="Retro NFT" price={178} img={NFTImage} />
              <NftCard title="Retro NFT" price={178} img={NFTImage} />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        position="relative"
        display="flex"
        flexDirection="column"
        border="2px solid #000000"
        bgcolor="#45009F"
        sx={{
          gap: { xs: 1, sm: 2 },
          mt: { xs: 2, sm: 3 },
          mb: { xs: 3, sm: 5 },
          pt: { xs: 7, sm: 10 },
          pl: { xs: 1, sm: 2 },
          pr: { xs: 2, sm: 3 },
          pb: { xs: 2, sm: 3 },
          boxShadow: {
            xs: "2px 2px 0px 2px #000000",
            md: "4px 4px 0px 4px #000000",
          },
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          sx={{ gap: { xs: 1, md: 3 } }}
        >
          <Box
            alignItems="center"
            justifyContent="center"
            right={16}
            top={-2}
            zIndex={1}
            maxWidth={360}
            p={1}
            mb={1}
            bgcolor="#1199FF"
            border="2px solid #000000"
            boxShadow="6px 6px 0px -2px #000000"
            sx={{
              display: { xs: "flex", md: "none" },
            }}
          >
            <Typography
              variant="h6"
              fontWeight={700}
              color="#FFF"
              textTransform="uppercase"
              sx={{
                textAlign: { xs: "center", md: "left" },
                fontSize: { xs: 12, md: 16 },
              }}
            >
              (A banner containing all the other NFTs)
            </Typography>
          </Box>
          <Grid container spacing={isMobile ? 1 : 3}>
            <Grid item xs={12} md={6}>
              <NFTItem img={NFT2Image} />
            </Grid>
            <Grid item xs={6} md={3}>
              <NFTItem img={NFT3Image} />
            </Grid>
            <Grid item xs={6} md={3}>
              <NFTItem img={NFT1Image} />
            </Grid>
          </Grid>
          <Grid container spacing={isMobile ? 1 : 3}>
            <Grid item xs={12} md={6}>
              <NFTItem img={NFT4Image} />
            </Grid>
            <Grid item xs={6} md={3}>
              <NFTItem img={NFT5Image} />
            </Grid>
            <Grid item xs={6} md={3}>
              <NFTItem img={NFT6Image} />
            </Grid>
          </Grid>
        </Box>
        <Box
          position="absolute"
          zIndex={1}
          bgcolor="#FFC700"
          border="2px solid #000000"
          boxShadow="6px 6px 0px -2px #000000"
          sx={{
            left: { xs: 16, md: 24 },
            top: { xs: -1, md: -2 },
            width: {
              xs: 160,
              md: 240,
            },
            height: {
              xs: 40,
              md: 60,
            },
          }}
        />
        <Box
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
          zIndex={2}
          bgcolor="#FFF"
          border="2px solid #000000"
          boxShadow="4px 4px 0px -2px #000000"
          sx={{
            left: { xs: 12, md: 16 },
            top: { xs: -6, md: -10 },
            width: {
              xs: 160,
              md: 240,
            },
            height: {
              xs: 40,
              md: 60,
            },
          }}
        >
          <Box
            component="img"
            src={OTHER_NFTS}
            alt=""
            sx={{ width: { xs: "140px", md: "220px" } }}
          />
        </Box>
        <Box
          position="absolute"
          alignItems="center"
          justifyContent="center"
          right={16}
          top={-2}
          height={35}
          zIndex={1}
          maxWidth={420}
          px={1}
          bgcolor="#1199FF"
          border="2px solid #000000"
          boxShadow="6px 6px 0px -2px #000000"
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          <Typography
            variant="h6"
            fontWeight={700}
            fontSize={16}
            color="#FFF"
            textTransform="uppercase"
          >
            (A banner containing all the other NFTs)
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
