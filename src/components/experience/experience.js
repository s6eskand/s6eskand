import fordLogo from '../../media/images/ford-logo.png';
import watoLogo from '../../media/images/wato-logo.jpeg';
import exponetLogo from '../../media/images/exponet-logo_enhanced.png';
import makeLogo from '../../media/images/make-logo.png';
import foolstackLogo from '../../media/images/foolstack-logo.png';
import moodifyLogo from '../../media/images/moodify-logo.png';
import coollistingsLogo from '../../media/images/coollistings-logo.png';
import moodivityLogo from '../../media/images/moodivity-logo.png';

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
    {
        title: "Foolstack",
        subtitle: "Grails, Java, React, Redux, MongoDB, Azure",
        description: <p>
            Interactive Software Architecture design and documentation application, allowing intuitive planning and organization
            of Software based projects. <br/><br/>
            Users can load projects from Github, or create them from scratch, adding visualized descriptions of architecture
            Schemas, endpoints, sample requests and responses, and sample project code. If project loaded from Github,
            repository issues, commit history, and PRs, also displayed. <br/><br/>
            Grails server deployed through Azure Cloud Compute, data stored using MongoDB Atlas, and React UI with Redux
            used for complex state management.
        </p>,
        image: foolstackLogo,
        github: "https://github.com/s6eskand/Foolstack",
        isProject: true
    },
    {
        title: "Moodivity",
        subtitle: "Django, React, Google Cloud, NLP, PostgreSQL",
        description: <p>
            Productivity application that enables users to set work/study goals for themselves and track their progress, all
            the while keeping their mental health in check. <br/><br/>
            After closing out a study/work session, users are prompted to record an audio log to capture their thoughts on
            the work they completed. After recording, Google Cloud speech to text is used to convert audio to text, NLP sentiment
            analysis is used to determine sentiment of user, and data is saved to PostgreSQL database. <br/><br/>
            Users can track their progress, sentiment scores, and receive tips and encouragement to improve upon their goals. <br/><br/>
            Winner at HackWestern 2020 for best use of Google Cloud API
        </p>,
        image: moodivityLogo,
        github: "https://github.com/s6eskand/Moodivity",
        website: "https://devpost.com/software/moodivity",
        isProject: true
    },
    {
        title: "Moodify",
        subtitle: "Django, React, Google Cloud, NLP",
        description: <p>
            Web application that allows users to record audio logs to generate custom Spotify playlists based on the users
            mood. <br/><br/>
            Users stream audio from React client to Django server, Google Cloud speech to text API used to generate text,
            from audio log, NLP sentiment analysis used to determine users sentiment, and Spotify API generates custom playlist. <br/><br/>
            Winner at Winhacks 2020 for best use of Google Cloud API.
        </p>,
        image: moodifyLogo,
        github: "https://github.com/s6eskand/Moodify",
        website: "https://devpost.com/software/moodify-9roijv",
        isProject: true,
    },
    {
        title: "Coollistings - A Craigslist Clone",
        subtitle: "Django, Python, BeautifulSoup",
        description: <p>
            Django application to display craigslist listings in a cleaner, and more intuitive UI. <br/><br/>
            Users can query different listings, sending requests to backend that scrapes craigslist using BeautifulSoup4,
            rendering results in UI written with Materialize CSS. <br/><br/>
            Backend written in Django and Python, hosted on Heroku, and frontend developed using HTML, CSS, and Materialize CSS framework <br/><br/>
        </p>,
        image: coollistingsLogo,
        github: "https://github.com/s6eskand/craigslist-clone",
        website: "https://coollistings.herokuapp.com",
        isProject: true
    }
]