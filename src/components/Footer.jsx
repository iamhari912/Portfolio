import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <p>© 2026 Haritha Kapugedara · Designed & Built with ❤️ using React</p>
                <p className={styles.sub}>Matale District, Central Province, Sri Lanka</p>
            </div>
        </footer>
    )
}
