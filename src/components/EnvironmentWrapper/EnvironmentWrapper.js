import React from 'react'
import  { useState } from 'react';
import EnvironmentDataContext from 'contexts/EnvironmentDataContext';

 const EnvironmentWrapper = ({children}) => {

  const [data, setData] = useState({
        
    "earthMetrics": [
      {
        "id": 2,
        "metric": "Surface Radiation",
        "unit": "342 w/m2",
        "cluster": "Earth",
        "subCluster": "",
        "range": "",
        "extraction": "",
        "frequency": "",
        "standard": ""
      },
      {
        "id": 3,
        "metric": "Gravity",
        "unit": "9.807 m/s²",
        "cluster": "Earth",
        "subCluster": "",
        "range": "",
        "extraction": "",
        "frequency": "",
        "standard": ""
      },
      {
        "id": 4,
        "metric": "Atmospheric Gases",
        "unit": "78% N2",
        "cluster": "Earth",
        "subCluster": "",
        "range": "",
        "extraction": "",
        "frequency": "",
        "standard": ""
      },
      {
        "id": 5,
        "metric": "Wind Speed",
        "unit": "12 Km/Hour",
        "cluster": "Earth",
        "subCluster": "",
        "range": "",
        "extraction": "",
        "frequency": "",
        "standard": ""
      },
      {
        "id": 6,
        "metric": "Mean Temperature",
        "unit": "15 °C",
        "cluster": "Earth",
        "subCluster": "",
        "range": "",
        "extraction": "",
        "frequency": "",
        "standard": ""
      },
      {
        "id": 7,
        "metric": "Surface Pressure",
        "unit": "1 Bar",
        "cluster": "Earth",
        "subCluster": "",
        "range": "",
        "extraction": "",
        "frequency": "",
        "standard": ""
      },
      {
        "id": 8,
        "metric": "Length of Day",
        "unit": "24 Hours",
        "cluster": "Earth",
        "subCluster": "",
        "range": "",
        "extraction": "",
        "frequency": "",
        "standard": ""
      },
      {
        "id": 9,
        "metric": "Water Depth",
        "unit": "100 Meters",
        "cluster": "Earth",
        "subCluster": "",
        "range": "",
        "extraction": "",
        "frequency": "",
        "standard": ""
      }
    ],

    "moonMetrics": [
      {
        "id": 11,
        "metric": "Surface Radiation",
        "unit": "60 mSv/hr",
        "cluster": "Moon",
        "subCluster": "",
        "range": "",
        "extraction": "",
        "frequency": "",
        "standard": ""
      },
      {
        "id": 12,
        "metric": "Gravity",
        "unit": "1.6 m/s²",
        "cluster": "Moon",
        "subCluster": "",
        "range": "",
        "extraction": "",
        "frequency": "",
        "standard": ""
      },
      {
        "id": 13,
        "metric": "Atmospheric Gases",
        "unit": "33% Helium",
        "cluster": "Moon",
        "subCluster": "",
        "range": "",
        "extraction": "",
        "frequency": "",
        "standard": ""
      },
      {
        "id": 14,
        "metric": "Wind Speed",
        "unit": "0 Km/Hour",
        "cluster": "Moon",
        "subCluster": "",
        "range": "",
        "extraction": "",
        "frequency": "",
        "standard": ""
      },
      {
        "id": 15,
        "metric": "Mean Temperature",
        "unit": "-20°C",
        "cluster": "Moon",
        "subCluster": "",
        "range": "",
        "extraction": "",
        "frequency": "",
        "standard": ""
      },
      {
        "id": 16,
        "metric": "Surface Pressure",
        "unit": "0 Bar",
        "cluster": "Moon",
        "subCluster": "",
        "range": "",
        "extraction": "",
        "frequency": "",
        "standard": ""
      },
      {
        "id": 17,
        "metric": "Length of Day",
        "unit": "708.7 Hours",
        "cluster": "Moon",
        "subCluster": "",
        "range": "",
        "extraction": "",
        "frequency": "",
        "standard": ""
      }
    ],
    "marsMetrics": [
      {
        "id": 19,
        "metric": "Surface Radiation",
        "unit": "300 mSv/year",
        "cluster": "Mars",
        "subCluster": "",
        "range": "",
        "extraction": "",
        "frequency": "",
        "standard": ""
      },
      {
        "id": 20,
        "metric": "Gravity",
        "unit": "3.7 m/s²",
        "cluster": "Mars",
        "subCluster": "",
        "range": "",
        "extraction": "",
        "frequency": "",
        "standard": ""
      },
      {
        "id": 21,
        "metric": "Atmospheric Gases",
        "unit": "95% CO2",
        "cluster": "Mars",
        "subCluster": "",
        "range": "",
        "extraction": "",
        "frequency": "",
        "standard": ""
      },
      {
        "id": 22,
        "metric": "Wind Speed",
        "unit": "20 Km/Hour",
        "cluster": "Mars",
        "subCluster": "",
        "range": "",
        "extraction": "",
        "frequency": "",
        "standard": ""
      },
      {
        "id": 23,
        "metric": "Mean Temperature",
        "unit": "-65°C",
        "cluster": "Mars",
        "subCluster": "",
        "range": "",
        "extraction": "",
        "frequency": "",
        "standard": ""
      },
      {
        "id": 24,
        "metric": "Surface Pressure",
        "unit": "0.01 Bar",
        "cluster": "Mars",
        "subCluster": "",
        "range": "",
        "extraction": "",
        "frequency": "",
        "standard": ""
      },
      {
        "id": 25,
        "metric": "Length of Day",
        "unit": "24.6 Hours",
        "cluster": "Mars",
        "subCluster": "",
        "range": "",
        "extraction": "",
        "frequency": "",
        "standard": ""
      }
    ],
    "mercuryMetrics": [
      {
        "id": 27,
        "metric": "Surface Radiation",
        "unit": "msv/year",
        "cluster": "Mercury",
        "subCluster": "",
        "range": "",
        "extraction": "",
        "frequency": "",
        "standard": ""
      },
      {
        "id": 28,
        "metric": "Gravity",
        "unit": "m/s²",
        "cluster": "Mercury",
        "subCluster": "",
        "range": "",
        "extraction": "",
        "frequency": "",
        "standard": ""
      },
      {
        "id": 29,
        "metric": "Atmospheric Gases",
        "unit": "CO2",
        "cluster": "Mercury",
        "subCluster": "",
        "range": "",
        "extraction": "",
        "frequency": "",
        "standard": ""
      },
      {
        "id": 30,
        "metric": "Wind Speed",
        "unit": "Km/Hour",
        "cluster": "Mercury",
        "subCluster": "",
        "range": "",
        "extraction": "",
        "frequency": "",
        "standard": ""
      },
      {
        "id": 31,
        "metric": "Mean Temperature",
        "unit": "-°C",
        "cluster": "Mercury",
        "subCluster": "",
        "range": "",
        "extraction": "",
        "frequency": "",
        "standard": ""
      },
      {
        "id": 32,
        "metric": "Surface Pressure",
        "unit": "Bar",
        "cluster": "Mercury",
        "subCluster": "",
        "range": "",
        "extraction": "",
        "frequency": "",
        "standard": ""
      },
      {
        "id": 33,
        "metric": "Length of Day",
        "unit": "Hours",
        "cluster": "Mercury",
        "subCluster": "",
        "range": "",
        "extraction": "",
        "frequency": "",
        "standard": ""
      }
    ]
  })

  return (
    <EnvironmentDataContext.Provider value={{ data, setData }}>
      {children}
    </EnvironmentDataContext.Provider>
  );
}

export default EnvironmentWrapper;