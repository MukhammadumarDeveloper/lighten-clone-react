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

                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                  <div class="full">
                     <div class="center-desk">
                        <div class="logo"> <a href="index.html"><img src={Logo} alt="logo"/></a> </div>
                     </div>
                  </div>
               </div>

               <div class="col-xl-7 col-lg-7 col-md-9 col-sm-9">
                  <div class="menu-area">
                     <div class="limit-box">
                        <nav class="main-menu">
                           <ul class="menu-area-main">
                              <li class="active">
                                 <button onClick={() => history.replace('/')}>Home</button>
                              </li>
                              <li>
                                 <button onClick={() => history.replace('/about')}>About</button>
                              </li>
                              <li>
                                 <button onClick={() => history.replace('/product')}>product</button>
                              </li>
                              <li>
                                 <button onClick={() => history.replace('/blog')}> Blog</button>
                              </li>
                              <li>
                                 <button onClick={() => history.replace('/contacts')}>Contact</button>
                              </li>
                              <li class="mean-last">
                                 <button onClick={() => history.replace('/signup')}>signup</button>
                              </li>
                           </ul>
                        </nav>
                     </div>
                  </div>
               </div>

               <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                  {/* <li><a className="buy" href="#">Login</a></li> */}
               </div>
          </div>
        </div>
      </header>

    </>
  )

}

export default Header
