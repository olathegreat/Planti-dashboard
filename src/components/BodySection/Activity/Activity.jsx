import React from 'react'
import "./Activity.css"
import {BsArrowRightShort, BsArrrowRightShort} from "react-icons/bs"
import user from "../../../Assets/head1.jpg"
import user2 from "../../../Assets/head2.jpg"
import user3 from "../../../Assets/head3.jpg"
import user4 from "../../../Assets/head4.jpg"
import user5 from "../../../Assets/head5.jpg"
// import user from "../../../Assets/profileimg2.jpg"


const Activity = () => {
  return (
    <div className='activitySection'>

      <div className='heading flex'>
        <h1>Recent Activity</h1>

        <button className='btn flex'>
          See All 
          <BsArrowRightShort className='icon'/>

        </button>

        </div>

        <div className="secContainer grid">
          <div className="singleCustomer flex">
            <img src={user} alt='image'/>
            <div className="customerDetails">
              <span className='name'>
                Ola Martha

              </span>
              <small>Ordered new plant</small>
            </div>

            <div className='duration'>
              2 mins ago

            </div>
          </div>


          <div className="singleCustomer flex">
            <img src={user2} alt='image'/>
            <div className="customerDetails">
              <span className='name'>
                Ola Martha

              </span>
              <small>Ordered new plant</small>
            </div>

            <div className='duration'>
              2 mins ago

            </div>
          </div>


          <div className="singleCustomer flex">
            <img src={user3} alt='image'/>
            <div className="customerDetails">
              <span className='name'>
                Ola Martha

              </span>
              <small>Ordered new plant</small>
            </div>

            <div className='duration'>
              2 mins ago

            </div>
          </div>

          <div className="singleCustomer flex">
            <img src={user4} alt='image'/>
            <div className="customerDetails">
              <span className='name'>
                Ola Martha

              </span>
              <small>Ordered new plant</small>
            </div>

            <div className='duration'>
              2 mins ago

            </div>
          </div>

          <div className="singleCustomer flex">
            <img src={user5} alt='image'/>
            <div className="customerDetails">
              <span className='name'>
                Ola Martha

              </span>
              <small>Ordered new plant</small>
            </div>

            <div className='duration'>
              2 mins ago

            </div>
          </div>
        </div>


    </div>
  )
}

export default Activity