import React from "react"
import pic from "../assets/dp.jpg"

export default function Profile() {
    return (
      <div className="profile">
        <img src={pic} alt="profile_pic"></img>
      </div>
    );
  }