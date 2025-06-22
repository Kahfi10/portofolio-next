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

type MorphingDialog = {
  title: string
  subtitle: string
  image: string
  content: string
  audio: string
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
    link: 'https://github.com/Kahfi10',
    id: 'work1',
  },
  {
    company: 'SMA NEGERI 8 BULUKUMBA',
    title: 'Student',
    start: '2020',
    end: '2023',
    link: 'https://github.com/Kahfi10',
    id: 'work2',
  },
  {
    company: 'UNIVERSITAS MUHAMMADIYAH MAKASSAR',
    title: 'Student',
    start: '2023',
    end: 'Present',
    link: 'https://github.com/Kahfi10',
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

export const MORPHING_DIALOGS: MorphingDialog[] = [
  {
    title: '100 Words',
    subtitle: 'Prateek Kuhad',
    image: 'https://i1.sndcdn.com/artworks-EmpSNMoJpai9-0-t500x500.jpg',
    content: "A collection of 100 words that resonate with the essence of Prateek Kuhad's music. Each word captures a moment, a feeling, or a memory that is beautifully intertwined with his melodies. This dialog invites you to explore the depth and simplicity of his lyrical genius. \"100 Words\" by Prateek Kuhad is a song about unrequited love and the struggle to connect with someone who seems distant. The lyrics express the singer's longing, frustration, and persistence in trying to reach the other person, despite their lack of reciprocation. The song also touches on themes of heartbreak, nostalgia, and the passage of time.",
    audio: './music/100words.m4a'
  },
  {
    title: 'Time Machine',
    subtitle: 'Frank Ocean',
    image: 'https://i.scdn.co/image/ab67616d0000b2733baafd899ad31c8472aa7b7a',
    content: 'A journey through time with the sounds of Frank Ocean. Experience the evolution of music as we explore the timeless tracks that have shaped our lives. From the soulful melodies to the rhythmic beats, this collection captures the essence of nostalgia and innovation in music.',
    audio: './music/frank.mp3'
  }
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/kahfi10',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ashabul-kahfi-850b401a1/',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/kaaahfiii/',
  },
]

export const EMAIL = 'ashabulk265@gmail.com';
