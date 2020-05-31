const proxy = [
  {
    context: '/api',
    target: 'https://api.themoviedb.org/3',
    pathRewrite: {'^/api' : ''}
  }
];
module.exports = proxy;
