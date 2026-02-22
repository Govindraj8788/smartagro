// app/lib/products.js
// Shared product dataset used by /products listing and /products/[id] detail pages.
// Keep this file small and avoid huge inline base64 strings to prevent build errors.

const PRODUCTS = [
  {
    id: "iot-soil-100",
    title: "SoilVue Pro — Soil Sensor",
    category: "IoT Sensors",
    sub: "Soil moisture, EC & temperature — long-life probes",
    price: "₹6,499",
    price_numeric: 6499,
    img: "https://images.unsplash.com/photo-1582719478250-1b9a8271b5b1?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Soil moisture (vol%)",
      "Electrical Conductivity (EC)",
      "Soil temperature",
      "LoRaWAN / NB-IoT option"
    ],
    uses: [
      "Automated irrigation scheduling to save water",
      "Salinity monitoring for fertigation planning",
      "Historical soil condition logging for nutrient management"
    ]
  },

  {
    id: "weather-station-x",
    title: "AgriWeather Station X",
    category: "IoT Sensors",
    sub: "Microclimate monitoring — temp, humidity, wind, rain",
    price: "₹18,999",
    price_numeric: 18999,
    img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Air temp & humidity",
      "Wind speed & direction",
      "Rain gauge",
      "Solar radiation / PAR"
    ],
    uses: [
      "Optimize spraying windows using wind and delta-T",
      "Calculate evapotranspiration (ET0) for irrigation planning",
      "Frost alerts in orchards and vineyards"
    ]
  },

  {
    id: "edge-gateway-1",
    title: "EdgeHub Gateway",
    category: "Connectivity",
    sub: "Edge processing + LoRaWAN / MQTT bridge",
    price: "₹13,499",
    price_numeric: 13499,
    img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
    features: ["Packet forwarding (LoRaWAN)", "Local rules & edge ML", "MQTT/HTTP uplink"],
    uses: [
      "Aggregate sensor data on-farm before cloud upload",
      "Run edge detection for alerts (e.g., sudden moisture drop)",
      "Reduce cellular costs by batching uploads"
    ]
  },

  {
    id: "drone-agrimax",
    title: "AgriMax Drone — Sprayer",
    category: "Autonomous Machines",
    sub: "Precision spraying, mapping & variable rate applications",
    price: "₹2,49,999",
    price_numeric: 249999,
    img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
    features: ["GPS-guided flight", "RTK option for cm-level accuracy", "Foldable & swappable tanks"],
    uses: [
      "Targeted pesticide/fertilizer application to reduce inputs",
      "NDVI mapping + prescription spraying",
      "Rapid application in remote or wet fields"
    ]
  },

  {
    id: "autot-tractor-ev",
    title: "AutoTrak — Autonomous Tractor",
    category: "Autonomous Machines",
    sub: "Autonomous tillage, seeding & field tasks",
    price: "Contact for price",
    price_numeric: 0,
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
    features: ["Auto-steer & route planning", "Implements integration", "Fleet management dashboard"],
    uses: [
      "24/7 field operations to reduce labor costs",
      "Precision seed placement and controlled traffic farming",
      "Integrate with RTK corrections for accuracy-sensitive tasks"
    ]
  },

  {
    id: "greenhouse-controller",
    title: "GreenGrow Controller",
    category: "Control & Automation",
    sub: "Climate, irrigation & fertigation control for greenhouses",
    price: "₹22,499",
    price_numeric: 22499,
    img: "https://images.unsplash.com/photo-1582719478258-cbaf3d6c816f?q=80&w=1200&auto=format&fit=crop",
    features: ["Temperature & humidity control", "Irrigation valves & dosing", "Schedules & setpoints"],
    uses: [
      "Maintain ideal microclimate for high-value crops",
      "Automate misting and ventilation to reduce disease",
      "Integrate with fertigation for consistent nutrition"
    ]
  },

  {
    id: "fertigation-kit",
    title: "SmartFert Kit",
    category: "Irrigation & Fertigation",
    sub: "Auto fertigation & dosing controller",
    price: "₹9,999",
    price_numeric: 9999,
    // small placeholder image so file stays compact and safe
    img: "https://via.placeholder.com/900x600?text=SmartFert+Kit",
    features: ["Proportional dosing", "Support for multiple tanks", "Mobile scheduling"],
    uses: [
      "Automate micro-nutrient dosing for fertigation lines",
      "Reduce fertilizer runoff and uniformity issues",
      "Remote on/off and schedule adjustments"
    ]
  },

  {
    id: "vision-pest",
    title: "CropVision — Pest & Disease Camera",
    category: "Analytics & Vision",
    sub: "Edge AI camera for pest/disease alerts",
    price: "₹39,999",
    price_numeric: 39999,
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop",
    features: ["Edge AI detection", "Time-lapse + alerts", "Cloud analytics"],
    uses: [
      "Early pest/disease detection to reduce crop loss",
      "Trigger spot spraying or scouting requests",
      "Build datasets for yield/health prediction"
    ]
  },

  // you can add more products here following the same structure
];

export default PRODUCTS;
