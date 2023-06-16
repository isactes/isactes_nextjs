import Link from 'next/link'
import styles from '../footer/Footer.module.css'

const links = [
  {
    label: 'Inicio',
    route: '/'
  },
  {
    label: 'Kit Cámaras',
    route: '/kit-camaras'
  },
  {
    label: 'Software',
    route: '/software'
  },
  {
    label: 'Productos',
    route: '/productos'
  },
  {
    label: 'Soporte',
    route: '/soporte'
  },
  {
    label: 'Contacto',
    route: '/contacto'
  }
]

function Footer () {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.footnav}>
          <ul>
            {links.map(({ label, route }) => (
              <li key={route}>
                <Link href={route} passHref>
                  <a>{label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.splitleft}>
          <div className={styles.social}>
            <a href='https://www.facebook.com/zkacceso/' target='_blank' className={styles.fb}>
              <img src='' alt='' />
            </a>
            <a href='https://www.youtube.com/c/ZKM%C3%A9xico' target='_blank' className='youtube'>
              <img width='60' height='60' src='./img/iconos/youtube.png' alt='' />
            </a>
            <a href='https://www.instagram.com/zkmexico/?hl=es-la' target='_blank' className='inta'>
              <img width='60' height='60' src='./img/iconos/instagram.png' alt='' />
            </a>
          </div>
          <img src='./img/iconos/logo-1.png' width='200px' height='40px' alt='ZKMéxico' title='ZKMéxico' />
          <div className='copyright'>
            © Copyright 2020 Todos los Derechos Reservados
          </div>
        </div>
        <div className='splitmid'>
          <h3>Contactanos</h3>
          Puedes contactarnos en cualquier momento.
          <div className='newsletterBox'>
            <input type='text' className='txtfld' placeholder='Ingrese su email' />
            <button className='btn'>Enviar</button>
          </div>
          <strong>ZKMéxico</strong>
          <br /><br />
          <img src='' />
        </div>
        <div className='splitright'>
          <h3>Contactanos</h3>
          <div className='row'>
            <i className='fa loc' />
            <strong>Video Seguridad/Vigilancia CCTV </strong>
            <br />
            Eje Cental Lázaro Cárdenas 365,
            <br />
            Col. Atenor Sala,
            <br />
            Benito Juárez C.P. 03010,
            <br />
            Ciudad de México.
          </div>
          <div className='row'>
            <i className='fa phone' />
            Teléfono: 55-5519-4428
            <br />
            <font style={{ paddingLeft: '22px' }}>Whatsapp: 55-3916-2770</font>
          </div>
          <div className='row'>
            <i className='fa mail' />
            <a href='https://zkmexico.mx/' target='_blank' id='A_55'>zkmexico.mx</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
