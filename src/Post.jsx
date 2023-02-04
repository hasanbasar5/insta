import React from 'react'
import "./post.css"
import {FaComment} from "react-icons/fa";
import { AiOutlineTable,AiFillHeart} from 'react-icons/ai'
import { CgClapperBoard } from 'react-icons/cg'
import { BiUserPin } from 'react-icons/bi';
export default function Post() {
  return (
    <div>
        <div className='post_head'>
     <div className='post'>
       <AiOutlineTable></AiOutlineTable>   
       <p>POSTS</p> </div>
       <div className='post'>
       <CgClapperBoard></CgClapperBoard>   
       <p>POSTS</p> </div>
       <div className='post'>
       <BiUserPin></BiUserPin>   
       <p>POSTS</p> </div>
        </div>
       
        <div className='post-pic'>
            <div className='p-1'>
                <img src={require("./p1.png")}></img>
               
               <div className='like-1'>
                <div className='cnt-1'>
               <AiFillHeart></AiFillHeart> <p>3.1M</p>
               </div>
               <div className='cnt-2'>
               <FaComment ></FaComment > <p>20.1K</p>
               </div>
               </div>
            </div>

         <div className='p-2'>   <img src={require("./p-2.png")}></img>
         <div className='like-1'>
                <div className='cnt-1'>
               <AiFillHeart></AiFillHeart> <p>848K</p>
               </div>
               <div className='cnt-2'>
               <FaComment ></FaComment > <p>3,356</p>
               </div>
               </div>
         </div>
          <div className='p-3'> 
            <img src={require("./p-3.png")}></img>
            <div className='like-1'>
                <div className='cnt-1'>
               <AiFillHeart></AiFillHeart> <p>5.2M</p>
               </div>
               <div className='cnt-2'>
               <FaComment ></FaComment > <p>22.6K</p>
               </div>
               </div>
          </div> 
        </div>
        <div className='post-pic'>
          <div className='p-4'>  
          <img src={require("./p-4.png")}></img>
          <div className='like-1'>
                <div className='cnt-1'>
               <AiFillHeart></AiFillHeart><p>1M</p>
               </div>
               <div className='cnt-2'>
               <FaComment ></FaComment ><p>5,146</p>
               </div>
               </div>
          </div>
           <div className='p-5'> 
           <img src={require("./p-5.png")}></img>
           <div className='like-1'>
                <div className='cnt-1'>
               <AiFillHeart></AiFillHeart><p>6.2M</p>
               </div>
               <div className='cnt-2'>
               <FaComment ></FaComment ><p>55.5K</p>
               </div>
               </div>
           </div>
           <div className='p-6'> <img src={require("./p-6.png")}></img>
            <div className='like-1'>
                <div className='cnt-1'>
               <AiFillHeart></AiFillHeart><p>1.9M</p>
               </div>
               <div className='cnt-2'>
               <FaComment ></FaComment ><p>6,312</p>
               </div>
               </div>
               </div>
        </div>
        <div className='post-pic'>
           <div className='p-7'>
            <img src={require("./p-7.png")}></img>
            <div className='like-1'>
                <div className='cnt-1'>
               <AiFillHeart></AiFillHeart><p>1.8M</p>
               </div>
               <div className='cnt-2'>
               <FaComment ></FaComment ><p>5,889</p>
               </div>
               </div>
            </div> 
           <div className='p-8'>
            <img src={require("./p-8.png")}></img>
            <div className='like-1'>
                <div className='cnt-1'>
               <AiFillHeart></AiFillHeart><p>3.1M</p>
               </div>
               <div className='cnt-2'>
               <FaComment ></FaComment ><p>14.3k</p>
               </div>
               </div>
            </div> 
           <div className='p-9'>
            <img src={require("./p-9.png")}></img>
            <div className='like-1'>
                <div className='cnt-1'>
               <AiFillHeart></AiFillHeart><p>980K</p>
               </div>
               <div className='cnt-2'>
               <FaComment ></FaComment ><p>3,346</p>
               </div>
               </div>
            </div> 
        </div>
        <div className='post-pic'>
        <div className='p-10'>
                <img src={require("./p-10.png")}></img>
                <div className='like-1'>
                <div className='cnt-1'>
               <AiFillHeart></AiFillHeart><p>5.5M</p>
               </div>
               <div className='cnt-2'>
               <FaComment ></FaComment ><p>25.9K</p>
               </div>
               </div>
                </div>
            <div className='p-11'>
                <img src={require("./p-11.png")}></img>
                <div className='like-1'>
                <div className='cnt-1'>
               <AiFillHeart></AiFillHeart><p>4.2M</p>
               </div>
               <div className='cnt-2'>
               <FaComment ></FaComment ><p>19.7K</p>
               </div>
               </div>
                </div>
          <div className='p-12'>
              <img src={require("./p-12.png")}></img>
              <div className='like-1'>
                <div className='cnt-1'>
               <AiFillHeart></AiFillHeart><p>5.2M</p>
               </div>
               <div className='cnt-2'>
               <FaComment ></FaComment ><p>22.8K</p>
               </div>
               </div>
              </div>
        </div>
        
        <div className='main_cards'>
            <div className='related'>
            <h3>Related accounts</h3>
            <h4>See All</h4>
            </div>
        <div className='card_1'>
            <img src={require("./p1.png")}  width="40%"></img>
            <h4>Surya_14kumar<span><img src={require("./bluetick.png")} width="20px"></img></span></h4>
            <p>surya kumar yadav</p>
            <button>Follow</button>
            <i class="fa-solid fa-xmark"></i>
        </div>
        <div className='card_1'>
            <img src={require("./p1.png")}  width="40%"></img>
            <h4>Sachintendulkar<span><img src={require("./bluetick.png")} width="20px"></img></span></h4>
            <p>Sachin tendulkar</p>
            <button>Follow</button>
            <i class="fa-solid fa-xmark"></i>
        </div>
        <div className='card_1'>
            <img src={require("./p1.png")}  width="40%"></img>
            <h4>aliaabhatt<span><img src={require("./bluetick.png")} width="20px"></img></span></h4>
            <p>Aliaa bhatt</p>
            <button>Follow</button>
            <i class="fa-solid fa-xmark"></i>
        </div>
        <div className='card_1'>
            <img src={require("./p1.png")}  width="40%"></img>
            <h4>Kiraaliadvaani<span><img src={require("./bluetick.png")} width="20px"></img></span></h4>
            <p>KIARA</p>
            <button>Follow</button>
            <i class="fa-solid fa-xmark"></i>
        </div>
       

    </div>
    <div className='footer'>
        <div className='ftr'><p>Meta</p>
        <p>About</p>
        <p>Blog</p>
        <p>Jobs</p>
        <p>Help</p>
        <p>API</p>
        <p>Privacy</p>
        <p>Terms</p>
        <p>Top Accounts</p>
        <p>Location</p>
        <p>Instagram Lite</p>
        <p>Contact</p>
        <p>Uploading </p>
        <p>Non Users</p>
        <p>Suggested Accounts</p>
        </div>
    </div>
    <div className='ftr-1'>
        <p>English</p>
        <p>© 2023 Instagram from Meta</p>
    </div>
    </div>
  )
}
