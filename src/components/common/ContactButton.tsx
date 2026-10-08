import { ArrowUpRight } from 'lucide-react'
import './ContactButton.css'

export function ContactButton() {
  return <a className="contact-button group" href="mailto:somilgangwani2@gmail.com?subject=Portfolio%20inquiry" aria-label="Email Somya Gangwani"><span>Start a conversation</span><ArrowUpRight size={17} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></a>
}
