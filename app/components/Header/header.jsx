import Link from 'next/link'
import styles from './Header.module.css'

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
  return (
    <header className={styles.menu}>
      <nav className={styles.header}>
        <div className={styles.logobox}>
          <h2>
            <Link href='/'>
              My web
            </Link>
          </h2>
          <span className={styles.btnmenu}><i className={styles.fas && styles.fabars} /></span>
        </div>
        <div className={styles.listcontainer}>
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
