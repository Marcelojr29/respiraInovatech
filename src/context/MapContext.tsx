import { ReactNode } from "react";

interface MapContextProps {
	children: ReactNode;
}

export const MapProvider: React.FC<MapContextProps> = ({ children }) => {
	return <>{children}</>;
};
