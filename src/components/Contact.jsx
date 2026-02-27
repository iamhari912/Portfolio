import { useScrollAnimation } from '../hooks/useScrollAnimation'
import styles from './Contact.module.css'
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { IoMail, IoCall } from 'react-icons/io5'

const links = [
    {
        href: 'https://www.linkedin.com/in/haritha-kapugedara-8b8894280',
        iconClass: 'li',
        icon: <FaLinkedin />,
        label: 'LinkedIn',
        sub: 'linkedin.com/in/haritha-kapugedara-8b8894280',
    },
    {
        href: 'https://github.com/iamhari912',
        iconClass: 'gh',
        icon: <FaGithub />,
        label: 'GitHub',
        sub: 'github.com/iamhari912',
    },
    {
        href: 'mailto:harithaasanka2000@gmail.com',
        iconClass: 'em',
        icon: <IoMail />,
        label: 'Email',
        sub: 'harithaasanka2000@gmail.com',
    },
    {
        href: 'tel:+94775117407',
        iconClass: 'ph',
        icon: <IoCall />,
        label: 'Phone',
        sub: '+94 77 511 7407',
    },
    {
        href: 'https://wa.me/94741990013',
        iconClass: 'wa',
        icon: <FaWhatsapp />,
        label: 'WhatsApp',
        sub: '+94 74 199 0013',
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
                        <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className={styles.card}>
                            <div className={`${styles.icon} ${styles[l.iconClass]} `}>{l.icon}</div>
                            <div>
                                <strong>{l.label}</strong>
                                <span>{l.sub}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
