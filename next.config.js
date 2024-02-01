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
                source: '/api/phonepe',
                destination: 'https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay',
            },
            {
                source: '/api/phonepeCheckStatus',
                destination: 'https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status',
            }
        ]
    },
    env: {
        NEXT_PUBLIC_MERCHANT_ID: "PGTESTPAYUAT",
        NEXT_PUBLIC_SALT_KEY: "099eb0cd-02cf-4e2a-8aca-3e6c6aff0399",
        NEXT_PUBLIC_SALT_INDEX: "1"
    }
}

module.exports = nextConfig


