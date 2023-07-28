import HtmlLogo from '/languages/html5-original.svg'
import CssLogo from '/languages/css3-original.svg'
import JavaScriptLogo from '/languages/javascript-original.svg'
import TypeScriptLogo from '/languages/typescript-original.svg'
import ReactLogo from '/languages/react-original.svg'
import ReduxLogo from '/languages/redux-original.svg'
import NextLogo from '/languages/nextjs-original.svg'
import VueLogo from '/languages/vuejs-original.svg'
import NodeLogo from '/languages/nodejs-original.svg'
import ExpressLogo from '/languages/express-original.svg'
import MongoDBLogo from '/languages/mongodb-original.svg'
import PhpLogo from '/languages/php-plain.svg'
import LaravelLogo from '/languages/laravel.svg'
import MySqlLogo from '/languages/mysql-plain.svg'
import ThreeLogo from '/languages/threejs-original.svg'
import GsapLogo from '/languages/gsap-original.svg'
import SassLogo from '/languages/sass-original.svg'
import TailwindLogo from '/languages/tailwindcss-plain.svg'
import FigmaLogo from '/languages/figma-original.svg'
import MaterialLogo from '/languages/materialui-original.svg'
import WordpressLogo from '/languages/wordpress-plain.svg'
import PythonLogo from '/languages/python-original.svg'
import AwsLogo from '/languages/aws-original.svg'
import PostmanLogo from '/languages/postman-original.svg'
import JestLogo from '/languages/jest-plain.svg'
import CypressLogo from '/languages/cypress.svg'
import GitLogo from '/languages/git-original.svg'

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
