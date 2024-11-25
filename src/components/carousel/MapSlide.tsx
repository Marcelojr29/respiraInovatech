import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

interface MapSlideProps {
	coordinates: LatLngExpression;
	popup: string;
}

// Configuração de posição central do mapa
const MAP_CENTER_COORDINATES: LatLngExpression = [
	-3.0974099776093005, -60.02330371104108,
];
const MAP_ZOOM_LEVEL = 13;

const MapSlide: React.FC<MapSlideProps> = ({ coordinates, popup }) => {
	return (
	  <div className="w-full h-full">
		<MapContainer
		  center={coordinates}
		  zoom={MAP_ZOOM_LEVEL}
		  scrollWheelZoom={false}
		  className="w-full h-full"
		>
		  <TileLayer
			url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		  />
		  <Marker position={coordinates}>
			<Popup>{popup}</Popup>
		  </Marker>
		</MapContainer>
	  </div>
	);
  };

export default MapSlide;
