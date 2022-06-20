import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string
}

const Container: React.FunctionComponent<ContainerProps> = ({ children, className }) => {
  return <div className={`px-10 mx-auto ${className}`}>{children}</div>;
};

export default Container;
