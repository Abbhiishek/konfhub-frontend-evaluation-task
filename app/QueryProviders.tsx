'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const queryClient = new QueryClient();

/**
 * Query Provider for react-query
 * @param children (React.ReactNode) - children
 * @returns {React.ReactNode} - children
 * @example
 * <QueryProvider>
 *  <App />
 * </QueryProvider>
*/
export default function QueryProvider({ children }: { children: React.ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            {children}
        </QueryClientProvider>
    );
}
