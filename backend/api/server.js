// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const fs = require('fs');
// const path = require('path');

// const app = express();
// const PORT = 3000;

// // Enable CORS for all routes
// app.use(cors({
//   origin: 'https://bloodlink-donate.vercel.app' // Replace with your frontend URL
// }));

// // Middleware to parse JSON bodies
// app.use(bodyParser.json());

// // Path to your db.json file
// const dbPath = path.join(__dirname, 'db.json');

// // Helper function to read the db.json file
// const readDb = () => {
//   const data = fs.readFileSync(dbPath);
//   return JSON.parse(data);
// };

// // Helper function to write to the db.json file
// const writeDb = (data) => {
//   fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
// };

// // GET /api/donors - Retrieve all donors
// app.get('/api/donors', (req, res) => {
//   const db = readDb();
//   res.json(db.donors); // Assuming your db.json has a "donors" array
// });


// // POST /api/donors - Create a new donor
// // app.post('/api/donors', (req, res) => {
// //   const db = readDb();
// //   const newDonor = req.body;
// //   newDonor.id = db.donors.length + 1; // Simple ID assignment
// //   db.donors.push(newDonor);
// //   writeDb(db);
// //   res.status(201).json(newDonor);
// // });

// app.post('/api/donors', (req, res) => {
//   console.log('Received data:', req.body); // Debugging line
//   try {
//       const db = readDb();
//       const newDonor = req.body;
//       newDonor.id = db.donors.length + 1;
//       db.donors.push(newDonor);
//       writeDb(db);
//       res.status(201).json(newDonor);
//   } catch (error) {
//       console.error('Error adding donor:', error);
//       res.status(500).json({ message: 'Internal Server Error' });
//   }
// });


// // DELETE /api/donors/:id - Delete a donor by ID
// app.delete('/api/donors/:id', (req, res) => {
//   const db = readDb();
//   const donorId = parseInt(req.params.id);
//   const donorIndex = db.donors.findIndex((donor) => donor.id === donorId);
//   if (donorIndex !== -1) {
//     const deletedDonor = db.donors.splice(donorIndex, 1);
//     writeDb(db);
//     res.json(deletedDonor);
//   } else {
//     res.status(404).json({ message: 'Donor not found' });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });





const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'db.json');

const readDb = () => {
  const data = fs.readFileSync(dbPath);
  return JSON.parse(data);
};

const writeDb = (data) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://bloodlink-donate.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end(); // Handle preflight request
    return;
  }

  if (req.method === 'GET') {
    const db = readDb();
    res.status(200).json(db.donors); // Assuming your db.json has a "donors" array
  } else if (req.method === 'POST') {
    try {
      const db = readDb();
      const newDonor = req.body;
      newDonor.id = db.donors.length + 1; // Simple ID assignment
      db.donors.push(newDonor);
      writeDb(db);
      res.status(201).json(newDonor);
    } catch (error) {
      console.error('Error adding donor:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else if (req.method === 'DELETE') {
    const donorId = parseInt(req.query.id);
    const db = readDb();
    const donorIndex = db.donors.findIndex((donor) => donor.id === donorId);
    if (donorIndex !== -1) {
      const deletedDonor = db.donors.splice(donorIndex, 1);
      writeDb(db);
      res.status(200).json(deletedDonor);
    } else {
      res.status(404).json({ message: 'Donor not found' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};