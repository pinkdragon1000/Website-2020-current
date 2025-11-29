import React, { useEffect } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { countryColors } from "../../utils/travel-locations";

function Legend({ countries }) {
  const map = useMap();

  useEffect(() => {
    const legend = L.control({ position: "bottomright" });

    legend.onAdd = () => {
      const div = L.DomUtil.create("div", "info legend");
      div.style.backgroundColor = "white";
      div.style.padding = "8px";
      div.style.borderRadius = "5px";
      div.style.boxShadow = "0 0 15px rgba(0,0,0,0.2)";
      div.style.maxHeight = "200px";
      div.style.overflowY = "auto";
      div.style.fontSize = "12px";

      let labels = '<h3 style="margin: 0 0 8px 0; color: var(--brown); font-size: 14px; font-weight: bold;">Countries</h3>';
      
      countries.forEach((country) => {
        const colors = countryColors[country] || countryColors.default;
        labels += `
          <div style="display: flex; align-items: center; margin-bottom: 4px;">
            <span style="
              display: inline-block;
              width: 10px;
              height: 10px;
              border-radius: 50%;
              background-color: ${colors.fill};
              border: 2px solid ${colors.border};
              margin-right: 6px;
              flex-shrink: 0;
            "></span>
            <span style="font-size: 12px; color: var(--brown); line-height: 1.2;">${country}</span>
          </div>
        `;
      });

      div.innerHTML = labels;
      return div;
    };

    legend.addTo(map);

    return () => {
      legend.remove();
    };
  }, [map, countries]);

  return null;
}

export default function TravelMap({ locations }) {
  const getCountryColor = (country) => {
    return countryColors[country] || countryColors.default;
  };
  
  // Get unique countries from locations
  const uniqueCountries = [...new Set(locations.map(loc => loc.country))].sort();
  
  // Center map on average of all locations
  const center = locations.length > 0 
    ? [
        locations.reduce((sum, loc) => sum + loc.lat, 0) / locations.length,
        locations.reduce((sum, loc) => sum + loc.lng, 0) / locations.length
      ]
    : [20, 0]; // Default center if no locations

  // Responsive zoom level based on screen width
  const isMobile = window.innerWidth <= 768;
  const zoomLevel = isMobile ? 1 : 2;

  return (
    <MapContainer
      center={center}
      zoom={zoomLevel}
      scrollWheelZoom={false}
      style={{ 
        height: "640px", 
        width: "100%", 
        borderRadius: "0.5rem",
        minHeight: "300px",
        maxHeight: "640px"
      }}
      tap={true}
      touchZoom={true}
      dragging={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      <Legend countries={uniqueCountries} />
      {locations.map((location, index) => {
        const colors = getCountryColor(location.country);
        return (
          <CircleMarker
            key={index}
            center={[location.lat, location.lng]}
            radius={5}
            pathOptions={{
              fillColor: colors.fill,
              fillOpacity: 1,
              color: colors.border,
              weight: 1
            }}
          >
            <Popup>
              <strong>{location.name }, {location.country}</strong>
            </Popup>
          </CircleMarker>
        );
      })}
    </MapContainer>
  );
}
