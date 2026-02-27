import { useScrollAnimation } from '../hooks/useScrollAnimation'
import styles from './Experience.module.css'

const roles = [
    {
        active: true,
        role: 'Project Lead',
        org: 'ATIT Rajarata – Association of Technology IT',
        date: 'Jan 2025 – Mar 2025 · 3 mos',
        location: 'Rajarata University of Sri Lanka',
        desc: 'Led technology projects within the association, coordinating team efforts and driving successful project deliveries aligned with organizational goals.',
    },
    {
        active: false,
        role: 'Member',
        org: 'ATIT Rajarata – Association of Technology IT',
        date: 'Jul 2023 – Dec 2024 · 1 yr 6 mos',
        location: 'Rajarata University of Sri Lanka',
        desc: "Active member contributing to technology initiatives, events, and community projects within the university's IT association.",
    },
]

export default function Experience() {
    useScrollAnimation()
    return (
        <section className="section" id="experience">
            <div className="container">
                <div className="section-label animate-hidden" style={{ textAlign: 'center' }}>Journey</div>
                <h2 className="section-title center animate-hidden">Experience</h2>

                <div className={styles.timeline}>
                    {roles.map((r, i) => (
                        <div key={r.role} className={`${styles.item} animate-hidden fade-right`} data-delay={i * 120}>
                            <div className={`${styles.marker} ${r.active ? styles.active : ''}`} />
                            <div className={styles.card}>
                                <div className={styles.orgRow}>
                                    <div className={styles.orgLogo}>ATIT</div>
                                    <div>
                                        <h3>{r.role}</h3>
                                        <span className={styles.orgName}>{r.org}</span>
                                    </div>
                                </div>
                                <div className={styles.meta}>
                                    <span className={styles.date}>📅 {r.date}</span>
                                    <span className={styles.loc}>📍 {r.location}</span>
                                </div>
                                <p>{r.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
