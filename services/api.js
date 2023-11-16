import axios from 'axios';

const BASE_URL = 'https://mocki.io/v1/3a4b56bd-ad05-4b12-a181-1eb9a4f5ac8d';

export const fetchEmployees = async () => {
  try {
    const response = await axios.get(BASE_URL);

    console.log("api call 1st",response)
    console.log("api call 1st with data",response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching employees:', error);
    throw error;
  }
};
