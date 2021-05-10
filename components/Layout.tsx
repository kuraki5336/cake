import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Container from "@material-ui/core/Container";
import Cbreadcrumbs from "./breadcrumb";
import {
  AppBar,
  Button,
  createStyles,
  Grid,
  IconButton,
  makeStyles,
  Tab,
  Tabs,
} from "@material-ui/core";
import { useRouter } from "next/router";
import MenuIcon from "@material-ui/icons/Menu";

type Props = {
  children?: ReactNode | Element | Element[];
  title?: string;
};

const useStyles = makeStyles({
  nav: {
    height: "55px",
    backgroundColor: "#2697ed",
    boxShadow: "0 1px 13px rgb(0 ,0, 0 )",
    paddingTop: "2px",
  },
  white: {
    color: "#FFFFFF",
    border: "#FFFFFF 1px solid",
  },
  flex: {
    display: "flex",
    justifyContent: "flex-end",
  },
});

const Layout = ({ children, title = "This is the default title" }: Props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  let router = useRouter();
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        router.push("/");
        break;
      case 1:
        router.push("/about");
        break;
      case 2:
        router.push("/color");
        break;
      case 3:
        router.push("/login");
        break;
      default:
        break;
    }
  };

  const doLogin = () => router.push("/login");

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav className={classes.nav}>
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <IconButton aria-label="delete" disabled color="primary">
                <MenuIcon style={{ color: "#FFFFFF" }} />
              </IconButton>
            </Grid>
            <Grid item xs={4} className={classes.flex}>
              <Button className={classes.white} variant="outlined">
                qqqn
              </Button>
              <Button
                onClick={doLogin}
                className={classes.white}
                variant="outlined"
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </nav>
      </header>

      <Container maxWidth="lg">
        <>
          <Cbreadcrumbs></Cbreadcrumbs>
          {children}
        </>
      </Container>

      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </>
  );
};

export default Layout;
