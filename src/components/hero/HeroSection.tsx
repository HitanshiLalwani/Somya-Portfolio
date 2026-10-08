import { ArrowDownRight, Mail, MapPin, Phone, Sparkles } from 'lucide-react'
import { FadeIn } from '../common/FadeIn'
import { ContactButton } from '../common/ContactButton'
import './HeroSection.css'

export function HeroSection() {
  return <section className="hero-section" id="home">
    <nav className="site-nav"><a className="wordmark" href="#home"><span className="wordmark-mark"><Sparkles size={15} /></span>SOMYA<span className="wordmark-dot">.</span></a><div className="nav-links"><a href="#about">About</a><a href="#work">Work</a><a href="#experience">Experience</a><a href="#contact">Contact</a></div></nav>
    <div className="hero-copy"><FadeIn><p className="eyebrow">Creative operator · storyteller · people person</p><h1 className="hero-title">Somya<br /><em>Gangwani</em></h1></FadeIn></div>
    <div className="hero-orbit" aria-hidden="true"><span>MARKET RESEARCH</span><span>VIDEO EDITING</span><span>BUSINESS DEVELOPMENT</span><span>STORYTELLING</span></div>
    <div className="hero-bottom"><FadeIn delay={.2} className="hero-intro">Blending business thinking, visual storytelling, and human connection to create work that moves people forward.</FadeIn><FadeIn delay={.35}><ContactButton /></FadeIn></div>
    <div className="hero-meta"><span><MapPin size={13} /> Indore, India</span><span><Phone size={13} /> +91 88173 63700</span><a href="mailto:somilgangwani2@gmail.com"><Mail size={13} /> somilgangwani2@gmail.com</a><a href="https://www.linkedin.com/in/somil-gangwani?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
    <div className="hero-scroll-cue"><span>Scroll to explore</span><ArrowDownRight size={17} /></div>
  </section>
}
