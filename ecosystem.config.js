module.exports = {
  apps: [{
    name: 'law',
    script: 'node_modules/next/dist/bin/next',
    args: 'start',
    cwd: '/var/www/law',
    instances: 1, // or 'max' for cluster mode
    exec_mode: 'fork', // or 'cluster'
    env: {
      NODE_ENV: 'production',
      PORT: 3000,
      NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
      NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
      NEXTAUTH_URL: process.env.NEXTAUTH_URL,
      NEXT_PUBLIC_BASE_URL: 'https://fslf.sa/backend'
    },
    error_file: '/var/www/law/logs/err.log',
    out_file: '/var/www/law/logs/out.log',
    log_file: '/var/www/law/logs/combined.log',
    time: true,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G'
  }]
}
