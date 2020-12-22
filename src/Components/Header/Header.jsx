import { useHistory } from 'react-router-dom'
import Logo from '../../Assets/images/logo.jpg'
import './Header.css'

function Header () {

   const history = useHistory()
  
  return (
    <>

      <header> 
        <div className="container">
          <div className="row">

                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                  <div className="full">
                     <div className="center-desk">
                        <div className="logo"> <a href="index.html"><img src={Logo} alt="logo"/></a> </div>
                     </div>
                  </div>
               </div>

               <div className="col-xl-7 col-lg-7 col-md-9 col-sm-9">
                  <div className="menu-area">
                     <div className="limit-box">
                        <nav className="main-menu">
                           <ul className="menu-area-main">
                              <li className="active">
                                 <button className="nav-btn" onClick={() => history.replace('/')}>Home</button>
                              </li>
                              <li>
                                 <button className="nav-btn" onClick={() => history.replace('/about')}>About</button>
                              </li>
                              <li>
                                 <button className="nav-btn" onClick={() => history.replace('/product')}>product</button>
                              </li>
                              <li>
                                 <button className="nav-btn" onClick={() => history.replace('/blog')}> Blog</button>
                              </li>
                              <li>
                                 <button className="nav-btn" onClick={() => history.replace('/contacts')}>Contact</button>
                              </li>
                              <li class="mean-last">
                                 <button className="nav-btn" onClick={() => history.replace('/signup')}>signup</button>
                              </li>
                           </ul>
                        </nav>
                     </div>
                  </div>
               </div>

               <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                  <button className="buy" onClick={() => history.replace('/#')}>Login</button>
               </div>
          </div>
        </div>
      </header>

    </>
  )

}

export default Header
