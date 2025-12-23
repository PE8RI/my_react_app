import { useState } from "react";

export default function Like(){
  let [isLiked,SetisLiked]=useState(false);
  let [Click,setClick]=useState(0);
  let Toggle=()=>{
    SetisLiked(!isLiked);
    setClick(Click+1)
  }
  let likeStyle={color:"red"};
  return(
    <div>
          <p>click={Click}</p>
          <p onClick={Toggle}> 
          {
            isLiked ? 
            (
              <i className="fa-solid fa-heart" style={likeStyle}></i>
            ):(
              <i className="fa-regular fa-heart"></i>
            )}
          </p>
    </div>
 
  )
}