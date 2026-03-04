import { useEffect, useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import styles from './Hero.module.css'

const TEXTS = [
    'Aspiring Network Engineer · Cloud & Infrastructure · CCNA',
]

export default function Hero() {
    useScrollAnimation()
    const [displayed, setDisplayed] = useState('')
    const [textIdx, setTextIdx] = useState(0)
    const [charIdx, setCharIdx] = useState(0)
    const [deleting, setDeleting] = useState(false)

    // Parallax orbs on mouse move
    useEffect(() => {
        const handler = (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 2
            const y = (e.clientY / window.innerHeight - 0.5) * 2
            document.querySelectorAll(`.${styles.orb}`).forEach((orb, i) => {
                const f = (i + 1) * 14
                orb.style.transform = `translate(${x * f}px, ${y * f}px)`
            })
        }
        window.addEventListener('mousemove', handler)
        return () => window.removeEventListener('mousemove', handler)
    }, [])

    // Typing effect
    useEffect(() => {
        const current = TEXTS[textIdx]
        let speed = deleting ? 28 : 52

        const timer = setTimeout(() => {
            if (!deleting) {
                setDisplayed(current.slice(0, charIdx + 1))
                if (charIdx + 1 === current.length) {
                    if (TEXTS.length > 1) {
                        setTimeout(() => setDeleting(true), 2300)
                    }
                } else {
                    setCharIdx(c => c + 1)
                }
            } else {
                setDisplayed(current.slice(0, charIdx - 1))
                if (charIdx - 1 === 0) {
                    setDeleting(false)
                    setTextIdx(i => (i + 1) % TEXTS.length)
                    setCharIdx(0)
                } else {
                    setCharIdx(c => c - 1)
                }
            }
        }, speed)

        return () => clearTimeout(timer)
    }, [charIdx, deleting, textIdx])

    return (
        <section className={styles.hero} id="hero">
            {/* Background */}
            <div className={styles.heroBg}>
                <div className={styles.gridOverlay} />
                <div className={`${styles.orb} ${styles.orb1}`} />
                <div className={`${styles.orb} ${styles.orb2}`} />
                <div className={`${styles.orb} ${styles.orb3}`} />
            </div>

            <div className={styles.content}>
                <div className={`${styles.badge} animate-hidden visible`}>
                    <span className={styles.statusDot} /> Available for opportunities
                </div>

                <h1 className={`${styles.title} animate-hidden visible`}>
                    Haritha<br />
                    <span className="gradient-text">Kapugedara</span>
                </h1>

                <p className={styles.subtitle}>
                    {displayed}<span className={styles.cursor}>|</span>
                </p>

                <p className={styles.location}>📍 Matale District, Central Province, Sri Lanka</p>

                <div className={styles.ctas}>
                    <a href="#projects" className="btn btn-primary">View Projects</a>
                    <a href="#contact" className="btn btn-outline">Get In Touch</a>
                </div>

                <div className={styles.techTags}>
                    {['CCNA', 'AWS', 'React.js', 'Node.js', 'Machine Learning'].map(t => (
                        <span key={t} className={styles.tag}>{t}</span>
                    ))}
                </div>

            </div>

            <div className={styles.scrollIndicator}>
                <div className={styles.mouse}><div className={styles.wheel} /></div>
                <span>Scroll Down</span>
            </div>
        </section>
    )
}
