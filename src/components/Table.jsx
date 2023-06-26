import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL, config } from '../utils/api';
import 'react-toastify/dist/ReactToastify.css';

function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  });

  // Fetch data from the API
  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_URL}/report`, config);
      // console.log(response,"response")
      setData(response?.data?.data?.vehicles);   //populate the data array with the response data vehicles
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-gray-500 text-sm font-semibold">
          Report
        </p>
      </div>
      <div className="overflow-x-auto max-w-full md:mx-auto mt-2">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#EDEEF3] h-12">
              <th className="text-[#092468] px-4 py-2 text-start">Model Name</th>
              <th className="text-[#092468] px-4 py-2 text-start">Price</th>
              <th className="text-[#092468] px-4 py-2 text-start">Owner</th>
              <th className="text-[#092468] px-4 py-2 text-start">Manufacture Year</th>
              <th className="text-[#092468] px-4 py-2 text-start">Manufacture Company</th>
            </tr>
          </thead>
          <tbody>
            {data
              .map((item) => (
                <tr className="bg-[#434343] bg-opacity-[3%] border border-gray-100" key={item._id}>
                  <td className="px-4 py-2">{item.modelName}</td>
                  <td className="px-4 py-2">{item.price}</td>
                  <td className="px-4 py-2">{item?.owner?.names}</td>
                  <td className="px-4 py-2">{item.manufactureYear}</td>
                  <td className="px-4 py-2">{item.manufactureCompany}</td>
                </tr>
              ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default Table;
