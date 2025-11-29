// This file contains the locations for the travel map

export const travelLocations = [
  // Italy
  { name: "Rome", lat: 41.9028, lng: 12.4964, country: "Italy" },
  { name: "Pompeii", lat: 40.7462, lng: 14.4989, country: "Italy" },
  { name: "Naples", lat: 40.8518, lng: 14.2681, country: "Italy" },
  
  // France
  { name: "Paris", lat: 48.8566, lng: 2.3522, country: "France" },
  
  // United Kingdom
  { name: "London", lat: 51.5074, lng: -0.1278, country: "United Kingdom" },
  { name: "Oxford", lat: 51.7520, lng: -1.2577, country: "United Kingdom" },
  { name: "Stonehenge", lat: 51.1789, lng: -1.8262, country: "United Kingdom" },
  { name: "Grand Cayman Island", lat: 19.3133, lng: -81.2546, country: "United Kingdom" },
  
  // China
  { name: "Beijing", lat: 39.9042, lng: 116.4074, country: "China" },
  { name: "Shanghai", lat: 31.2304, lng: 121.4737, country: "China" },
  { name: "Xi'an", lat: 34.3416, lng: 108.9398, country: "China" },
  { name: "Hangzhou", lat: 30.2741, lng: 120.1551, country: "China" },
  { name: "Suzhou", lat: 31.2989, lng: 120.5853, country: "China" },
  
  // India
  { name: "Hyderabad", lat: 17.3850, lng: 78.4867, country: "India" },
  { name: "Agra", lat: 27.1767, lng: 78.0081, country: "India" },
  { name: "New Delhi", lat: 28.6139, lng: 77.2090, country: "India" },
  
  // USA
  { name: "San Francisco", lat: 37.7749, lng: -122.4194, country: "USA" },
  { name: "Washington D.C.", lat: 38.9072, lng: -77.0369, country: "USA" },
  { name: "Virginia Beach", lat: 36.8529, lng: -75.9780, country: "USA" },
  { name: "Philadelphia", lat: 39.9526, lng: -75.1652, country: "USA" },
  { name: "New York", lat: 40.7128, lng: -74.0060, country: "USA" },
  { name: "Las Vegas", lat: 36.1699, lng: -115.1398, country: "USA" },
  { name: "Kiawah Island", lat: 32.6085, lng: -80.0842, country: "USA" },
  { name: "Orlando", lat: 28.5383, lng: -81.3792, country: "USA" },
  { name: "Cocoa Beach", lat: 28.3200, lng: -80.6076, country: "USA" },
  { name: "Cape Canaveral", lat: 28.3922, lng: -80.6077, country: "USA" },
  { name: "Dallas", lat: 32.7767, lng: -96.7970, country: "USA" },
  { name: "Detroit", lat: 42.3314, lng: -83.0458, country: "USA" },
  { name: "Cleveland", lat: 41.4993, lng: -81.6944, country: "USA" },
  { name: "Los Angeles", lat: 34.0522, lng: -118.2437, country: "USA" },
  { name: "Grand Canyon", lat: 36.1069, lng: -112.1129, country: "USA" },
  { name: "Oahu Island", lat: 21.4389, lng: -158.0001, country: "USA" },
  { name: "Big Island", lat: 19.5429, lng: -155.6659, country: "USA" },
  { name: "Sanibel Island", lat: 26.4486, lng: -82.1226, country: "USA" },
  { name: "Outer Banks", lat: 35.5585, lng: -75.4665, country: "USA" },
  { name: "Hoover Dam", lat: 36.0162, lng: -114.7377, country: "USA" },
  { name: "Houston, TX", lat: 29.7604, lng: -95.3698, country: "USA" },
  
  // Maldives
  { name: "Male", lat: 4.1755, lng: 73.5093, country: "Maldives" },
  { name: "Rangali Island", lat: 3.0776, lng: 72.8324, country: "Maldives" },
  
  // Qatar
  { name: "Doha", lat: 25.2854, lng: 51.5310, country: "Qatar" },
];

// Color palette for different countries
export const countryColors = {
  "USA": { fill: "#7935c9", border: "#032b88" },
  "United Kingdom": { fill: "#e74c3c", border: "#c0392b" },
  "France": { fill: "#3498db", border: "#2980b9" },
  "Italy": { fill: "#27ae60", border: "#229954" },
  "China": { fill: "#f39c12", border: "#d68910" },
  "India": { fill: "#ff6b6b", border: "#e74c3c" },
  "Maldives": { fill: "#1abc9c", border: "#16a085" },
  "Qatar": { fill: "#9b59b6", border: "#8e44ad" },
  // Default color for countries not listed
  "default": { fill: "#95a5a6", border: "#7f8c8d" }
};
