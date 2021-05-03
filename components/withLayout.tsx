import React from "react";
import Link from "next/link";
import Head from "next/head";

// type Props = {
//   children?: ReactNode;
//   title?: string;
// };

const Layout = <T extends object>(Component: React.ComponentType<T>) => {
  return (props: T) => (
    <div>
      <Head>
        {/* <title>{props.title}</title> */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>{" "}
          |{" "}
          <Link prefetch href="/about">
            <a>About</a>
          </Link>{" "}
          |{" "}
          <Link href="/users">
            <a>Users List</a>
          </Link>{" "}
          <Link href="/test">
            <a>Hoc Page</a>
          </Link>{" "}
          | <a href="/api/users">Users API</a>
        </nav>
      </header>
      <Component {...props}></Component>
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </div>
  );
};

export default Layout;
