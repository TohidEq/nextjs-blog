/** @type {import('next').NextConfig} */
const nextConfig = {
  
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/TohidEq/test-mdx-posts/master/images/**'
      }
    ]
  }
}

module.exports = nextConfig
