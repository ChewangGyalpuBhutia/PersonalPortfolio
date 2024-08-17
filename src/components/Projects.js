import { Container } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/indiabiztimes.png";
import projImg2 from "../assets/img/educred.png";
import projImg3 from "../assets/img/googlepay.png";
import projImg4 from "../assets/img/qr.png";
import projImg5 from "../assets/img/weatherForecast.png";
import projImg6 from "../assets/img/pincode.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';

export const Projects = () => {
  const projects = [
    {
      id: 0,
      title: "IndiaBizTimes",
      agenda: "India's Top Headlines",
      date: "July 2022 to August 2022",
      description: "IndiaBizTimes is a responsive web based news application that provides the latest top headlines of India across various categories.",
      image: projImg1,
      tags: [
        "React JS",
        "News API",
        "Bootstrap",
        "CSS",
        "HTML",
        "Node JS",
      ],
      github: "https://github.com/ChewangGyalpuBhutia/IndiaBizTimes.git",
      website: "https://chewanggyalpubhutia.github.io/IndiaBizTimes/",
    },
    {
      id: 1,
      title: "Google Pay Clone",
      agenda: "Clone application",
      date: "September 2023 to November 2023",
      description: "This is a clone of the Google Pay application. This is just a demonstration of the pay app, which utilizes sessions for secure data storage",
      image: projImg3,
      tags: [
        "React JS",
        "Bootstrap",
        "CSS",
        "HTML",
        "Sessions"
      ],
      github: "https://github.com/ChewangGyalpuBhutia/GooglePayClone.git",
      website: "https://chewanggyalpubhutia.github.io/GooglePayClone/",
    },
    {
      id: 2,
      title: "Indian Weather Forecast",
      agenda: "Weather Forecasting Application",
      date: "May 2022 to July 2022",
      description: "A weather forecasting application that provides information about weather as well as weather forecasts for up to 5 days at a selected location in India",
      image: projImg5,
      tags: [
        "React JS",
        "weather API",
        "Forecast API",
        "Geo-location API",
        "Bootstrap",
        "CSS",
        "HTML",
      ],
      github: "https://github.com/ChewangGyalpuBhutia/WeatherForecast",
      website: "https://chewanggyalpubhutia.github.io/WeatherForecast/",
    },

    {
      id: 3,
      title: "QR Application",
      agenda: "Qr scanner and generator",
      date: "May 2023 to June 2023",
      description: "This is simple application which provides features like generating QRs and scanning QR",
      image: projImg4,
      tags: [
        "QR library",
        "Bootstrap",
        "CSS",
        "HTML",
        "Express JS",
        "My Sql"
      ],
      github: "https://github.com/ChewangGyalpuBhutia/QrScannerAndGenerator",
      website: "https://chewanggyalpubhutia.github.io/QrScannerAndGenerator/",
    },
    {
      id: 4,
      title: "EDUCRED",
      agenda: "Student Rewarding Framework",
      date: "May 2023 to August 2023",
      description: "For your convinence, Teacher username&password:admin & Student username&password:prashant  EduCred is a student-rewarding framework designed to enhance academic performance of the students. Visit Github Readme file for username and password",
      image: projImg2,
      tags: [
        "PHP",
        "MySQL",
        "HTML",
        "CSS",
        "JavaScript",
        "Ajax",
        "JQuery",
        "PHP MyAdmin",
        "PWA"
      ],
      github: "https://github.com/ChewangGyalpuBhutia/EduCred.git",
      website: "https://educ-red.000webhostapp.com/",
    },

    {
      id: 5,
      title: "ZIP Code Application",
      agenda: "Provide Information related to zipcode",
      date: "June 2023 to July 2023",
      description: "This Application provides locality associated with pincode and also provides the geo-location of the locality",
      image: projImg6,
      tags: [
        "Zipcode API",
        "React JS",
        "Bootstrap",
        "CSS",
        "HTML",
        "JavaScript"
      ],
      github: "",
      website: "",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <div className="top">
          <h2>Projects</h2>
          <p>Check out my projects below</p>
          <div className="border-bottom"></div>
        </div>
        <div className="project-cards d-flex flex-wrap" style={{ gap: '28px' }}>
          {
            projects.map((project) => {
              return (
                <ProjectCard key={project.id}{...project} />
              )
            })
          }
        </div>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="project-section-background"></img>
    </section>
  )
}
