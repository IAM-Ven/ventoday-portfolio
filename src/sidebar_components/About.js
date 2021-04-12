import React from 'react';
import 'materialize-css/dist/js/materialize.min.js';
import ComponentHeader from "../components/ComponentHeader";

class About extends React.Component {
    render() {
        return (
            <>
                <ComponentHeader heading={"About"} />
                <div className="container flow-text about-container justify-content-center px-4 pb-5 px-sm-1">
                    <div className="row justify-content-center">
                        <div className="col-sm-11 col-lg-10">
                            <blockquote className="brown-text">
                                <h2>
                                    Certified Java Developer with a demonstrated history of working in the information technology and services industry.
                                </h2>
                            </blockquote>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-sm-11 col-lg-10">
                            <div className="card-panel">
                                <p>
                                    <ol>
                                        <li> Over 7 years of experience of using OOP concepts while developing and designing software to deliver enterprise solutions in various domains.</li>
                                        <li>Experienced with complete Software Development Life Cycle (SDLC), including design, analysis, implementation, and maintenance in Agile/Scrum, Waterfall methodologies.</li>
                                        <li>Knowledge of various Java technologies such as JDBC, JEE, JPA, ORM, Kafka, Spring & SpringBoot, Hibernate, REST, Microservices, Maven, XML, ReactJS, etc.</li>
                                        <li>Worked to develop loosely coupled microservice applications as a full stack developer.</li>
                                        <li>Utilized various microservice design patterns such as centralized configuration, service discovery, load balancing, fault tolerance, microservice gateway, centralized logging using number of open source libraries from Spring and Netflix such as Eureka, Zuul, Config Server, Hystrix, Ribbon, and ELK stack along with NoSQL database Redis, MongoDB, etc.</li>
                                        <li>Experienced in new Java 8+ features allowing for Functional Programming including Lambda Expressions, Predicates, Stream, and default methods along with migration experience.</li>
                                    </ol>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default About;
