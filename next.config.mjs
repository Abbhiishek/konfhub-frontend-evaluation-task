/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "dev-media.konfhub.com",
                pathname: "/**",
            },
            {
                hostname: "dev.konfhub.com",
                pathname: "/**",
            }
        ]
    }
};

export default nextConfig;
