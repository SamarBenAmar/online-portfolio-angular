import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  blogs:any = [
    {
      id : 1,
      title: 'Microservices Architecture: a Balance of Speed and Safety at Scale',
      link: 'https://medium.com/@samar.benamar/microservice-architecture-a-balance-of-speed-and-safety-at-scale-41606d90c30a',
      date:'Oct 16. 2022',
      desc:'This blog is a summary of the notes that I’ve been taken when reading the “Microservices Architecture, Aligning principles, practices, and culture” (part I & II) by Irakli Nadareishvili, Ronnie Mitra, Matt McLarty & Mike Amundsen. I recommend reading this book as a good introduction to the microservices architecture and as a first step in the miscroservices way.'
    },
    {
      id : 2,
      title: 'Java EE vs Spring',
      link: 'https://medium.com/@samar.benamar/java-ee-vs-spring-45e1f9056f61',
      date:'Sept 7, 2022',
      desc:'“What are the differences between Java EE and Spring?” “Which one is the best?” “Why should I prefer one over the other?” “When to use each one of them?”...'
    },
    {
      id : 3,
      title: 'Microservices, Long Story Short!',
      link: 'https://medium.com/@samar.benamar/microservices-long-story-short-60cf5eab6287',
      date:'Aug 2, 2022',
      desc:'Let’s start with a simple definition of the famous micro-services architecture. It presents an approach to software architecture that consists of decomposing an application into different components that are loosely coupled and easy to manage...'
    },
    {
      id : 4,
      title: 'How did KISS change the way I code?',
      link: 'https://medium.com/@samar.benamar/how-did-kiss-change-the-way-i-code-435b49073f07',
      date:'Aug 12, 2022',
      desc:'The need for software is growing day by day. Every business and every domain is looking how to digitalize every process to be closer to their customers and their audience...'
    },
    {
      id : 5,
      title: 'Daily Reflection 1.0 26–07–2022',
      link: 'https://medium.com/@samar.benamar/daily-reflection-1-0-26-07-2022-6d7ba0ec5952',
      date:'Jul 27, 2022',
      desc:'On the occasion of my 23rd birthday, I’d love to share with you my vision towards experiences and how to find enriching opportunities that help us to advance more and more in our professional and everyday life...'
    }
  ]
  projects:any = [
    {
      id: 1,
      title: 'Development of a transactional data analysis tool',
      desc: 'Design two microservices and develop a REST webservice - The tool is used to capture data changes in real time CDC and convert an OLTP database into another OLAP database using a distributed Kafka event streaming system to ensure the visualization of dashboards illustrating the result of SQL queries executed through the user interface.',
      date: 'End of Year Project 2 (10/2021 - 04/2022)',
      livedemo: 'https://drive.google.com/file/d/162LZof5hlxhLO6EkWVtKIVeoMsqPHn-M/view?usp=sharing',
      githurl: 'https://github.com/samar2607/PFA2-Transactional-Data-Analysis-Tool',
      mediumlink: '',
      imgUrl: '',
      tech: 'Kafka, Debezium, Quarkus, Maven, Svelte, ChartJS, REST API, PostgreSQL, DuckDB, Docker, CQRS Design pattern'
    },

    {
      id: 2,
      title: 'Search Microservice',
      desc: 'This microservice is used to execute complex search for products in an e-commerce web application',
      date: 'Web Application (09/2022 - 11/2022)',
      livedemo: '',
      githurl: 'https://github.com/RamziHaddad/projet-soa-ecommerce-enit-2022-3AINFO2/tree/main/search/search',
      mediumlink: '',
      imgUrl: '',
      tech: 'Quarkus, Elasticsearch, Angular, Docker, Git, REST API, Microservice Architecture'
    },

    {
      id: 3,
      title: 'ToDo List',
      desc: 'The application is used to manage task lists',
      date: 'Mobile Application (04/2022 - 05/2022)',
      livedemo: '',
      githurl: 'https://github.com/samar2607/Todo-list-app',
      mediumlink: '',
      imgUrl: '',
      tech: 'Flutter, Dart, Android Studion'
    },


    {
      id: 4,
      title: 'Online Portfolio',
      desc: 'My personal website',
      date: 'Dynamic Website (01/2022 - 02/2022)',
      livedemo: '',
      githurl: 'https://github.com/samar2607/My-Portfolio',
      mediumlink: '',
      imgUrl: '',
      tech: 'PHP, Symphony, JQuery, HTML, CSS, JavaScript'
    },

    {
      id: 5,
      title: 'Online Reservation and Payment Management',
      desc: 'The application is used to reserve cinema tickets and make online payments.',
      date: 'JEE Web Application (11/2021 - 12/2021)',
      livedemo: '',
      githurl: 'https://github.com/samar2607/Cinema-Tickets-Reservation',
      mediumlink: '',
      imgUrl: '',
      tech: 'Java EE (Hibernate, EJB, JSP, Wildfly)'
    },

    {
      id: 6,
      title: 'Big Data for health care',
      desc: 'Bibliographic Research',
      date: 'End of Year Project 1 (04/2021 - 06/2021)',
      livedemo: 'https://drive.google.com/file/d/1FJPle8fEkXXFsX1r55POVabcIKX1cIFa/view?usp=sharing',
      githurl: '',
      mediumlink: '',
      imgUrl: '',
      tech: ''
    },




  ]
  about2 = `Software Developer with 2.5+ years of experience .
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Expertise in Angular 2+ All versions, React, Javascript,  Node JS and UI with Responsive Designs .
  Have good understanding of Python, Jquery, Bootstrap, MongoDB, Firebase, and MYSQL`

  about = "Lover of innovation and everything related to generate new knowledge.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do."
  resumeurl = "https://docs.google.com/document/d/1WODFuhIzQw2AXPsjt6f3rs-EDWhdhT8s89fOTrGRh70/edit?usp=sharing"

  skillsData: any = [
    {
      'id': '3',
      'skill': 'Angular, React',
      'progress': '75%'
    },
    {
      'id': '1',
      'skill': 'Java',
      'progress': '70%'
    },
    {
      'id': '2',
      'skill': 'JEE, Spring, Quarkus',
      'progress': '70%'
    },
    {
      'id': '5',
      'skill': 'SQL, NoSQL',
      'progress': '75%'
    },
    {
      'id': '4',
      'skill': 'HTML5, CSS3, JavaScript',
      'progress': '80%'
    },
    {
      'id': '6',
      'skill': 'Docker, Git, GitLab',
      'progress': '70%'
    }
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2020 - Present',
      'education': 'Engineering Degree',
      'stream': 'National Engineering Diploma - Computer Science ',
      'info': '',
      'institution': 'NATIONAL ENGINEERING SCHOOL OF TUNIS (ENIT)'
    },
    {
      'id': '2',
      'from_to_year': '2018 - 2020',
      'education': 'Preparatory Degree',
      'stream': 'National Examination for Entry to Engineering Schools (PC)',
      'institution': 'PREPARATORY INSTITUTE FOR ENGINEERING STUDIES OF SFAX (IPEIS)',
      'info': ''
    },
    {
      'id': '3',
      'from_to_year': '2014 - 2018',
      'education': 'High  School',
      'stream': 'Experimental Science Baccalaureate',
      'institution': 'PIONNER HIGH SCHOOL OF SFAX',
      'info': ''
    }
  ];
  exprienceData: any = [
    {
      id: 4,
      company: 'SiFAST | FutureWithPast',
      location: '',
      timeline: '07/2022 - 08/2022',
      role: 'Internship - Java JEE Developer',
      work: 'Develop a solution in JEE and JavaScript to automate the management of customer spaces within the Totipot platform which is used to provide low-code custom softwares. Designing a solution in Java consists of automatically generating configuration and parameter files in XML and TXT during the creation and duplication of spaces.'

    },
    {
      id: 3,
      company: 'Indianic Info Tech',
      location: 'Ahmedabad',
      timeline: 'Feb 2021 to June 2021',
      role: 'Software Developer',
      work: `Technologies : Angular , Node JS , MongoDB .
      Worked on the web application built in Angular for different business and Campaigns .
      Contributed on developing the admin dashboard with different charts and insights for the application.`
    },
  //   {
  //     id: 2,
  //     company: 'Growth99',
  //     location: 'Remote',
  //     timeline: '',
  //     role: 'Frontend  Developer',
  //     work: `Technologies : Angular , Node JS , MongoDB .
  // Worked on the product of Growth99 which allowed other clients to come and integrate our product in their website .
  // Worked on REST Api , Admin Dashboard , Appointment Booking for services and UI of the application .
  // Created sections like templates for email, sms, landing pages, clinic, services, providers and triggers Automation.
  // `
  //   },

    {
      id: 1,
      company: 'Tata Consultancy Services',
      location: 'Gandhinagar and Pune',
      timeline: 'June 2019 - Jan 2021',
      role: 'Assistant System Engineer Trainee',
      work: `Technologies : Angular , JavaSpring Boot , SQL. Apache Solr .
  Project 1 : Worked on uploading two excel sheets with bulk of data and finding the matches for each business .
  Project 2 : Worked on indexing the search results inside the application with bulk of data using Apache Solr and configuring the server with cron jobs and shell scripts .
  Worked on ranking the search results based on various criteria,features and delivering the accurate results based on generated scores.
  `
    },


  ]

  extraCircularInfo: any = [
    {
      id:1,
      title: 'Blogger',
      description: '',
      img: 'assets/images/Mehul Kothari – Medium1.png',
      url: 'https://mehulkothari05.medium.com/'
    },
    {
      id:1,
      title: 'Github',
      description: '',
      img: 'assets/images/Mehulkothari_github.png',
      url: 'https://github.com/mehulk05/'
    },
    {
      id:1,
      title: 'Freelancing',
      description: '',
      img: 'assets/images/mehul_freelancing.png',
      url: 'https://www.upwork.com/freelancers/~016d6f497a5629df4b'
    },
  ]
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }

  getBlogs(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.blogs;
  }

  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

  extraCircular(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.extraCircularInfo;
  }

  contactus(data: any): Observable<any> {
    return this.http.post('http://localhost:4200/contact',data);
  }
}