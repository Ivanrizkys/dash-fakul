import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div
      style={{ backgroundImage: "url(/background.png)" }}
      className="bg-cover bg-center bg-no-repeat h-full w-full pb-7"
    >
      {children}
    </div>
  );
};

export default Layout;
