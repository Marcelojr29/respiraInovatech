import useApi from "@/hooks/useApi";

export const useAlertApi = () => {
	const api = useApi();

	const getAllAlerts = async () => {
		return await api.get("/alerts");
	};

	const createAlert = async (data: any) => {
		return await api.post("/alerts", data);
	};

	const filterAlerts = async (params: any) => {
		return await api.get("/alerts/filter", { params });
	};

	const updateAlert = async (id: string, data: any) => {
		return await api.put(`/alerts/${id}`, data);
	};

	const deleteAlert = async (id: string) => {
		return await api.delete(`/alerts/${id}`);
	};

	return { getAllAlerts, createAlert, filterAlerts, updateAlert, deleteAlert };
};
