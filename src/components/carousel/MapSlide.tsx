import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useMapApi } from "@/hooks/useMap";

const MAP_CENTER_COORDINATES: LatLngExpression = [
	-3.0974099776093005, -60.02330371104108,
];
const MAP_ZOOM_LEVEL = 13;

const MapSlide: React.FC = () => {
	const { getAllSensors } = useMapApi();
	const [sensors, setSensors] = useState<any[]>([]);

	useEffect(() => {
		const fetchSensors = async () => {
			try {
				const response = await getAllSensors();
				setSensors(response.data);
			} catch (error) {
				console.error("Erro ao buscar sensores:", error);
			}
		};

		fetchSensors();
	}, []);

	return (
		<div className="w-full h-full">
			<MapContainer
				center={MAP_CENTER_COORDINATES}
				zoom={MAP_ZOOM_LEVEL}
				scrollWheelZoom={false}
				className="w-full h-full"
			>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				/>
				{sensors.map((sensor) => (
					<Marker
						key={sensor.id}
						position={[sensor.latitude, sensor.longitude]}
					>
						<Popup>{`Sensor: ${sensor.name}, CO2 Level: ${sensor.co2_level}`}</Popup>
					</Marker>
				))}
			</MapContainer>
		</div>
	);
};

export default MapSlide;
