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
          description: "invited talks/lectures/posters/presentations/workshops/symposiums/seminars/competitions/magazines etc.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
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
    },{id: "news-poster-presentation-at-iit-bhu-for-rid-day",
          title: 'Poster Presentation at IIT (BHU) for RID Day.',
          description: "",
          section: "News",},{id: "news-paper-presentation-at-iit-jodhpur-conference",
          title: 'Paper presentation at IIT Jodhpur (Conference).',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-participation-in-an-event-at-ignou-delhi-sparkles-smile",
          title: 'Participation in an event at IGNOU, Delhi. :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-an-introduction-to-hindi-syntax",
          title: 'an introduction to hindi syntax',
          description: "an academic monograph (VP, NP, Verb Group, Subordination and Coordination)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-word-sense-in-sanskrit",
          title: 'word sense in sanskrit',
          description: "a shloka dictionary based on a corpus of Sanskrit texts",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-fragments-app-for-hindi",
          title: 'fragments app for hindi',
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
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
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
