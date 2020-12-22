import Banner2 from '../../Assets/images/banner2.jpg'
import Product1 from '../../Assets/icon/p1.png'
import Product2 from '../../Assets/icon/p2.png'
import Product3 from '../../Assets/icon/p3.png'
import Product4 from '../../Assets/icon/p4.png'
import Product5 from '../../Assets/icon/p5.png'
import Product6 from '../../Assets/icon/p6.png'
import Product7 from '../../Assets/icon/p7.png'
import ClientImg from '../../Assets/images/lllll.png'
import CallIcon from '../../Assets/icon/calll.png'
import Map from '../../Assets/images/mapimg.jpg'

import Header from '../../Components/Header/Header'
import ChooseUs from '../../Components/ChooseUs/ChooseUs'
import ServiceProcess from '../../Components/ServiceProcess/ServiceProcess'
import Footer from '../../Components/Footer/Footer'

function Home () {

  return (
    <>

      <Header />
      
      <section>
        <div id="main_slider" class="carousel slide banner-main" data-ride="carousel">

          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="first-slide" src={Banner2} alt="First slide" />
              <div class="container">
                <div class="carousel-caption relative">
                  <h1>Our <br /> <strong class="black_bold">Latest </strong><br />
                    <strong class="yellow_bold">Product </strong></h1>
                  <p>It is a long established fact that a r <br />
                    eader will be distracted by the readable content of a page </p>
                  <a href="/">see more Products</a>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img class="second-slide" src="images/banner2.jpg" alt="Second slide" />
              <div class="container">
                <div class="carousel-caption relative">
                  <h1>Our <br /> <strong class="black_bold">Latest </strong><br />
                           <strong class="yellow_bold">Product </strong></h1>
                  <p>It is a long established fact that a r <br />
                          eader will be distracted by the readable content of a page </p>
                  <a href="/">see more Products</a>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img class="third-slide" src="images/banner2.jpg" alt="Third slide" />
              <div class="container">
                <div class="carousel-caption relative">
                  <h1>Our <br /> <strong class="black_bold">Latest </strong><br />
                    <strong class="yellow_bold">Product </strong></h1>
                  <p>It is a long established fact that a r <br />
                    eader will be distracted by the readable content of a page </p>
                  <a href="/">see more Products</a>
                </div>
              </div>
            </div>

          </div>

          <a class="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
            <i class='fa fa-angle-right'></i>
          </a>
          <a class="carousel-control-next" href="#main_slider" role="button" data-slide="next">
            <i class='fa fa-angle-left'></i>
          </a>

        </div>
      </section>

      <ChooseUs  />

      <ServiceProcess />

      <div class="product">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="title">
                     <h2>our <strong class="black">products</strong></h2>
                     <span>We package the products with best services to make you a happy customer.</span>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div class="product-bg">
        <div class="product-bg-white">
          <div class="container">
            <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div class="product-box">
                     <i><img src={Product1} alt="Product icon" /></i>
                     <h3>Norton Internet Security</h3>
                     <span>$25.00</span>
                  </div>
               </div>
               <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div class="product-box">
                     <i><img src={Product2} alt="Product icon"/></i>
                     <h3>Norton Internet Security</h3>
                     <span>$25.00</span>
                  </div>
               </div>
               <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div class="product-box">
                     <i><img src={Product3} alt="Product icon"/></i>
                     <h3>Norton Internet Security</h3>
                     <span>$25.00</span>
                  </div>
               </div>
               <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div class="product-box">
                     <i><img src={Product4} alt="Product icon" /></i>
                     <h3>Norton Internet Security</h3>
                     <span>$25.00</span>
                  </div>
               </div>
               <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div class="product-box">
                     <i><img src={Product5} alt="Product icon" /></i>
                     <h3>Norton Internet Security</h3>
                     <span>$25.00</span>
                  </div>
               </div>
               <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div class="product-box">
                     <i><img src={Product2} alt="Product icon" /></i>
                     <h3>Norton Internet Security</h3>
                     <span>$25.00</span>
                  </div>
               </div>
               <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div class="product-box">
                     <i><img src={Product6} alt="Product icon" /></i>
                     <h3>Norton Internet Security</h3>
                     <span>$25.00</span>
                  </div>
               </div>
               <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div class="product-box">
                     <i><img src={Product7} alt="Product icon" /></i>
                     <h3>Norton Internet Security</h3>
                     <span>$25.00</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      <div class="Clients_bg_white">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="title">
                  <h3>What Clients Say?</h3>
              </div>
            </div>
          </div>

          <ol class="carousel-indicators">
            <li data-target="#client_slider" data-slide-to="0" class="active"></li>
            <li data-target="#client_slider" data-slide-to="1"></li>
            <li data-target="#client_slider" data-slide-to="2"></li>
          </ol>

          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="container">
                <div class="carousel-caption text-bg">
                  <div class="img_bg">
                    <i><img src={ClientImg} alt="Client img"/><span>Jone Due<br /><strong class="date">12/02/2019</strong></span></i>
                  </div>
                
                  <p>You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am really satisfied with my first laptop service.<br />
                  You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am </p>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="container">
                <div class="carousel-caption text-bg">
                  <div class="img_bg">
                    <i><img src={ClientImg} alt="Client img"/><span>Jone Due<br /><strong class="date">12/02/2019</strong></span></i> 
                  </div>

                  <p>You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am really satisfied with my first laptop service.<br />
                  You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am </p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="container">
                <div class="carousel-caption text-bg">

                  <div class="img_bg">
                    <i><img src={ClientImg} alt="Client img"/><span>Jone Due<br /><strong class="date">12/02/2019</strong></span></i>
                  </div>

                  <p>You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am really satisfied with my first laptop service.<br />
                  You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am </p>
               
                </div>
              </div>
            </div>
        </div>

      </div>
      </div> 



      <div class="container">
        <div class="yellow_bg">
          <div class="row">
            <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12">
              <div class="yellow-box">
                <h3>REQUEST A FREE QUOTE<i><img src={CallIcon} alt="call icon" /></i></h3> 
                <p>Get answers and advice from people you want it from.</p>
              </div>
            </div>
            <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12">
              <div class="yellow-box">
                <a href="/">Get  Quote</a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="container-fluid padi">
         <div class="map">
            <img src={Map} alt="img"/>
         </div>
      </div>

      <Footer />
    </>
  )

}

export default Home
