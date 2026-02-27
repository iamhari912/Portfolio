import { useScrollAnimation } from '../hooks/useScrollAnimation'
import styles from './Certifications.module.css'

const certs = [
    { icon: '📡', brand: 'cisco', title: 'CCNA: Switching, Routing & Wireless Essentials', org: 'Cisco', date: 'Jan 2026' },
    { icon: '🌐', brand: 'cisco', title: 'CCNA: Introduction to Networks', org: 'Cisco', date: 'Oct 2025' },
    { icon: '🔌', brand: 'cisco', title: 'Introduction to IoT', org: 'Cisco', date: 'Aug 2025' },
    { icon: '☁️', brand: 'aws', title: 'AWS Educate: Getting Started with Storage', org: 'Amazon Web Services', date: 'Dec 2025' },
    { icon: '☁️', brand: 'aws', title: 'AWS Educate: Introduction to Cloud 101', org: 'Amazon Web Services', date: 'Dec 2025' },
    { icon: '🔗', brand: 'li', title: 'Deploying & Configuring Core TCP/IP Services', org: 'LinkedIn Learning', date: 'Feb 2026' },
    { icon: '🔷', brand: 'azure', title: 'Getting Started with Microsoft Azure', org: 'LinkedIn Learning', date: 'Feb 2026' },
    { icon: '🐧', brand: 'li', title: 'Introduction to Linux', org: 'LinkedIn Learning', date: 'Feb 2026' },
    { icon: '🐍', brand: 'uom', title: 'Python for Beginners', org: 'University of Moratuwa', date: 'Feb 2026' },
]

export default function Certifications() {
    useScrollAnimation()
    return (
        <section className="section" id="certifications">
            <div className="container">
                <div className="section-label animate-hidden" style={{ textAlign: 'center' }}>Credentials</div>
                <h2 className="section-title center animate-hidden">Licenses & Certifications</h2>
                <div className={styles.grid}>
                    {certs.map((c, i) => (
                        <div key={c.title} className={`${styles.card} animate-hidden`} data-delay={i * 50}>
                            <div className={`${styles.issuer} ${styles[c.brand]}`}>{c.icon}</div>
                            <div className={styles.info}>
                                <h4>{c.title}</h4>
                                <span className={styles.org}>{c.org}</span>
                                <span className={styles.date}>Issued {c.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
