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





const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Enable CORS for all routes
app.use(cors({
  origin: 'https://bloodlink-donate.vercel.app' // Replace with your frontend URL
}));

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Path to your db.json file
const dbPath = path.join(__dirname, 'db.json');

// Helper function to read the db.json file
const readDb = () => {
  const data = fs.readFileSync(dbPath);
  return JSON.parse(data);
};

// Helper function to write to the db.json file
const writeDb = (data) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};

// GET /api/donors - Retrieve all donors
app.get('/api/donors', (req, res) => {
  const db = readDb();
  res.json(db.donors);
});

// POST /api/donors - Create a new donor
app.post('/api/donors', (req, res) => {
  console.log('Received data:', req.body);
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
});

// DELETE /api/donors/:id - Delete a donor by ID
app.delete('/api/donors/:id', (req, res) => {
  const db = readDb();
  const donorId = parseInt(req.params.id);
  const donorIndex = db.donors.findIndex((donor) => donor.id === donorId);
  if (donorIndex !== -1) {
    const deletedDonor = db.donors.splice(donorIndex, 1);
    writeDb(db);
    res.json(deletedDonor);
  } else {
    res.status(404).json({ message: 'Donor not found' });
  }
});

// GET /api/donors/:id - Retrieve a single donor by ID
app.get('/api/donors/:id', (req, res) => {
  const db = readDb();
  const donorId = parseInt(req.params.id);
  const donor = db.donors.find(d => d.id === donorId);
  if (donor) {
    res.json(donor);
  } else {
    res.status(404).json({ message: 'Donor not found' });
  }
});

// PUT /api/donors/:id - Update a donor by ID
app.put('/api/donors/:id', (req, res) => {
  const db = readDb();
  const donorId = parseInt(req.params.id);
  const donorIndex = db.donors.findIndex(d => d.id === donorId);
  if (donorIndex !== -1) {
    const updatedDonor = { ...db.donors[donorIndex], ...req.body };
    db.donors[donorIndex] = updatedDonor;
    writeDb(db);
    res.json(updatedDonor);
  } else {
    res.status(404).json({ message: 'Donor not found' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});