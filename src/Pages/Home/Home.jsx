import Banner2 from '../../Assets/images/banner2.jpg'
import Product1 from '../../Assets/icon/p1.png'
import Product2 from '../../Assets/icon/p2.png'
import Product3 from '../../Assets/icon/p3.png'
import Product4 from '../../Assets/icon/p4.png'
import Product5 from '../../Assets/icon/p5.png'
import Product6 from '../../Assets/icon/p6.png'
import Product7 from '../../Assets/icon/p7.png'

import Header from '../../Components/Header/Header'
import ChooseUs from '../../Components/ChooseUs/ChooseUs'
import ServiceProcess from '../../Components/ServiceProcess/ServiceProcess'

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
    </>
  )

}

export default Home
