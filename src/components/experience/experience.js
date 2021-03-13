import fordLogo from '../../media/images/ford-logo.png';
import watoLogo from '../../media/images/wato-logo.jpeg';
import exponetLogo from '../../media/images/exponet-logo_enhanced.png';
import makeLogo from '../../media/images/make-logo.png';

export const WORK = [
    {
        title: "SWE Intern, Autonomous Vehicles",
        subtitle: "Ford Motor Company | January 2021 - Present",
        description: <p>
            Built gRPC messaging service in Java to send Autonomous Vehicle data and signals to simulate various trips,
            scenarios, and vehicle state events.
            <br/> <br/>
            Developed containerized envoy proxy server deployed on AWS Fargate to subscribe to telemetry data sent by gRPC server, convert binary data to
            readable format by React client and provide functionality for customizable telemetry signals sent from React client. <br/><br/>
            Integrated use of HERE maps into simulation service for more accurate and consistent path planning. <br/><br/>
            Developed UI in React to organize, and map planned path, display telemetry data streamed over HTTP/2,
            and handle simulated scenarios.
        </p>,
        image: fordLogo,
        link: "https://corporate.ford.com/operations/autonomous-vehicles.html"
    },
    {
        title: "Sensor Interfacing Manager, Autonomous Vehicles",
        subtitle: "WATonomous | September 2019 - Present",
        description: <p>
            Managing team of Undergraduate and Graduate students in converting an Electric Vehicle into a level 4 Autonomous Vehicle. <br/><br/>
            Dockerized Sensor Network for facilitated development, testing, and deployment of rostopics and rosnodes. <br/><br/>
            Developing data ingestion pipeline in Python and C++ to compile and visualize Sensor Data for easier development and testing,
            as well as Sensor health monitoring. <br/><br/>
            Developed rostopics in C++ to standardize customizable Sensor transforms and data frames for increased publication frequency,
            and facilitated data transformation.
        </p>,
        image: watoLogo,
        link: "https://www.watonomous.ca/"
    },
    {
        title: "Software Developer Intern",
        subtitle: "Exponet Inc. | May 2020 - September 2020",
        description: <p>
            Developed cross-platform shipping application hosted on Google App Engine to process and organize orders using
            set of customizable automation rules. <br/> <br/>
            Built Flutter mobile application to scan, validate, and organize package barcodes, eliminating human errors in packaging
            shipments. <br/><br/>
            Developed Grails microservices to run cron jobs that pull and organize orders from Amazon in offset 15 minute intervals. <br/><br/>
            Wrote backend Java and Groovy code for team/user management, authentication, and services for AWS and FedEx
        </p>,
        image: exponetLogo,
        link: "https://exponet.ca"
    },
    {
        title: "Full Stack Developer Intern",
        subtitle: "Make Inc. | August 2020 - October 2020",
        description: <p>
            Displayed interactive STL files in React UI for custom 3D printed parts through AutoCAD forge API, allowing users to
            interact with designs prior to purchasing printing jobs<br/><br/>
            Refactored JavaScript, MERN Stack application from REST API to GraphQL. <br/><br/>
            Developed backend JavaScript authentication with OAuth 2 and secured APIs through passport.js
        </p>,
        image: makeLogo,
        link: "https://makerstage.com/"
    }
]

export const PROJECTS = [

]