import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Sergey Leonov | Web Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is ',
  name: 'Sergey Leonov',
  subtitle: "I'm a web developer",
  cta: 'Get to know me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "I'm self learned web developer, who loves to take challenges and overcome it. I am really passionate what i am doing, and eager to learn even more.",
  paragraphTwo:
    "What do i like ? I love coffee and a good book, also playing video games. Also chill in a calm place like parks or forests, really love taking some photo's everywhere i travel.",
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project-0.jpg',
    title: 'Travel Beyond Limits',
    info: 'Website i made with HTML/CSS/Flexbox with little of CSS Animation. I loved creating moving clouds. Was pretty awesome to mix z-index and animation of clouds.',
    info2: 'This site represents of wanting to buy best tickets available to travel.',
    url: 'https://sierwench.github.io/',
    repo: 'https://github.com/Sierwench/sierwench.github.io', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-1.jpg',
    title: 'Photography Portfolio',
    info: 'This site is using HTML/CSS/JS with mix of Flexbox and Grid. Was a bit of a challenge to make pictures to match screen size and was pretty interesting of using grid system',
    info2: 'This site represents portfolio of photographer.',
    url: 'https://sierwench.github.io/sierwench.demoproject.github.io/',
    repo: 'https://github.com/Sierwench/sierwench.demoproject.github.io', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-2.jpg',
    title: 'Pricing Panel',
    info: 'This website was created using Bootstrap framework. I mixed bootstrap styles with my own custom one, was interesting to make some changes, little bit of challenge was using containers to make tables.',
    info2: 'This site represents of choosing best domain for good prices.',
    url: 'https://sierwench.github.io/PricingPanel/',
    repo: 'https://github.com/Sierwench/PricingPanel', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
