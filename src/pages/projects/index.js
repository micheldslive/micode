import { Component } from "react";
import { projects } from "services/projects";
import { Helmet } from "react-helmet-async";
import {
  ProjectsContent,
  ProjectsRow,
  ProjectsCol,
  ProjectsTitle,
  ProjectsSpan,
  ProjectsCard,
  ProjectsText,
  ProjectsCardContent,
  ProjectsCardImg,
  ProjectsCardLink,
  ProjectLink,
} from "assets/styles/projects";

export default class Projects extends Component {
  state = {
    activeLink: null,
    content: "Confira nessa Página alguns pequenos projetos do meu Github!.",
    link: "",
  };

  handleClick = (id, content, link) => {
    this.setState({ activeLink: id, content: content, link: link });
  };

  render() {
    const { content, activeLink, link } = this.state;
    return (
      <>
        <Helmet>
        <title>Michel Domingos - Projetos no Github</title>
        <meta name="description" content="Michel Domingos Projetos."/>
        </Helmet>
        <ProjectsContent>
          <ProjectsRow>
            <ProjectsCol lg={12} sm={12} width="700px">
              <ProjectsTitle>
                <ProjectsSpan>{"<"}</ProjectsSpan>Projetos Github<ProjectsSpan>{">"}</ProjectsSpan>
              </ProjectsTitle>
              <ProjectsText>{content}</ProjectsText>
              {link !== ""
              ? <ProjectsText><ProjectLink href={link} target="_blank">{link}</ProjectLink></ProjectsText>
              : <ProjectsText>Clique no card para acessar...</ProjectsText>}
            </ProjectsCol>
            <ProjectsCol lg={12} sm={12}>
              <ProjectsRow>
                {projects.map((project) => 
                  <ProjectsCol lg={3} sm={3} xs={6} key={project.id}>
                    <ProjectsCardLink
                      onClick={() => this.handleClick(project.id, project.text, project.href) } >
                      <ProjectsCardContent>
                        <ProjectsCard  className={project.id === activeLink ? " selected" : ""}>
                          <ProjectsCardImg src={project.icon} />
                        </ProjectsCard>
                      </ProjectsCardContent>
                    </ProjectsCardLink>
                  </ProjectsCol>
                )}
              </ProjectsRow>
            </ProjectsCol>
          </ProjectsRow>
        </ProjectsContent>
      </>
    );
  }
}
