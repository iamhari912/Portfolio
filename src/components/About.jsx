import { useEffect, useRef } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import styles from './About.module.css'

import { FaLinkedin } from 'react-icons/fa'

const stats = [
    { number: 4, suffix: '+', label: 'Projects' },
    { number: 7, suffix: '+', label: 'Certifications' },
    { number: 500, suffix: '+', label: 'Connections' },
]

function AnimatedStat({ number, suffix, label }) {
    const ref = useRef(null)
    useEffect(() => {
        const el = ref.current
        if (!el) return
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                let current = 0
                const step = number / 40
                const timer = setInterval(() => {
                    current += step
                    if (current >= number) { current = number; clearInterval(timer) }
                    el.textContent = Math.floor(current) + suffix
                }, 40)
                observer.unobserve(el)
            }
        }, { threshold: 0.5 })
        observer.observe(el)
        return () => observer.disconnect()
    }, [number, suffix])

    return (
        <div className={styles.statCard}>
            <span ref={ref} className={styles.statNumber}>0{suffix}</span>
            <span className={styles.statLabel}>{label}</span>
        </div>
    )
}

export default function About() {
    useScrollAnimation()
    return (
        <section className={`section ${styles.about}`} id="about">
            <div className="container">
                <div className={styles.grid}>
                    <div className={`${styles.text} animate-hidden fade-right`}>
                        <div className="section-label">About Me</div>
                        <h2 className="section-title">
                            Building the future,<br />
                            <span className="gradient-text">one packet at a time.</span>
                        </h2>
                        <p>
                            I'm a passionate ICT undergraduate at Rajarata University of Sri Lanka with a deep love for
                            networking, cloud infrastructure, and intelligent systems. Currently pursuing my CCNA at
                            the Cisco Networking Academy at University of Moratuwa, I bridge the worlds of networking
                            and modern software development.
                        </p>
                        <p>
                            My goal is to design and operate robust, secure, and scalable network and cloud architectures
                            while leveraging AI to make infrastructure smarter and more transparent. I believe in
                            continuous learning, collaboration, and using technology to solve real-world problems.
                        </p>
                        <div className={styles.stats}>
                            {stats.map(s => <AnimatedStat key={s.label} {...s} />)}
                        </div>
                    </div>

                    <div className={`${styles.visual} animate-hidden fade-left`}>
                        <div className={styles.profileCard}>
                            <div className={styles.avatar}>
                                <img src={`${import.meta.env.BASE_URL}images/dp.jpg`} alt="Haritha Kapugedara" className={styles.profileImage} />
                                <div className={styles.ring} />
                            </div>
                            <h3>Haritha Kapugedara</h3>
                            <p>ICT Undergraduate</p>
                            <div className={styles.profileTags}>
                                <span>🌐 Networking</span><span>☁️ Cloud</span>
                                <span>🤖 AI/ML</span><span>💻 Dev</span>
                            </div>
                            <a
                                href="https://www.linkedin.com/in/haritha-kapugedara-8b8894280"
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-sm btn-outline"
                            >
                                <FaLinkedin style={{ marginRight: '8px' }} /> View LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
