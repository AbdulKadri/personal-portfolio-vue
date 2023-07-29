import HtmlLogo from '../assets/languages/html5-original.svg'
import CssLogo from '../assets/languages/css3-original.svg'
import JavaScriptLogo from '../assets/languages/javascript-original.svg'
import TypeScriptLogo from '../assets/languages/typescript-original.svg'
import ReactLogo from '../assets/languages/react-original.svg'
import ReduxLogo from '../assets/languages/redux-original.svg'
import NextLogo from '../assets/languages/nextjs-original.svg'
import VueLogo from '../assets/languages/vuejs-original.svg'
import NodeLogo from '../assets/languages/nodejs-original.svg'
import ExpressLogo from '../assets/languages/express-original.svg'
import MongoDBLogo from '../assets/languages/mongodb-original.svg'
import PhpLogo from '../assets/languages/php-plain.svg'
import LaravelLogo from '../assets/languages/laravel.svg'
import MySqlLogo from '../assets/languages/mysql-plain.svg'
import ThreeLogo from '../assets/languages/threejs-original.svg'
import GsapLogo from '../assets/languages/gsap-original.svg'
import SassLogo from '../assets/languages/sass-original.svg'
import TailwindLogo from '../assets/languages/tailwindcss-plain.svg'
import FigmaLogo from '../assets/languages/figma-original.svg'
import MaterialLogo from '../assets/languages/materialui-original.svg'
import WordpressLogo from '../assets/languages/wordpress-plain.svg'
import PythonLogo from '../assets/languages/python-original.svg'
import AwsLogo from '../assets/languages/aws-original.svg'
import PostmanLogo from '../assets/languages/postman-original.svg'
import JestLogo from '../assets/languages/jest-plain.svg'
import CypressLogo from '../assets/languages/cypress.svg'
import GitLogo from '../assets/languages/git-original.svg'

interface Tool {
  logo: string
  name: string
}

const tools: Tool[] = [
  { logo: HtmlLogo, name: 'HTML' },
  { logo: CssLogo, name: 'CSS' },
  { logo: JavaScriptLogo, name: 'JavaScript' },
  { logo: TypeScriptLogo, name: 'TypeScript' },
  { logo: ReactLogo, name: 'React' },
  { logo: ReduxLogo, name: 'Redux' },
  { logo: NextLogo, name: 'Next.js' },
  { logo: VueLogo, name: 'Vue.js' },
  { logo: NodeLogo, name: 'Node.js' },
  { logo: ExpressLogo, name: 'Express.js' },
  { logo: MongoDBLogo, name: 'MongoDB' },
  { logo: PhpLogo, name: 'PHP' },
  { logo: LaravelLogo, name: 'Laravel' },
  { logo: MySqlLogo, name: 'MySQL' },
  { logo: ThreeLogo, name: 'Three.js' },
  { logo: GsapLogo, name: 'GSAP' },
  { logo: SassLogo, name: 'Sass' },
  { logo: TailwindLogo, name: 'Tailwind CSS' },
  { logo: FigmaLogo, name: 'Figma' },
  { logo: MaterialLogo, name: 'Material UI' },
  { logo: WordpressLogo, name: 'Wordpress' },
  { logo: PythonLogo, name: 'Python' },
  { logo: AwsLogo, name: 'AWS' },
  { logo: PostmanLogo, name: 'Postman' },
  { logo: JestLogo, name: 'Jest' },
  { logo: CypressLogo, name: 'Cypress' },
  { logo: GitLogo, name: 'Git' }
]

export default tools
