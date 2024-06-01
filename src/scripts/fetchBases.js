import axios from 'axios';

const fetchBases = async ({ queryKey }) => {
    const planet = queryKey[1];
    // console.log('FETCH planet', planet);

    try {
        const response = await axios.get(`/fetch/bases/${planet}`);
        // console.log('FETCH response bases', response.data);
        return response.data;
    } catch (error) {
        // console.error('Error in fetching bases:', error);
        throw error;
    }
};

export default fetchBases;