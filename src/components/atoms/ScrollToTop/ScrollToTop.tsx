import React from "react";

import { useEffect, ReactNode } from "react";
import { useLocation } from "react-router-dom";

type Props = {
  children: ReactNode;
};

const ScrollToTop = ({ children }: Props) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>;
};

export default ScrollToTop;
