import { ArrowUpRight } from 'lucide-react'
import { FadeIn } from '../common/FadeIn'
import { skills } from '../../data/portfolio'
import './SkillsSection.css'
export function SkillsSection() { return <section className="skills-section"><FadeIn><div className="section-eyebrow dark"><span>03 / Capabilities</span><span>Skills & tools</span></div><h2 className="section-title">What I<br /><em>bring.</em></h2></FadeIn><div className="skills-list">{skills.map(([number, title, text], index) => <FadeIn key={number} delay={index * .1}><article className="skill-row"><span className="skill-number">{number}</span><h3>{title}</h3><p>{text}</p><ArrowUpRight className="skill-arrow" /></article></FadeIn>)}</div></section> }
