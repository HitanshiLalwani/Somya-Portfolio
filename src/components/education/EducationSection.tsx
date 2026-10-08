import { education } from '../../data/portfolio'
import './EducationSection.css'
export function EducationSection() { return <section className="education-section"><div className="section-eyebrow"><span>05 / Education</span><span>Foundations</span></div><h2 className="section-title left">Learn.<br /><em>Lead.</em></h2><div className="education-grid">{education.map((item) => <article key={item[0] + item[1]}><span>{item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p><b>{item[3]}</b></article>)}</div></section> }
