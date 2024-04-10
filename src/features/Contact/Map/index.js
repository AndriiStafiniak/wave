import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { MapContainer } from "./styled";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

export const MyMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyABD2D3RJYR68cw4lKB-4pnbBSEDoiwzTY">
      <MapContainer>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        ></GoogleMap>
      </MapContainer>
    </LoadScript>
  );
};
