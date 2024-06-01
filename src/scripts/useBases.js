import { useQuery } from '@tanstack/react-query';
import fetchBases from './fetchBases';

export default function useBases(starSystem) {

    const { data, status } = useQuery(['bases', starSystem], fetchBases);
    // console.log('USE results', data, status);
    return [data ?? [], status];
}