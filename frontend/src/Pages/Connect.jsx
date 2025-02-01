// import React, { useState, useEffect } from 'react';
// import backgroundImage from '../Images/backgroundImage.png';
// import { Link } from 'react-router-dom';

// const ConnectPage = () => {

//   const [searchQuery, setSearchQuery] = useState('');
//   const [donors, setDonors] = useState([]);


//   const filteredDonors = donors.filter(donor =>
//     donor.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   return (
//     <section className="py-6 bg-red-50 bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
//       <div className="max-w-7xl mx-auto xs:p-1 ms:p-2 lg:p-0 xl:p-0 font-customFont">
//         <h1 className="text-3xl font-bold mb-3 text-center xs:mt-5 lg:mt-0 xl:mt-0">
//           Connect with <span className="text-red-500">Blood Donors</span>
//         </h1>
//         <p className="xs:text-sm lg:text-lg xl:text-lg text-center mb-6 text-white bg-black lg:mx-52 p-3 rounded-lg font-bold">
//           Seeking blood donors urgently! Your donation can save lives. Join us today!
//         </p>

//         {/* Search Input */}
//         <div className="flex justify-center mb-4">
//           <input
//             type="text"
//             placeholder="Search Donors..."
//             value={searchQuery}
//             onChange={handleSearchChange}
//             className="border-4 border-black rounded-md p-2 w-full max-w-lg"
//           />
//         </div>

//         <div className="overflow-auto rounded-xl xs:text-sm lg:text-xl xl:text-xl font-customFont xs:px-1 ms:px-1 lg:px-16 xl:px-16">
//           <table className="min-w-full lg:w-full xs:w-20 bg-red-50 border-4 border-black text-center shadow-md font-customFont xs:mb-10">
//             <thead>
//               <tr className="bg-red-300 text-gray-700">
//                 <th className="py-3 px-4 border-b">Donor Name</th>
//                 <th className="py-3 px-4 border-b text-red-600">Blood Type</th>
//                 <th className="py-3 px-4 border-b">Location (District)</th>
//                 <th className="py-3 px-4 border-b"></th>
//                 <th className="py-3 px-4 border-b">Contact Number</th>
  

//               </tr>
//             </thead>
//             <tbody>
//               {filteredDonors.map((donor, index) => (
//                 <tr key={index} className="hover:bg-red-100">
//                   <td className="py-3 px-4 border-b">{donor.name}</td>
//                   <td className="py-3 px-4 border-b text-red-600">{donor.bloodType}</td>
//                   <td className="py-3 px-4 border-b">{donor.district}</td>
//                   <td className="py-3 px-4 border-b">{donor.phone}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <p className="xs:text-sm lg:text-lg xl:text-lg text-center  text-white bg-black lg:mx-72 p-3 rounded-lg font-bold">
//           Delete your Donatoin Record here:  <Link to="/delete"><span className='bg-red-500 px-2 py-1 rounded-md hover:text-red-500  hover:bg-red-50 ml-2'>Delete</span></Link>
//         </p>
//           </div>
//       </div>
//     </section>
//   );
// };

// export default ConnectPage;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



import React, { useState, useEffect } from 'react';
import backgroundImage from '../Images/backgroundImage.png';
import { Link } from 'react-router-dom';

const Connect = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [donors, setDonors] = useState([]);

  // Fetch donor data from the JSON server
  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const response = await fetch('https://blood-link-server-phi.vercel.app/api/donors'); // Adjust the endpoint as necessary
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setDonors(data); // Assuming the data is in the correct format
      } catch (error) {
        console.error('Error fetching donor data:', error);
      }
    };

    fetchDonors();
  }, []); // Empty dependency array means this runs once when the component mounts

  const filteredDonors = donors.filter(donor =>
    donor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <section 
      className="py-6 bg-red-50 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-w-7xl mx-auto xs:p-1 ms:p-2 lg:p-0 xl:p-0 font-customFont">
        <h1 className="text-3xl font-bold mb-3 text-center xs:mt-5 lg:mt-0 xl:mt-0">
          Connect with <span className="text-red-500">Blood Donors</span>
        </h1>
        <p className="xs:text-sm lg:text-lg xl:text-lg text-center mb-6 text-white bg-black lg:mx-52 p-3 rounded-lg font-bold">
          Seeking blood donors urgently! Your donation can save lives. Join us today!
        </p>

        {/* Search Input */}
        <div className="flex justify-center mb-4">
          <input
            type="text"
            placeholder="Search Donors..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="border-4 border-black rounded-md p-2 w-full max-w-lg"
          />
        </div>

        <div className="overflow-auto rounded-xl xs:text-sm lg:text-xl xl:text-xl font-customFont xs:px-1 ms:px-1 lg:px-16 xl:px-16">
          <table className="min-w-full lg:w-full xs:w-20 bg-red-50 border-4 border-black text-center shadow-md font-customFont xs:mb-10">
            <thead>
              <tr className="bg-red-300 text-gray-700">
                <th className="py-3 px-4 border-b">Donor Name</th>
                <th className="py-3 px-4 border-b text-red-600">Blood Type</th>
                <th className="py-3 px-4 border-b">Location (District)</th>
                <th className="py-3 px-4 border-b">Contact Number</th>
              </tr>
            </thead>
            <tbody>
              {filteredDonors.map((donor, index) => (
                <tr key={index} className="hover:bg-red-100">
                  <td className="py-3 px-4 border-b">{donor.name}</td>
                  <td className="py-3 px-4 border-b text-red-600">{donor.bloodType}</td>
                  <td className="py-3 px-4 border-b">{donor.district}</td>
                  <td className="py-3 px-4 border-b">{donor.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="xs:text-sm lg:text-lg xl:text-lg text-center text-white bg-black lg:mx-72 p-3 rounded-lg font-bold">
            Delete your Donation Record here:  
            <Link to="/delete">
              <span className='bg-red-500 px-2 py-1 rounded-md hover:text-red-500 hover:bg-red-50 ml-2'>Delete</span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Connect;