import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Container from "@material-ui/core/Container";
import Cbreadcrumbs from "./breadcrumb";
import { AppBar, createStyles, makeStyles, Tab, Tabs } from "@material-ui/core";
import { useRouter } from "next/router";

type Props = {
  children?: ReactNode | Element | Element[];
  title?: string;
};

const useStyles = makeStyles({
  nav: {
    height: "55px",
    backgroundColor: "#2697ed",
    boxShadow: "0 1px 13px rgb(0 ,0, 0 )",
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
        // history.push("/example");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav className={classes.nav}>
          {/* <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab label="Home" />
              <Tab label="List" />
              <Tab label="Info" />
            </Tabs>
          </AppBar> */}
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
