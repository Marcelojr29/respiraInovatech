import useApi from "./useApi";
export const useChartApi = () => {
	const api = useApi();

	const getCO2Levels = async () => {
		return await api.get("/maps/sensors");
	};

	return { getCO2Levels };
};
