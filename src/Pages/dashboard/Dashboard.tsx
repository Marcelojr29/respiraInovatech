import React, { useEffect, useState } from 'react';
import MapSlide from '@/components/carousel/MapSlide';
import { LatLngExpression, LatLngTuple } from 'leaflet';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import useApi from '@/hooks/useApi';
import { fetchSensor } from '@/lib/api';

interface Sensores {
    id: string;
    location: String;
    status: string;
    createdAt: string;
    sensorData?: any[];
    alert?: any[],
    updatedAt: string
}

const Dashboard: React.FC = () => {
    const [sensors, setSensors] = useState<Sensores[]>([])
    const api = useApi();

    useEffect(() => {
        const loadSensors = async () => {
            const data: Sensores[] = await fetchSensor(api);
            setSensors(data)
        }

        loadSensors();
    }, [])

    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <main className='flex-grow mt-24'>
                <div className='p-4'>
                    <h1 className='text-2xl font-bold mb-4'>Dashboard de localização dos sensores de CO₂</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {sensors.map((sensor, index) => (
                            <div key={index} className='h-[300px] border rounded-lg overflow-hidden z-10'>
                                <MapSlide coordinates={sensor.location.split(",").map(coordenada => parseFloat(coordenada.trim())) as LatLngTuple} popup={sensor.status} />
                            </div>
                        ))}
                    </div>
                </div>
            </main>
			<Footer />
        </div>
      );
};

export default Dashboard;