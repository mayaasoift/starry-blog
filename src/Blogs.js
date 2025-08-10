import React, { useState } from 'react';
import styled from 'styled-components';
import blogs from './blogData';

const BlogList = styled.div`
  max-width: 700px;
  margin: 2rem auto;
`;

const BlogEntry = styled.div`
  background: rgba(30, 34, 48, 0.95);
  margin-bottom: 2rem;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 2px 12px #222;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: rgba(40, 44, 58, 0.98);
  }
`;

const Title = styled.h2`
  color: #ffd700;
  margin: 0 0 0.3rem 0;
`;

const Date = styled.div`
  font-size: 0.9rem;
  color: #b6c2cf;
  margin-bottom: 1rem;
`;

const Excerpt = styled.p`
  color: #eaf6fb;
  margin-bottom: 1rem;
`;

const Content = styled.div`
  margin-top: 1rem;
  color: #eaf6fb;
  line-height: 1.6;
`;

export default function Blogs() {
  const [opened, setOpened] = useState(null);

  return (
    <BlogList>
      {blogs.map(blog => (
        <BlogEntry key={blog.id} onClick={() => setOpened(opened === blog.id ? null : blog.id)}>
          <Title>{blog.title}</Title>
          <Date>{blog.date}</Date>
          <Excerpt>{blog.excerpt}</Excerpt>
          {opened === blog.id && (
            <Content>{blog.content}</Content>
          )}
        </BlogEntry>
      ))}
    </BlogList>
  );
}