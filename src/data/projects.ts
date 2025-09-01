import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    title: 'Notion Exporter',
    link: 'https://github.com/alan-w-u/notion-exporter',
    image: 'notion-exporter.png',
    techStack: ['TypeScript', 'Node.js', 'Axios'],
    description: `
      A tool that converts Notion pages into formatted Markdown files by leveraging the Notion API.
      It achieves throughput exceeding 3× the API rate limit via client parallelization, significantly reducing export times.
      It was adopted by UBC iGEM to automate documentation migration enabling the replacement of GitHub with Notion as the central collaboration platform, simplifying team workflows compared to previous years.
    `
  },
  {
    title: 'UBC iGEM Website',
    link: 'https://ubcigem.com',
    image: 'ubc-igem-website.png',
    techStack: ['Astro', 'TypeScript'],
    description: `
      A revamped UBC iGEM website with a fresh design and rearchitected codebase.
      The redesign strengthens the club's digital presence and image, promoting greater transparency, engagement, and sponsorship opportunities.
    `
  },
  {
    title: 'Alloy',
    link: 'https://github.com/alan-w-u/alloy',
    image: 'alloy.png',
    techStack: ['React.js', 'JavaScript', 'Node.js', 'Firebase'],
    description: `
      Bridges the gaps in clubs, workplaces, and social groups by intelligently generating personalized hangouts.
      Designed to foster meaningful connections beyond one's immediate team or social circle, it forms groups and assigns an activity based on insights such as MBTI personality types and shared interests.
    `
  },
  {
    title: 'TrailFinder',
    link: 'https://github.com/alan-w-u/trailfinder',
    image: 'trailfinder.png',
    techStack: ['React.js', 'JavaScript', 'Node.js', 'Express.js', 'Oracle', 'SQL*Plus'],
    description: `
      Helps users discover and explore hiking trails near them.
      It consolidates all the essential hiking trail information one would need to find, prepare for, and document their next adventure.
    `
  },
  {
    title: 'Foodease',
    link: 'https://github.com/alan-w-u/foodease',
    image: 'foodease.png',
    techStack: ['React.js', 'JavaScript', 'Node.js'],
    description: `
      Dedicated to solving the infamous question: "Where should we eat?"
      Users can customize preferences like weather, meal type, budget, and more, ensuring they receive the ideal restaurant recommendation that aligns with their desires.
    `
  },
  {
    title: 'TouchType',
    link: 'https://alan-w-u.github.io/touchtype',
    image: 'touchtype.png',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    description: `
      Offers engaging keyboard-related activities and resources to practice or try a new keyboard.
      Users can explore features like a typing test, keyboard test, and reaction time test.
    `
  },
  {
    title: 'Nook',
    link: 'https://github.com/alan-w-u/nook',
    image: 'nook.png',
    techStack: ['Java', 'Figma'],
    description: `
      Designed to help university and college students find available study spots on campus.
      By providing estimated capacity ratings, it helps users gauge the availability of unmonitored spaces such as common areas and student lounges.
      With a strong focus on accessibility, Nook offers customized colour settings tailored to support users with common forms of colour blindness, ensuring an inclusive and seamless experience for anyone.
    `
  },
  {
    title: 'Restaurant Table Manager',
    link: 'https://github.com/alan-w-u/restaurant-table-manager',
    image: 'restaurant-table-manager.png',
    techStack: ['Java', 'Swing', 'JUnit'],
    description: `
      Helps waitstaff efficiently manage table availability and orders.
      It enables seamless access to restaurant menus, table orders, and availability data.
    `
  },
]
