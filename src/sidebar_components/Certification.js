import React from 'react';
import 'materialize-css/dist/js/materialize.min.js';
import ComponentHeader from "../components/ComponentHeader";
import M from "materialize-css/dist/js/materialize.min";

const CERTIFICATE_DATA = [
    {
        title: "Oracle Certified Professional - Java Developer",
        //titleLink: "https://www.coursera.org/",
        description: "Understand and apply object-oriented concepts, use Java types create conditional statements and loops, manipulate arrays and collections, handle exceptions, and take advantage of new Java SE 8 features such as Lambda expressions.",
        date: "February 2018",
        tooltip: "Look at the Certificate"
    },
    {
        title: "VMware Certified Spring Professional",
        titleLink: "https://www.vmware.com/",
        description: "Core aspects of Spring and Spring Boot such as: Configuration, Component-scanning, AOP, Data access and Transactions, REST, Spring Security, Auto-configuration, Actuator, Spring Boot Testing.",
        date: "Apr 2014 - Sep 2014 | Bangalore, India",
        tooltip: "Look at the institute website"
    }
]

class Certification extends React.Component {
    componentDidMount() {
        const elem = document.querySelectorAll(".certificate-tooltip");
        M.Tooltip.init(elem, {
            margin: 15,
            enterDelay: 400,
            exitDelay: 200,
        });
    }

    renderCards() {
        return CERTIFICATE_DATA.map(data => {
         return (
                <div key={data.title} className="row justify-content-center">
                    <div className="col-12 col-md-12 col-sm-12 col-lg-10 col-xl-10">
                        <div className="card darken-1">
                            <div className="card-content common-attributes">
                                <a href={data.titleLink} target="_blank" rel="noopener noreferrer"
                                   className="certificate-tooltip" data-position="top"
                                   data-tooltip={data.tooltip}>
                                    <span className="card-title teal-text">{data.title}</span></a>
                                <p className="py-4">{data.description}</p>
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
                <ComponentHeader heading={"Certification"}/>
                <div className="container flow-text certificate-container">
                    {this.renderCards()}
                </div>
            </div>
        )
    }

}

export default Certification;