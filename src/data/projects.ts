enum SectionType {
  REACT = 'React',
  VUE = 'Vue',
  LARAVEL = 'PHP/Laravel',
  WORDPRESS = 'WordPress',
  AWS = 'AWS',
  FIGMA = 'Figma'
}

interface Project {
  title: string
  description: string
  frontend?: string
  backend?: string
  cms?: string
  hosting?: string
  testing?: string
  liveLink?: string
  repositoryLink?: string
  imageURL: string
  gifURL?: string
  sectionType: SectionType
}

const projects: Project[] = [
  {
    title: 'Electronics Store (eCommerce)',
    description:
      'A Next.js-13 based eCommerce project that allows users to add items to a cart and complete transactions using Stripe. The content is easily manageable thanks to the Sanity content management system.',
    frontend:
      'React, Next-13, TypeScript, CSS, Sanity, Stripe, react-icons, react-hot-toast, canvas-confetti...',
    cms: 'Sanity',
    hosting: 'Vercel',
    testing: 'Jest, React Testing Library',
    liveLink: 'https://electronics-store-alpha.vercel.app/',
    repositoryLink: 'https://github.com/AbdulKadri/eCommerce',
    imageURL: '/src/assets/projects/ElectronicsStore.png',
    gifURL: '/src/assets/projects/ElectronicsStore.gif',
    sectionType: SectionType.REACT
  },
  {
    title: 'Sports Nexus (Social Media App)',
    description:
      'A full-stack MERN project featuring user registration, post creation/deletion, and friend addition. Includes user-friendly features like dark mode, success toasts for registration/login, and JWT Authentication. (Please note, the search feature is currently under development).',
    frontend: 'React, Material UI, Redux Toolkit, React Router Dom, Formik, Yup, Dropzone...',
    backend: 'Node/Express, MongoDB/Mongoose, JWT, Postman, Bcrypt, Multer, Helmet, Morgan...',
    hosting: 'Render',
    liveLink: 'https://sportsnexus.onrender.com/',
    repositoryLink: 'https://github.com/AbdulKadri/social-media',
    imageURL: '/src/assets/projects/SportsNexus.png',
    gifURL: '/src/assets/projects/SportsNexus.gif',
    sectionType: SectionType.REACT
  },
  {
    title: 'Apex Weather (Weather App)',
    description:
      'A Next.js-based application providing comprehensive weather information, including forecasts and air quality index for any city. Additional features include a heat weather map, city images, unit conversion for weather data, and a 3D animated globe model. Integrated with the OpenWeatherMap and Unsplash APIs.',
    frontend: 'React, Next, Three.js, GSAP, TailwindCSS, react-toastify, async-paginate, axios...',
    hosting: 'Vercel',
    liveLink: 'https://next-weather-app-lac.vercel.app/',
    repositoryLink: 'https://github.com/AbdulKadri/next-weather-app',
    imageURL: '/src/assets/projects/ApexWeather.png',
    gifURL: '/src/assets/projects/ApexWeather.gif',
    sectionType: SectionType.REACT
  },
  {
    title: 'Luxury Cuts (Barbershop Website)',
    description:
      'A React-based template website for a barbershop. Features include a home page, about page, services page, contact page and a booking portal. The website is fully responsive and mobile-friendly.',
    frontend: 'React, TypeScript, TailwindCSS, Font-Awesome Icons, React Router Dom...',
    hosting: 'Netlify',
    liveLink: 'https://superlative-snickerdoodle-94900b.netlify.app/',
    repositoryLink: 'https://github.com/AbdulKadri/luxury-cuts',
    imageURL: '/src/assets/projects/LuxuryCuts.png',
    gifURL: '/src/assets/projects/LuxuryCuts.gif',
    sectionType: SectionType.REACT
  },
  {
    title: 'Work Bridge (Job Board)',
    description:
      'A Laravel-based job board application that allows users to post jobs Features include a job search and job posting. The application includes protected routes and a MySQL database.',
    frontend: 'Blade, TailwindCSS, Alpine.js',
    backend: 'Laravel, MySQL, PHP',
    hosting: 'Coming Soon',
    // liveLink: '',
    repositoryLink: 'https://github.com/AbdulKadri/job-board',
    imageURL: '/src/assets/projects/WorkBridge.png',
    gifURL: '/src/assets/projects/WorkBridge.gif',
    sectionType: SectionType.LARAVEL
  },
  {
    title: 'Yeg Dealership (Car Dealership)',
    description:
      'A WordPress project emulating a real-world car dealership website. Features include a car inventory page with detailed car specifications, customer testimonials and reviews, about section, and a contact section.',
    frontend: 'CSS',
    cms: 'Wordpress & Elementor',
    hosting: 'Hostinger',
    liveLink: 'https://yegdealership.shop/',
    imageURL: '/src/assets/projects/YegDealership.png',
    gifURL: '/src/assets/projects/YegDealership.gif',
    sectionType: SectionType.WORDPRESS
  },
  {
    title: 'Wild Rydes (Ride Sharing App)',
    description:
      "An AWS project enabling customers to sign up, validate their emails, and request a ride from a location on the map. (Please note, while the codebase isn't original, the AWS implementation is my work).",
    frontend: 'AWS Amplify, Cognito, DynamoDB, Lambda, API Gateway, S3, CloudWatch, SES, IAM.',
    hosting: 'AWS',
    // liveLink: 'https://main.d2tkktllao8g56.amplifyapp.com/',
    repositoryLink: 'https://github.com/AbdulKadri/wildrydes-site',
    imageURL: '/src/assets/projects/WildRydes.png',
    gifURL: '/src/assets/projects/WildRydes.gif',
    sectionType: SectionType.AWS
  },
  {
    title: 'Campus Crafters (Coming Soon)',
    description: 'A PHP/Laravel project for schools to buy equipment and supplies.',
    frontend: 'Blade, TailwindCSS',
    backend: 'Laravel, MySQL, PHP',
    hosting: 'Coming Soon',
    // liveLink: '',
    // repositoryLink: '',
    imageURL: '/src/assets/projects/CampusCrafters.png',
    // gifURL: '/src/assets/projects/CampusCrafters.gif',
    sectionType: SectionType.LARAVEL
  },
  {
    title: 'Personal Portolio React',
    description: 'A React-based portfolio website.',
    frontend: 'React, SASS, Swiper, Emailjs...',
    hosting: 'github-pages',
    liveLink: 'https://abdulkadri.github.io/personal-portfolio/',
    repositoryLink: 'https://github.com/AbdulKadri/personal-portfolio',
    imageURL: '/src/assets/projects/PersonalPortfolioReact.png',
    sectionType: SectionType.REACT
  },
  {
    title: 'Hands For Charity',
    description: 'Assisted in the project for a non-profit organization.',
    frontend: 'HTML, CSS, JavaScript',
    backend: 'PHP, MySQL',
    liveLink: 'https://handsforcharity.org/',
    imageURL: '/src/assets/projects/HandsForCharity.png',
    sectionType: SectionType.LARAVEL
  },
  {
    title: 'Muslim Association of Canada (MAC)',
    description: 'Helped build many different features for MAC.',
    frontend: 'HTML, CSS, JavaScript, Figma',
    cms: 'WordPress',
    liveLink: 'https://macnet.ca/',
    imageURL: '/src/assets/projects/MAC.png',
    sectionType: SectionType.WORDPRESS
  },
  {
    title: 'Major Rager',
    description: 'Refactored code and styles for a rage room',
    frontend: 'WordPress',
    liveLink: 'https://majorrager.ca/',
    imageURL: '/src/assets/projects/MajorRager.png',
    sectionType: SectionType.WORDPRESS
  },
  {
    title: 'Personal Portfolio Vue',
    description: 'A Vue-based portfolio website.',
    frontend: 'Vue, Vue-Router, Vue-Toastification, Vite, CSS, Axios, Emailjs...',
    hosting: 'github-pages',
    // liveLink: 'https://abdulkadri.github.io/personal-portfolio-vue/',
    repositoryLink: 'https://github.com/AbdulKadri/personal-portfolio-vue',
    imageURL: '/src/assets/projects/PersonalPortfolioVue.png',
    sectionType: SectionType.VUE
  },
  {
    title: 'Custom Cakes',
    description: 'A Figma project for a custom cake business.',
    frontend: 'Figma',
    cms: 'WordPress',
    imageURL: '/src/assets/projects/CustomCakesFigma.png',
    sectionType: SectionType.FIGMA
  },
  {
    title: 'Luxury Cuts',
    description: 'A Figma design for a barbershop.',
    frontend: 'Figma',
    imageURL: '/src/assets/projects/LuxuryCutsFigma.png',
    sectionType: SectionType.FIGMA
  },
  {
    title: 'Campus Crafters',
    description: 'A Figma design for a school supplies business.',
    frontend: 'Figma',
    imageURL: '/src/assets/projects/CampusCraftersFigma.png',
    sectionType: SectionType.FIGMA
  }
]

export default projects
