module.exports = {
    theme: {
        textColor: theme => theme('colors'),
        textColor: {
          'white': '#FFFFFF',
          'primary': '#192645',
          'secondary': '#DD3042',
          'black': '#12192E',
        },
    },
    variants: {},
    plugins: [
    ],
    purge: {
      enabled: false, // DONT DO THIS IN PRODUCTION
      content: [
        'components/**/*.vue',
        'layouts/**/*.vue',
        'pages/**/*.vue',
        'plugins/**/*.js',
        'nuxt.config.js',
      ],
    },
    options: {
      important: true,
    },
  };