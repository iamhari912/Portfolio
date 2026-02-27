import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact', cta: true },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)
    const [active, setActive] = useState('')

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20)
            // active section
            const sections = document.querySelectorAll('section[id]')
            const scrollY = window.scrollY + 100
            sections.forEach(s => {
                if (scrollY >= s.offsetTop && scrollY < s.offsetTop + s.offsetHeight)
                    setActive(s.id)
            })
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const closeMenu = () => setOpen(false)

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <a href="#hero" className={styles.logo}>HK<span className={styles.dot}>.</span></a>

                <ul className={`${styles.links} ${open ? styles.open : ''}`}>
                    {links.map(({ href, label, cta }) => (
                        <li key={href}>
                            <a
                                href={href}
                                className={`${cta ? styles.cta : ''} ${active === href.slice(1) ? styles.activeLink : ''}`}
                                onClick={closeMenu}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    className={`${styles.hamburger} ${open ? styles.active : ''}`}
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    <span /><span /><span />
                </button>
            </div>
        </nav>
    )
}
