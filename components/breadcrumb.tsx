import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  acolor: {
    color: "#CC44CC",
  },

  bcolor: {
    color: "#555555",
  },
});

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  // event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

interface IRouterConfig {
  name: string;
  data: string;
  url: string;
  child?: IRouterstructure;
}

interface IRouterstructure {
  [key: string]: IRouterConfig;
}

const routeConfig: IRouterstructure = {
  "": {
    name: "首頁",
    data: "",
    url: "/",
  },
  about: {
    name: "與我相關",
    data: "",
    url: "/about",
  },
  help: {
    name: "幫助中心",
    data: "",
    url: "/help",
  },
  test: {
    name: "測試階層1",
    data: "",
    url: "/test",
    child: {
      exstore: {
        name: "store底層",
        data: "",
        url: "/test/exstore",
        child: {
          aaa: {
            name: "測試階層3",
            data: "",
            url: "/test/test2/test3",
          },
        },
      },
    },
  },
};

function Cbreadcrumbs() {
  // 得到router的資料
  const classes = useStyles();
  const router = useRouter();
  const routerList = router.asPath.split("/");
  let displaylist = [{ name: "首頁", url: "/" }];
  let routerinfo = routeConfig;
  routerList.forEach((item, index) => {
    if (index > 0) {
      displaylist.push({
        name: routerinfo[item].name,
        url: routerinfo[item].url,
      });
      const child = routerinfo[item].child;
      if (child) {
        routerinfo = child;
      }
    }
  });

  let navlist;
  if (Array.isArray(displaylist)) {
    navlist = displaylist.map((item, index) => {
      return (
        <Link
          key={`a_${index}`}
          // className={
          //   index === displaylist.length - 1 ? classes.acolor : classes.bcolor
          // }
          href={item.url}
          onClick={handleClick}
        >
          {item.name}
        </Link>
      );
    });
  }
  return <Breadcrumbs aria-label="breadcrumb">{navlist}</Breadcrumbs>;
}

export default Cbreadcrumbs;
