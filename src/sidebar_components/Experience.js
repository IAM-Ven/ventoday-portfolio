import React from 'react';
import 'materialize-css/dist/js/materialize.min.js';
import ComponentHeader from "../components/ComponentHeader";
import M from "materialize-css/dist/js/materialize.min";
import honelwellImg from '../images/experience/Honeywell-logo.png';
import telkomImg from '../images/experience/TelkomSA.png';
import agilisImg from '../images/experience/AGILIS.png';
import srmImg from '../images/experience/SRM_TECH.png';

const EXPERIENCE_DATA = [
    {
        image: agilisImg,
        websiteLink: "https://www.itsagilis.com",
        professionTitle: "Full Stack Developer",
        descriptionPoints: [
            "Involved in analysis, design, and implementation, and testing phases of Software Development Life Cycle (SDLC) and used agile methodology for developing the application.",
            "Used Java-J2EE patterns like Model View Controller (MVC), Business Delegate, Data Transfer Objects, Data Access Objects, factory patterns.",
            "Implemented Java 1.8 features for the existing application wherever required.",
            "Used JIRA to assign, track, report and, audit the issues in the application.",
            "Implemented fail-safe and circuit breaker patterns in Spring Boot, Microservices applications using Hystrix.",
            "Involved in Maven-based build process and continuous integration of the project using Jenkins for the automatic build process and deploying software.",
            "Developing the Microservices using Spring Boot that create, update, delete and get the assignment information from the backend and handled the security using Spring Security to enable the application to be deployed on AWS EC2 Server Cloud.",
            "Developed Microservices using Spring Boot, Spring Cloud with Netflix Eureka to create the discovery Server, service, discovery clients and integrated Apache Kafka and Zookeeper as a message broker. Used Swagger to design and document Microservices.",
            "Designed and developed the End Points (Controllers), Business Layer, DAO Layer using Hibernate/JDBC.",
            "Used Hibernate, JPA object-relational mapping (ORM) solution, a technique of mapping data representation from MVC model to Oracle Relational data model with an SQL-based schema.",
        ],
        date: "December 2018 - Present | Pretoria, Gauteng",
       
    },
    {
        image: telkomImg,
        websiteLink: "https://uhcl.edu",
        professionTitle: "Teaching Assistant",
        descriptionPoints: [
            "Assisted, graded, and gave feedback on assignments for over 30 students.",
            "Tutored students individually and in small groups to reinforce learning concepts."
        ],
        date: "Jun 2019 - Dec 2020 | Houston, TX",
        tooltip: "Look at the company's website"
    },
    {
        image: honelwellImg,
        websiteLink: "https://www.sandvine.com",
        professionTitle: "Senior Software Engineer",
        descriptionPoints: [
            "Knowledge of Internet traffic analysis with a good understanding of L4-L7 protocols (TCP/UDP, HTTP, SSL, QUIC).",
            "Expertise in C++, OOPS, Multi-threading, Exception-Handling & STL Containers.",
            "Strong experience working in a Linux environment.",
            "Involved in the complete software development life cycle and agile development practices.",
            "Solved issues related to functionality breakage, concurrency, performance, memory leak, and crashes in C++.",
            "Worked with the DevOps team to implement the build infrastructure functionality in Python.",
            "Wrote Shell/AWK scripts to automate package building, unit-testing on different Linux distribution.",
            "Performed code reviews to ensure the work delivered by the team is of high-quality standards.",
            "Analyzed, debugged, and/or assisted in problem-solving in both development and production environment."
        ],
        date: "Jan 2015 - Oct 2016 | Hyderabad, India",
        tooltip: "Look at the company's website"
    },

    {
        image: srmImg,
        websiteLink: "https://www.srmtech.com/",
        professionTitle: "Software Engineer",
        descriptionPoints: [
            "Knowledge of Internet traffic analysis with a good understanding of L4-L7 protocols (TCP/UDP, HTTP, SSL, QUIC).",
            "Expertise in C++, OOPS, Multi-threading, Exception-Handling & STL Containers.",
            "Strong experience working in a Linux environment.",
            "Involved in the complete software development life cycle and agile development practices.",
            "Solved issues related to functionality breakage, concurrency, performance, memory leak, and crashes in C++.",
            "Worked with the DevOps team to implement the build infrastructure functionality in Python.",
            "Wrote Shell/AWK scripts to automate package building, unit-testing on different Linux distribution.",
            "Performed code reviews to ensure the work delivered by the team is of high-quality standards.",
            "Analyzed, debugged, and/or assisted in problem-solving in both development and production environment."
        ],
        date: "Oct 2012 - Dec 2014 | Chennai, India",
        tooltip: "Look at the company's website"
    }
]

class Experience extends React.Component {
    componentDidMount() {
        const elem = document.querySelectorAll(".experience-tooltip");
        M.Tooltip.init(elem, {
            margin: 50,
            enterDelay: 400,
            exitDelay: 200,
        });
    }

    renderHtmlList(descriptionPoints) {
        let count = 0
        return descriptionPoints.map(point => {
            ++count
            return <li key={count}> {point}</li>
        })
    }

    renderCards() {
        return EXPERIENCE_DATA.map(data => {
            return (
                <div key={data.professionTitle} className="row justify-content-center">
                    <div className="col-12 col-lg-11 col-xl-10">
                        <div className="card darken-1">
                            <div className="card-content common-attributes">
                                <div className="row align-items-center experience-header justify-content-center">
                                    <div className="col-10 pb-2 col-sm-4 mr-sm-auto">
                                        <a href={data.websiteLink} target="_blank" rel="noopener noreferrer"
                                           className="experience-tooltip" data-position="top"
                                           data-tooltip={data.tooltip}>
                                            <img src={data.image} className="responsive-img"
                                                 style={{height: "auto", maxWidth: "100%"}}
                                                 alt={data.professionTitle}/>
                                        </a>
                                    </div>
                                    <div className="card-title brown-text align-header pr-1 pr-sm-4">
                                        {data.professionTitle}
                                    </div>
                                </div>

                                <ul>
                                    {this.renderHtmlList(data.descriptionPoints)}
                                </ul>
                                <div className="card-action brown-text">
                                    <span>{data.date}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <ComponentHeader heading={"Experience"}/>
                <div className="container flow-text experience-container">
                    {this.renderCards()}
                </div>
            </div>
        )
    }

}

export default Experience;
