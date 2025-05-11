import React from "react";
import profile from "../assets/profile.png";

const ProfileCard = () => {
  return (
    <div className="profile">
      <img src={profile} alt="프로필" />
      <div className="profile-info">
        <h3>이름 : 이수용</h3>
        <p>안녕하세요! 저는 프론트엔드 개발자를 희망합니다.</p>
      </div>
    </div>
  );
};

export default ProfileCard;
