import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Container from "@material-ui/core/Container";
import Cbreadcrumbs from "./breadcrumb";

type Props = {
  children?: ReactNode | Element | Element[];
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        |{" "}
        <Link href="/about">
          <a>About</a>
        </Link>{" "}
        |{" "}
        <Link href="/users">
          <a>Users List</a>
        </Link>{" "}
        |{" "}
        <Link href="/test">
          <a>HOC Layout </a>
        </Link>{" "}
        | <a href="/api/users">Users API</a>
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

export default Layout;
