import React from 'react'
import  { useState } from 'react';
import MedicalDataContext from 'contexts/MedicalDataContext';

 const MedicalDataWrapper = ({children}) => {

  const [data, setData] = useState({

    "labs": [
        {
          "id": 1,
          "metric": "Laboratory - 01 Routine Biochemistry",
          "unit": "",
          "cluster": "",
          "subCluster": "",
          "range": "",
          "extraction": "",
          "frequency": "",
          "standard": ""
        },
        {
          "id": 2,
          "metric": "Laboratory - 02 Special Biochemistry",
          "unit": "",
          "cluster": "",
          "subCluster": "",
          "range": "",
          "extraction": "",
          "frequency": "",
          "standard": ""
        },
        {
          "id": 3,
          "metric": "Laboratory - 03 Immunoassays",
          "unit": "",
          "cluster": "",
          "subCluster": "",
          "range": "",
          "extraction": "",
          "frequency": "",
          "standard": ""
        },
        {
          "id": 4,
          "metric": "Laboratory - 04 Coagulation, ELISA & Autoimmunity",
          "unit": "",
          "cluster": "",
          "subCluster": "",
          "range": "",
          "extraction": "",
          "frequency": "",
          "standard": ""
        },
        {
          "id": 5,
          "metric": "Laboratory - Clinical Pathology",
          "unit": "",
          "cluster": "",
          "subCluster": "",
          "range": "",
          "extraction": "",
          "frequency": "",
          "standard": ""
        },
        {
          "id": 6,
          "metric": "Laboratory - Cytology",
          "unit": "",
          "cluster": "",
          "subCluster": "",
          "range": "",
          "extraction": "",
          "frequency": "",
          "standard": ""
        },
        {
          "id": 7,
          "metric": "Laboratory - Histopathology",
          "unit": "",
          "cluster": "",
          "subCluster": "",
          "range": "",
          "extraction": "",
          "frequency": "",
          "standard": ""
        },
        {
          "id": 8,
          "metric": "Laboratory - Microbiology & Serology",
          "unit": "",
          "cluster": "",
          "subCluster": "",
          "range": "",
          "extraction": "",
          "frequency": "",
          "standard": ""
        },
        {
          "id": 9,
          "metric": "2D-Echo",
          "unit": "",
          "cluster": "",
          "subCluster": "",
          "range": "",
          "extraction": "",
          "frequency": "",
          "standard": ""
        },
        {
          "id": 10,
          "metric": "X-Ray",
          "unit": "",
          "cluster": "",
          "subCluster": "",
          "range": "",
          "extraction": "",
          "frequency": "",
          "standard": ""
        },
        {
          "id": 11,
          "metric": "Dopplers",
          "unit": "",
          "cluster": "",
          "subCluster": "",
          "range": "",
          "extraction": "",
          "frequency": "",
          "standard": ""
        },
        {
          "id": 12,
          "metric": "Endoscopy",
          "unit": "",
          "cluster": "",
          "subCluster": "",
          "range": "",
          "extraction": "",
          "frequency": "",
          "standard": ""
        },
        {
          "id": 13,
          "metric": "TMT",
          "unit": "",
          "cluster": "",
          "subCluster": "",
          "range": "",
          "extraction": "",
          "frequency": "",
          "standard": ""
        },
        {
          "id": 14,
          "metric": "Ultrasound",
          "unit": "",
          "cluster": "",
          "subCluster": "",
          "range": "",
          "extraction": "",
          "frequency": "",
          "standard": ""
        },
        {
          "id": 15,
          "metric": "Radiology",
          "unit": "",
          "cluster": "",
          "subCluster": "",
          "range": "",
          "extraction": "",
          "frequency": "",
          "standard": ""
        },
        {
          "id": 16,
          "metric": "ECG",
          "unit": "",
          "cluster": "",
          "subCluster": "",
          "range": "",
          "extraction": "",
          "frequency": "",
          "standard": ""
        },
        {
          "id": 17,
          "metric": "Fitness Assessment & Biomechanics",
          "unit": "",
          "cluster": "",
          "subCluster": "",
          "range": "",
          "extraction": "",
          "frequency": "",
          "standard": ""
        },
        {
          "id": 18,
          "metric": "DNA",
          "unit": "",
          "cluster": "",
          "subCluster": "",
          "range": "",
          "extraction": "",
          "frequency": "",
          "standard": ""
        },
        {
          "id": 19,
          "metric": "Nutritional",
          "unit": "",
          "cluster": "",
          "subCluster": "",
          "range": "",
          "extraction": "",
          "frequency": "",
          "standard": ""
        },

        {
            "id": 20,
            "metric": "Hearing & Vision",
            "unit": "",
            "cluster": "",
            "subCluster": "",
            "range": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
        },

        {
            "id": 21,
            "metric": "Respiratory",
            "unit": "",
            "cluster": "",
            "subCluster": "",
            "range": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 22,
            "metric": "Cardiovascular",
            "unit": "",
            "cluster": "",
            "subCluster": "",
            "range": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 23,
            "metric": "Vaccination",
            "unit": "",
            "cluster": "",
            "subCluster": "",
            "range": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 24,
            "metric": "Radiation",
            "unit": "",
            "cluster": "",
            "subCluster": "",
            "range": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 25,
            "metric": "Bone Density",
            "unit": "",
            "cluster": "",
            "subCluster": "",
            "range": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 26,
            "metric": "Muscle Mapping",
            "unit": "",
            "cluster": "",
            "subCluster": "",
            "range": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 27,
            "metric": "Fertility",
            "unit": "",
            "cluster": "",
            "subCluster": "",
            "range": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 28,
            "metric": "Cognitive",
            "unit": "",
            "cluster": "",
            "subCluster": "",
            "range": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          },
          {
            "id": 29,
            "metric": "Public Health Records (Google Cancer Genome Atlas)",
            "unit": "",
            "cluster": "",
            "subCluster": "",
            "range": "",
            "extraction": "",
            "frequency": "",
            "standard": ""
          }

    ]
        
  })

  return (
    <MedicalDataContext.Provider value={{ data, setData }}>
      {children}
    </MedicalDataContext.Provider>
  );
}

export default MedicalDataWrapper;