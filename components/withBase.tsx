import React from "react";
import { $token } from "../core/service/cathay";

const Baseform = <T extends object>(Component: React.ComponentType<T>) => {
  return (props: T) => (
    <div>
      <Component {...props}></Component>
    </div>
  );
};

export default Baseform;
