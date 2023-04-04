let info = {
  name: "Elouanes Bouguerra",
  logo_name: "Elouanes",
  flat_picture: require("./src/assets/me.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "A full-stack developer with a master degree in computer science, experience in all development cycle steps, and Proficiency in many programming languages including Java (Spring), JavaScript (Vue JS), Flutter (Dart), MySQL, MongoDB.",
  links: {
    linkedin: "https://www.linkedin.com/in/elouanesbg-dev/",
    github: "https://gitlab.com/elouanesbg",
    angellist: "https://angel.co/u/hrishikesh-paul",
    resume:
      "https://github.com/hrishikeshpaul/portfolio-template/blob/master/src/assets/pdfs/Resume.pdf"
  },
  education: [
    {
      name: "Experimental Science Baccalaureate,",
      place: "",
      date: "2010",
      degree: "",
      gpa: "",
      description:
        "",
      skills: [

      ]
    },
    {
      name: "Computer science degree",
      place: "Yahia Fares University of Medea",
      date: "2015",
      degree: "Networks and Computer Systems",
      gpa: "",
      description:
        "",
      skills: [
      ]
    },
    {
      name: "IT Master",
      place: "Yahia Fares University of Medea",
      date: "2017",
      degree: "Systems Engineering and Web Technology",
      gpa: "",
      description:
        "",
      skills: [
      ]
    }
  ],
  experience: [
    {
      name: "Research support engineer",
      place: "Algerian Academy of the Arabic Language",
      date: "Depuis 17/12/2017",
      position: "",
      description:
        "",
      skills: []
    },
    {
      name: "IT engineer",
      place: "High Commission of Dhakhira Alarabiyya",
      date: "2020 - 2022",
      position: "Full Stack Web Developer",
      description:
        "",
      skills: []
    }
  ],
  skills: [
    {
      title: "languages",
      info: [
        "Java",
        "Java (Spring Boot)",
        "Java EE",
        "Flutter Dart",
        "Javascript",
        "SQL"
      ],
      icon: "fa fa-code"
    },

    {
      title: "web technologies",
      info: ["Vue", "vuetify", "HTML", "CSS"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "databases",
      info: ["MongoDB", "MySQL"],
      icon: "fa fa-database"
    },
    {
      title: "operating systems & tools",
      info: [
        "MacOS",
        "Ubuntu",
        "Centos",
        "Windows",
        "Android"
      ],
      icon: "fas fa-tools"
    },
    {
      title: "design",
      info: ["Adobe XD"],
      icon: "fa fa-pencil-square-o"
    }
  ],
  portfolio: [
    {
      name: "Website",
      pictures: [
        {
          img: require("./src/assets/portfolio/aala/1.png")
        }
      ],
      technologies: ["wordpress"],
      category: "WebSite",
      date: "2022",

      visit: "http://aala.local.dhakhira.org",
      description:
        "The official website of the Algerian Academy of the Arabic Language"
    },
    {
      name: "Search Engine",
      pictures: [
        {
          img: require("./src/assets/portfolio/search/1.png")
        }, {
          img: require("./src/assets/portfolio/search/2.png")
        }
      ],
      technologies: [],
      category: "Web Application",
      date: "2022",

      visit: "http://search.dhakhira.org",
      description:
        "Arabic Search Engine "
    },
    {
      name: "Lexico",
      pictures: [
        {
          img: require("./src/assets/portfolio/lexico/1.png")
        }
      ],
      technologies: [],
      category: "Web Application",
      date: "2022",

      visit: "http://lexico.dhakhira.org",
      description:
        "Authoring the creation of dictionaries "
    },
    {
      name: "moudawana",
      pictures: [
        {
          img: require("./src/assets/portfolio/moudawana/1.png")
        },
        {
          img: require("./src/assets/portfolio/moudawana/2.png")
        }
      ],
      technologies: [],
      category: "Web Application",
      date: "2022",

      visit: "http://moudawana.dhakhira.org",
      description:
        "Arabic NLP Web Application"
    }
  ],
  portfolio_design: [
    {
      name: "Guituna",
      title: "Guituna - Mockup Design",
      pictures: [
        {
          img: require("./src/assets/designs/coursera1/MoodBoard.png"),
          title: "MoodBoard"
        },
        {
          img: require("./src/assets/designs/coursera1/Mockups 1.png"),
          title: "Mockups 1"
        },
        {
          img: require("./src/assets/designs/coursera1/Mockups 2.png"),
          title: "Mockups 2"
        },
        {
          img: require("./src/assets/designs/coursera1/App Elements.png"),
          title: "App Elements"
        }
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - Jun, 2020",
      visit: "",
      description:
        "Guituna is a simple, lightweight and intuitive guitar tuner, that provides different modes of guitars based on your usage. You can either select a specific string to tune, or free tune your guitar based on the frequency shown on the meter. Guituna also provides a handful of different tunings to help explore various tuning paradigms. There is also an array of settings that can be configured to your liking based on the devices you're using. <br/><br/>The interface aims to highlight the use of a minimal design and providing just enough controls to make for a great tuner, while exposing various possibilities of guitarists to explore."
    },
    {
      name: "Pantree",
      title: "Pantree - Mockup Design",
      pictures: [
        {
          img: require("./src/assets/designs/pantree/MoodBoard.png"),
          title: "Moodboard"
        },
        {
          img: require("./src/assets/designs/pantree/1.png"),
          title: "Mockups 1"
        },
        {
          img: require("./src/assets/designs/pantree/2.png"),
          title: "Mockups 2"
        }
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - July, 2020",
      visit: "",
      description:
        "Pantree is a recipiece finding and recommending application. It is often the case that you have run to your closest grocery store just to pick up one item that is missing in your kitchen. Pantree keeps a track of all your ingredients, and suggests recipes based on your meal preferences and past recipes. <br/><br/> The goal of the interface is to keep it similar to various recipe/food apps to reduce the learning required by the user, but also provide a smooth interface for users to seemlessly browse through recipes and ingredients."
    },
    {
      name: "Bunder",
      title: "Bunder - MVP Proposal",
      pictures: [
        {
          img: require("./src/assets/designs/bunder/Moodboard.png"),
          title: "Moodboard"
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 1.png"),
          title: "Mockup 1"
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 2.png"),
          title: "Mockup 2"
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 3.png"),
          title: "Mockup 3"
        },
        {
          img: require("./src/assets/designs/bunder/Market Research 1.png"),
          title: "Market Research 1"
        },
        {
          img: require("./src/assets/designs/bunder/Market Research 2.png"),
          title: "Market Research 2"
        }
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - July, 2020",
      visit: "",
      description:
        "Bunder is an intuitive web platform for micro-communities to share sensitive data with privacy within the community and allow engagement amongst them. Our aim is two-fold - Co-existing and Collaboration. The former is executed by providing a platform for communities that are geographically positioned in the same proximity (Housing societies, Dorms, Apartment Complexes) to have and share data (exact apartment addresses, phone number, apartment housing rules, individuals tested positive for COVID-19) in an exclusive platform. The latter is to give these people in the community the ability to carry out a task you are physically or remotely unable to do; with dignity and ease."
    }
  ],
  recommendations: [
    {
      title:
        "In his internship, Hrishikesh has demonstrated excellent learning ability, and with a dedicated, task oriented approach, he was able to complete his assignment ahead of time.",
      author: "Ushanas Shastri",
      position: "CTO",
      company: "Viteos Capital Market Services",
      location: "Mumbai"
    },
    {
      title:
        "I feel his budding leadership abilities will become even more effective in a diverse and challenging environment.",
      author: "Anil Dukkipatty",
      position: "CTO",
      company: "Elemential Labs",
      location: "Mumbai"
    },
    {
      title:
        "He has gained great knowledge and experience of SDE, and has learned ot develop the application keeping in mind the client's perpective and also making it creative.",
      author: "Chintan Shah",
      position: "Director",
      company: "Hridayam Soft Solution",
      location: "Mumbai"
    },
    {
      title:
        "During the course of his employment we have found him to be a self-started who was motivated, duty bound and a highly commited team player.",
      author: "Mrinal Pai",
      position: "Co-Founder & Director",
      company: "Skylark Drones",
      location: "Bangalore"
    }
  ]
};

export default info;
