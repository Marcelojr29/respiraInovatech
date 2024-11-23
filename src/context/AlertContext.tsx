import React, { createContext, useContext, ReactNode } from "react";
import { useAlertApi } from "@/hooks/useAlert";

const AlertContext = createContext<ReturnType<typeof useAlertApi> | undefined>(
	undefined
);

export const AlertProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const alertApi = useAlertApi();

	return (
		<AlertContext.Provider value={alertApi}>{children}</AlertContext.Provider>
	);
};

export const useAlertContext = () => {
	const context = useContext(AlertContext);
	if (!context) {
		throw new Error(
			"useAlertContext deve ser usado dentro de um AlertProvider"
		);
	}
	return context;
};
