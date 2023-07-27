interface Tool {
  logo: string
  name: string
}

const tools: Tool[] = [
  { logo: 'src/assets/languages/html5-original.svg', name: 'HTML' },
  { logo: 'src/assets/languages/css3-original.svg', name: 'CSS' },
  { logo: 'src/assets/languages/javascript-original.svg', name: 'JavaScript' },
  { logo: 'src/assets/languages/typescript-original.svg', name: 'TypeScript' },
  { logo: 'src/Assets/languages/react-original.svg', name: 'React' },
  { logo: 'src/Assets/languages/redux-original.svg', name: 'Redux' },
  { logo: 'src/Assets/languages/nextjs-original.svg', name: 'Next.js' },
  { logo: 'src/Assets/languages/vuejs-original.svg', name: 'Vue.js' },
  { logo: 'src/Assets/languages/nodejs-original.svg', name: 'Node.js' },
  { logo: 'src/Assets/languages/express-original.svg', name: 'Express.js' },
  { logo: 'src/Assets/languages/mongodb-original.svg', name: 'MongoDB' },
  { logo: 'src/Assets/languages/php-plain.svg', name: 'PHP' },
  { logo: 'src/Assets/languages/laravel.svg', name: 'Laravel' },
  { logo: 'src/Assets/languages/mysql-plain.svg', name: 'MySQL' },
  { logo: 'src/Assets/languages/threejs-original.svg', name: 'Three.js' },
  { logo: 'src/Assets/languages/gsap-original.svg', name: 'GSAP' },
  { logo: 'src/Assets/languages/sass-original.svg', name: 'Sass' },
  { logo: 'src/Assets/languages/tailwindcss-plain.svg', name: 'Tailwind CSS' },
  { logo: 'src/Assets/languages/figma-original.svg', name: 'Figma' },
  { logo: 'src/Assets/languages/materialui-original.svg', name: 'Material UI' },
  { logo: 'src/Assets/languages/wordpress-plain.svg', name: 'Wordpress' },
  { logo: 'src/Assets/languages/python-original.svg', name: 'Python' },
  { logo: 'src/Assets/languages/aws-original.svg', name: 'AWS' },
  { logo: 'src/Assets/languages/postman-original.svg', name: 'Postman' },
  { logo: 'src/Assets/languages/jest-plain.svg', name: 'Jest' },
  { logo: 'src/Assets/languages/cypress.svg', name: 'Cypress' },
  { logo: 'src/Assets/languages/git-original.svg', name: 'Git' }
]

export default tools
