import React from "react";
import ProjectCard from "../components/ProjectCard";
import Calculator from "./CalculatePage";

/**
 * 프로젝트 페이지 컴포넌트
 * 사용자의 프로젝트들을 카드 형태로 보여주는 페이지
 */
const ProjectsPage = () => {
  const projects = [
    {
      title: "계산기",
      description: "React를 사용하여 만든 계산기 애플리케이션",
      component: <Calculator />,
    },
    {
      title: "나눠주개",
      description: "반려견 헌혈 예약 및 긴급 수혈 가능 반려견 정보 커뮤니티",
      link: "https://github.com/TEAM-LifeTail",
    },
    {
      title: "조인어스",
      description: "공유를 통해 환경보호를 실천하고자 하는 서비스",
      link: "https://github.com/2024-line4-earth",
    },
  ];

  return (
    <div className="projects-container">
      <h2>프로젝트</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            component={project.component}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
