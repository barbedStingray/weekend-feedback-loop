import { useQuery } from '@tanstack/react-query';
import fetchSystems from './fetchSystems';

export default function useSystem() {

    const { data, status } = useQuery(['bases', '1'], fetchSystems);
    // console.log('USE results', data, status);
    return [data ?? [], status];
}