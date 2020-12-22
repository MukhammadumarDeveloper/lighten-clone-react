import Icon1 from '../../Assets/icon/1.png'
import Icon2 from '../../Assets/icon/2.png'
import Icon3 from '../../Assets/icon/3.png'
import Icon4 from '../../Assets/icon/4.png'

function ChooseUs () {
  
  return (

    <>
      <div className="whyschose">
         <div className="container">

            <div className="row">
               <div className="col-md-7 offset-md-3">
                  <div className="title">
                     <h2>Why <strong className="black">choose us</strong></h2>
                     <span>Fastest repair service with best price!</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="choose_bg">
         <div class="container">
            <div class="white_bg">
            <div class="row">
               <dir class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div class="for_box">
                     <i><img src={Icon1} alt="icon"/></i>
                     <h3>Data recovery</h3>
                     <p>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
                  </div>
               </dir>
               <dir class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div class="for_box">
                     <i><img src={Icon2} alt="icon"/></i>
                     <h3>Computer repair</h3>
                     <p>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
                  </div>
               </dir>
               <dir class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div class="for_box">
                     <i><img src={Icon3} alt="icon"/></i>
                     <h3>Mobile service</h3>
                     <p>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
                  </div>
               </dir>
               <dir class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div class="for_box">
                     <i><img src={Icon4} alt="icon"/></i>
                     <h3>Network solutions</h3>
                     <p>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
                  </div>
               </dir>
               <div class="col-md-12">
                  <a class="read-more" href="/">Read More</a>
               </div>
            </div>
         </div>
       </div>
      </div>
    </>

  )

}

export default ChooseUs
