import { post } from "../hook/useFetch";

// import
export function $getlist(payload: any) {
  return post("mobileweb/api/news/getlist?typeid=4", payload);
}

// token
export function $token(payload: any) {
  return post("token", payload);
}
