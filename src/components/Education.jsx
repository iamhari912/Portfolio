import { useScrollAnimation } from '../hooks/useScrollAnimation'
import styles from './Education.module.css'

const edu = [
    {
        emoji: '🎓',
        type: 'university',
        degree: 'Bachelor of Information and Communication Technology',
        institution: 'Rajarata University of Sri Lanka',
        period: '2022 – Present',
        desc: 'Comprehensive degree in ICT with focus on networking, software development, and emerging technologies.',
        tags: ['ICT', 'Networking', 'Software Dev'],
    },
    {
        emoji: '🌐',
        type: 'cisco',
        degree: 'CCNA – Cisco Certified Network Associate',
        institution: 'University of Moratuwa – Cisco Networking Academy',
        period: 'Jan 2025 – Present',
        desc: 'Coursework includes ITN, Switching, Routing, and Wireless Essentials (SRWE). Deep-diving into enterprise networking.',
        tags: ['CCNA', 'Routing', 'Switching', 'Wireless'],
    },
]

export default function Education() {
    useScrollAnimation()
    return (
        <section className={`section ${styles.education}`} id="education">
            <div className="container">
                <div className="section-label animate-hidden" style={{ textAlign: 'center' }}>Academic</div>
                <h2 className="section-title center animate-hidden">Education</h2>
                <div className={styles.grid}>
                    {edu.map((e, i) => (
                        <div key={e.degree} className={`${styles.card} animate-hidden`} data-delay={i * 150}>
                            <div className={`${styles.icon} ${styles[e.type]}`}>{e.emoji}</div>
                            <div className={styles.details}>
                                <h3>{e.degree}</h3>
                                <span className={styles.institution}>{e.institution}</span>
                                <span className={styles.period}>{e.period}</span>
                                <p>{e.desc}</p>
                                <div className={styles.tags}>
                                    {e.tags.map(t => <span key={t}>{t}</span>)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
