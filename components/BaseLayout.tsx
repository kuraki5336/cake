import React, { ReactNode } from "react";
type Props = {
  children?: ReactNode | Element | Element[];
};

function Baselayout({ children }: Props) {
  return <>{children}</>;
}

export default Baselayout;
