import { useScrollAnimation } from '../hooks/useScrollAnimation'
import styles from './Skills.module.css'

const technical = [
    {
        icon: '🌐', title: 'Networking',
        pills: ['Ethernet', 'IP Connectivity', 'IP Services', 'IP Subnetting', 'IPv4 & IPv6',
            'Network Fundamentals', 'Security Fundamentals', 'Switching', 'Access Connectivity',
            'Access Security', 'Routing', 'Switching Protocols', 'Wireless LAN Controllers'],
    },
    {
        icon: '☁️', title: 'DevOps & Cloud',
        pills: ['Amazon Web Services (AWS)', 'Cloud Foundations', 'Storage Services'],
    },
    {
        icon: '🤖', title: 'Machine Learning & AI',
        pills: ['Machine Learning', 'Explainable AI (XAI)', 'Network Analytics', 'Anomaly Detection'],
    },
    {
        icon: '💻', title: 'Development',
        pills: ['HTML', 'CSS', 'React.js', 'Node.js', 'Git', 'GitHub', 'MySQL', 'MongoDB', 'Python', 'Linux'],
    },
]

const soft = [
    { icon: '🔍', label: 'Problem-Solving' },
    { icon: '💬', label: 'Communication' },
    { icon: '🔄', label: 'Adaptability' },
    { icon: '⏰', label: 'Time Management' },
    { icon: '🎯', label: 'Critical Thinking' },
    { icon: '🤝', label: 'Team Collaboration' },
]

export default function Skills() {
    useScrollAnimation()
    return (
        <section className="section" id="skills">
            <div className="container">
                <div className="section-label animate-hidden" style={{ textAlign: 'center' }}>Expertise</div>
                <h2 className="section-title center animate-hidden">Technical Skills</h2>

                <div className={styles.grid}>
                    {technical.map((cat, i) => (
                        <div
                            key={cat.title}
                            className={`${styles.card} animate-hidden`}
                            data-delay={i * 80}
                        >
                            <span className={styles.catIcon}>{cat.icon}</span>
                            <h3>{cat.title}</h3>
                            <div className={styles.pills}>
                                {cat.pills.map(p => <span key={p}>{p}</span>)}
                            </div>
                        </div>
                    ))}

                    <div className={`${styles.card} ${styles.softCard} animate-hidden`} data-delay="320">
                        <span className={styles.catIcon}>🧠</span>
                        <h3>Soft Skills</h3>
                        <div className={styles.softGrid}>
                            {soft.map(s => (
                                <div key={s.label} className={styles.softItem}>
                                    <span>{s.icon}</span> {s.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
