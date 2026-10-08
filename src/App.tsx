import { HeroSection } from './components/hero/HeroSection'
import { ReelSlider } from './components/media/ReelSlider'
import { AboutSection } from './components/about/AboutSection'
import { SkillsSection } from './components/skills/SkillsSection'
import { ExperienceSection } from './components/experience/ExperienceSection'
import { EducationSection } from './components/education/EducationSection'
import { Footer } from './components/footer/Footer'

export default function App() {
  return <main className="site-shell">
    <HeroSection />
    <ReelSlider />
    <AboutSection />
    <SkillsSection />
    <ExperienceSection />
    <EducationSection />
    <Footer />
  </main>
}
