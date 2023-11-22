import './Header.css'

function Header() {
  return (

    <>
    <div className='header'>
      <div className='navbar'>
        <div>
          <a href="#!" className='logo'>
            <img src="https://xenothemes.co.uk/specto/wp-content/uploads/sites/2/2018/02/logo.svg"/>
          </a>
        </div>
        <div>
          <ul>
            <li>
              <a href="#!" id='home'> HOME </a>
            </li>
            <li>
              <a href="#!"> WHAT'S ON </a>
            </li>
            <li>
              <a href="#!"> NEWS </a>
            </li>
            <li>
              <a href="#!"> SHORTCODES </a>
            </li>
            <li>
              <a href="#!"> CONTACT US </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Header