import { profile } from '../../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer
      className="footer-bar max-w-[1200px] mx-auto px-6 md:px-10 py-8
        flex flex-col sm:flex-row items-center justify-between gap-4
        border-t border-[rgba(237,238,244,0.07)]"
      role="contentinfo"
    >
      <a
        href="#hero"
        className="font-['Montserrat',sans-serif] font-black text-[15px] tracking-[-0.5px]
          text-d-text no-underline hover:text-d-text"
      >
        <span className="text-lime">_</span>seusite
        <span className="text-d-muted text-[12px] font-normal">.dev</span>
      </a>

      <p className="text-[11px] text-d-muted order-3 sm:order-2">
        &copy; {year} {profile.name}. Todos os direitos reservados.
      </p>

      <p className="text-[11px] text-d-faint order-2 sm:order-3">
        Built with <span className="text-lime">React</span> &amp; Tailwind CSS
      </p>
    </footer>
  )
}
