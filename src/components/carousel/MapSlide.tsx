import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

const center: LatLngExpression = [-3.0974099776093005, -60.02330371104108];

const MapSlide: React.FC = () => {
	return (
		<div className="w-full h-full">
			<MapContainer
				center={center}
				zoom={13}
				scrollWheelZoom={false}
				className="w-full h-80"
			>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				/>
				<Marker position={center}>
					<Popup>Aumento de Co2 Aqui!</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
};

export default MapSlide;
