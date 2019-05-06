import pkg from './package';

export default {
  mode: 'universal',
  head: {
    title: pkg.name,
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        name: 'author',
        content: 'Dominik Wilusz'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },
  loading: { color: '#fff' },
  css: [
    'bulma',
    '@/assets/main.css',
    '@/assets/sass/main.scss'
  ],
  build: {
    extend(config, ctx) {
    }
  }
};
