import React from 'react'
import Sectioncontainer from '../sectioncontainer'
import ProjectCard from './ProjectCard'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const Projects = () => {
    const projectDir = "projects";
    const files = fs.readdirSync(path.join(projectDir));
    const projects  = files.map(filename=>{
        const fileContent = fs.readFileSync(path.join(projectDir,filename),"utf-8");
        const {data:frontMatter} = matter(fileContent);
        return {
            meta:frontMatter,
            slug:filename.replace(".mdx","")
        }
    }).slice(0,5)

  return (
    <Sectioncontainer title='Projects' slug='projects'>
       {projects.map(blog=>(
        <ProjectCard key={blog.slug} slug={blog.slug} meta={blog.meta}/>
       ))}
    </Sectioncontainer>
  )
}

export default Projects