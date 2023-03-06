import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import useResponsive from "../../hooks/useResponsive";
import Header from "../../components/Header";
import Drawer from "../../components/Drawer";
import MobileDrawer from "../../components/Drawer/mobile-drawer";

const backgroundStyle = {
  flexGrow: 1,
  padding: "0 16px",
  display: "flex",
  minHeight: "100vh",
  backgroundColor: "#9747FF",
  // height: "100vh",
  backgroundSize: "cover",
};

const useStyles = makeStyles((isMobile) => ({
  drawer: {
    "@media (min-width: 960px)": {
      width: 240,
      flexShrink: 0,
    },
  },
  content: {
    transition: "margin 969ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
    backgroundColor: "transparent",
    marginLeft: isMobile ? 240 : 256,
    marginRight: isMobile ? 8 : 16,
    marginTop: 80,
    width: "100%",
  },
  contentShift: {
    transition: "margin 969ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
    marginLeft: 100,
  },
  contentMobile: {
    transition: "margin 969ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
    marginLeft: isMobile ? 0 : 10,
  },
}));

interface IViewBase {
  children: React.ReactNode;
}

function ViewBase({ children }: IViewBase) {
  const isMobile = useResponsive("down", "md");
  const classes = useStyles(isMobile);
  const [mobileOpen, setMobileOpen] = useState(true);
  const isSmallerScreen = useMediaQuery("(max-width: 960px)");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <Box style={backgroundStyle}>
      <Header mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      <Box>
        {!isSmallerScreen && <Drawer mobileOpen={mobileOpen} />}
        {isSmallerScreen && (
          <MobileDrawer
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
            isSmallerScreen={isSmallerScreen}
          />
        )}
      </Box>
      <div
        className={`${classes.content} ${!mobileOpen && classes.contentShift} ${
          isSmallerScreen && classes.contentMobile
        }`}
      >
        {children}
      </div>
    </Box>
  );
}

export default ViewBase;
