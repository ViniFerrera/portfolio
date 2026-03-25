import { profile } from '../../data/portfolio'

export default function Footer() {
  return (
    <footer
      className="text-center py-8 px-5 text-xs
        text-base-400 border-t border-base-600/30
        light:text-light-500 light:border-light-700/30"
      role="contentinfo"
    >
      <p>
        Desenvolvido por{' '}
        <span className="text-accent font-medium">{profile.name}</span>
        {' '}&mdash; {new Date().getFullYear()}
      </p>
    </footer>
  )
}
