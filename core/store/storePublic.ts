import { testActionType } from "./../enum/types";
import {
  envActionType,
  HeaderActionTypes,
  InitActionType,
} from "../enum/types";
import { saveNormalToken } from "../../utils/storageHelp";

const initState = {
  menuItemData: ["糖果", "節目", "餅乾", "聯絡我們"],
  apiUrl: "",
  basetoken: "LCJzdWIiOiJjYXRoYXktY3ktd2ViLWd1ZXN0IiwiZXhwIjoxN",
  doNormalToken: "",
  token: "",
  mqlist: "",
};

const gCommon = (state = initState, action: { type: string; payload: any }) => {
  const payload = action.payload;
  switch (action.type) {
    case envActionType.doUpateParam: {
      // return { ...state, doNormalToken: payload.access_token };
      saveNormalToken(payload.access_token);
      console.log("save");

      return state;
    }

    case InitActionType.doBeforestart: {
      console.log("init");
      return state;
    }

    case envActionType.doUpateMarquee: {
      return { ...state, mqlist: payload.data[0].title };
    }

    case HeaderActionTypes.doHeaderchange: {
      const menuItemCopy = state.menuItemData.slice();
      return { menuItemData: [action.payload.itemNew].concat(menuItemCopy) };
    }
    /** 寫入一般token */
    case HeaderActionTypes.doNormalToken: {
      return (state.doNormalToken = action.payload.token);
    }
    /** 寫個LOG看看 */
    case testActionType.doTest01: {
      return state;
    }

    default:
      /** init */
      return state;
  }
};

export { gCommon };
