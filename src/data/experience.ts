import type { Experience } from '../types/experience'

export const experience: Experience[] = [
  {
    company: 'SMART Technologies',
    title: 'Software Engineer Intern',
    duration: {
      start: new Date(2024, 8),
      end: new Date(2025, 7)
    },
    logo: 'smart-technologies.jpg',
    description: [
      'Developed solutions for Lumio, a cloud-based edtech platform enhancing digital learning for 3.8M+ global users.',
      'Launched the #1 user-requested feature, redefining daily instructional flows and driving a 96% satisfaction rating.',
      'Authored design documents to spearhead feature development.',
      'Provided constructive feedback on code reviews for developers across all levels, including senior and staff software engineers.'
    ]
  },
  {
    company: 'UBC Science Undergraduate Society',
    title: 'Web Developer',
    duration: {
      start: new Date(2025, 5)
    },
    logo: 'science-undergraduate-society.jpg',
    description: [
      'Rebuild the UBC SUS website to deliver a modern user experience.'
    ]
  },
  {
    company: 'UBC iGEM',
    title: 'Software Developer',
    duration: {
      start: new Date(2025, 1)
    },
    logo: 'ubc-igem.jpg',
    description: [
      'Build the meduCA project wiki to compete at the iGEM Grand Jamboree in Paris.',
      'Revamp the UBC iGEM website with up-to-date content and polished design language to boost digital outreach.',
      'Develop a Notion-to-Markdown exporter to automate content migration from the internal workspace to the wiki.'
    ]
  },
]
