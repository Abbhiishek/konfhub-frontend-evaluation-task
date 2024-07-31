"use client";
import { EventDetailType } from '@/types';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// id: konfhub-frontend-evaluation-task


/**
 * Get event details by event id
* @param id (string) - event id
* @returns {data, isLoading, error, refetch}
* @example
* const { data, isLoading, error, refetch } = useGetEventDetailsById('konfhub-frontend-evaluation-task');
*/
export const useGetEventDetailsById = (id: string) => {
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ['event-details', id],
        queryFn: async () => {
            try {
                const res = await axios({
                    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/event/public/${id}`,
                    method: 'get',
                });
                return res.data as EventDetailType;
            } catch (error) {
                console.error(error);
            }
        },
    });

    return { data, isLoading, error, refetch };
};