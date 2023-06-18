import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./MapComponent.css";
import iconMarker from "leaflet/dist/images/marker-icon.png";
import L from "leaflet";

const icon = L.icon({
  iconUrl: iconMarker,
});

const MapComponent = () => {
  return (
    <div className="map-wrap">
      <MapContainer
        center={[19.076, 72.8777]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[19.076, 72.8777]} icon={icon}>
          <Popup>
            Divya stays here lets have coffee <br />
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
