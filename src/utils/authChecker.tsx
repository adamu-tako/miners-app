import React, { useEffect, FunctionComponent, ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  children: ReactNode | ReactNode[];
}

const AuthChecker: FunctionComponent<Props> = ({ children }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("Session")!)?.token;

    if (!token && pathname !== "/auth") {
      navigate(`/auth`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return <div>{children}</div>;
};

export default AuthChecker;
