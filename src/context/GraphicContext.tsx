import { ReactNode } from "react";

interface ChartContextProps {
  children: ReactNode;
}

export const ChartProvider: React.FC<ChartContextProps> = ({ children }) => {
  return <>{children}</>;
};