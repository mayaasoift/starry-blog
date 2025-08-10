import React from 'react';
import styled from 'styled-components';
import projects from './projectData';

const ProjectList = styled.div`
  max-width: 700px;
  margin: 2rem auto;
`;

const ProjectCard = styled.div`
  background: rgba(30, 34, 48, 0.93);
  margin-bottom: 2rem;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 2px 12px #222;
`;

const Name = styled.h2`
  color: #ffd700;
  margin: 0 0 0.3rem 0;
`;

const Desc = styled.p`
  color: #eaf6fb;
  margin-bottom: 1rem;
`;

const Link = styled.a`
  color: #ffd700;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
    color: #fff;
  }
`;

export default function Projects() {
  return (
    <ProjectList>
      {projects.map((p, i) => (
        <ProjectCard key={i}>
          <Name>{p.name}</Name>
          <Desc>{p.description}</Desc>
          <Link href={p.link} target="_blank" rel="noopener noreferrer">
            View Project
          </Link>
        </ProjectCard>
      ))}
    </ProjectList>
  );
}