'use client'
import Link from 'next/link'
import styles from './Header.module.css'
import { useState } from 'react'

const links = [{
  label: 'Home',
  route: '/'
},
{
  label: 'About',
  route: '/about'
},
{
  label: 'Posts',
  route: '/posts'
},
{
  label: 'Software',
  route: '/software'
},
{
  label: 'Contact',
  route: '/contact'
}
]
function Header () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={styles.menu}>
      <nav className={styles.header}>
        <div className={styles.logobox}>
          <h2>
            <Link href='/'>
              My web
            </Link>
          </h2>
          <span className={styles.btnmenu} onClick={handleMenu}>
            <i className={isMenuOpen ? `${styles.fas}${styles.faTimes}` : `${styles.fas} ${styles.faBars}`} />
          </span>
        </div>
        <div className={`${styles.listcontainer} ${isMenuOpen ? styles.showMenu : ''}`}>
          <ul className='lists'>
            {links.map(({ label, route }) => (
              <li className={styles.links} key={route}>
                <Link href={route}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
export default Header
