const ghpages = require('gh-pages')

ghpages.publish(
  'public', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://k012497.github.io/archive.git',
    user: {
      name: 'k012497',
      email: 'k012497@naver.com',
    },
  },
  () => {
    console.log('Deploy Complete! 👀✦')
  },
)
