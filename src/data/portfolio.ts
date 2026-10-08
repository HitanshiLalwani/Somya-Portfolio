export type ReelSlide = {
  title: string
  label: string
  file: string
  note: string
  rotateLeft?: boolean
  startAt?: number
}

export const mediaCollections: Record<string, { label: string; description: string; slides: ReelSlide[] }> = {
  commercial: {
    label: 'Commercial',
    description: 'Client films and branded visual storytelling.',
    slides: [
      { title: 'Arihant Capital', label: 'Client film · portfolio archive', file: '/videos/arihant-capital.mp4', note: 'Commercial edit · The Velvetbox Photos & Films' },
      { title: 'Nakshatra Aura Real Estate', label: 'Commercial reel · portfolio archive', file: '/videos/nakshatra-aura-real-estate.mp4', note: 'Brand storytelling · commercial visual' },
    ],
  },
  highlights: {
    label: 'Highlights',
    description: 'Wedding highlights and longer-form celebration films.',
    slides: [
      { title: 'Shubhanshu & Jessica', label: 'Wedding highlights · full film', file: '/videos/wedding-highlights.mp4', note: 'Highlights edit · The Velvetbox Photos & Films' },
      { title: 'Shubhanshu & Jessica', label: 'Wedding highlights · featured segment', file: '/videos/wedding-highlights.mp4', startAt: 30, note: 'A second selected moment from the full highlights film' },
    ],
  },
  reels: {
    label: 'Reels',
    description: 'Short-form wedding edits, ceremony moments, and celebration cuts.',
    slides: [
      { title: 'Karan × Priyanka', label: 'Wedding reel · correction cut', file: '/videos/karan-priyanka-reel.mp4', note: 'Polished reel edit · wedding storytelling' },
      { title: 'Oishee Ji', label: 'Wedding reel', file: '/videos/oishee-ji.mp4', rotateLeft: true, note: 'Celebration-led edit · visual rhythm' },
      { title: 'Prachi & Anikesh', label: 'Wedding reel · phere', file: '/videos/prachi-anikesh-phere.mp4', rotateLeft: true, note: 'Ceremony story · emotional pacing' },
      { title: 'Praful Sir', label: 'Wedding reel · sangeet', file: '/videos/praful-sir-sangeet.mp4', note: 'Sangeet energy · music-led storytelling' },
      { title: 'Prakhand & Keha', label: 'Wedding reel · DJ night', file: '/videos/prakhand-keha-dj-night.mp4', note: 'Dance floor cut · live celebration' },
      { title: 'Prakhand & Keha', label: 'Wedding reel · phere', file: '/videos/prakhand-keha-phere.mp4', rotateLeft: true, note: 'Ceremony cut · intimate wedding moments' },
    ],
  },
  teasers: { label: 'Teasers', description: 'Short teaser edits from the wedding archive.', slides: [] },
}

export const weddingCollections = ['highlights', 'reels', 'teasers'] as const

export const experience = [
  { period: "Sep '25 – Present", role: 'Video Editing Intern', company: 'The Velvetbox Photos & Films', place: 'Indore', bullets: ['Execute premium, end-to-end video editing pipelines for high-end wedding films using Adobe Premiere Pro and Photoshop.', 'Manage strategic footage selection, custom color grading, audio synchronization, and visual effects to deliver dynamic, high-quality media aligned with premium client specifications.'] },
  { period: "Jan '26 – Present", role: 'Head of Sales', company: 'Unison House', place: 'Indore', bullets: ['Directed overall sales strategy and team operations to accelerate revenue growth and expand market reach.', 'Spearheaded client acquisition and negotiations, consistently driving high-value contract closures and partnerships.'] },
  { period: "Feb '26 – Aug '26", role: 'Member Recruitment Committee', company: 'AIESEC in Indore', place: 'Indore', bullets: ['Executed campus outreach campaigns to increase high-quality student applications.', 'Screened applicants and interviewed candidates to assess leadership potential and cultural fit.', 'Managed recruitment logistics and onboarding for a seamless candidate experience.'] },
  { period: "Feb '26 – Jul '26", role: 'GB member in GT | AIESEC in Indore', company: 'AIESEC in Indore', place: 'Indore', bullets: ['Facilitated international internships by connecting talent with global opportunities.', 'Managed client relationships and oversaw end-to-end placement processes.', 'Drove lead generation initiatives to expand the network of partner organizations.'] },
]

export const skills = [
  ['01', 'Creative toolkit', 'MS PowerPoint · MS Excel · Canva · Storytelling · Video Editing'],
  ['02', 'Growth & research', 'Business Development · Market Research · Client Acquisition'],
  ['03', 'People leadership', 'Team Management · Event Operations · Recruitment · Negotiation'],
]

export const education = [
  ['2025', 'B.B.A. Foreign Trade', 'School of Commerce, DAVV, Indore', 'Pursuing'],
  ['2025', 'CBSE 12th (Commerce)', 'Bal Bharati Public School, N.T.P.C. Gadarwara', '80%'],
  ['2023', 'CBSE 10th', 'Bal Bharati Public School, N.T.P.C. Gadarwara', '69.7%'],
]
