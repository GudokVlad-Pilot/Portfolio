import "../styles/ExperienceCard.css"

type ExperienceProps = {
    id: number;
    position: string;
    title: string;
    logo: any;
    duties: string[];
   };

function ExperienceCard(props: ExperienceProps) {
    return (
      <div className='experienceCard'>
        <span className="position">{props.position}</span>
        <span className="title">{props.title}</span>
        <img src={props.logo} alt="" className="img" />
        <ul>
          {props.duties.map((duty, index) => (
            <li key={index} className="duty">{duty}</li>
          ))}
        </ul>
      </div>
    );
  }

export default ExperienceCard;