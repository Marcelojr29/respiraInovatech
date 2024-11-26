import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

// Coordenadas do centro do mapa
const MAP_CENTER_COORDINATES: LatLngExpression = [
	-3.0974099776093005, -60.02330371104108,
];
const MAP_ZOOM_LEVEL = 13;

// Dados mockados para os sensores
const mockSensors = [
	{
		id: 1,
		name: "Manaus Plaza Shopping ",
		co2_level: 350,
		latitude: -3.0974140824348395,
		longitude: -60.02325018743055,
	},
	{
		id: 2,
		name: "Cigs - Centro de Instrução de Guerra na Selva",
		co2_level: 500,
		latitude: -3.101520462016205,
		longitude: -60.04308850436131,
	},
	{
		id: 3,
		name: "INPA - Instituto Nacional de Pesquisas da Amazônia - INPA",
		co2_level: 1200,
		latitude: -3.0942587934451935,
		longitude: -59.98690182483408,
	},
];

const touristPoints = [
	{
		id: 4,
		name: "Teatro Amazonas",
		description: "Um dos teatros mais icônicos do Brasil.",
		latitude: -3.130299,
		longitude: -60.023972,
	},
	{
		id: 5,
		name: "Encontro das Águas",
		description:
			"Famoso fenômeno natural onde os rios Negro e Solimões se encontram.",
		latitude: -3.135209810958363,
		longitude: -59.90472228029568,
	},
	{
		id: 6,
		name: "Praia da Ponta Negra",
		description: "Área de lazer e praia urbana em Manaus.",
		latitude: -3.063850611956998,
		longitude: -60.10468478522781,
	},
];

// Componente Marker Memoizado
const MemoizedMarker = React.memo(
	({
		position,
		popupContent,
	}: {
		position: LatLngExpression;
		popupContent: string;
	}) => {
		return (
			<Marker position={position}>
				<Popup>{popupContent}</Popup>
			</Marker>
		);
	}
);

const MapSlide: React.FC = () => {
	return (
		<div className="w-full h-full">
			<MapContainer
				center={MAP_CENTER_COORDINATES}
				zoom={MAP_ZOOM_LEVEL}
				scrollWheelZoom={false}
				className="w-full h-full"
				attributionControl={false}
			>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution='; <a href="https://www.openstreetmap.org/copyright">'
					detectRetina={true}
				/>

				{/* Marcadores dos sensores */}
				{mockSensors.map((sensor) => (
					<MemoizedMarker
						key={sensor.id}
						position={[sensor.latitude, sensor.longitude]}
						popupContent={`Sensor: ${sensor.name}, CO₂ Level: ${sensor.co2_level} ppm`}
					/>
				))}

				{/* Marcadores dos pontos turísticos */}
				{touristPoints.map((point) => (
					<MemoizedMarker
						key={point.id}
						position={[point.latitude, point.longitude]}
						popupContent={`${point.name}: ${point.description}`}
					/>
				))}
			</MapContainer>
		</div>
	);
};

export default MapSlide;
