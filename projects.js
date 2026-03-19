const projects = [
  {
    slug: "codelux",
    name: "CodeLux",
    category: "Startup SaaS ERP Platform",
    year: "2026",
    tag: "SaaS + Infra + Ops",
    cardSummary:
      "A multilingual multi-tenant ERP startup where I worked across product architecture, infrastructure, deployment, code quality, and full-stack system design.",
    overview:
      "CodeLux is the biggest product I have worked on so far and the one that best reflects how I think as an engineer. It is a multilingual multi-tenant SaaS ERP platform with separate product surfaces for the main tenant application, a system admin portal, and a public landing and onboarding flow. Beyond feature work, I handled the deeper engineering side too: VPS setup from scratch, Docker-based deployment, reverse proxy setup, logging infrastructure, code quality rules, and the kind of operational groundwork that turns a codebase into a real startup system.",
    detailHeadline: "A startup SaaS platform shaped as much by systems thinking as by feature delivery.",
    detailBody:
      "CodeLux pushed me beyond just writing application features. I worked on the product as a real operating system for a startup: multi-tenant backend structure, modular business domains, multilingual UX, separate admin and customer-facing applications, Dockerized services, VPS deployment, reverse-proxy setup, logging, and engineering standards such as editor configuration and stricter code-quality guardrails. It is the project where backend architecture, frontend delivery, deployment, and engineering discipline all came together in one place.",
    role: "Startup Builder / Full-Stack Engineer / Infrastructure Owner",
    stack: [".NET 9", "React", "Vite", "PostgreSQL", "Docker", "Nginx", "VPS", "Serilog", "Seq", "Multi-Tenant SaaS"],
    outcomes: [
      "Designed and operated a multi-tenant SaaS foundation spanning product architecture, deployment, and admin tooling",
      "Configured VPS infrastructure from scratch and shipped Docker-based deployment flows for multiple services and apps",
      "Introduced code-quality guardrails such as editor configuration, structured conventions, and maintainability-focused standards",
      "Built operational visibility through centralized logging and production-minded runtime setup",
      "Worked across core business modules and product surfaces including tenant workflows, onboarding, and modular ERP expansion"
    ],
    accent: "linear-gradient(135deg, #16311d 0%, #0b0f0c 100%)",
    image: "",
    cardLogo: "assets/codelux-logo-original.svg",
    heroLogo: "assets/codelux-logo-original.svg",
    liveDemo: "https://codelux.tech/"
  },
  {
    slug: "circle",
    name: "Circles",
    category: "Book Club Social Platform",
    year: "2026",
    tag: ".NET + Angular + Realtime",
    cardSummary:
      "A social platform for book clubs that brings together club spaces, meetings, polls, realtime chat, personalized feed experiences, and a reader marketplace.",
    overview:
      "Circles is a full-stack platform built around the idea that reading communities should feel alive online, not just organized. The product combines book-club management with social features, realtime interaction, book discovery, and reader-focused engagement systems in one connected experience.",
    detailHeadline: "A book-club platform that mixes community management with social product design.",
    detailBody:
      "I built Circles across both the .NET backend and Angular frontend, shaping it as more than a club directory. The platform supports club creation and moderation, private and public club flows, book tracking, meeting scheduling and attendance, polls, personalized and following-based feeds, realtime club chat with SignalR, annual reading goals, karma tracking, and a marketplace for book exchanges and offers. It is a product where backend structure, API design, and user-facing community features all had to work together cleanly.",
    role: "Full-Stack .NET and Angular Engineer",
    stack: [".NET", "ASP.NET Core Web API", "Angular 19", "SignalR", "SQL Server", "Identity", "JWT", "Google Books API"],
    outcomes: [
      "Built a multi-surface reading community product instead of a simple club listing app",
      "Combined club management, social feed mechanics, polls, and realtime chat in one platform",
      "Added reader engagement systems such as attendance tracking, annual goals, and karma history",
      "Integrated a book marketplace flow for offers, exchanges, and community-driven sharing",
      "Designed the system as a full-stack .NET and Angular application with realtime and API-driven features"
    ],
    accent: "linear-gradient(135deg, #173020 0%, #0b0f0c 100%)",
    image: "assets/circle-banner.svg",
    cardImage: "assets/circle-banner.svg",
    cardImageFit: "contain"
  },
  {
    slug: "healthmate",
    name: "HealthMate",
    category: "Production Healthcare Platform",
    year: "2025",
    tag: "ML + MCP + Mobile",
    cardSummary:
      "A production-grade healthcare ecosystem with a doctor web platform, patient mobile app, early-detection ML, and an MCP-powered clinical assistant.",
    overview:
      "HealthMate is my graduation project and one of the strongest examples of how I like to build software: real-world systems, deep technical ownership, and ambitious product ideas executed across the full stack. The platform combines a doctor-facing web application, a patient mobile app, production-grade machine learning for early disease detection, and an MCP-based server that powers Sena, an assistant that helps doctors retrieve and analyze patient history safely.",
    detailHeadline: "A healthcare platform that brought together web, mobile, ML, and MCP in one product.",
    detailBody:
      "I worked on HealthMate as both team leader and hands-on engineer over the course of a full year. On the product side, the system served both doctors and patients through separate but connected experiences. On the technical side, it combined a modular .NET backend, an Angular web app, machine learning models built with Python and scikit-learn, and an MCP server that let Sena access and analyze patient history in a safer and more structured way.",
    role: "Team Leader / Full-Stack .NET and Angular Engineer",
    stack: [
      ".NET 8",
      "ASP.NET Core Web API",
      "Angular",
      "SQL Server",
      "Entity Framework Core",
      "JWT",
      "Python",
      "scikit-learn",
      "MCP"
    ],
    outcomes: [
      "Led the project from building the team to the final presentation and discussion",
      "Built a production-grade healthcare system across web, mobile, backend, and data workflows",
      "Integrated machine learning models for early disease detection into the product experience",
      "Implemented an MCP-based server so Sena can retrieve and analyze historical patient data for doctors",
      "Enabled patient-doctor chat with support for referencing medical documents such as prescriptions inside conversations"
    ],
    accent: "linear-gradient(135deg, #183122 0%, #0b0f0c 100%)",
    image: "assets/healthmate-banner.svg",
    cardImage: "assets/healthmate-banner.svg",
    cardImageFit: "contain",
    repoLinks: [
      {
        label: "Backend repository",
        url: "https://github.com/MohamedMG7/HealthMate-WebApi"
      },
      {
        label: "Frontend repository",
        url: "https://github.com/MohamedMG7/HealthMate_WebApp"
      }
    ]
  },
  {
    slug: "pc-detective",
    name: "PC Detective",
    category: "Desktop System Inspector",
    year: "2025",
    tag: "C# + WPF + Hardware Info",
    cardSummary:
      "A Windows desktop application that inspects hardware, storage, network adapters, and public IP details through a clean WPF interface.",
    overview:
      "PC Detective is a desktop application I built to turn raw machine diagnostics into a simpler user-facing tool. Instead of digging through separate Windows utilities, the app collects operating system, CPU, GPU, motherboard, RAM, storage, and network information in one place and exposes deeper details through an interactive WPF interface.",
    detailHeadline: "A desktop utility focused on making low-level system information easier to inspect.",
    detailBody:
      "The project is built with C# and WPF on .NET 8, using WMI, Hardware.Info, and LibreHardwareMonitor-style libraries to gather machine data from different system sources. I structured it around repositories and typed models for hardware domains, then connected those results to a split-view UI where users can click components and inspect their detailed properties without leaving the app.",
    role: "Desktop Application Developer",
    stack: [
      "C#",
      ".NET 8",
      "WPF",
      "XAML",
      "WMI",
      "Hardware.Info",
      "System.Management"
    ],
    outcomes: [
      "Built a desktop utility that centralizes OS, CPU, GPU, motherboard, RAM, storage, and network inspection",
      "Used WMI and hardware-monitoring libraries to retrieve system data from multiple machine layers",
      "Designed an interactive details panel so users can drill into component-specific information quickly",
      "Structured the app with repositories and models to keep system-data access separate from the WPF UI layer"
    ],
    accent: "linear-gradient(135deg, #1f2e45 0%, #0b1018 100%)",
    repoUrl: "https://github.com/MohamedMG7/PC_Detective"
  },
  {
    slug: "targetlex",
    name: "TargetLex",
    category: "Cybersecurity Wordlist Generator",
    year: "2025",
    tag: "C# + CLI + OSINT Patterns",
    cardSummary:
      "A command-line cybersecurity tool that generates targeted password wordlists from personal details like names, nicknames, and birth dates.",
    overview:
      "TargetLex is a small offensive-security style utility focused on targeted wordlist generation. Instead of producing generic passwords, it takes simple identity inputs such as a target's name, nickname, and birth date, then expands them into many realistic password candidates using combinations, symbols, reversed strings, mixed casing, and seasonal patterns.",
    detailHeadline: "A targeted wordlist generator built around realistic password-pattern heuristics.",
    detailBody:
      "The project is built as a .NET 8 command-line application in C#. It parses arguments from the terminal, generates candidate passwords through a dedicated pattern engine, removes duplicates, and writes the final list into a text file under a generated wordlists folder. What makes it interesting is the cybersecurity angle: it applies social-engineering style assumptions to create more context-aware password candidates than a random brute-force list would.",
    role: "Security Tool Developer",
    stack: [
      "C#",
      ".NET 8",
      "CLI",
      "CommandLineParser",
      "Wordlist Generation",
      "Password Pattern Analysis",
      "Cybersecurity"
    ],
    outcomes: [
      "Built a CLI utility that generates targeted password lists from personal input data",
      "Implemented pattern generation for names, nicknames, dates, symbols, mixed case, and reversed strings",
      "Exported deduplicated results into ready-to-use text wordlists for security testing workflows",
      "Framed the tool around realistic password heuristics rather than generic random combinations"
    ],
    accent: "linear-gradient(135deg, #3a2412 0%, #0d0f12 100%)",
    repoUrl: "https://github.com/MohamedMG7/TargetLex"
  },
  {
    slug: "inventory-management-depi",
    name: "Inventory Management System",
    category: "DEPI Graduation E-Commerce Project",
    year: "2024",
    tag: ".NET 8 + MVC + API",
    cardSummary:
      "A DEPI graduation project that combines inventory management, e-commerce workflows, authentication, carts, orders, and product administration in one system.",
    overview:
      "Inventory Management System was my graduation project during DEPI training. I worked on it as a web-based e-commerce and sales platform built to help businesses manage products, inventory, customers, and order flows in one connected system instead of relying on fragmented tools.",
    detailHeadline: "A training graduation project built as both an inventory system and an online sales platform.",
    detailBody:
      "The repository is structured into multiple layers, with separate API, MVC, BLL, and DAL projects. It supports authentication, product and category management, shopping carts, orders, payments, and live inventory tracking, while using Entity Framework, SQL Server, JWT, AutoMapper, and Bootstrap to connect the business logic to both admin and customer-facing flows. It is a useful example of building a more complete enterprise-style application architecture during training, not just a small CRUD demo.",
    role: "Full-Stack .NET Developer / DEPI Graduation Project",
    stack: [
      ".NET 8",
      "ASP.NET Core",
      "ASP.NET Core MVC",
      "Web API",
      "Entity Framework Core",
      "SQL Server",
      "JWT",
      "AutoMapper",
      "Bootstrap"
    ],
    outcomes: [
      "Built a layered commerce system with separate API, MVC, business, and data-access projects",
      "Implemented core workflows for authentication, catalog management, carts, orders, payments, and inventory updates",
      "Used Entity Framework and SQL Server to support structured business data and product tracking",
      "Delivered a graduation project focused on turning training concepts into a more production-shaped architecture"
    ],
    accent: "linear-gradient(135deg, #243224 0%, #0c120d 100%)",
    image: "assets/inventory-depi-banner.svg",
    cardImage: "assets/inventory-depi-banner.svg",
    cardImageFit: "cover",
    repoUrl: "https://github.com/MohamedMG7/InventoryManagementSystemDepi"
  },
  {
    slug: "l337code",
    name: "l337Code",
    category: "Problem Solving Archive",
    year: "2026",
    tag: "Algorithms + Practice",
    cardSummary:
      "A growing GitHub repository of algorithm and data-structure solutions, organized one problem per folder and built as a steady problem-solving practice log.",
    overview:
      "l337Code is my personal problem-solving repository where I keep track of solved coding challenges in a clean one-folder-per-problem structure. It reflects consistency more than presentation: regular practice, multiple languages, and a habit of sharpening algorithmic thinking outside product work.",
    detailHeadline: "A consistent problem-solving log built around one folder per solved challenge.",
    detailBody:
      "I use this repository as a structured archive for algorithm and data-structure practice. Each problem gets its own folder, which makes the repo easy to extend and also makes it possible to track progress directly from GitHub. It is a straightforward project, but it says something useful about how I work: I like repetition, fundamentals, and improving through consistent problem solving.",
    role: "Problem Solver / Competitive Programming Practice",
    stack: ["C#", "C++", "Python", "LeetCode", "Algorithms", "Data Structures"],
    outcomes: [
      "Maintains a clean archive of solved coding problems with one folder per challenge",
      "Builds fluency in algorithms, data structures, and coding interview patterns",
      "Shows consistency and discipline through ongoing problem-solving practice"
    ],
    accent: "linear-gradient(135deg, #1c251d 0%, #0b0f0c 100%)",
    solvedCount: 45,
    countLabel: "problems solved",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=80",
    cardImage:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=80",
    cardImageFit: "cover",
    repoUrl: "https://github.com/MohamedMG7/l337Code"
  },
  {
    slug: "traveling-salesperson",
    name: "Traveling Salesperson",
    category: "University Algorithms Project",
    year: "2024",
    tag: "C# + WPF + Dynamic Programming",
    cardSummary:
      "A third-year university desktop project that visualizes city selection on a world map and solves the traveling salesperson problem with dynamic programming.",
    overview:
      "Traveling Salesperson was one of my earlier algorithm-focused projects in university. I built it as a WPF desktop application where cities are plotted on a map, distances are calculated from their coordinates, and the selected route can be solved with a dynamic-programming approach instead of manual path drawing.",
    detailHeadline: "An algorithm project that turned a classic optimization problem into an interactive desktop tool.",
    detailBody:
      "The app loads city coordinates from JSON, renders them as clickable points on a world map, and lets the user choose a starting city before running a Held-Karp style dynamic-programming solution for TSP. What I like about this project is that it connects the theory from algorithms class to something visual and testable: graph modeling, distance-matrix generation, recursion with memoization, and a simple UI that makes the problem easier to explore.",
    role: "Solo Developer / Third-Year University Project",
    stack: [
      "C#",
      ".NET Framework 4.8",
      "WPF",
      "XAML",
      "Dynamic Programming",
      "Held-Karp",
      "Newtonsoft.Json"
    ],
    outcomes: [
      "Built an interactive desktop interface for exploring the traveling salesperson problem visually",
      "Implemented a Held-Karp style dynamic-programming solution with memoization for route optimization",
      "Modeled cities as graph vertices and generated weighted edges from Euclidean distance calculations",
      "Loaded map markers from JSON and connected algorithm output to a simple WPF visualization"
    ],
    accent: "linear-gradient(135deg, #243b55 0%, #0b1320 100%)",
    image: "assets/traveling-salesperson-main.jpeg",
    cardImage: "assets/traveling-salesperson-main.jpeg",
    cardImageFit: "cover",
    repoUrl: "https://github.com/MohamedMG7/TravelingSalesPerson"
  },
  {
    slug: "internintellegence-authapp",
    name: "InternIntellegence Auth App",
    category: "Internship Backend API",
    year: "2025",
    tag: ".NET 9 + Identity + JWT",
    cardSummary:
      "An internship authentication API covering registration, login, email confirmation, password reset, JWT auth, and optional two-factor flows.",
    overview:
      "This was one of the earlier backend tasks I built during my InternIntellegence internship. The project focuses on the core authentication layer that many larger systems depend on: user registration, secure login, token-based auth, email confirmation, password reset, and two-factor verification support.",
    detailHeadline: "A backend auth foundation built as an internship exercise in secure account workflows.",
    detailBody:
      "The API is built with ASP.NET Core on .NET 9 and uses Identity, Entity Framework Core, SQL Server, and JWT authentication. Beyond basic login and registration, it also includes account lockout handling, email confirmation, password reset, and 2FA-related endpoints, which made it a good practical introduction to implementing real authentication flows instead of just wiring a simple login form to a database.",
    role: "Backend Developer / InternIntellegence Internship",
    stack: [
      ".NET 9",
      "ASP.NET Core Web API",
      "ASP.NET Core Identity",
      "Entity Framework Core",
      "SQL Server",
      "JWT",
      "MailKit",
      "Twilio"
    ],
    outcomes: [
      "Built a dedicated authentication API with register, login, logout, email confirmation, and password reset flows",
      "Configured JWT-based authentication and Identity-driven account management on top of SQL Server",
      "Added stronger auth features such as lockout rules, confirmed email requirements, and 2FA support"
    ],
    accent: "linear-gradient(135deg, #183024 0%, #0b100c 100%)",
    image: "assets/intern-auth-banner.svg",
    cardImage: "assets/intern-auth-banner.svg",
    cardImageFit: "cover",
    repoUrl: "https://github.com/MohamedMG7/InternIntellegence_AuthApp"
  },
  {
    slug: "internintellegence-portfolio",
    name: "InternIntellegence Portfolio",
    category: "Internship Backend API",
    year: "2025",
    tag: ".NET 8 + API Design + JWT",
    cardSummary:
      "A backend API for managing portfolio data, including projects, achievements, skills, contacts, and contact messages per user.",
    overview:
      "This internship project expanded beyond pure authentication into a more complete data API. It handles portfolio management for users by exposing endpoints for projects, achievements, skills, contacts, and messaging, which made it a stronger exercise in entity design, validation, and feature-specific service layers.",
    detailHeadline: "A portfolio-management API that moved from auth-only work into richer business logic.",
    detailBody:
      "The project is built with ASP.NET Core, Identity, Entity Framework Core, SQL Server, and JWT authentication. It organizes portfolio operations through services and repositories, supports separate add flows for projects, achievements, contacts, and skills, and also includes message handling for portfolio contact scenarios. Compared to the auth app, this one felt broader because it required handling a richer domain model instead of just account workflows.",
    role: "Backend Developer / InternIntellegence Internship",
    stack: [
      ".NET 8",
      "ASP.NET Core Web API",
      "ASP.NET Core Identity",
      "Entity Framework Core",
      "SQL Server",
      "JWT",
      "Swagger"
    ],
    outcomes: [
      "Built API endpoints for managing user portfolio sections such as projects, achievements, contacts, and skills",
      "Structured the app around services, repositories, validation helpers, and authenticated user flows",
      "Added messaging support so portfolio owners can receive and query contact messages through the backend"
    ],
    accent: "linear-gradient(135deg, #1b2235 0%, #0b0f16 100%)",
    image: "assets/intern-portfolio-banner.svg",
    cardImage: "assets/intern-portfolio-banner.svg",
    cardImageFit: "cover",
    repoUrl: "https://github.com/MohamedMG7/InternIntellegence_Portfolio"
  },
  {
    slug: "internintellegence-movieapi",
    name: "InternIntellegence Movie API",
    category: "Internship Backend API",
    year: "2025",
    tag: ".NET 8 + TMDB + Search",
    cardSummary:
      "A richer movie backend that supports CRUD, advanced search, favourites, authentication, and TMDB integration for fetching and storing movie data.",
    overview:
      "This was the most advanced of the three InternIntellegence internship backend projects. It combines authentication, local movie management, favourites, external TMDB integration, and multiple search flows into one API, making it feel much closer to a real product backend than the earlier training tasks.",
    detailHeadline: "A movie platform backend that combines internal CRUD logic with external API integration.",
    detailBody:
      "The API is built with ASP.NET Core, Entity Framework Core, Identity, SQL Server, AutoMapper, and JWT authentication. On top of CRUD operations for movies, it supports advanced filtering, genre-driven queries, favourite lists, and TMDB-powered endpoints that can fetch or search external movie data and store it locally. This project stood out because it mixed internal business logic with third-party API integration and a broader set of domain features.",
    role: "Backend Developer / InternIntellegence Internship",
    stack: [
      ".NET 8",
      "ASP.NET Core Web API",
      "Entity Framework Core",
      "SQL Server",
      "ASP.NET Core Identity",
      "JWT",
      "AutoMapper",
      "TMDB API"
    ],
    outcomes: [
      "Built a movie backend with CRUD, advanced search, favourites, and authentication flows",
      "Integrated TMDB so external movie data can be queried and stored inside the local system",
      "Worked across multiple controllers and services to support a broader product-style backend domain"
    ],
    accent: "linear-gradient(135deg, #35201c 0%, #0d0d11 100%)",
    image: "assets/intern-movieapi-banner.svg",
    cardImage: "assets/intern-movieapi-banner.svg",
    cardImageFit: "cover",
    repoUrl: "https://github.com/MohamedMG7/InternIntellegence_MovieApi"
  },
  {
    slug: "phone-book-system",
    name: "Phone Book System",
    category: "Small Console CRUD Project",
    year: "2024",
    tag: "C# + .NET 8 + Console",
    cardSummary:
      "A small early console project for managing contacts with add, edit, search, list, and remove flows.",
    overview:
      "Phone Book System is one of my older smaller projects from 2024. It is a console-based contact manager that focuses on basic CRUD-style operations and simple session-driven interaction, making it a good snapshot of the kind of small practice projects I used to sharpen fundamentals.",
    detailHeadline: "A lightweight console phone book built around simple contact-management flows.",
    detailBody:
      "The project is written in C# on .NET 8 and organizes the app into a few straightforward classes: a contact model, a manager for storing and editing contacts, and a session layer that drives the console menu. It supports showing contacts, adding new records, editing existing ones, searching by name, deleting contacts, and marking favourites. It is a small project, but it reflects the early stage where I was practicing structuring code beyond a single-file program.",
    role: "Solo Developer / Practice Project",
    stack: ["C#", ".NET 8", "Console App", "CRUD", "OOP"],
    outcomes: [
      "Built a console-based contact manager with add, edit, search, list, and delete operations",
      "Separated the program into contact, manager, and session classes instead of keeping all logic in one file",
      "Practiced CRUD fundamentals and user-input handling through a small interactive project"
    ],
    accent: "linear-gradient(135deg, #2c2230 0%, #0c0d12 100%)",
    image: "assets/phone-book-banner.svg",
    cardImage: "assets/phone-book-banner.svg",
    cardImageFit: "cover",
    repoUrl: "https://github.com/MohamedMG7/Phone-Book-System"
  },
  {
    slug: "code-compare",
    name: "Code Compare",
    category: "Small Developer Tool",
    year: "2025",
    tag: "JavaScript + Monaco + Vite",
    cardSummary:
      "A simple browser tool for comparing two code snippets side by side and visually spotting what changed between them.",
    overview:
      "Code Compare is a small frontend tool I built to make side-by-side code comparison easier. It gives two Monaco editor panes on the same screen, lets the user switch languages, and highlights the idea of incorrect versus corrected code so changes are easier to inspect quickly.",
    detailHeadline: "A lightweight code-diff style tool focused on visual side-by-side comparison.",
    detailBody:
      "The app is built with JavaScript, Vite, Monaco Editor, and html2canvas. It supports multiple programming languages, sample code presets, adjustable editor font size, and a snapshot feature for capturing the comparison view. It is a small utility, but it is useful because it turns a common developer need into a focused interface instead of relying on a full IDE or a large external diff tool.",
    role: "Solo Developer / Utility Tool",
    stack: ["JavaScript", "Vite", "Monaco Editor", "html2canvas", "CSS"],
    outcomes: [
      "Built a side-by-side code comparison tool with Monaco editors in the browser",
      "Supported multiple languages, sample presets, font-size controls, and visual comparison workflows",
      "Added snapshot capture so compared code can be exported as an image"
    ],
    accent: "linear-gradient(135deg, #22283c 0%, #0b0d13 100%)",
    image: "assets/code-compare-banner.svg",
    cardImage: "assets/code-compare-banner.svg",
    cardImageFit: "cover",
    repoUrl: "https://github.com/MohamedMG7/Code_Compare"
  }
];
