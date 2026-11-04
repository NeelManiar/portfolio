export type Project = {
  title: string
  description: string
  tags: string[]
  link: string
  images: string[] // picture links, shown as a slideshow with arrows
  demo?: string // link to a demo video
  featured?: boolean // featured projects get a big card at the top
}
export type Achievement = {
  title: string
  description: string
  badge?: string // big text on the card, e.g. "1st"
  images: string[] // picture links (certificates or photos)
  link?: string // video, article or certificate link
  linkLabel?: string
}
export type WorkExperience = {
  role: string
  organization: string
  duration: string
  description: string
  images: string[] // picture links (certificates or photos)
}
export const contact = {
  email: "neelmaniar18@gmail.com",
  github: "https://github.com/NeelManiar",
  linkedin: "https://www.linkedin.com/in/neel-maniar-9929372a7/",
}
const gh = "https://github.com/NeelManiar/"
export const barrierDemoUrl = ""
export const projects: Project[] = [
  {
    title: "Barrier (WIP)",
    images: ["/images/barrier-1.jpg", "/images/barrier-2.jpg", "/images/barrier-3.jpg"],
    description:
      "Building a groundbreaking and revolutionary context-aware authorization ecosystem (under development) responsible for safeguarding our data and applications from sophisticated infiltration attempts by AI agents, protecting critical information and security.",
    tags: ["AI", "Education", "Product", "WIP"],
    link: "https://barrierlabs.streamlit.app/",
    featured: true,
  },
  {
  title: "Backlog Killer (WIP)",
  images: ["/images/BK1.png", "/images/BK2.png", "/images/BK3.png", "/images/BK4.png"],
  description:
    "Building a mobile application that addresses the biggest issue students face in their academic journey, Backlogs and its connection to syllabus completion and exam preparation to successfully navigate examinations. ",
  tags: ["AI", "Education", "Mobile Development", "WIP"],
  link: "YOUR_BACKLOG_KILLER_GITHUB_URL",
  featured: true,
},
  {
    title: "AI Startups Performance Analysis",
    images: ["/images/ai-startups-1.jpg", "/images/ai-startups-2.jpg", "/images/ai-startups-3.jpg"],
    description:
      "An excerpt of a data-driven research project that I carried out in my internship where we analysed how AI startups perform, correlating multiple variables to identify all external factors that go into building AI companies today. Note: It is modified and posted with permission",
    tags: ["Research", "Data Science", "Python"],
    link: gh + "AI-Startups-Performance-Analysis",
    featured: true,
  },
  {
    title: "IndiConnect",
    images: ["/images/indiconnect-2.jpg", "/images/indiconnect-3.jpg", "/images/indiconnect-4.jpg", "/images/indiconnect-5.jpg", "/images/indiconnect-1.jpg"],
    description:
      "A high school project where we developed an end-to-end solution to make the lives of average workers more sustainable and efficient, bringing a small but meaningful impact to their daily routines.",
    tags: ["Product"], // was "Tag"
    link: gh + "IndiConnect",
    featured: true,
  },
  {
    title: "ChatUp",
    images: ["/images/chatup-1.jpg"],
    description:
      "An attentive, general purpose chatbot that I created using Streamlit and OpenAI's APIs to serve as a casual yapper alongside you.",
    tags: ["AI", "Python"], // was "Tag"
    link: gh + "ChatUp",
  },
  {
    title: "Football Transfer Market Simulator",
    images: ["/images/football-transfer-1.jpg", "/images/football-transfer-2.jpg", "/images/football-transfer-3.jpg", "/images/football-transfer-4.jpg"],
    description:
      "Football teams waste a lot of time, money and energy in finding the right player. This simulator will allow teams to build the complete championship winning squad.",
    tags: ["Sports"], // was "Tag"
    link: gh + "Football-Transfer-Market-Simulator",
  },
  {
    title: "Global Indicators Report",
    images: ["/images/GI1.png", "/images/GI2.png", "/images/GI3.png", "/images/GI4.png", "/images/GI5.png"],
    description:
      "A Social Impact driven project where I worked to analyse different public parameters for countries around the world, to push for improvement and establishing a fair reviewal mechanism.",
    tags: ["Data Science", "Sustainability"], // was "Tag"
    link: gh + "Football-Transfer-Market-Simulator",
  },
  {
    title: "Emotions Detector NLP",
    images: ["/images/ibm-watson-1.jpg", "/images/ibm-watson-2.jpg", "/images/ibm-watson-3.jpg"],
    description:
      "A hands-on AI application developed as part of IBM's AI developer coursework, exploring how AI capabilities can be integrated into practical software. The project gave me experience working with Python, APIs, application logic, and the process of turning an AI concept into a functioning application.",
    tags: ["AI", "Python"], // was "Tag"
    link: gh + "Final-project",
  },
  {
    title: "Mutual Funds Portfolio Manager",
    images: ["/images/MF1.png", "/images/MF2.png", "/images/MF3.png", "/images/MF4.png", "/images/MF5.png"],
    description:
      "A Python-based data-analysis tool designed to compare mutual-fund portfolio data across different months. It processes raw portfolio files to identify securities that have been added or removed, making it easier to track changes in investment portfolios and understand how fund holdings evolve over time.",
    tags: ["Data Science", "Python"], // was "Tag"
    link: gh + "Mutual-Funds-Analysis",
  },
  {
    title: "NBA Players Evaluation",
    images: ["/images/NBA1.png", "/images/NBA2.png", "/images/NBA.png"],
    description:
      "An interactive data-analysis application built with Python and Streamlit for exploring NBA player statistics. The project combines data processing, statistical analysis, visualization, and an interactive interface, allowing users to investigate player performance and export the resulting data for further analysis.",
    tags: ["Data Science", "Python", "Sports"], // was "Tag"
    link: gh + "NBA-Player-Analysis",
  },
  {
    title: "Tokyo 2020 Summer Olympics Analysis",
    images: ["/images/tokyo-2020-1.jpg", "/images/tokyo-2020-2.jpg", "/images/tokyo-2020-3.jpg", "/images/tokyo-2020-4.jpg", "/images/tokyo-2020-5.jpg"],
    description:
      "A data-analysis project exploring medal distributions and country-level performance during the Tokyo 2020 Olympic Games. I used data processing and visualization to investigate how sporting outcomes varied across participating countries and to turn a large dataset into understandable statistical insights.",
    tags: ["Data Science", "Sports"], // was "Tag"
    link: gh + "Tokyo-2020-Olympics-Analysis",
  },
  {
    title: "Diwali Sales Analysis",
    images: ["/images/diwali-sales-1.jpg", "/images/diwali-sales-2.jpg", "/images/diwali-sales-3.jpg", "/images/diwali-sales-4.jpg"],
    description:
      "An exploratory data-science project done for a retail company analyzing retail transactions during the Diwali period to understand purchasing patterns and customer behavior. Using Python, Pandas, NumPy, and Matplotlib, I cleaned and explored the dataset, identified trends across customers and products, and translated the results into visual insights.",
    tags: ["Data Science", "Python"], // was "Tag"
    link: gh + "Diwali-Sales-Analysis",
  },
]
export const achievements: Achievement[] = [
  {
    title: "Shark Teens S4",
    images: ["/images/IMG_3478.jpeg", "/images/IMG_3479.jpeg"],
    description:
      "Came 1st in a pitching competition at the age of 13, out of 125 applications, competing against university graduates to raise investments.",
    badge: "1st",
  },
  {
    title: "IIM Ahmedabad Ventures",
    images: ["/images/IIM.png", "/images/IIM1.jpg"],
    description:
      "Pitched at the Indian Institute of Management, Ahmedabad (IIM-A) in front of some of the biggest industry leaders in Ahmedabad and India where we achieved nationwide recognition.",
  },
  {
    title: "TIE Ahmedabad",
    images: ["/images/tie1.png", "/images/TIE.jpeg"],
    description:
      "Enrolled in a selective entrepreneurship and engineering workshop by The Indus Entrepreneurs Ahmedabad's Young Entrepreneurs Program (TYE) where I learnt the paradigms of business and personally worked on establishing meaningful interrelations between technology, AI and entrepreneurship. ",
  },
  {
    title: "IIT Madras Data Science and Artificial Intelligence",
    images: ["/images/IITM.jpg"],
    description:
      "Successfully completed an intensive, 8-week course on Data Science and Artificial Intelligence by the best engineering university in India, the Indian Institute of Technology, Madras as a part of their specialised School Connect Programme wherein I learned about the core fundamentals of various analytical tools and algorithms that power our models today.",
  },
  {
    title: "National Entrepreneurship Olympiad, IIT Bombay",
    images: ["/images/NEO.jpeg"],
    description:
      "Participated in NEO, organised by E-Cell IITB in Grade 6, got certified and expanded my knowledge about the know-how of entrepreneurship.",
  },
  {
    title: "Queen's Essay Writing Competition, 2026",
    images: ["/images/QEW.png"],
    description:
      "Wrote a Bronze Winning Essay on the importance of judicious development of AI, arguing for a more collective and inclusive absorption of this technology with a special emphasis on the Commonwealth."
  },
  {
    title: "Real World Challenges Convention (RWCC) (Singapore)",
    images: ["/images/RWCC1.png", "/images/RWCC2.png", "/images/RWCC3.png"],
     description:
      "Represented my school and achieved podium ranks multiple times in the annual, prestigious RWCC mega competitions held in Singapore, where we debated about AI, Security, Innovation, Creativity and Entrepreneurship. Featured in the school newsletter:",
    link: "https://news.globalindianschool.org/ahmedabad/giis-ahmedabad-bags-the-2nd-runner-up-trophy-at-rwcc-organized-by-giis-smart-campus-singapore",
    linkLabel: "Click Here",
  },
  {
    title: "Science Olympiad Foundation",
    images: ["/images/sof-olympiads-1.jpg"],
    description:
      "Participated in numerous English, Math, Science, and Cyber Olympiads organized by the SOF throughout my schooling, winning multiple national and international awards.",
  },
  {
    title: "Aryabhata Ganit Challenge",
    images: ["/images/Aryabhata Ganit Challenge.png", "/images/MAMGIIS.png"],
    description:
      "Achieved a Top 100 Rank (western region) in annual Mathematics Challenge for High Schoolers in India by the Central Board of Secondary Education (CBSE). Came 1st in the preliminary school selections.",
    badge: "Top 100",
  },
  {
    title: "Global Student Exchange Program (GSE) (Kuala Lumpur)",
    images: ["/images/GSE1.png", "/images/GSE2.png"],
    description:
      "Won the GSE in 2021 out of 15 teams where we created innovative solutions to aid the massive agriculture industry in India by emphasising on building efficient reform mechanisms and smart systems to minimise produce loss and pricing discrepancies.",
  },
  {
    title: "Al Tasamuh (Abu Dhabi)",
    images: ["/images/AL-T.png"],
    description:
      "Gave a talk on how critically important leadership is, especially during times of social media, the risks involved and various technological factors that can redefine the core idea behind making effective decisions.",
  },
]
export const experience: WorkExperience[] = [
  {
    role: "Co-Founder and CEO",
    images: ["/images/datacraft.png"],
    organization: "Datacraft",
    duration: "Jun 2023 - Apr 2024",
    description:
      "I founded a B2B2C company with my friend at the age of 13 out of an entrepreneurship workshop hosted by the renowned organization, The Indus Entrepreneurs (TIE), Ahmedabad Chapter. We aimed to solve the present issue of effectively managing data, from product details to insurance papers. For a normal man, this has been a headache. We even raised basic investment from an incubator, that too, winning against graduate students, however we failed to build up on the momentum, and paused the idea.",
  },
  {
    role: "Cofounder, Strategic Advisor",
    images: ["/images/cmw.png"],
    organization: "Checkmywarranty",
    duration: "May 2026 - June 2026",
    description:
      "Served as founding technical advisor to Checkmywarranty, an end to end warranty management solution that enables us to keep track of product and service warranties, give timely reminders and help users avail the benefits that they missed. I helped oversee the feasibility of the idea, validated on public platforms, and ensured that all the technical requirements were met. ",
  },
  {
    role: "Data Science and AI Research Intern",
    images: ["/images/tt.png"],
    organization: "Tridya Tech Limited",
    duration: "July 2026 – August 2026",
    description:
      "I completed an internship at Tridhya Tech, a publicly listed company in India where we worked to identify and understand AI Startups, different factors like Funding, Team Size, Years in Operation, Customer Satisfaction, Churn, AI Models, Industry Segregation among others to help the management identify the right kind of companies to invest in, and what is needed to be done to build a successful AI Company.",
  },
  {
    role: "Software Test Engineer",
    images: ["/images/tcno.png"],
    organization: "Techno Infonet Gujarat Private Limited",
    duration: "May 2023 - Jul 2023",
    description:
      "At the age of 10-11, I worked rigorously to test and break software, find bugs and shortcomings, compare with competitors and present reports to the development teams about the results. It really helped to understand in depth about all the stages of building successful software.",
  },
]
export const story = [
  "I formally started programming at age 11. Ever since, I have been driven by curiosity—exploring the intersection between writing code and solving real-world problems. From a young age, I have been deeply passionate about technology and reading, learning from successful entrepreneurs who approach challenges through first-principles thinking.",

  "This mindset pushes me forward every day to build and contribute meaningfully to society. I have launched ventures, failed, learned, and returned stronger. To build solutions that endure, giving up is never an option.  For me, it has never been."
]