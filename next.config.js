/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'res.cloudinary.com'
        }],
    },
    async rewrites() {
        return [
            {
                source: '/pg/v1/pay',
                destination: 'https://api.phonepe.com/apis/hermes',
            }
        ]
    },
    env: {
        NEXT_PUBLIC_MERCHANT_ID: "RHEAVANIAONLINE",
        NEXT_PUBLIC_SALT_KEY: "af2d4ae9-0de3-45c7-9641-8f8f2d09a648",
        NEXT_PUBLIC_SALT_INDEX: "1"
    }
}

module.exports = nextConfig
