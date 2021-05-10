import React from "react";
import Layout from "../../../.next/components/Layout";
/** 使用pub */
import { useSelector /** useDispatch */ } from "react-redux";
import { $getlist } from "../../../core/service/cathay";

function index() {
  function doGetlist() {
    const payload = {
      typeid: 4,
    };
    $getlist(payload);
  }

  // const dispatch = useDispatch();
  const pub = useSelector((state) => {
    return state.gCommon;
  });

  return (
    <Layout>
      <div>{pub.menuItemData}</div>
      <button onClick={doGetlist}>呼叫API</button>
    </Layout>
  );
}

export default index;
