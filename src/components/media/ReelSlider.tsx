import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { mediaCollections, type ReelSlide, weddingCollections } from '../../data/portfolio'
import './ReelSlider.css'

function RotatedVideo({ slide, onEnded }: { slide: ReelSlide; onEnded: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(true)
  const togglePlayback = () => { const video = videoRef.current; if (!video) return; if (video.paused) { void video.play(); setPlaying(true) } else { video.pause(); setPlaying(false) } }
  return <div className="rotated-player"><video ref={videoRef} className="rotate-left" src={slide.file} muted playsInline autoPlay preload="metadata" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={onEnded} onLoadedMetadata={(event) => { if (slide.startAt) event.currentTarget.currentTime = slide.startAt }} /><div className="rotated-controls"><button type="button" onClick={togglePlayback}>{playing ? 'Pause' : 'Play'}</button><span>Rotated video · controls stay upright</span></div></div>
}

export function ReelSlider() {
  const [mainCategory, setMainCategory] = useState<'commercial' | 'wedding'>('commercial')
  const [weddingCategory, setWeddingCategory] = useState<(typeof weddingCollections)[number]>('highlights')
  const [active, setActive] = useState(0)
  const collectionKey = mainCategory === 'commercial' ? 'commercial' : weddingCategory
  const collection = mediaCollections[collectionKey]
  const slides = collection.slides
  const slide = slides[active]
  const chooseCollection = (key: 'commercial' | (typeof weddingCollections)[number]) => { if (key === 'commercial') { setMainCategory('commercial'); setActive(0); return } setMainCategory('wedding'); setWeddingCategory(key); setActive(0) }
  const advanceWhenComplete = () => setActive((current) => (current + 1) % slides.length)
  return <section className="reel-section" id="work">
    <div className="section-eyebrow"><span>02 / Selected work</span><span>{slides.length ? `${String(active + 1).padStart(2, '0')} — ${String(slides.length).padStart(2, '0')}` : 'Archive'}</span></div>
    <div className="reel-heading"><div><p className="eyebrow light">Drive archive</p><h2>Visuals<br /><em>with purpose.</em></h2></div><p className="reel-caption">Browse the portfolio by the same structure as the source archive: commercial work, then wedding highlights, reels, and teasers.</p></div>
    <div className="media-tabs media-tabs-main" role="tablist" aria-label="Portfolio categories"><button className={mainCategory === 'commercial' ? 'active' : ''} onClick={() => chooseCollection('commercial')} role="tab" aria-selected={mainCategory === 'commercial'}>Commercial</button><button className={mainCategory === 'wedding' ? 'active' : ''} onClick={() => chooseCollection('highlights')} role="tab" aria-selected={mainCategory === 'wedding'}>Wedding</button></div>
    {mainCategory === 'wedding' && <div className="media-tabs media-tabs-sub" role="tablist" aria-label="Wedding categories">{weddingCollections.map((key) => <button key={key} className={weddingCategory === key ? 'active' : ''} onClick={() => chooseCollection(key)} role="tab" aria-selected={weddingCategory === key}>{mediaCollections[key].label}</button>)}</div>}
    <div className="collection-intro"><span>{mainCategory === 'wedding' ? `Wedding / ${collection.label}` : collection.label}</span><p>{collection.description}</p></div>
    {slide ? <div className="reel-frame"><AnimatePresence mode="wait"><motion.div key={`${slide.file}-${active}-${collectionKey}`} className="reel-card" initial={{ opacity: 0, x: 35 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -35 }} transition={{ duration: .45 }}>{slide.rotateLeft ? <RotatedVideo slide={slide} onEnded={advanceWhenComplete} /> : <video src={slide.file} controls muted playsInline autoPlay preload="metadata" onEnded={advanceWhenComplete} onLoadedMetadata={(event) => { if (slide.startAt) event.currentTarget.currentTime = slide.startAt }} />}<div className="reel-overlay"><span className="reel-index">0{active + 1}</span><span className="play-badge"><Play size={14} fill="currentColor" /> Playing reel</span></div><div className="reel-details"><div><p>{slide.label}</p><h3>{slide.title}</h3></div><span>{slide.note}</span></div></motion.div></AnimatePresence><button className="slider-arrow slider-prev" aria-label="Previous reel" onClick={() => setActive((active - 1 + slides.length) % slides.length)}><ChevronLeft /></button><button className="slider-arrow slider-next" aria-label="Next reel" onClick={() => setActive((active + 1) % slides.length)}><ChevronRight /></button></div> : <div className="empty-collection"><span>Coming from the Drive archive</span><h3>Teasers are ready for the next upload.</h3><p>This section is set up and will show the teaser edits as soon as those files are added to the portfolio assets.</p></div>}
    {slides.length > 0 && <div className="reel-dots">{slides.map((item, index) => <button key={`${item.file}-${index}`} className={index === active ? 'active' : ''} aria-label={`Show ${item.title}`} onClick={() => setActive(index)}><span /></button>)}</div>}
  </section>
}
