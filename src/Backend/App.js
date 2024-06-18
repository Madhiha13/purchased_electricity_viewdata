const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Dummy database data
const data = [
    { id: 1, emissionType: 'Purchased Electricity', facilty: 'Facility1', reportingYear: '2022-2023', month: 'January', typeofElectricity: 'GRID', quantity: 14478, units: 'KWH', emission: 876},
    { id: 2, emissionType: 'Purchased Electricity', facilty: 'Facility2', reportingYear: '2021-2022', month: 'February', typeofElectricity: 'GRID', quantity: 463, units: 'KWH', emission: 853},
    { id: 3, emissionType: 'Purchased Electricity', facilty: 'Facility3', reportingYear: '2018-2019', month: 'March', typeofElectricity: 'GRID', quantity: 19767, units: 'KWH', emission: 254},
    { id: 4, emissionType: 'Purchased Electricity', facilty: 'Facility4', reportingYear: '2020-2021', month: 'January', typeofElectricity: 'GRID', quantity: 80, units: 'KWH', emission: 233},
    { id: 5, emissionType: 'Purchased Electricity', facilty: 'Facility5', reportingYear: '2022-2023', month: 'March', typeofElectricity: 'GRID', quantity: 177, units: 'KWH', emission: 55},
    { id: 6, emissionType: 'Purchased Electricity', facilty: 'Facility2', reportingYear: '2017-2018', month: 'April', typeofElectricity: 'GRID', quantity: 677, units: 'KWH', emission: 507},
    { id: 7, emissionType: 'Purchased Electricity', facilty: 'Facility1', reportingYear: '2022-2023', month: 'May', typeofElectricity: 'GRID', quantity: 1600, units: 'KWH', emission: 1000}
];
app.use(cors());
app.get('/api/data', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
console.log(`your endpoint will be at :http://localhost:5000/api/data`);