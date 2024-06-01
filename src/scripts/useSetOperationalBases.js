
import { useState, useEffect } from 'react';
import axios from 'axios';

const localCache = {};

export default function useSetOperationalBases(planet) {
    const [operationalBases, setOperationalBases] = useState([]);
    const [baseStatus, setBaseStatus] = useState('unloaded');
    console.log('localCache', localCache);

    useEffect(() => {
        if (!planet) {
            setOperationalBases([]);
        } else if (localCache[planet]) {
            setOperationalBases(localCache[planet]);
        } else {
            requestBaseList(planet);
        }

        async function requestBaseList(planet) {
            console.log('API CALL');
            setOperationalBases([]);
            setBaseStatus('loading');

            try {
                // axios request for bases here
                const bases = await axios.get(`/fetch/bases/${planet}`);
                setOperationalBases(bases.data);
                localCache[planet] = bases.data;
                setBaseStatus('loaded');
            } catch (error) {
                console.log('error in generating bases');
            }
        }
    }, [planet]);

    return [operationalBases, baseStatus];
}