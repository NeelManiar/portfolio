export type Project = {
  title: string
  description: string
  tags: string[]
  link: string
  image?: string
  featured?: boolean // featured projects get a big card at the top
}

export type Achievement = {
  title: string
  description: string
  badge?: string // big text on the card, e.g. "1st"
  image?: string
}

export type WorkExperience = {
  role: string
  organization: string
  duration: string
  description: string
}

export const contact = {
  email: "your-email@example.com",
  github: "https://github.com/NeelManiar",
  linkedin: "https://linkedin.com/in/your-linkedin",
}

const gh = "https://github.com/NeelManiar/"

export const projects: Project[] = [
  {
    title: "Barrier",
    description:
      "Current, groundbreaking, revolutionary product under development that safeguards our data and applications from sophisticated infiltration attempts by AI Agents, protecting critical data and security.",
    tags: ["AI", "Education", "Product"],
    link: "https://github.com/NeelManiar",
    featured: true,
  },
  {
    title: "AI Startups Performance Analysis",
    description:
      "An excerpt of a data-driven research project that I carried out in my internship where we analysed how AI startups perform, correlating multiple factors to identify all external factors that go in building AI Companies today. Note: It is Modified and Posted with Permission",
    tags: ["Research", "Data Science", "Python"],
    link: gh + "AI-Startups-Performance-Analysis",
    featured: true,
  },
  {
    title: "IndiConnect",
    description:
      "A high school project where we developed an end to end solution for betterment of the lives of average workers and employees more sustainable and efficient by making a small, but powerful impact in their everyday, monotonous lives.",
    tags: ["Product"], // was "Tag"
    link: gh + "IndiConnect",
    featured: true,
  },
  {
    title: "ChatUp",
    description:
      "An attentive, general purpose chatbot that I created using Streamlit and OpenAI's APIs to serve as a casual yapper alongside you.",
    tags: ["AI", "Python"], // was "Tag"
    link: gh + "ChatUp",
  },
  {
    title: "Football Transfer Market Simulator",
    description:
      "Football Teams waste a lot of time, money and energy in finding the right player. This simulator will allow teams to build the complete, tournament squad.",
    tags: ["Sports"], // was "Tag"
    link: gh + "Football-Transfer-Market-Simulator",
  },
  {
    title: "IBM Watson + Flask Application",
    description:
      "A hands-on AI application developed as part of IBM's AI developer coursework, exploring how AI capabilities can be integrated into practical software. The project gave me experience working with Python, APIs, application logic, and the process of turning an AI concept into a functioning application.",
    tags: ["AI", "Python"], // was "Tag"
    link: gh + "Final-project",
  },
  {
    title: "Mutual Funds Portfolio Manager",
    description:
      "A Python-based data-analysis tool designed to compare mutual-fund portfolio data across different months. It processes raw portfolio files to identify securities that have been added or removed, making it easier to track changes in investment portfolios and understand how fund holdings evolve over time.",
    tags: ["Data Science", "Python"], // was "Tag"
    link: gh + "Mutual-Funds-Analysis",
  },
  {
    title: "NBA Players Evaluation",
    description:
      "An interactive data-analysis application built with Python and Streamlit for exploring NBA player statistics. The project combines data processing, statistical analysis, visualization, and an interactive interface, allowing users to investigate player performance and export the resulting data for further analysis.",
    tags: ["Data Science", "Python", "Sports"], // was "Tag"
    link: gh + "NBA-Player-Analysis",
  },
  {
    title: "Tokyo 2020 Summer Olympics Analysis",
    description:
      "A data-analysis project exploring medal distributions and country-level performance during the Tokyo 2020 Olympic Games. I used data processing and visualization to investigate how sporting outcomes varied across participating countries and to turn a large dataset into understandable statistical insights.",
    tags: ["Data Science", "Sports"], // was "Tag"
    link: gh + "Tokyo-2020-Olympics-Analysis",
  },
  {
    title: "Diwali Sales Analysis",
    description:
      "An exploratory data-science project done for a retail company analyzing retail transactions during the Diwali period to understand purchasing patterns and customer behavior. Using Python, Pandas, NumPy, and Matplotlib, I cleaned and explored the dataset, identified trends across customers and products, and translated the results into visual insights.",
    tags: ["Data Science", "Python"], // was "Tag"
    link: gh + "Diwali-Sales-Analysis",
  },
]

export const achievements: Achievement[] = [
  {
    title: "Shark Teens S4",
    description:
      "Came 1st in a pitching competition at the age of 13, out of 125 applications, competing against university graduates to raise investments.",
    badge: "1st",
  },
  {
    title: "TIE Ahmedabad (TYE)",
    description:
      "Pitched at the Indian Institute of Ahmedabad (IIM-A) in front of some of the biggest industry leaders in Ahmedabad and India where we achieved nation wide recognition.",
  },
  {
    title: "National Entrepreneurship Olympiad, IIT Bombay",
    description:
      "Participated in NEO, organised by E-Cell IITB in class 6, got certified and expanded by knowledge about the know hows of entrepreneurship.",
  },
  {
    title: "Real World Challenges Convention (RWCC) (Singapore)",
    description:
      "Represented my school and achieved podium ranks multiple times in the annual, prestigious RWCC mega competitons held in Singapore, where we debated about AI, Security, Innovation, Creativity and Entreprenuership.",
  },
  {
    title: "Science Olympiad Foundation",
    description:
      "Participated in countless English, Maths and Science and Cyber Olympiads organised by the SOF throughout my schooling years, reaping many awards, nationally and internationally.",
  },
  {
    title: "Aryabhata Ganit Challenge",
    description:
      "Achieved a Top 100 Rank (western region) in annual Mathematics Challenge for High Schoolers in India by the CBSE. Came 1st in the preliminary school selections.",
    badge: "Top 100",
  },
  {
    title: "Global Student Exchange Program (GSE) (Kuala Lumpur)",
    description:
      "Won the GSE in 2021 out of 15 teams where created innovative solutions to aid the massive agriculture industry in India by emphasising on building efficient reform mechanisms and smart systems to minimise produce loss and pricing discrepancies.",
  },
  {
    title: "Al Tasamuh (Abu Dhabi)",
    description:
      "Gave a talk on how critically important leadership is, especially during times of crisis and how technology can redefine the core idea behind taking successful decisions.",
  },
]

export const experience: WorkExperience[] = [
  {
    role: "Co-Founder and CEO",
    organization: "Datacraft",
    duration: "Jun 2023 - Apr 2024",
    description:
      "I founded a B2B2C company with my friend at the age of 13 out of an entrepreneurship workshop hosted by the renowned organisation, The Indus Entreprenuers (TIE), Ahmedabad Chapter. We aimed to solve the present issue of effectively managing data, from product details to insurance papers. For a normal man, this has been a headache. We even raised basic investment from an incubator, that too, winning against graduate students, however we failed to build up on the momentum, and paused the idea.",
  },
  {
    role: "Cofounder, Strategic Advisor",
    organization: "Checkmywarranty",
    duration: "Month Year – Present",
    description:
      "Served as founding, technical advisor to Checkmywarranty, an end to end warranty management solution that enables us to keep track of product and service warranties, give timely reminders and help users avail the benefits that they carelessly lost. I helped oversee the feasibility of the idea, validated on public platforms, and ensured that all the technical requirements are met",
  },
  {
    role: "Data Science and AI Research Intern",
    organization: "Tridya Tech Limited",
    duration: "July 2026 – August 2026",
    description:
      "I completed an internship at Tridhya Tech, a publicly listed company in India where we worked to identify and understand AI Startups, different factors like Funding, Team Size, Years in Operation, Customer Satisfaction, Churn, AI Models, Industry Segregation amongst others to help the management identify the right kind of companies to invest in, and what is needed to be done to build a successful AI Company",
  },
  {
    role: "Software Test Engineer",
    organization: "Techno Infonet Gujarat Private Limited",
    duration: "May 2023 - Jul 2023",
    description:
      "At the age of 10-11, I worked to rigorously test and break software, find bugs and shortcomings, compare with competitors and present reports to the development teams about the results. It really helped to understand in depth about all the stages of building successful software.",
  },
]

export const story = [
  "I started programming (formally) at the age of 11. Ever since, I have become incredibly curious, trying to figure out an intersection between the ability to write code, and solve real world problems. I, from a very young age, have been addicted to computers and books. I read about some of the most successful Entrepreneurs, who differentiated themselves from others by thinking from the First Principles. I am learning to implement the same.",
  "This thought pushes me forward everyday to contribute to this society and build.",
  "I started ventures, failed, learnt and came back again. To make humanity sustain the deep, uncertain tomorrow, giving up is never an option. For me, it has never ever been.",
]