import { ApiType, envActionType } from "../enum/types";
import { IResponse } from "../interface/index";
import { call, put, takeEvery } from "redux-saga/effects";
import { post, get } from "../hook/useFetch";

/** token */
function* $token(payload: {}) {
  const data: IResponse = yield call(() => post("token", payload));
  yield put({ type: envActionType.doUpateParam, payload: data });
  return data;
}

/** 跑馬燈資訊 */
function* $getlist() {
  const data: IResponse = yield call(() =>
    get("mobileweb/api/news/getlist?typeid=4")
  );

  yield put({ type: envActionType.doUpateMarquee, payload: data });
  return data;
}

function* myApi() {
  yield takeEvery(ApiType.callToken, $token);
  yield takeEvery(ApiType.callGetList, $getlist);
}

export default myApi;
