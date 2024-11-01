import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './LocationPage.css'; 

const UserLocation = () => {
    const mapRef = useRef(null);
    const [map, setMap] = useState(null);
    const markerRef = useRef(null);

    useEffect(() => {
        // Ensure the ref is available before initializing the map
        if (mapRef.current) {
            const mapInstance = L.map(mapRef.current).setView([0, 0], 2);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '© OpenStreetMap'
            }).addTo(mapInstance);
            setMap(mapInstance);

            // Clean up the map instance on unmount
            return () => {
                mapInstance.remove();
            };
        }
    }, []);

    useEffect(() => {
        if (navigator.geolocation && map) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;

                    // Update map view to user's location
                    map.setView([latitude, longitude], 13);
                    
                    const customIcon = L.icon({
                        iconUrl: 'https://www.kindpng.com/picc/m/276-2760684_yellow-location-icon.png',
                        iconSize: [32, 32],
                    });

                    // Update or create marker
                    if (markerRef.current) {
                        markerRef.current.setLatLng([latitude, longitude]);
                    } else {
                        markerRef.current = L.marker([latitude, longitude], { icon: customIcon }).addTo(map);
                    }
                },
                (error) => {
                    console.error("Error getting user location: ", error);
                    alert("Unable to retrieve your location. Please check your settings.");
                }
            );
        }
    }, [map]);

    return (
        <div className='locationPage'>
            <div ref={mapRef} className="mapContainer" />
        </div>
    );
};

export default UserLocation;
