export enum StorageTypes {
  session = "session",
  local = "local",
  cookies = "cookies",
}

export enum HeaderActionTypes {
  doHeaderchange = "actionHeaderChange",
  doNormalToken = "actionSetNormalToken",
  doPOST = "post",
}

export enum InitActionType {
  doBeforestart = "beforestart",
}

export enum envActionType {
  doGettoken = "gettoken",
  doUpateParam = "upateparam",
  doUpateMarquee = "upatemarquee",
}

export enum testActionType {
  doTest01 = "test01",
}

export enum ApiType {
  callToken = "token",
  callGetList = "getlist",
}
