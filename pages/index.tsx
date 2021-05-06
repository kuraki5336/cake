import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { ApiType } from "../core/enum/types";
import usePub from "../core/hook/useCommon";

function IndexPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function awaitAction() {
      await dispatch({ type: ApiType.callToken });
      await dispatch({ type: ApiType.callGetList });
    }
    awaitAction();
  }, []);

  const pub = usePub();

  return (
    <>
      <div>1</div>
      <div>2</div>
      {/* pub{pub} */}
      token<div>{pub.token}</div>
      meq<div>{pub.mqlist}</div>
      {/* <button onClick={}>呼叫API</button> */}
    </>
  );
}

export default IndexPage;
