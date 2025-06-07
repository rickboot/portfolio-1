/** @type {import('next').NextConfig} */
const config = {
    async redirects() {
        return [
        {
            source: '/:path*',
            has: [
            {
                type: 'host',
                value: 'rickallen.rocks',
            },
            ],
            destination: 'https://rickallen.dev/:path*',
            permanent: true,
        },
        {
            source: '/:path*',
            has: [
            {
                type: 'host',
                value: 'www.rickallen.rocks',
            },
            ],
            destination: 'https://rickallen.dev/:path*',
            permanent: true,
        },
        ];
    },
};

export default config;
