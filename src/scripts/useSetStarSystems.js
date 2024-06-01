
import { useState, useEffect } from 'react';
import axios from 'axios';

const localCache = {}

export default function useSetStarSystems() {
    const [starSystemList, setStarSystemList] = useState([]);
    const [status, setStatus] = useState('unloaded');

    useEffect(() => {
        if (localCache['starSystems']) {
            setStarSystemList([localCache['starSystems']]);
            setStatus('loaded');
        } else {
            requestStarSystems();
        }
    }, []);

    async function requestStarSystems() {
        setStarSystemList([]);
        setStatus('loading');
        try {
            const response = await axios.get('/fetch');
            setStarSystemList([response.data]);
            localCache['starSystems'] = response.data;
            setStatus('loaded');

        } catch (error) {
            console.log('error in GET starsystems', error);
            setStatus('error');
        }
    }
    return [starSystemList, status];
}