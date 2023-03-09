import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import LeftIndentIcon from "../../assets/icons/leftindent.svg";
import RightIndentIcon from "../../assets/icons/rightindent.svg";

import useResponsive from "../../hooks/useResponsive";
import ConnectMenu from './connect-button'
import connectButton from "../Connect/ConnectButton";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const useStyles = makeStyles({
  appBar: {
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: "16px",
    paddingRight: "16px",
    background:
      "#222222 !important",
    backdropFilter: "none",
    zIndex: "1300!important",
  },
  dappTopbar: {
    width: "100%",
    height: "80px",
  },
  addressText: {
    color: "white",
    paddingLeft: "8px",
  },
  titleText: {
    fontFamily: "Montserrat Bold",
    color: "white",
    paddingRight: "8px",
  },
  brandinglogo: {
    marginLeft: "10px",
    display: "flex",
    flexGrow: "1",
    justifyContent: "space-between",
  },
  Iconpanel: {
    display: "flex",
    justifyContent: "space-between",
  },
});

interface IHeader {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

interface IMenuBoard {
  icon: string;
  menuTitle: string;
  menuText: string;
  width: string;
  color: string;
}


function Header({ mobileOpen, handleDrawerToggle }: IHeader) { 
  const isDesktop = useResponsive("up", "md");
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar} elevation={0}>
      <Toolbar disableGutters className={classes.dappTopbar}>
        <IconButton onClick={handleDrawerToggle}>
          {mobileOpen && (
            <img src={LeftIndentIcon} width={30} height={30} alt="" />
          )}
          {!mobileOpen && (
            <img src={RightIndentIcon} width={30} height={30} alt="" />
          )}
        </IconButton>
        <Box
          sx={{
            display: "flex",
            flexGrow: "1",
            justifyContent: "right",
            alignItems: "center",
          }}
        >          
          {isDesktop && (
            <Typography
              className={classes.titleText}
              sx={{
                fontFamily: "Montserrat Bold",
                fontSize: "24px",
                mr: '20px',
              }}
            >
              Campbell
            </Typography>
          )}
          <ConnectButton/>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
