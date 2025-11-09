import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Globe, Droplet } from 'lucide-react';
import { fetchDonors } from '../Services/donorService';

const Connect = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [bloodTypeFilter, setBloodTypeFilter] = useState('');
  const [districtFilter, setDistrictFilter] = useState('');
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadDonors();
  }, []);

  const loadDonors = async () => {
    try {
      setLoading(true);
      const data = await fetchDonors();
      setDonors(data);
      setError(null);
    } catch (err) {
      setError('Failed to load donors. Please try again later.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const uniqueBloodTypes = [
    ...new Set(donors.map((donor) => donor.bloodType)),
  ].sort();
  const uniqueDistricts = [
    ...new Set(donors.map((donor) => donor.district)),
  ].sort();

  const filteredDonors = donors.filter((donor) => {
    const nameMatches = donor.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const bloodTypeMatches =
      bloodTypeFilter === '' || donor.bloodType === bloodTypeFilter;
    const districtMatches =
      districtFilter === '' || donor.district === districtFilter;
    return nameMatches && bloodTypeMatches && districtMatches;
  });

  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const handleBloodTypeFilterChange = (e) =>
    setBloodTypeFilter(e.target.value);
  const handleDistrictFilterChange = (e) =>
    setDistrictFilter(e.target.value);

  return (
    <section className="bg-[#ffefe3] py-16 px-4 md:px-8 font-customFont min-h-screen">
      <div className="container mx-auto max-w-screen-xl">
        <div className="bg-white p-8 rounded-3xl shadow-lg mb-12 border-4 border-black">
          <h2 className="text-2xl font-bold text-red-700 mb-6 text-center">
            Find Your Donor
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search by Donor Name..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="relative">
              <Droplet
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <select
                value={bloodTypeFilter}
                onChange={handleBloodTypeFilterChange}
                className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="">All Blood Types</option>
                {uniqueBloodTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="relative">
              <Globe
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <select
                value={districtFilter}
                onChange={handleDistrictFilterChange}
                className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="">All Districts</option>
                {uniqueDistricts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto bg-white rounded-3xl shadow-lg border-4 border-black">
          {loading ? (
            <div className="text-center p-8 text-gray-600 text-lg">
              Loading donors...
            </div>
          ) : error ? (
            <div className="text-center p-8 text-red-600 text-lg font-semibold">
              {error}
            </div>
          ) : filteredDonors.length === 0 ? (
            <div className="text-center p-8 text-gray-600 text-lg">
              No donors found matching your criteria.
            </div>
          ) : (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-red-600 text-white">
                <tr>
                  <th className="py-4 px-6 text-left text-sm font-semibold uppercase tracking-wider rounded-tl-xl">
                    Donor Name
                  </th>
                  <th className="py-4 px-6 text-left text-sm font-semibold uppercase tracking-wider">
                    Blood Type
                  </th>
                  <th className="py-4 px-6 text-left text-sm font-semibold uppercase tracking-wider">
                    Location (District)
                  </th>
                  <th className="py-4 px-6 text-left text-sm font-semibold uppercase tracking-wider rounded-tr-xl">
                    Contact Number
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredDonors.map((donor) => (
                  <tr
                    key={donor.id}
                    className="hover:bg-red-50 transition-colors duration-200"
                  >
                    <td className="py-3 px-6 text-gray-800 whitespace-nowrap">
                      {donor.name}
                    </td>
                    <td className="py-3 px-6 font-bold text-red-600 whitespace-nowrap">
                      {donor.bloodType}
                    </td>
                    <td className="py-3 px-6 text-gray-700 whitespace-nowrap">
                      {donor.district}
                    </td>
                    <td className="py-3 px-6 text-gray-700 whitespace-nowrap">
                      <a
                        href={`tel:${donor.phone}`}
                        className="text-blue-600 hover:underline"
                      >
                        {donor.phone}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div className="mt-12 p-8 bg-red-700 rounded-3xl shadow-lg text-white text-center">
          <p className="text-xl md:text-2xl font-bold mb-4 leading-relaxed">
            Can't find a donor? <br className="md:hidden" />
            Consider becoming one yourself!
          </p>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Your generous act could be the lifeline someone desperately needs.
            Join our community of lifesavers today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/donate"
              className="inline-block bg-white text-red-700 font-bold px-8 py-3 rounded-full shadow-md hover:bg-red-100 hover:text-red-800 transition-colors duration-300 transform hover:-translate-y-1"
            >
              Register as a Donor
            </Link>
            <Link
              to="/contact"
              className="inline-block border-2 border-white text-white font-bold px-8 py-3 rounded-full shadow-md hover:bg-white hover:text-red-700 transition-colors duration-300 transform hover:-translate-y-1"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-700 text-lg font-medium">
            Need to manage your donor record? &nbsp;
            <Link
              to="/delete"
              className="text-red-600 hover:text-red-800 font-bold hover:underline transition-colors"
            >
              Delete your Donation Record here
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Connect;