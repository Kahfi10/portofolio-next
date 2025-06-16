type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type Photos = {
  src: string
  alt: string
  description: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Sunset Primitives',
    description:
      'Like a Leonardo da Vinci in 1500s Era',
    link: 'https://www.instagram.com/gegees99/',
    video:
      './vid/1.mp4',
    id: 'project1',
  },
  {
    name: 'Laughing Primitives',
    description: 'Like a Charlie Chaplin in 20s Era',
    link: 'https://www.instagram.com/gegees99/',
    video:
      './vid/2.mp4',
    id: 'project2',
  },
  {
    name: 'Running Primitives',
    description: 'Like a Usain Bolt in 2000s Era',
    link: 'https://www.instagram.com/gegees99/',
    video:
      './vid/3.mp4',
    id: 'project2',
  },
]

export const PHOTOS: Photos[] = [
  {
    src: './photos/1.jpg',
    alt: 'Photo 1',
    description: 'A beautiful sunset over the mountains.',
    id: 'photo1',
  },
  {
    src: './photos/2.jpg',
    alt: 'Photo 2',
    description: 'A serene lake surrounded by trees.',
    id: 'photo2',
  },
  {
    src: './photos/3.jpg',
    alt: 'Photo 3',
    description: 'A bustling city street at night.',
    id: 'photo3',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'SMP NEGERI 2 BULUKUMBA',
    title: 'Student',
    start: '2017',
    end: '2020',
    link: 'https://ibelick.com',
    id: 'work1',
  },
  {
    company: 'SMA NEGERI 8 BULUKUMBA',
    title: 'Student',
    start: '2020',
    end: '2023',
    link: 'https://ibelick.com',
    id: 'work2',
  },
  {
    company: 'UNIVERSITAS MUHAMMADIYAH MAKASSAR',
    title: 'Student',
    start: '2023',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'HTML, CSS, and JavaScript',
    description: 'Understanding the core technologies of web development.',
    link: '/blog/html',
    uid: 'blog-1',
  },
  {
    title: 'Laravel',
    description: 'A comprehensive guide to Laravel, a popular PHP framework.',
    link: '/blog/laravel',
    uid: 'blog-2',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/ibelick',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/ibelick',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ibelick',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/ibelick',
  },
]

export const EMAIL = 'your@email.com'
