import Product1 from '../../Assets/icon/p1.png'
import Product2 from '../../Assets/icon/p2.png'
import Product3 from '../../Assets/icon/p3.png'
import Product4 from '../../Assets/icon/p4.png'
import Product5 from '../../Assets/icon/p5.png'
import Product6 from '../../Assets/icon/p6.png'
import Product7 from '../../Assets/icon/p7.png'

import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

function Product () {

  return (
    <>
      <Header />


      <div class="brand_color">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="titlepage">
                        <h2>our product</h2>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div class="product">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="title">
                     
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
                  <i><img src={Product1} alt="Product img"/></i>
                  <h3>Norton Internet Security</h3>
                  <span>$25.00</span>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div class="product-box">
                  <i><img src={Product2} alt="Product img" /></i>
                  <h3>Norton Internet Security</h3>
                  <span>$25.00</span>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div class="product-box">
                  <i><img src={Product3} alt="Product img" /></i>
                  <h3>Norton Internet Security</h3>
                  <span>$25.00</span>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div class="product-box">
                  <i><img src={Product4} alt="Product img" /></i>
                  <h3>Norton Internet Security</h3>
                  <span>$25.00</span>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div class="product-box">
                  <i><img src={Product5} alt="Product img" /></i>
                  <h3>Norton Internet Security</h3>
                  <span>$25.00</span>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div class="product-box">
                  <i><img src={Product2} alt="Product img" /></i>
                  <h3>Norton Internet Security</h3>
                  <span>$25.00</span>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div class="product-box">
                  <i><img src={Product6} alt="Product img" /></i>
                  <h3>Norton Internet Security</h3>
                  <span>$25.00</span>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div class="product-box">
                  <i><img src={Product7} alt="Product img" /></i>
                  <h3>Norton Internet Security</h3>
                  <span>$25.00</span>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div class="product-box">
                  <i><img src={Product6} alt="Product img" /></i>
                  <h3>Norton Internet Security</h3>
                  <span>$25.00</span>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div class="product-box">
                  <i><img src={Product1} alt="Product img" /></i>
                  <h3>Norton Internet Security</h3>
                  <span>$25.00</span>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div class="product-box">
                  <i><img src={Product2} alt="Product img" /></i>
                  <h3>Norton Internet Security</h3>
                  <span>$25.00</span>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div class="product-box">
                  <i><img src={Product4} alt="Product img" /></i>
                  <h3>Norton Internet Security</h3>
                  <span>$25.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )

}

export default Product