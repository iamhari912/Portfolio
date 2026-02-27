import { useEffect } from 'react'

/**
 * Attaches an IntersectionObserver to elements with class `.animate-hidden`.
 * Adds `.visible` when they scroll into view, after an optional data-delay.
 */
export function useScrollAnimation() {
    useEffect(() => {
        const els = document.querySelectorAll('.animate-hidden')
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const el = entry.target
                        const delay = parseInt(el.dataset.delay || '0')
                        setTimeout(() => el.classList.add('visible'), delay)
                        observer.unobserve(el)
                    }
                })
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        )
        els.forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [])
}
