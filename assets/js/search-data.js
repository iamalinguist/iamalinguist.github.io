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
  },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "a collection of my cool academic projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Download the updated PDF CV to access the latest information. The digital sections here have been optimized with concise details for enhanced readability.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-talks",
          title: "talks",
          description: "invited talks/lectures/posters/workshops/symposiums/seminars/competitions/magazines etc.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "dropdown-teaching",
              title: "teaching",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-notes",
              title: "notes",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-gallery",
              title: "gallery",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "post-use-of-auxiliary-in-hindi",
      
        title: "Use of Auxiliary in Hindi",
      
      description: "an overview from the linguistics perspective",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/auxiliary-in-hindi/";
        
      },
    },{id: "post-information-structure",
      
        title: "Information Structure",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/information-structure/";
        
      },
    },{id: "post-argument-structure",
      
        title: "Argument Structure",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/argument-structure/";
        
      },
    },{id: "post-understanding-anaphors-personal-pronouns-and-r-expressions-in-hindi",
      
        title: "understanding Anaphors, Personal Pronouns, and R-Expressions in Hindi",
      
      description: "Understanding Anaphors, Personal Pronouns, and R-Expressions in Hindi",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/understanding-pronouns/";
        
      },
    },{id: "post-understanding-tgg",
      
        title: "understanding tgg",
      
      description: "A quick lesson on phrase structures and transformational in a language",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/understanding-tgg/";
        
      },
    },{id: "post-understanding-hpsg",
      
        title: "understanding hpsg",
      
      description: "A quick visual schema of &#39;How HPSG organizes sentence structure?&#39;",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/understanding-hpsg/";
        
      },
    },{id: "post-generative-grammar-what-it-actually-is",
      
        title: "generative grammar- what it actually is?",
      
      description: "A quick discussion on the broader term &#39;generative grammar&#39;",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/generative-grammar/";
        
      },
    },{id: "post-an-overview-of-the-grammatical-theories",
      
        title: "an overview of the grammatical theories",
      
      description: "highlighting core principles and distinguishing features of each theory",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/grammatical-theories/";
        
      },
    },{id: "post-why-does-my-first-linguistic-paper-fail-terribly-in-advancing-scientific-inquiry",
      
        title: "why does my first linguistic paper fail terribly in advancing scientific inquiry?",
      
      description: "it remains more of a sketch than a robust theory",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/review-of-syntactic-paper/";
        
      },
    },{id: "post-subjecthood-in-hindi",
      
        title: "subjecthood in hindi",
      
      description: "A Research Proposition on Subjecthood in Hindi",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/understanding-idea-of-subject/";
        
      },
    },{id: "post-a-note-for-39-syntax-39-study",
      
        title: "a note for &#39;syntax&#39; study",
      
      description: "A Comprehensive Guide to Key Areas of Syntactic Research",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/a-note-syn/";
        
      },
    },{id: "post-a-note-for-39-syntax-hindi-39-study",
      
        title: "a note for &#39;syntax + hindi&#39; study",
      
      description: "A Comprehensive Guide to Core Topics in Hindi Syntactic Research",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/a-note-syn-hin/";
        
      },
    },{id: "post-a-note-for-39-linguistics-nlp-39-domain",
      
        title: "a note for &#39;linguistics + nlp&#39; domain",
      
      description: "A Comprehensive Guide to Key Research Areas",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/a-note-ling-nlp/";
        
      },
    },{id: "news-poster-presentation-at-iit-bhu-on-the-occasion-of-research-and-innovation-day-2024",
          title: 'Poster Presentation at IIT (BHU) on the occasion of Research and Innovation Day-2024....',
          description: "",
          section: "News",},{id: "news-won-best-research-award-open-to-all-branches-organized-by-iit-jodhpur-amp-amp-iit-indore-blush-relieved",
          title: 'Won Best Research Award – Open to All Branches, Organized by IIT Jodhpur...',
          description: "",
          section: "News",},{id: "news-won-1st-prize-for-nationwide-swachhata-ideathon-2024-by-ignou-delhi-sparkles-smile",
          title: 'Won 1st prize for nationwide Swachhata Ideathon-2024, by IGNOU Delhi. :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-selected-as-top-100-posters-across-all-themes-to-be-presentated-at-bharat-mandapam-delhi-for-estic-2025-by-dst-goi-sparkles",
          title: 'Selected as Top 100 Posters (across all themes) to be Presentated at Bharat...',
          description: "",
          section: "News",},{id: "projects-hindi-tree-open-access-online-parser-for-hindi",
          title: 'Hindi Tree- Open Access Online Parser for Hindi',
          description: "software + an academic monograph (VP, NP, Verb Group, Subordination and Coordination)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-word-sense-in-sanskrit",
          title: 'word sense in sanskrit',
          description: "a shloka dictionary based on a corpus of Sanskrit texts",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-toy-fragment-an-offline-app-for-hindi",
          title: 'toy fragment- an offline app for hindi',
          description: "a demonstration of &#39;how Hindi grammar rules work?&#39;",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-language-resources-for-non-native-hindi-speakers",
          title: 'language resources for non-native hindi speakers',
          description: "a volunteering project to teach and produce effective content on grammar of Hindi etc.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-a-devnāgarī-and-romanāgrī-writer",
          title: 'a devnāgarī and romanāgrī writer',
          description: "a simple app for transliterating Hindi script into Roman and IPA notation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-a-latex-course-in-hindi-for-researchers",
          title: 'a LaTeX course in Hindi for researchers',
          description: "a volunteering project to teach LaTeX in Hindi etc.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-8892-937X", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=", "_blank");
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
