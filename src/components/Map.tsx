"use client";
import type { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

export default function Map() {
  const position: LatLngTuple = [49.07700321371654, 18.3293506268011];

  return (
    <div className="h-[400px] w-full">
      <MapContainer
        style={{
          height: "100%",
        }}
        center={position}
        zoom={15}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          icon={
            new Icon({
              iconUrl: "/marker-icon.png",
              iconSize: [25, 41],
              iconAnchor: [12, 41],
            })
          }
          position={position}
        >
          <Popup>Autoškola - Ing. Naďo Dušan</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
