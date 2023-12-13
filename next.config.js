module.exports = {
    reactStrictMode: true,
    async headers() {
        return [
          {
            source: '/blogpage/:id',
            headers: [
              {
                key: 'x-slug',
                value: ':id', // Matched parameters can be used in the value
              },
             
            ],
          },
        ]
      },
}