import { useSelector } from "react-redux";
import type { RootState } from "../store/index";

function usePub() {
  return useSelector((state: RootState) => state.gCommon);
}

export default usePub;
