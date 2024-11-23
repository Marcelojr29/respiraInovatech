import useApi from "./useApi";

export const useMapApi = () => {
	const api = useApi();

	const getAllSensors = async () => {
		return await api.get("/maps/sensors");
	};

	const getAllAlerts = async () => {
		return await api.get("/maps/alerts");
	};

	return { getAllSensors, getAllAlerts };
};
