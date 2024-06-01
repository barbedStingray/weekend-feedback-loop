import axios from 'axios';

const fetchSystems = async ({ queryKey }) => {
    const planet = queryKey[1];
    console.log('FETCH systems', planet);

    try {
        const response = await axios.get(`/fetch`);
        // console.log('FETCH systems', response.data);
        return response.data;
    } catch (error) {
        // console.error('Error in fetching systems:', error);
        throw error;
    }
};

export default fetchSystems;