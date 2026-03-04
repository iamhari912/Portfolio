import { useScrollAnimation } from '../hooks/useScrollAnimation'
import styles from './Projects.module.css'

const projects = [
    {
        featured: true,
        icon: '🍃',
        title: 'AI-Based Mango Disease Detection',
        desc: 'An AI-powered system designed to detect and classify diseases in mango leaves using machine learning models.',
        tags: ['Machine Learning', 'Computer Vision', 'AI'],
    },
    {
        featured: true,
        badge: 'Research · Ongoing',
        icon: '🔬',
        title: 'Explainable AI Network Monitoring System',
        desc: 'An Explainable AI-Based Network Monitoring System for transparent diagnosis of network performance and security anomalies. Uses XAI techniques to make AI decisions interpretable for network operators.',
        tags: ['Explainable AI', 'Network Security', 'Anomaly Detection', 'Machine Learning', 'Research'],
        research: true,
    },
    {
        icon: '🍽️',
        title: 'Restaurant Online Food Ordering System',
        desc: 'A full-stack web application for restaurants to manage online food orders, menus, and customer interactions with a seamless ordering experience.',
        tags: ['Full Stack', 'Node.js', 'React.js', 'MySQL'],
    },
    {
        icon: '📱',
        title: 'Social Hub – Social Media Platform',
        desc: 'A feature-rich social media platform enabling users to connect, share content, and interact within a community-driven environment.',
        tags: ['Social Platform', 'React.js', 'Node.js', 'MongoDB'],
    },
    {
        icon: '🚗',
        title: 'Vehicle Service Center Management App',
        desc: 'A comprehensive management application for vehicle service centers to handle appointments, service records, customer data, and inventory efficiently.',
        tags: ['Management System', 'Database', 'Full Stack'],
    },
]

export default function Projects() {
    useScrollAnimation()
    return (
        <section className={`section ${styles.projects}`} id="projects">
            <div className="container">
                <div className="section-label animate-hidden" style={{ textAlign: 'center' }}>Portfolio</div>
                <h2 className="section-title center animate-hidden">Featured Projects</h2>

                <div className={styles.grid}>
                    {projects.map((p, i) => (
                        <div
                            key={p.title}
                            className={`${styles.card} ${p.featured ? styles.featured : ''} animate-hidden`}
                            data-delay={i * 80}
                        >
                            {p.badge && <span className={styles.badge}>{p.badge}</span>}
                            <div className={styles.icon}>{p.icon}</div>
                            <h3>{p.title}</h3>
                            <p>{p.desc}</p>
                            <div className={styles.tags}>
                                {p.tags.map(t => <span key={t}>{t}</span>)}
                            </div>
                            {p.research && (
                                <div className={styles.researchBadge}>🔬 Ongoing Research</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
