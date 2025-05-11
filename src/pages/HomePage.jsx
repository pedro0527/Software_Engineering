import React from "react";
import FeatureCard from "../components/FeatureCard";

const HomePage = () => {
  const features = [
    {
      title: "소개",
      description: "안녕하세요! 프론트엔드 개발자를 희망하는 이수용입니다.",
    },
    {
      title: "프로젝트",
      description: "제가 진행했던 프로젝트에 대해서 설명합니다.",
    },
    {
      title: "연락처",
      description: "저에게 연락하는 방법입니다.",
    },
    {
      title: "기술 스택",
      description: "HTML, CSS, JavaScript, REACT, TypeScript",
    },
  ];

  return (
    <div className="home-container">
      <h2>환영합니다!</h2>
      <p>이 웹사이트는 React를 사용하여 만든 개인 포트폴리오입니다.</p>
      <div className="features">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
