import React from 'react'
import  { useState } from 'react';
import HumanDataContext from 'contexts/HumanDataContext';

 const HumanDataWrapper = ({children}) => {

  const [data, setData] = useState({

    "metrics": [
        {
          "id": 1,
          "metric": "Hydraulic Resistance",
          "cluster": "Layer 1 - Sensorsuit",
          "subCluster": "",
          "unit": "5 kPa",
          "unitRange": "",
          "extraction": "",
          "frequency": "",
          "standard": "",
        },

        {
            "id": 2,
            "metric": "Water Flow Rate",
            "cluster": "Layer 1 - Sensorsuit",
            "subCluster": "",
            "unit": "100 Liters/Hour",
            "unitRange": "100",
            "extraction": "",
            "frequency": "",
            "standard": "",
          },

          {
            "id": 3,
            "metric": "Compression Pressure",
            "cluster": "Layer 1 - Sensorsuit",
            "subCluster": "",
            "unit": "2 Psi",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": "",
          },

          {
            "id": 4,
            "metric": "Thermal Conductivity",
            "cluster": "Layer 1 - Sensorsuit",
            "subCluster": "",
            "unit": "BTU/(h⋅ft⋅°F)",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": "",
          },

          {
            "id": 5,
            "metric": "Mass Flow Rate",
            "cluster": "Layer 1 - Sensorsuit",
            "subCluster": "",
            "unit": "P/sec",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": "",
          },

          {
            "id": 6,
            "metric": "Heat Transfer Rate",
            "cluster": "Layer 1 - Sensorsuit",
            "subCluster": "",
            "unit": "P/sec",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": "",
          },

          {
            "id": 7,
            "metric": "Fabric Properties - Weight",
            "cluster": "Layer 1 - Sensorsuit",
            "subCluster": "",
            "unit": "Grams/Cm2",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": "",
          },

          {
            "id": 8,
            "metric": "Tensile Break Strength",
            "cluster": "Layer 1 - Sensorsuit",
            "subCluster": "",
            "unit": "lbs/inch",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": "",
          },

          {
            "id": 9,
            "metric": "Tear Strength",
            "cluster": "Layer 1 - Sensorsuit",
            "subCluster": "",
            "unit": "lbs/inch",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 10,
            "metric": "Peel Adhesion",
            "cluster": "Layer 1 - Sensorsuit",
            "subCluster": "",
            "unit": "lbs",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 11,
            "metric": "Air Permeability",
            "cluster": "Layer 1 - Sensorsuit",
            "subCluster": "",
            "unit": "Psi",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 12,
            "metric": "Flame Resistance (Vertical) - Burn Time",
            "cluster": "Layer 1 - Sensorsuit",
            "subCluster": "",
            "unit": "Seconds",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 13,
            "metric": "Flame Resistance (Vertical) - Char Length",
            "cluster": "Layer 1 - Sensorsuit",
            "subCluster": "",
            "unit": "Inches",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 14,
            "metric": "Density",
            "cluster": "Layer 1 - Sensorsuit",
            "subCluster": "",
            "unit": "kg/mm3",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 15,
            "metric": "Youngs Modulus",
            "cluster": "Layer 1 - Sensorsuit",
            "subCluster": "",
            "unit": "MPA",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 16,
            "metric": "Liquid Properties - Temperature",
            "cluster": "Layer 1 - Sensorsuit",
            "subCluster": "",
            "unit": "4°C",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },

          {
            "id": 17,
            "metric": "Layer 2 - Bladder",
            "cluster": "Layer 2 - Bladder",
            "subCluster": "",
            "unit": "",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 18,
            "metric": "Suit Pressure Leaks",
            "cluster": "Layer 2 - Bladder",
            "subCluster": "",
            "unit": "scc/m",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 19,
            "metric": "Pressure",
            "cluster": "Layer 2 - Bladder",
            "subCluster": "",
            "unit": "Psi",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 20,
            "metric": "Fabric Properties - Weight",
            "cluster": "Layer 2 - Bladder",
            "subCluster": "",
            "unit": "Grams/Cm2",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 21,
            "metric": "Tensile Break Strength",
            "cluster": "Layer 2 - Bladder",
            "subCluster": "",
            "unit": "lbs/inch",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 22,
            "metric": "Tear Strength",
            "cluster": "Layer 2 - Bladder",
            "subCluster": "",
            "unit": "lbs/inch",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 23,
            "metric": "Peel Adhesion",
            "cluster": "Layer 2 - Bladder",
            "subCluster": "",
            "unit": "lbs",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 24,
            "metric": "Air Permeability",
            "cluster": "Layer 2 - Bladder",
            "subCluster": "",
            "unit": "Psi",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 25,
            "metric": "Flame Resistance (Vertical) - Burn Time",
            "cluster": "Layer 2 - Bladder",
            "subCluster": "",
            "unit": "Seconds",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 26,
            "metric": "Flame Resistance (Vertical) - Char Length",
            "cluster": "Layer 2 - Bladder",
            "subCluster": "",
            "unit": "Inches",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 27,
            "metric": "Density",
            "cluster": "Layer 2 - Bladder",
            "subCluster": "",
            "unit": "kg/mm3",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 28,
            "metric": "Youngs Modulus",
            "cluster": "Layer 2 - Bladder",
            "subCluster": "",
            "unit": "MPA",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 29,
            "metric": "Layer 3 - Exoskeleton",
            "cluster": "Layer 3 - Exoskeleton",
            "subCluster": "",
            "unit": "",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 30,
            "metric": "Shoulder Torque",
            "cluster": "Layer 3 - Exoskeleton",
            "subCluster": "",
            "unit": "Nm",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },

          {
            "id": 31,
            "metric": "Elbow Torque",
            "cluster": "Layer 3 - Exoskeleton",
            "subCluster": "",
            "unit": "Nm",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 32,
            "metric": "Knee Torque",
            "cluster": "Layer 3 - Exoskeleton",
            "subCluster": "",
            "unit": "Nm",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 33,
            "metric": "Ankle Torque",
            "cluster": "Layer 3 - Exoskeleton",
            "subCluster": "",
            "unit": "Nm",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },

          {
            "id": 34,
            "metric": "Layer 4 - Exosuit",
            "cluster": "",
            "subCluster": "",
            "unit": "",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 35,
            "metric": "Suit Heat Leaks",
            "cluster": "Layer 4 - Exosuit",
            "subCluster": "",
            "unit": "Watts/m",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 36,
            "metric": "Suit Pressure Leaks",
            "cluster": "Layer 4 - Exosuit",
            "subCluster": "",
            "unit": "scc/m",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 37,
            "metric": "Reflectivity/Emmisivity",
            "cluster": "Layer 4 - Exosuit",
            "subCluster": "",
            "unit": "W⋅nm−1",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 38,
            "metric": "Penetration / Ballistic",
            "cluster": "Layer 4 - Exosuit",
            "subCluster": "",
            "unit": "(Add specific units)",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 39,
            "metric": "Fabric Properties - Weight",
            "cluster": "Layer 4 - Exosuit",
            "subCluster": "",
            "unit": "Grams/Cm2",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 40,
            "metric": "Tensile Break Strength",
            "cluster": "Layer 4 - Exosuit",
            "subCluster": "",
            "unit": "lbs/inch",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 41,
            "metric": "Tear Strength",
            "cluster": "Layer 4 - Exosuit",
            "subCluster": "",
            "unit": "lbs/inch",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 42,
            "metric": "Peel Adhesion",
            "cluster": "Layer 4 - Exosuit",
            "subCluster": "",
            "unit": "lbs",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 43,
            "metric": "Air Permeability",
            "cluster": "Layer 4 - Exosuit",
            "subCluster": "",
            "unit": "Psi",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 44,
            "metric": "Flame Resistance (Vertical) - Burn Time",
            "cluster": "Layer 4 - Exosuit",
            "subCluster": "",
            "unit": "Seconds",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 45,
            "metric": "Flame Resistance (Vertical) - Char Length",
            "cluster": "Layer 4 - Exosuit",
            "subCluster": "",
            "unit": "Inches",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 46,
            "metric": "Density",
            "cluster": "Layer 4 - Exosuit",
            "subCluster": "",
            "unit": "kg/mm3",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 47,
            "metric": "Youngs Modulus",
            "cluster": "Layer 4 - Exosuit",
            "subCluster": "",
            "unit": "MPA",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },

          {
            "id": 48,
            "metric": "Gloves",
            "cluster": "",
            "subCluster": "",
            "unit": "",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 49,
            "metric": "Sensitivity",
            "cluster": "Gloves",
            "subCluster": "",
            "unit": "N/m2",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 50,
            "metric": "Finger Tactility",
            "cluster": "Gloves",
            "subCluster": "",
            "unit": "◦",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 51,
            "metric": "Grip Test",
            "cluster": "Gloves",
            "subCluster": "",
            "unit": "Kgs",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },

          {
            "id": 52,
            "metric": "Helmet",
            "cluster": "",
            "subCluster": "",
            "unit": "",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 53,
            "metric": "Visibility",
            "cluster": "Helmet",
            "subCluster": "",
            "unit": "Lumen",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 54,
            "metric": "Humidity",
            "cluster": "Helmet",
            "subCluster": "",
            "unit": "%",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 55,
            "metric": "Video",
            "cluster": "Helmet",
            "subCluster": "",
            "unit": "MP4",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },

          {
            "id": 56,
            "metric": "Boots",
            "cluster": "",
            "subCluster": "",
            "unit": "",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 57,
            "metric": "Temperature",
            "cluster": "Boots",
            "subCluster": "",
            "unit": "",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 58,
            "metric": "Stability / Grip",
            "cluster": "Boots",
            "subCluster": "",
            "unit": "",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },

          {
            "id": 59,
            "metric": "Life Support",
            "cluster": "",
            "subCluster": "",
            "unit": "",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 60,
            "metric": "Temperature",
            "cluster": "Life Support",
            "subCluster": "",
            "unit": "",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 61,
            "metric": "Stability / Grip",
            "cluster": "Life Support",
            "subCluster": "",
            "unit": "",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },

          {
            "id": 62,
            "metric": "Life Support",
            "cluster": "",
            "subCluster": "",
            "unit": "",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 63,
            "metric": "Oxygen",
            "cluster": "Life Support",
            "subCluster": "",
            "unit": "10 MPa",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 64,
            "metric": "Water",
            "cluster": "Life Support",
            "subCluster": "",
            "unit": "5 Liters",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 65,
            "metric": "Oxygen - 2",
            "cluster": "Life Support",
            "subCluster": "",
            "unit": "10 MPa",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 66,
            "metric": "Water - 2",
            "cluster": "Life Support",
            "subCluster": "",
            "unit": "2.5 Liters",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },

          {
            "id": 67,
            "metric": "HVAC System",
            "cluster": "Life Support",
            "subCluster": "",
            "unit": "",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 68,
            "metric": "Chiller",
            "cluster": "Life Support",
            "subCluster": "HVAC System",
            "unit": "Green",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 69,
            "metric": "Water Flow",
            "cluster": "Life Support",
            "subCluster": "HVAC System",
            "unit": "LPM",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },

          {
            "id": 70,
            "metric": "Power",
            "cluster": "Power",
            "subCluster": "",
            "unit": "",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 71,
            "metric": "Battery Cells",
            "cluster": "Power",
            "subCluster": "",
            "unit": "",
            "unitRange": "40",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 72,
            "metric": "Capacity",
            "cluster": "Power",
            "subCluster": "",
            "unit": "Watt/Hrs",
            "unitRange": "390",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 73,
            "metric": "State of Charge (SOC)",
            "cluster": "Power",
            "subCluster": "",
            "unit": "%",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 74,
            "metric": "State of Health (SOH)",
            "cluster": "Power",
            "subCluster": "",
            "unit": "%",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },

          {
            "id": 75,
            "metric": "Avionics",
            "cluster": "Avionics",
            "subCluster": "",
            "unit": "",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 76,
            "metric": "Sensors",
            "cluster": "Avionics",
            "subCluster": "",
            "unit": "",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 77,
            "metric": "Cables",
            "cluster": "Avionics",
            "subCluster": "",
            "unit": "",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 78,
            "metric": "Electromechanical Components",
            "cluster": "Avionics",
            "subCluster": "",
            "unit": "",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },

          {
            "id": 79,
            "metric": "Suit Configuration",
            "cluster": "Suit Configuration",
            "subCluster": "",
            "unit": "",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 80,
            "metric": "Suit Operating Pressure",
            "cluster": "Suit Configuration",
            "subCluster": "",
            "unit": "21KPA",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 81,
            "metric": "Suit Weight",
            "cluster": "Suit Configuration",
            "subCluster": "",
            "unit": "40Kg",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 82,
            "metric": "Mechanical Tools Inventory",
            "cluster": "Suit Configuration",
            "subCluster": "",
            "unit": "",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 83,
            "metric": "Position & Tracking",
            "cluster": "Suit Configuration",
            "subCluster": "",
            "unit": "",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },

          {
            "id": 84,
            "metric": "Suit Biomechanics",
            "cluster": "Suit Biomechanics",
            "subCluster": "",
            "unit": "",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },

          {
            "id": 85,
            "metric": "Postural Stability",
            "cluster": "Suit Biomechanics",
            "subCluster": "",
            "unit": "0.95",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 86,
            "metric": "Dynamic Postural Stability Index (PSI)",
            "cluster": "Suit Biomechanics",
            "subCluster": "Postural Stability",
            "unit": "0.95",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 87,
            "metric": "Variability of Ground Reaction Forces (GRF)",
            "cluster": "Suit Biomechanics ",
            "subCluster": "Postural Stability",
            "unit": "CV/SD",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 88,
            "metric": "Limits of Stability",
            "cluster": "Suit Biomechanics ",
            "subCluster": "Postural Stability",
            "unit": "Cms",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 89,
            "metric": "Center of Pressure (COP) length & excursion",
            "cluster": "Suit Biomechanics ",
            "subCluster": "Postural Stability",
            "unit": "Cms",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },

          {
            "id": 90,
            "metric": "Spatiotemporal",
            "cluster": "Suit Biomechanics",
            "subCluster": "",
            "unit": "",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 91,
            "metric": "Speed",
            "cluster": "Suit Biomechanics",
            "subCluster": "Spatiotemporal",
            "unit": "m/s",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 92,
            "metric": "Stride Rate",
            "cluster": "Suit Biomechanics",
            "subCluster": "Spatiotemporal",
            "unit": "Hz",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 93,
            "metric": "Stride Length",
            "cluster": "Suit Biomechanics",
            "subCluster": "Spatiotemporal",
            "unit": "m",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 94,
            "metric": "Duration of Stance, Loading, Propulsion",
            "cluster": "Suit Biomechanics",
            "subCluster": "Spatiotemporal",
            "unit": "s/%",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 95,
            "metric": "Step Width",
            "cluster": "Suit Biomechanics",
            "subCluster": "Spatiotemporal",
            "unit": "m",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },

          {
            "id": 96,
            "metric": "Kinetics - Ground Reaction Forces",
            "cluster": "Suit Biomechanics",
            "subCluster": "",
            "unit": "",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 97,
            "metric": "Peak vertical & anterior/posterior GRF",
            "cluster": "Suit Biomechanics",
            "subCluster": "Kinetics - Ground Reaction Forces",
            "unit": "N",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 99,
            "metric": "Peak Medio-lateral GRF",
            "cluster": "Suit Biomechanics",
            "subCluster": "Kinetics - Ground Reaction Forces",
            "unit": "N",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 100,
            "metric": "Minimum vertical GRF",
            "cluster": "Suit Biomechanics",
            "subCluster": "Kinetics - Ground Reaction Forces",
            "unit": "N",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 101,
            "metric": "Loading & Propulsion rates",
            "cluster": "Suit Biomechanics",
            "subCluster": "Kinetics - Ground Reaction Forces",
            "unit": "N/s",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 102,
            "metric": "Joint Movements",
            "cluster": "Suit Biomechanics",
            "subCluster": "Kinetics - Ground Reaction Forces",
            "unit": "N/m",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },

          {
            "id": 103,
            "metric": "Kinetics - Insole Forces",
            "cluster": "Suit Biomechanics",
            "subCluster": "",
            "unit": "",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 104,
            "metric": "Peak Normal Force (PNF)",
            "cluster": "Suit Biomechanics",
            "subCluster": "Kinetics - Insole Forces",
            "unit": "N",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 105,
            "metric": "Minimal normal force (MNF)",
            "cluster": "Suit Biomechanics",
            "subCluster": "Kinetics - Insole Forces",
            "unit": "N",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 106,
            "metric": "PNF at rearfoot, midfoot and forefoot",
            "cluster": "Suit Biomechanics",
            "subCluster": "Kinetics - Insole Forces",
            "unit": "N",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },

          {
            "id": 107,
            "metric": "Kinetics - Exosuit",
            "cluster": "Suit Biomechanics",
            "subCluster": "",
            "unit": "",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 108,
            "metric": "Measured Torque",
            "cluster": "Suit Biomechanics",
            "subCluster": "Kinetics - Exosuit",
            "unit": "Nm",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 109,
            "metric": "Force applied by exosuit layers",
            "cluster": "Suit Biomechanics",
            "subCluster": "Kinetics - Exosuit",
            "unit": "N",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },

          {
            "id": 110,
            "metric": "Kinematics - Exosuit",
            "cluster": "Suit Biomechanics",
            "subCluster": "",
            "unit": "",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 111,
            "metric": "Peak Joint Angles (max & min)",
            "cluster": "Suit Biomechanics",
            "subCluster": "Kinematics - Exosuit",
            "unit": "◦Degrees",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 112,
            "metric": "Range of Motion",
            "cluster": "Suit Biomechanics",
            "subCluster": "Kinematics - Exosuit",
            "unit": "◦Degrees",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },

          {
            "id": 113,
            "metric": "INJURY PROTECTION",
            "cluster": "Suit Biomechanics",
            "subCluster": "",
            "unit": "",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 114,
            "metric": "Kinematics-Peak Joint Angles (max & min)",
            "cluster": "Suit Biomechanics",
            "subCluster": "INJURY PROTECTION",
            "unit": "◦",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 115,
            "metric": "Kinematics - Range of Motion",
            "cluster": "Suit Biomechanics",
            "subCluster": "INJURY PROTECTION",
            "unit": "◦",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 116,
            "metric": "Force applied /measured by devices",
            "cluster": "Suit Biomechanics",
            "subCluster": "INJURY PROTECTION",
            "unit": "N",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 117,
            "metric": "Torque measured by devices",
            "cluster": "Suit Biomechanics",
            "subCluster": "INJURY PROTECTION",
            "unit": "Nm",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 118,
            "metric": "Internal joint moments",
            "cluster": "Suit Biomechanics",
            "subCluster": "INJURY PROTECTION",
            "unit": "Nm",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 119,
            "metric": "Muscle forces",
            "cluster": "Suit Biomechanics",
            "subCluster": "INJURY PROTECTION",
            "unit": "N/Kg",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },

          {
            "id": 120,
            "metric": "Suit Positioning",
            "cluster": "Suit Positioning",
            "subCluster": "",
            "unit": "",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 121,
            "metric": "GPS",
            "cluster": "Suit Positioning",
            "subCluster": "Suit Positioning",
            "unit": "NMEA string",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 122,
            "metric": "NAVIC",
            "cluster": "Suit Positioning",
            "subCluster": "Suit Positioning",
            "unit": "String",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },

          {
            "id": 123,
            "metric": "Suit Motion Capture",
            "cluster": "Suit Motion Capture",
            "subCluster": "",
            "unit": "",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 124,
            "metric": "IMU - 1",
            "cluster": "Suit Motion Capture",
            "subCluster": "Suit Motion Capture",
            "unit": "m/s2",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 125,
            "metric": "IMU - 2",
            "cluster": "Suit Motion Capture",
            "subCluster": "Suit Motion Capture",
            "unit": "m/s2",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 126,
            "metric": "IMU - 3",
            "cluster": "Suit Motion Capture",
            "subCluster": "Suit Motion Capture",
            "unit": "m/s2",
            "unitRange": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          }
    ]
  })

  return (
    <HumanDataContext.Provider value={{ data, setData }}>
      {children}
    </HumanDataContext.Provider>
  );
}

export default HumanDataWrapper;