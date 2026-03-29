// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Courses I have taught at various institutions.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "My academic curriculum vitae.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-paper-computerization-and-the-decline-of-unincorporated-self-employment-published-in-journal-of-human-capital-2024",
          title: 'Paper “Computerization and the Decline of Unincorporated Self-Employment” published in Journal of Human...',
          description: "",
          section: "News",},{id: "news-paper-中国专利质量的测度-变化机制与经济增长效应-published-in-经济研究-economic-research-journal-2026-03",
          title: 'Paper “中国专利质量的测度、变化机制与经济增长效应” published in 经济研究 (Economic Research Journal) 2026(03).',
          description: "",
          section: "News",},{id: "news-data-driven-vertical-integration-evidence-from-large-scale-job-postings-received-revise-and-resubmit-at-management-science",
          title: '“Data-Driven Vertical Integration: Evidence from Large-Scale Job Postings” received Revise and Resubmit at...',
          description: "",
          section: "News",},{id: "teachings-data-analysis",
          title: 'Data Analysis',
          description: "Tianjin University of Finance &amp; Economics, Spring 2018",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-analysis/";
            },},{id: "teachings-econometrics",
          title: 'Econometrics',
          description: "Nanjing Audit University, Fall 2021-2024",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/econometrics/";
            },},{id: "teachings-international-investment-amp-risk-control",
          title: 'International Investment &amp;amp; Risk Control',
          description: "Nanjing Audit University, Fall 2021",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/investment/";
            },},{id: "teachings-principles-of-macroeconomics",
          title: 'Principles of Macroeconomics',
          description: "University of Oklahoma, 2013-2015",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/macro/";
            },},{id: "teachings-modelling-amp-data-analysis",
          title: 'Modelling &amp;amp; Data Analysis',
          description: "Tianjin University of Finance &amp; Economics, Fall 2017",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/modelling/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A%78%6C%69%75@%6E%61%75.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=9uQM4scAAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-6645-8274", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/lzxlll", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Zexuan-Liu-2/", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
