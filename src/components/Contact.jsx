import { useScrollAnimation } from '../hooks/useScrollAnimation'
import styles from './Contact.module.css'
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { IoMail, IoCall } from 'react-icons/io5'

const links = [
    {
        id: 'li',
        href: 'https://www.linkedin.com/in/haritha-kapugedara-8b8894280',
        iconClass: 'li',
        icon: <FaLinkedin />,
    },
    {
        id: 'gh',
        href: 'https://github.com/iamhari912',
        iconClass: 'gh',
        icon: <FaGithub />,
    },
    {
        id: 'em',
        href: 'mailto:harithaasanka2000@gmail.com',
        iconClass: 'em',
        icon: <IoMail />,
    },
    {
        id: 'ph',
        href: 'tel:+94775117407',
        iconClass: 'ph',
        icon: <IoCall />,
    },
    {
        id: 'wa',
        href: 'https://wa.me/94741990013',
        iconClass: 'wa',
        icon: <FaWhatsapp />,
    },
]

export default function Contact() {
    useScrollAnimation()
    return (
        <section className={`section ${styles.contact} `} id="contact">
            <div className="container">
                <div className="section-label animate-hidden" style={{ textAlign: 'center' }}>Let's Connect</div>
                <h2 className="section-title center animate-hidden">Get In Touch</h2>
                <p className={`${styles.subtitle} animate-hidden`}>
                    I'm currently open to networking, internship, and collaboration opportunities.<br />
                    Feel free to reach out!
                </p>
                <div className={`${styles.links} animate-hidden`} data-delay="100">
                    {links.map(l => (
                        <a key={l.id} href={l.href} target="_blank" rel="noreferrer" className={styles.card}>
                            <div className={`${styles.icon} ${styles[l.iconClass] || ''}`}>{l.icon}</div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
