// eslint-disable-next-line n/no-exports-assign
exports = {
  apps: [
    {
      name: `Lê Thành Tài - Blog's của tôi`,
      exec_mode: 'cluster',
      einstances: '1',
      script: './.output/server/index.mjs',
      env: {
        PORT: 4301,
      },
    },
  ],
}
