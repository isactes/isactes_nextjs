import Link from 'next/link'
import './Header.css'

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
    <header id='header' className='header'>
      <nav className='menu'>
        <div className='logobox'>
          <h2>
            <Link href='/'>
              My web
            </Link>
          </h2>
          <span className='btnmenu'><i className='fas fa-bars' /></span>
        </div>
        <div className='listcontainer'>
          <ul className='lists'>
            {links.map(({ label, route }) => (
              <li className='links' key={route}>
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
