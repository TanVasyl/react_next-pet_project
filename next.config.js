/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_API_KEY: process.env.API_KEY,
        NEXT_PUBLIC_AUTH_DOMAIN: process.env.AUTH_DOMAIN,
        NEXT_PUBLIC_PROJECT_ID: process.env.PROJECT_ID,
        NEXT_PUBLIC_STORAGE_BUCKET: process.env.STORAGE_BUCKET,
        NEXT_PUBLIC_MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
        NEXT_PUBLIC_APP_ID: process.env.APP_ID,

    }
}

module.exports = nextConfig
