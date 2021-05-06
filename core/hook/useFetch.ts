import { getNormalToken } from "../../utils/storageHelp";

const baseurl = "https://api-uat.cathay-ins.com.vn:9527/";

function getRequestHeader() {
  const normaltoken = getNormalToken()?.normalToken;
  const token =
    normaltoken || "LCJzdWIiOiJjYXRoYXktY3ktd2ViLWd1ZXN0IiwiZXhwIjoxN";

  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set("Content-Type", "application/json");
  requestHeaders.set("Authorization", `Bearer ${token}`);
  requestHeaders.set("LG_CODE", `vi-VN`);
  return requestHeaders;
}

const errorCodes = [
  { statusCode: 400, message: "無法解讀 Request" },
  { statusCode: 401, message: "登入逾時，請重新登入" },
  { statusCode: 403, message: "登入逾時，請重新登入" },
  { statusCode: 500, message: "發生異常狀況" },
  { statusCode: 520, message: "找不到資料" },
  { statusCode: 521, message: "資料已存在" },
  { statusCode: 522, message: "傳入參數異常" },
];

const successHandler = function (response: any, reqData: any) {
  const {
    data,
    config: { url, method },
  } = response;
  console.group(`[${method}] ${url}\n`);
  if (reqData.entries) {
    const paramsObject: { [key: string]: any } = {};
    for (var pair of reqData.entries()) {
      paramsObject[pair[0]] = pair[1];
    }
    console.log("request FormData => ", paramsObject);
  } else {
    console.log("request data => ", reqData);
  }
  console.log("response data => ", data);
  console.groupEnd();
  console.log("\n");
};

const errorHandler = function (error: any) {
  // console.group(`[${error.config.method}] ${error.config.url}\n`);
  // let stateStatus = 500;
  // let message = "發生異常狀況，請稍後再試。";
  // if (error.response) {
  //   stateStatus = error.response.status;
  //   const mapStatusError = errorCodes.find(
  //     (item) => item.statusCode === error.response.status
  //   );
  //   if (mapStatusError) {
  //     message = mapStatusError.message;
  //   }
  //   console.log("error status => ", error.response.status);
  // } else {
  //   if (error.message) {
  //     message = error.message;
  //   }
  //   console.log("error message => ", message);
  //   if (error.message === "Network Error") message = "網路發生異常，請稍後在試";
  // }
  // console.groupEnd();
  // return Promise.resolve({
  //   state: stateStatus,
  //   msg: "",
  //   error: message,
  //   data: {},
  // });
};

function post(url: string, payload: any) {
  const config = {
    method: "POST",
    headers: getRequestHeader(),
    body: payload,
  };

  return fetch(baseurl + url, config)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      // successHandler(data, config.body);
      return data;
    })
    .catch(errorHandler);
}

function get(url: string) {
  const config = {
    method: "GET",
    headers: getRequestHeader(),
  };

  return fetch(baseurl + url, config)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log("??", data);

      // successHandler(data, config);
      return data;
    })
    .catch(errorHandler);
}

export { post, get };
