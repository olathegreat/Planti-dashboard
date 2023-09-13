import React from 'react'
import "./Listing.css"
import { BsArrowRightShort } from 'react-icons/bs'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import img from "../../../Assets/plant2.png"
import img1 from "../../../Assets/coffeeplant.png"
import img2 from "../../../Assets/fern.png"
import img3 from "../../../Assets/spiderplant.png"
import img4 from "../../../Assets/profileimg5.jpg"
import img5 from "../../../Assets/profileimg3.jpg"
import img6 from "../../../Assets/profileimg4.jpg"
import img7 from "../../../Assets/profileimg6.jpg"

// import img3 from "../../../Assets/spiderplant.png"

const Listing = () => {
  return (
    <div className='listingSection'>
      
      <div className="heading flex">
        <h1>My Listings</h1>
        <button className='btn flex'>

          See All <BsArrowRightShort className='icon'/>
        </button>
      </div>

      <div className="sectionContainer flex">
        <div className="singleItem">
          <AiFillHeart className='icon'/>

          <img src={img} alt='Image Name'/>
          <h3>Annual Vince</h3>
        </div>


        <div className="singleItem">
          <AiOutlineHeart className='icon'/>

          <img src={img1} alt='Image Name'/>
          <h3>Coffe Plant</h3>
        </div>


        <div className="singleItem">
          <AiOutlineHeart className='icon'/>

          <img src={img2} alt='Image Name'/>
          <h3>Button Fern</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className='icon'/>

          <img src={img3} alt='Image Name'/>
          <h3>Spider Plant</h3>
        </div>
      </div>

      <div className='sellers flex'>
         <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>

            <button className='btn flex'>

                 See All <BsArrowRightShort className='icon'/>
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={img4} alt='image user'/>
              <img src={img5} alt='image user'/>
              <img src={img6} alt='image user'/>
              <img src={img7} alt='image user'/>
            </div>
            <div className="cardText">
              <span>
                14,556 plant sold <br/>

                <small>21 sellers <span className='date'>7 Days</span></small>
              </span>
            </div>
          </div>
         </div>



         <div className="featuredSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>

            <button className='btn flex'>

                 See All <BsArrowRightShort className='icon'/>
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={img7} alt='image user'/>
              <img src={img6} alt='image user'/>
              <img src={img4} alt='image user'/>
              <img src={img5} alt='image user'/>
            </div>
            <div className="cardText">
              <span>
                28,556 plant sold <br/>

                <small>26 sellers <span className='date'>31 Days</span></small>
              </span>
            </div>
          </div>
         </div>

      </div>
      
    </div>
  )
}

export default Listing