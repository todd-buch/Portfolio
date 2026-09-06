# Site copy

Scratch pad for rewriting every bit of writing on toddbuch.com.

**How to use**

1. Edit only the text inside the `text` fences. Keep the `### \`tag\`` headings as they are — those are how the copy gets mapped back into the site.
2. You can change wording, cut lines, or add a paragraph. Leave a tag’s fence empty if you want that bit gone.
3. Dates, emails, and proper names can stay or change.
4. When you’re done, tell me to apply `COPY.md`.

Tech names in the pills (React, Python, etc.) are left out on purpose. Same for icon-only socials.

---

## Home

### `home.hero.name`

Home hero, the big centered name. (`src/Hero.tsx`)

```text
Todd Buch
```

### `home.hero.caption`

Home hero, the line under the name. (`src/Hero.tsx`)

```text
I write software, and I take pictures of cars.
```

### `home.bio.name`

Home bio heading, first thing after the hero. (`src/Main_Projects.tsx`)

```text
Todd Buch
```

### `home.bio.traits`

Home bio, the copper line under the name. Separate items with ` · `. (`src/Main_Projects.tsx`)

```text
Computer Science Student · Software Development & Design · Studio Manager
```

### `home.bio.body`

Home bio paragraph. (`src/Main_Projects.tsx`)

```text
As a software development student with a foundation in photography and design, I build software and digital media that balance technical knowledge with visual impact. Creativity & curiosity are at the core of what I do.
```

### `home.highlights.heading`

Label above the three highlight cards. (`src/Reuseable-Components/Home_Highlights.tsx`)

```text
Highlights
```

### `home.highlights.studio.label`

First highlight card, top line. (`src/Reuseable-Components/Home_Highlights.tsx`)

```text
Studio Manager
```

### `home.highlights.studio.detail`

First highlight card, second line. (`src/Reuseable-Components/Home_Highlights.tsx`)

```text
Charleen's Portrait Studio
```

### `home.highlights.internship.label`

Second highlight card, top line. (`src/Reuseable-Components/Home_Highlights.tsx`)

```text
Software Intern
```

### `home.highlights.internship.detail`

Second highlight card, second line. (`src/Reuseable-Components/Home_Highlights.tsx`)

```text
The Hartford
```

### `home.highlights.fire.label`

Third highlight card, top line. (`src/Reuseable-Components/Home_Highlights.tsx`)

```text
Fire Prevention Project
```

### `home.highlights.fire.detail`

Third highlight card, second line. (`src/Reuseable-Components/Home_Highlights.tsx`)

```text
UConn Capstone
```

### `home.projects.heading`

Projects section heading. (`src/Main_Projects.tsx`)

```text
Projects
```

### `home.card.read_more`

Expand control on project cards, collapsed. (`src/Reuseable-Components/Small_Card.tsx`)

```text
Read more
```

### `home.card.show_less`

Expand control on project cards, expanded. (`src/Reuseable-Components/Small_Card.tsx`)

```text
Show less
```

### `home.card.stack_dropdown`

Default label on the tech dropdowns. (`src/Main_Projects.tsx`)

```text
View the stack behind it
```

### `home.card.images_dropdown`

Label on the image dropdowns. (`src/Main_Projects.tsx`)

```text
View images
```

---

### `home.project.quant.title`

Quant-Engine card title. (`src/Main_Projects.tsx`)

```text
Quant-Engine
```

### `home.project.quant.date`

Quant-Engine date line. `Present` is the live “current” chip. (`src/Main_Projects.tsx`)

```text
July 2026 — Present
```

### `home.project.quant.summary`

Quant-Engine short pitch, always visible. (`src/Main_Projects.tsx`)

```text
Full-stack portfolio analytics and backtesting; an open-source alternative to premium finance tools. Work in progress.
```

### `home.project.quant.body`

Quant-Engine expanded paragraph. (`src/Main_Projects.tsx`)

```text
Quant Engine is a full-stack stock portfolio analytics and backtesting platform, built by a team of 5. It is an open-source alternative to premium financial tools. It helps investors analyze holdings, run historical simulations, and build rule-based trading strategies through an intuitive web interface.
```

### `home.project.quant.stack_body`

Quant-Engine stack dropdown paragraph. (`src/Main_Projects.tsx`)

```text
The app covers three core areas: AI-powered portfolio analysis from CSV or manual inputs (with automated summary reports), a high-performance backtesting engine that surfaces risk-return metrics like Sharpe/Sortino and max drawdown, and an interactive strategy builder for testing rules such as momentum or buy-the-dip against past market data. Services are containerized with Docker as a multi-service stack.
```

### `home.project.quant.status`

Line at the bottom of the expanded Quant-Engine card. (`src/Main_Projects.tsx`)

```text
Work in progress
```

---

### `home.project.fire.title`

Fire Prevention card title. (`src/Main_Projects.tsx`)

```text
Fire Prevention at the Edge
```

### `home.project.fire.date`

Fire Prevention date line. (`src/Main_Projects.tsx`)

```text
August 2025 — May 2026
```

### `home.project.fire.summary`

Fire Prevention short pitch. (`src/Main_Projects.tsx`)

```text
Edge fire hazard detection device that combines vision AI, environmental sensors, and a local LLM for real-time warehouse hazard recommendations.
```

### `home.project.fire.body`

Fire Prevention expanded paragraph. (`src/Main_Projects.tsx`)

```text
Fire Prevention at the Edge is an edge computing safety appliance created by a team of 4 UConn students for their final capstone project. I served as project manager while our team architected, designed, and developed the full-stack system end to end. It is designed to detect potential hazards before they ignite. By combining real-time visual feeds with local environmental sensors (CO₂, temperature, humidity, and thermal mapping), the system uses a deterministic classifier to evaluate risk severity. Finally, an entirely local LLM analyzes the data to provide actionable, real-time safety recommendations to warehouse personnel.
```

### `home.project.fire.image1.caption`

Caption under the first fire-prevention screenshot. (`src/Main_Projects.tsx`)

```text
Our vision AI model successfully detecting a sparking outlet.
```

### `home.project.fire.image2.caption`

Caption under the second fire-prevention screenshot. (`src/Main_Projects.tsx`)

```text
The UI running on the Raspberry Pi, showing the detected hazards and a recommendation.
```

### `home.project.fire.stack_body`

Fire Prevention stack dropdown, first paragraph. (`src/Main_Projects.tsx`)

```text
Cameras run vision models trained to flag fire-related hazards, while environmental sensors surface other risky conditions. Those signals are fused and passed to an on-device text model that turns raw detections into clear, specific alerts for warehouse staff.
```

### `home.project.fire.stack_detects`

Fire Prevention stack dropdown, detections paragraph. (`src/Main_Projects.tsx`)

```text
What the vision model detects: battery condition (okay, swollen, damaged, bad placement), fire exits (clear vs. blocked), and electrical hazards (normal/damaged wiring, normal/damaged outlets, sparking outlets).
```

### `home.project.fire.stack_pipeline`

Fire Prevention stack dropdown, how it was built. (`src/Main_Projects.tsx`)

```text
Building it was an end-to-end pipeline: we first generated synthetic images for the dataset (Grok, Gemini, and the OpenAI API), annotated them in CVAT, then trained and fine-tuned a YOLOv8 Nano model and validated its detections. In parallel we built a full web interface with live camera streaming and bounding boxes drawn in real time, then assembled a Raspberry Pi device with the Hailo AI HAT+, cameras, and environmental sensors so the model, backend, and local LLM could run together on the edge appliance.
```

---

### `home.project.blackjack.title`

Blackjack Agent card title. (`src/Main_Projects.tsx`)

```text
Blackjack Agent
```

### `home.project.blackjack.date`

Blackjack Agent date line. (`src/Main_Projects.tsx`)

```text
March 2026 — April 2026
```

### `home.project.blackjack.summary`

Blackjack Agent short pitch. (`src/Main_Projects.tsx`)

```text
Learning agent for Blackjack, and an analysis of idea game-play over many games.
```

### `home.project.blackjack.body`

Blackjack Agent expanded paragraph. (`src/Main_Projects.tsx`)

```text
Blackjack Agent is an AI-driven simulation and analysis framework that models, evaluates, and optimizes player decisions in Blackjack. We asked whether a skilled player can gain a mathematical advantage over the house (the short answer is, sadly, no). It compares three strategies: a random baseline, a rule-based reflex agent that follows standard strategy charts, and a model-free reinforcement learning agent that optimizes both play and bet sizing under casino-like conditions.
```

### `home.project.blackjack.image1.caption`

Caption under the first blackjack chart. (`src/Main_Projects.tsx`)

```text
Agent performance with Random Agent – The graph shows the total unit return of each agent over hands played. In this graph, we can see both the lookup agent and the learning agent we trained far outperform the random agent. We can also see that even with an ideal strategy, over many games, the house always wins.
```

### `home.project.blackjack.image2.caption`

Caption under the second blackjack chart. (`src/Main_Projects.tsx`)

```text
Agent performance without Random Agent - The graph shows the total unit return of each agent over hands played. In this graph, we can see that over time, the learning agent outperforms the lookup agent.
```

### `home.project.blackjack.stack_engine`

Blackjack stack dropdown, engine paragraph. (`src/Main_Projects.tsx`)

```text
The system is built around a custom terminal Blackjack engine, a training environment, and a comparative evaluation suite. The engine models multi-deck shoes (auto-reshuffling when fewer than 25% of cards remain) and a dealer that hits soft 16 and stands on all 17s. A reflex agent hard-codes optimal tables for hard totals, soft totals, and pair splits. The learning agent uses tabular Q-learning with state (player total, dealer upcard, usable ace, binned true count), Hi-Lo counting for the true count, separate Q-tables for play actions (hit / stand / double) and bet sizes (1–50 units), and ε-greedy exploration.
```

### `home.project.blackjack.stack_results`

Blackjack stack dropdown, results paragraph. (`src/Main_Projects.tsx`)

```text
Training ran for 5,000,000 episodes with Q-tables persisted via pickle. Across a 100,000-hand benchmark, the Q-learning agent reduced average loss to 0.045 units/hand — beating basic strategy (0.055) and random play (2.0), while still showing that card counting can shrink losses without fully overcoming the house edge. A recursive probability module also computes exact win probabilities and expected value for stand vs. hit from the remaining shoe distribution.
```

---

### `home.project.portfolio.title`

Portfolio site card title. (`src/Main_Projects.tsx`)

```text
Portfolio Website
```

### `home.project.portfolio.date`

Portfolio site date line. (`src/Main_Projects.tsx`)

```text
July 2026 — Present
```

### `home.project.portfolio.summary`

Portfolio site short pitch. (`src/Main_Projects.tsx`)

```text
This site!
```

### `home.project.portfolio.body`

Portfolio site expanded paragraph. (`src/Main_Projects.tsx`)

```text
A personal portfolio for projects, experience, photography, and an expanded version of my resume with all the stuff that couldn't fit on my actual resume.
```

### `home.project.portfolio.source_button`

Button on the portfolio card. (`src/Main_Projects.tsx`)

```text
View source code
```

---

### `home.role.heading`

Current Role section heading. (`src/Main_Projects.tsx`)

```text
Current Role
```

### `home.role.subtitle`

Line under the Current Role heading. (`src/Main_Projects.tsx`)

```text
Studio Manager, Charleen's Portrait Studio
```

### `home.role.body1`

Current Role, first paragraph. (`src/Main_Projects.tsx`)

```text
As the Studio Manager, my main roles include directing daily studio operations and managing staff scheduling, as well as resource allocation to ensure seamless service delivery for our clients. I also serve as the main point of contact for key clients, assist with customer service when escalation is needed, and manage our projects and timelines.
```

### `home.role.body2`

Current Role, second paragraph. (`src/Main_Projects.tsx`)

```text
In addition to managing studio operations and leading the team, I developed automated workflows, reducing repetitive administrative tasks, which significantly increased operational efficiency and staff productivity. One major project I completed was automating bulk image resizing, adding watermarks, and creating print release contracts for clients.
```

### `home.role.stack_dropdown`

Current Role dropdown label. (`src/Main_Projects.tsx`)

```text
View the stack used in this role
```

### `home.role.stack_intro`

Current Role dropdown, first paragraph. (`src/Main_Projects.tsx`)

```text
Used specialized photography & videography software, and used Python for automation scripts.
```

### `home.role.stack_script`

Current Role dropdown, second paragraph. (`src/Main_Projects.tsx`)

```text
For the automated image resizing and watermarking, a simple Python script was made which is able to process images in batch, and change the color of the watermark to ensure it remains visible on the image regardless of the background color. This saves time when preparing images to be sent to clients.
```

### `home.role.more_button`

Link under Current Role. (`src/Main_Projects.tsx`)

```text
View more info
```

---

### `home.about.heading`

About Me heading. (`src/Main_Projects.tsx`)

```text
About Me
```

### `home.about.body1`

About Me, first paragraph. (`src/Main_Projects.tsx`)

```text
My interest in how we experience the visual world started through photography and design. Moving into Computer Science allowed me to take that fascination a step further: instead of just capturing digital environments, I can now build them from the ground up.
```

### `home.about.body2`

About Me, second paragraph. (`src/Main_Projects.tsx`)

```text
I enjoy working with both UI/UX and full-stack development. I'm working to combine intuitive, smart design with robust engineering, exploring how AI and cloud technologies can create more intelligent, seamless digital solutions.
```

### `home.about.body3`

About Me, third paragraph. (`src/Main_Projects.tsx`)

```text
When I'm not coding, I am usually capturing the world through car photography or videography. I also enjoy exploring finance and markets, hiking, and am currently working on improving my golf game.
```

---

### `home.contact.heading`

Contact heading. (`src/Main_Projects.tsx`)

```text
Got an Idea? Let's Talk.
```

### `home.contact.body`

Contact paragraph. (`src/Main_Projects.tsx`)

```text
Have a project in mind, looking to get images of your cool car, or just want to chat? Drop me a message!
```

### `home.contact.button`

Contact button. (`src/Main_Projects.tsx`)

```text
Get in touch
```

---

## Chrome (every page)

### `nav.home`

Top nav, first link. (`src/Sidebar.tsx`)

```text
Home
```

### `nav.resume`

Top nav, second link. (`src/Sidebar.tsx`)

```text
Resume
```

### `nav.photography`

Top nav, third link. (`src/Sidebar.tsx`)

```text
Photography
```

### `nav.logo_alt`

Alt text on the signature logo. (`src/Sidebar.tsx`)

```text
Todd Buch
```

### `footer.copyright`

Footer copyright. Year is filled in live. (`src/Footer.tsx`)

```text
© {year} Todd Buch. All rights reserved.
```

### `footer.name`

Giant name in the footer background. (`src/Footer.tsx`)

```text
Todd Buch
```

### `theme.group`

Theme toggle group label (screen readers). (`src/Reuseable-Components/ThemeToggle.tsx`)

```text
Theme mode
```

### `theme.system`

Theme toggle, system. (`src/Reuseable-Components/ThemeToggle.tsx`)

```text
System theme
```

### `theme.light`

Theme toggle, light. (`src/Reuseable-Components/ThemeToggle.tsx`)

```text
Light theme
```

### `theme.dark`

Theme toggle, dark. (`src/Reuseable-Components/ThemeToggle.tsx`)

```text
Dark theme
```

### `ui.current`

The “still going” chip in dates. (`src/Reuseable-Components/Current.tsx`)

```text
Present
```

---

## Photography

### `photo.intro.title`

Photography page, big title. (`src/pages/Photography/photographyData.ts`)

```text
Photography
```

### `photo.intro.bio`

Photography page, paragraph under the title. (`src/pages/Photography/photographyData.ts`)

```text
Outside of Software Development, I enjoy capturing moments through photography. My interests include cars, motorsports, landscapes, and candid portraits. This page showcases a selection of my favorite shots.
```

### `photo.intro.scroll`

Scroll cue under the photography intro. (`src/pages/Photography/Photography.tsx`)

```text
Scroll to view gallery
```

### `photo.ui.view_gallery`

Button on a featured photo that has a full gallery. (`src/pages/Photography/Photo_Description.tsx`)

```text
View the gallery
```

### `photo.ui.back`

Back control on a gallery. (`src/pages/Photography/Photo_Description.tsx`)

```text
All photography
```

### `photo.ui.missing_title`

Heading when a gallery slug is wrong. (`src/pages/Photography/PhotoGallery.tsx`)

```text
Gallery not found
```

### `photo.ui.missing_back`

Button on that missing-gallery page. (`src/pages/Photography/PhotoGallery.tsx`)

```text
Back to photography
```

---

### `photo.featured.nascar_truck.title`

Featured slide title. (`src/pages/Photography/photographyData.ts`)

```text
NASCAR Truck Series
```

### `photo.featured.nascar_truck.date`

Featured slide date. (`src/pages/Photography/photographyData.ts`)

```text
June 2025
```

### `photo.featured.nascar_truck.description`

Featured slide description. Line break stays a line break. (`src/pages/Photography/photographyData.ts`)

```text
The NASCAR Craftsman Truck Series race at Lime Rock Park, Connecticut.
I created this poster & had it printed as a stunning 24x36 inch metal.
```

### `photo.featured.nascar_nh.title`

Featured slide title. (`src/pages/Photography/photographyData.ts`)

```text
NASCAR Race, New Hampshire Motor Speedway
```

### `photo.featured.nascar_nh.date`

Featured slide date. (`src/pages/Photography/photographyData.ts`)

```text
September 2025
```

### `photo.featured.nascar_nh.description`

Featured slide description. (`src/pages/Photography/photographyData.ts`)

```text
Mobil 1 301 NASCAR Cup Series race at New Hampshire Motor Speedway, Loudon, New Hampshire.
```

### `photo.featured.car_shows.title`

Featured slide title. (`src/pages/Photography/photographyData.ts`)

```text
Car Shows
```

### `photo.featured.car_shows.date`

Featured slide date. (`src/pages/Photography/photographyData.ts`)

```text
Summer 2025 — Present
```

### `photo.featured.car_shows.description`

Featured slide description. (`src/pages/Photography/photographyData.ts`)

```text
I enjoy attending car shows and capturing the unique vehicles and moments at these events. This gallery features a selection of my favorite shots from various car shows I've attended.
```

### `photo.featured.uconn.title`

Featured slide title. (`src/pages/Photography/photographyData.ts`)

```text
UConn in the Fall
```

### `photo.featured.uconn.date`

Featured slide date. (`src/pages/Photography/photographyData.ts`)

```text
October 2024
```

### `photo.featured.uconn.description`

Featured slide description. (`src/pages/Photography/photographyData.ts`)

```text
An autumn morning at the University of Connecticut.
```

### `photo.featured.long_island.title`

Featured slide title. (`src/pages/Photography/photographyData.ts`)

```text
Long Island
```

### `photo.featured.long_island.date`

Featured slide date. (`src/pages/Photography/photographyData.ts`)

```text
August 2025
```

### `photo.featured.long_island.description`

Featured slide description. (`src/pages/Photography/photographyData.ts`)

```text
Photos from my trip to Long Island. Nissequogue River State Park - Site of a former Psychiatric Center and the Old Westbury Gardens.
```

### `photo.featured.fsae.title`

Featured slide title. (`src/pages/Photography/photographyData.ts`)

```text
Formula SAE
```

### `photo.featured.fsae.date`

Featured slide date. (`src/pages/Photography/photographyData.ts`)

```text
December 2025
```

### `photo.featured.fsae.description`

Featured slide description. (`src/pages/Photography/photographyData.ts`)

```text
The Formula SAE club at the University of Connecticut. Student-designed and built race cars.
```

---

### `photo.gallery.nascar_truck.title`

Full gallery title (NASCAR Truck). (`src/pages/Photography/photographyData.ts`)

```text
NASCAR Truck Series
```

### `photo.gallery.nascar_truck.date`

Full gallery date. (`src/pages/Photography/photographyData.ts`)

```text
June 2025
```

### `photo.gallery.nascar_truck.description`

Full gallery description. (`src/pages/Photography/photographyData.ts`)

```text
The NASCAR Craftsman Truck Series race at Lime Rock Park, Connecticut.
```

### `photo.gallery.car_shows.title`

Full gallery title (Car Shows). (`src/pages/Photography/photographyData.ts`)

```text
Car Shows
```

### `photo.gallery.car_shows.date`

Full gallery date. (`src/pages/Photography/photographyData.ts`)

```text
Summer 2025 — Present
```

### `photo.gallery.car_shows.description`

Full gallery description. (`src/pages/Photography/photographyData.ts`)

```text
I enjoy attending car shows and capturing the unique vehicles and moments at these events. This gallery features a selection of my favorite shots from various car shows I've attended.
```

### `photo.gallery.long_island.title`

Full gallery title (Long Island). (`src/pages/Photography/photographyData.ts`)

```text
Long Island
```

### `photo.gallery.long_island.date`

Full gallery date. (`src/pages/Photography/photographyData.ts`)

```text
August 2025
```

### `photo.gallery.long_island.description`

Full gallery description. (`src/pages/Photography/photographyData.ts`)

```text
Photos from my trip to Long Island. Nissequogue River State Park - Site of a former Psychiatric Center and the Old Westbury Gardens.
```

### `photo.gallery.fsae.title`

Full gallery title (FSAE). (`src/pages/Photography/photographyData.ts`)

```text
Formula SAE
```

### `photo.gallery.fsae.date`

Full gallery date. (`src/pages/Photography/photographyData.ts`)

```text
December 2025
```

### `photo.gallery.fsae.description`

Full gallery description. (`src/pages/Photography/photographyData.ts`)

```text
The Formula SAE club at the University of Connecticut. Student-designed and built race cars.
```

---

## Resume

### `resume.title`

Resume page heading. (`src/pages/Resume/Resume.tsx`)

```text
Resume — Todd Buch
```

### `resume.email`

Resume contact email (visible). (`src/pages/Resume/Resume.tsx`)

```text
hello@toddbuch.com
```

### `resume.location`

Resume location line. (`src/pages/Resume/Resume.tsx`)

```text
Connecticut, United States
```

### `resume.download_button`

Download button. (`src/pages/Resume/Resume.tsx`)

```text
Download Resume
```

### `resume.linkedin_button`

LinkedIn button. (`src/pages/Resume/Resume.tsx`)

```text
LinkedIn
```

### `resume.github_button`

GitHub button. (`src/pages/Resume/Resume.tsx`)

```text
GitHub
```

### `resume.intro`

Blurb under the buttons. (`src/pages/Resume/Resume.tsx`)

```text
Hey there 👋 I'm Todd Buch, a student studying Computer Science, with an interest in software development, graphic design, photography, and many other things.
```

### `resume.education.heading`

Education section heading. (`src/pages/Resume/Resume.tsx`)

```text
Education
```

### `resume.education.school`

Education card title. (`src/pages/Resume/Resume.tsx`)

```text
University of Connecticut
```

### `resume.education.degree`

Education card subtitle. (`src/pages/Resume/Resume.tsx`)

```text
Bachelor of Science — Computer Science
```

### `resume.education.location`

Education card location. (`src/pages/Resume/Resume.tsx`)

```text
Storrs, Connecticut
```

### `resume.education.date`

Education date line. (`src/pages/Resume/Resume.tsx`)

```text
August 2023 — Present
```

### `resume.education.details`

Education card, the dean’s list / concentration / graduation block. (`src/pages/Resume/Resume.tsx`)

```text
Dean's List Student
Concentration: Software Development & Design
Graduation: December 2026
```

### `resume.education.courses_heading`

Label above the course list. (`src/pages/Resume/Resume.tsx`)

```text
Relevant Courses:
```

### `resume.education.course.dsood`

Course line. (`src/pages/Resume/Resume.tsx`)

```text
Data Structures and Object-Oriented Design: Introduction to fundamental data structures and algorithms.
```

### `resume.education.course.discrete`

Course line. (`src/pages/Resume/Resume.tsx`)

```text
Introduction to Discrete Systems: Introduction to formal mathematical thinking including discrete systems and proofs.
```

### `resume.education.course.business`

Course line. (`src/pages/Resume/Resume.tsx`)

```text
Business Software Development: Development of computer software for business information processing, using the C# language.
```

### `resume.education.course.swe`

Course line. (`src/pages/Resume/Resume.tsx`)

```text
Intro to Software Engineering: Software engineering concepts including the software life cycle and other software-development process models.
```

### `resume.education.course.languages`

Course line. (`src/pages/Resume/Resume.tsx`)

```text
Programming Languages: The study of programming language features and programming paradigms. Simply Typed Lambda Calculus, OCaml, Prolog, & Smalltalk.
```

---

### `resume.work.heading`

Work Experience heading. (`src/pages/Resume/Resume.tsx`)

```text
Work Experience
```

### `resume.work.studio_manager.title`

Job title. (`src/pages/Resume/Resume.tsx`)

```text
Studio Manager
```

### `resume.work.studio_manager.company`

Company line. (`src/pages/Resume/Resume.tsx`)

```text
Charleen's Portrait Studio
```

### `resume.work.studio_manager.location`

Location. (`src/pages/Resume/Resume.tsx`)

```text
Dayville, Connecticut
```

### `resume.work.studio_manager.date`

Dates. (`src/pages/Resume/Resume.tsx`)

```text
June 2025 — Present
```

### `resume.work.studio_manager.body`

Opening paragraph. (`src/pages/Resume/Resume.tsx`)

```text
As the Studio Manager, I oversee the daily operations of the studio, managing a small team to ensure seamless service delivery across all client needs. My role balances operational strategy, such as resource allocation and project management, with client relations and sales. I develop automated tools for the team to use, to make sure that the studio can scale to meet high-volume seasonal demands without sacrificing quality or attention to detail.
```

### `resume.work.studio_manager.bullet.ops`

Bullet. (`src/pages/Resume/Resume.tsx`)

```text
Operational Leadership: Directed daily studio workflows and staff scheduling to manage high volume periods, including school portrait seasons involving hundreds of students and various levels of education.
```

### `resume.work.studio_manager.bullet.sales`

Bullet. (`src/pages/Resume/Resume.tsx`)

```text
Sales & Business Development: Managed the full sales lifecycle, including in-person and remote consultations for high school seniors and executive clients. Analyzed costs, calculated and set product pricing, and created new product lines.
```

### `resume.work.studio_manager.bullet.crm`

Bullet. (`src/pages/Resume/Resume.tsx`)

```text
Client Relationship Management: Served as the primary point of contact for key clients, including schools and corporate partners.
```

### `resume.work.studio_manager.bullet.automation`

Bullet. (`src/pages/Resume/Resume.tsx`)

```text
Technical Workflow Automation: Developed custom scripts to automate repetitive post-production and administrative tasks, such as bulk image resizing, watermarking, and the generation of print release contracts.
```

### `resume.work.studio_manager.bullet.impact`

Nested impact line. (`src/pages/Resume/Resume.tsx`)

```text
Impact: Reduced manual processing time from ~20 minutes to ~2 minutes per task, allowing the team to focus on creative output rather than administrative overhead.
```

### `resume.work.studio_manager.stack_contracts`

Automation dropdown, first paragraph. (`src/pages/Resume/Resume.tsx`)

```text
First, I developed the business contracts for digital image delivery. Most contracts allowed for personal use only, but some clients required commercial use rights as well.
```

### `resume.work.studio_manager.stack_script`

Automation dropdown, second paragraph. (`src/pages/Resume/Resume.tsx`)

```text
Once the contracts were made, I created a script to fill out the details (date, client name, image numbers, etc.) and then export the contract. Finally, I added the ability to resize images automatically based on the package purchased by the client, and I added the ability to add our studio watermark, which changed colors based on the background of the image.
```

### `resume.work.studio_manager.bullet.creative`

Bullet. (`src/pages/Resume/Resume.tsx`)

```text
Creative Production: Used the Adobe Creative Cloud suite for graphic design, designing albums, and visual branding.
```

---

### `resume.work.hartford.title`

Job title. (`src/pages/Resume/Resume.tsx`)

```text
Tech & Ops Software Development Intern
```

### `resume.work.hartford.company`

Company line. (`src/pages/Resume/Resume.tsx`)

```text
The Hartford Insurance Group
```

### `resume.work.hartford.location`

Location. (`src/pages/Resume/Resume.tsx`)

```text
Hartford, Connecticut
```

### `resume.work.hartford.date`

Dates. (`src/pages/Resume/Resume.tsx`)

```text
May 2026 — July 2026
```

### `resume.work.hartford.body`

Opening paragraph. (`src/pages/Resume/Resume.tsx`)

```text
Worked in the Claims & Operations IT department on the AI Accelerators team, a team focused on exploring emerging tech & AI platforms. During the internship, I developed an end-to-end proof-of-concept (POC) conversational AI solution.
```

### `resume.work.hartford.project_label`

Line above the Hartford bullets. (`src/pages/Resume/Resume.tsx`)

```text
Technical Project: Hybrid-Cloud Conversational Agentic AI Solution
```

### `resume.work.hartford.bullet.arch`

Bullet. (`src/pages/Resume/Resume.tsx`)

```text
Architectural Design: Engineered an end-to-end, hybrid-cloud conversational AI solution to automate complex business workflows. Managed the full lifecycle from initial design to deployment within a 10-week timeframe.
```

### `resume.work.hartford.bullet.connect`

Full-stack sub-bullet. (`src/pages/Resume/Resume.tsx`)

```text
Integrated Amazon Connect for telephony orchestration and call flow management. Set up an Amazon Connect phone number, and created the incoming call flow.
```

### `resume.work.hartford.bullet.lambda`

Full-stack sub-bullet. (`src/pages/Resume/Resume.tsx`)

```text
Developed backend logic and data storage solutions using AWS Lambda and S3.
```

### `resume.work.hartford.bullet.adk`

Full-stack sub-bullet. (`src/pages/Resume/Resume.tsx`)

```text
Deployed an agentic AI engine on GCP Cloud Run using the Google Agent Developer Kit (ADK).
```

### `resume.work.hartford.stack_body`

Hartford stack dropdown. (`src/pages/Resume/Resume.tsx`)

```text
The project used a hybrid-cloud architecture to leverage the unique strengths of both AWS and GCP. Amazon Connect handled the telephony ingress and call flow management, while the core intelligence was hosted on GCP Cloud Run. By developing an agent with the Google Agent Developer Kit (ADK), I was able to implement an agentic AI workflow that could process natural language and execute backend tasks via AWS Lambda, creating a seamless, automated end-to-end voice experience.
```

### `resume.work.hartford.bullet.ops`

Bullet. (`src/pages/Resume/Resume.tsx`)

```text
Operational Impact: Designed the system to replace manual processes with an automated workflow, optimizing both operational cost-efficiency and the customer experience.
```

### `resume.work.hartford.bullet.leadership`

Bullet. (`src/pages/Resume/Resume.tsx`)

```text
Strategic Leadership Development: Actively pursued cross-functional engagement through networking to gain a holistic understanding of business operations.
```

### `resume.work.hartford.bullet.comms`

Bullet. (`src/pages/Resume/Resume.tsx`)

```text
Communication Skills: In addition to actively participating in daily team standups, I researched and presented to the team on a newer technology that would be worth exploring, the Gemini Live API. This system would allow the team to develop conversational agentic AI solutions with lower latency and better accuracy. I also prepared a presentation & live demo to show off my work over the summer.
```

---

### `resume.work.creative.title`

Job title. (`src/pages/Resume/Resume.tsx`)

```text
Creative Team Member
```

### `resume.work.creative.company`

Company line. (`src/pages/Resume/Resume.tsx`)

```text
Charleen's Portrait Studio
```

### `resume.work.creative.location`

Location. (`src/pages/Resume/Resume.tsx`)

```text
Dayville, CT
```

### `resume.work.creative.date`

Dates. (`src/pages/Resume/Resume.tsx`)

```text
April 2022 — June 2025
```

### `resume.work.creative.body`

Opening paragraph. (`src/pages/Resume/Resume.tsx`)

```text
As a Creative Team Member, I handled customer service, editing and prepping images for printing, and created automated HTML email workflows.
```

### `resume.work.creative.bullet.email`

Bullet. (`src/pages/Resume/Resume.tsx`)

```text
Oversaw customer service operations by designing automated HTML email workflows for booking confirmations, payment reminders, and post-session follow-ups.
```

### `resume.work.creative.bullet.edit`

Bullet. (`src/pages/Resume/Resume.tsx`)

```text
Post-production editing on photos and videos, using Lightroom, Photoshop, and Premiere Pro for selecting, cropping, retouching, color grading, and video cutting.
```

### `resume.work.creative.stack_email`

Stack dropdown, first paragraph. (`src/pages/Resume/Resume.tsx`)

```text
To streamline the communication with clients, I built HTML email templates that automatically triggered based on client actions. These templates handled critical touchpoints, from immediate booking confirmations and scheduled payment reminders to post-session thank you messages and image delivery emails.
```

### `resume.work.creative.stack_edit`

Stack dropdown, second paragraph. (`src/pages/Resume/Resume.tsx`)

```text
On the media production side, I managed full post-processing in Adobe Lightroom Classic by filtering and culling RAW images, cropping, and applying color adjustments. For advanced retouching, I moved into Photoshop, while using Premiere Pro to assemble, color grade, and finalize videos.
```

---

### `resume.skills.heading`

Skills heading. (`src/pages/Resume/Resume.tsx`)

```text
Skills
```

### `resume.skills.cat.languages`

Skill group title. (`src/pages/Resume/Resume.tsx`)

```text
Languages
```

### `resume.skills.cat.cloud`

Skill group title. (`src/pages/Resume/Resume.tsx`)

```text
Cloud Infrastructure
```

### `resume.skills.cat.ai`

Skill group title. (`src/pages/Resume/Resume.tsx`)

```text
AI & Voice
```

### `resume.skills.cat.creative`

Skill group title. (`src/pages/Resume/Resume.tsx`)

```text
Creative & Media
```

### `resume.skills.cat.tools`

Skill group title. (`src/pages/Resume/Resume.tsx`)

```text
Development Tools
```

### `resume.skills.cat.productivity`

Skill group title. (`src/pages/Resume/Resume.tsx`)

```text
Productivity & Platforms
```

---

### `resume.awards.heading`

Awards heading. (`src/pages/Resume/Resume.tsx`)

```text
Awards & Recognition
```

### `resume.awards.deans.title`

Award title. (`src/pages/Resume/Resume.tsx`)

```text
Dean's List Student
```

### `resume.awards.deans.meta`

Award source line. (`src/pages/Resume/Resume.tsx`)

```text
University of Connecticut, 2026
```

### `resume.awards.deans.body`

Award blurb. (`src/pages/Resume/Resume.tsx`)

```text
Earned for maintaining high academic standing and GPA excellence.
```

### `resume.awards.president.title`

Award title. (`src/pages/Resume/Resume.tsx`)

```text
President's Education Award
```

### `resume.awards.president.meta`

Award source line. (`src/pages/Resume/Resume.tsx`)

```text
Edwin O. Smith High School, 2023
```

### `resume.awards.president.body`

Award blurb. (`src/pages/Resume/Resume.tsx`)

```text
Awarded on behalf of the President of the United States and the United States Secretary of Education.
```

### `resume.awards.vex.title`

Award title. (`src/pages/Resume/Resume.tsx`)

```text
VEX Robotics Excellence Award
```

### `resume.awards.vex.meta`

Award source line. (`src/pages/Resume/Resume.tsx`)

```text
Edwin O. Smith High School, 2022
```

### `resume.awards.vex.body`

Award blurb. (`src/pages/Resume/Resume.tsx`)

```text
The Excellence Award is the highest honor presented at a VEX Robotics Competition event. This award recognizes a team that demonstrates overall excellence in both judged and performance categories.
```

### `resume.awards.accounting.title`

Award title. (`src/pages/Resume/Resume.tsx`)

```text
Excellence in Accounting Award
```

### `resume.awards.accounting.meta`

Award source line. (`src/pages/Resume/Resume.tsx`)

```text
Edwin O. Smith High School, 2023
```

### `resume.awards.accounting.body`

Award blurb. (`src/pages/Resume/Resume.tsx`)

```text
Completed Advanced Accounting, as well as Intro to Business, and Personal Finance. A+.
```

---

## 404

### `notfound.title`

Missing-page heading. (`src/pages/NotFound.tsx`)

```text
Page not found
```

### `notfound.body`

Missing-page paragraph. (`src/pages/NotFound.tsx`)

```text
That page doesn't exist — or maybe it moved.
```

### `notfound.button`

Missing-page link. (`src/pages/NotFound.tsx`)

```text
Back to home
```

---

## Browser / social preview

### `meta.tab_home`

Browser tab on the home page. (`src/App.tsx`)

```text
Todd Buch
```

### `meta.tab_resume`

Browser tab on the resume page. (`src/App.tsx`)

```text
Resume — Todd Buch
```

### `meta.tab_photography`

Browser tab on the photography page. (`src/App.tsx`)

```text
Photography — Todd Buch
```

### `meta.tab_gallery`

Browser tab on a gallery. `{title}` is the gallery name. (`src/App.tsx`)

```text
{title} — Photography | Todd Buch
```

### `meta.tab_gallery_missing`

Browser tab when a gallery is missing. (`src/App.tsx`)

```text
Gallery not found — Todd Buch
```

### `meta.tab_404`

Browser tab on a missing page. (`src/App.tsx`)

```text
Page not found — Todd Buch
```

### `meta.description`

Search / social description. (`index.html`)

```text
Todd Buch - Computer Science student with an interest in software development, photography, & graphic design.
```

### `meta.og_title`

Open Graph / Twitter title. (`index.html`)

```text
Todd Buch
```

### `meta.og_description`

Open Graph / Twitter description. (`index.html`)

```text
Computer Science student with an interest in software development, photography, & graphic design.
```
