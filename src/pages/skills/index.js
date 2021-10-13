import { Component } from "react";
import moment from "moment";
import Moment from "react-moment";
import { skills } from "services/skills";
import {
  SkillsContent,
  SkillsRow,
  SkillsCol,
  SkillsTitle,
  SkillsSpan,
  SkillsText,
  SkillsCard,
  SkillsCardContent,
  SkillsCardImg,
  SkillsName,
  SkillsCardLink,
  SkillsInfos,
} from "assets/styles/skills";

export default class Skills extends Component {
  state = {
    activeLink: null,
    content: "Ser desenvolvedor é uma viagem onde a próxima parada é a solução de um problema.",
    date: "",
  };

  handleClick = (id, content, date) => {
    this.setState({ activeLink: id, content: content, date: date });
  };

  render() {
    const { content, activeLink, date } = this.state;
    const dateVal = date !== "" ? moment(new Date()).diff(date, 'years') : "";
    const type = dateVal !== 0 ? "years" : "month";
    return (
      <SkillsContent>
        <SkillsRow>
          <SkillsCol lg={6} sm={12}>
            <SkillsTitle>
              <SkillsSpan>{"<"}</SkillsSpan>Skills<SkillsSpan>{">"}</SkillsSpan>
            </SkillsTitle>
            <SkillsText>{content}</SkillsText>
            {date !== ""
             ?
                <SkillsText>
                  <Moment diff={date} unit={type}>{new Date()}</Moment>
                  {dateVal !== 0 ? " ano(s) de experiência" : " meses de experiência"}
                </SkillsText>
             : 
              "Clique no card para saber mais..."
            }
          </SkillsCol>
          <SkillsCol lg={6} sm={12}>
            <SkillsRow>
              {skills.map((skill) => (
                <SkillsCol lg={4} sm={4} xs={4} key={skill.id}>
                  <SkillsCardLink onClick={() => this.handleClick(skill.id, skill.text, skill.date) }>
                    <SkillsCardContent>
                      <SkillsCard  className={skill.id === activeLink ? " selected" : ""}>
                        <SkillsInfos>
                          <SkillsCardImg src={skill.icon} />
                          <SkillsName>{skill.name}</SkillsName>
                        </SkillsInfos>
                      </SkillsCard>
                    </SkillsCardContent>
                  </SkillsCardLink>
                </SkillsCol>
              ))}
            </SkillsRow>
          </SkillsCol>
        </SkillsRow>
      </SkillsContent>
    );
  }
}
