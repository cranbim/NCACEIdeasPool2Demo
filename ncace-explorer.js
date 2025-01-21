
let ncace={} //Julian, I just needed this to give me the parent object, you can remove this.

function setup(){ //this global function is needed for p5.js
    ncace.webb.init()
}

function draw(){ //this global function is needed for p5.js
    ncace.webb.run()
}

function mousePressed(){ //this global function is needed for p5.js
    ncace.webb.click()
}

ncace.webb = (function(){
    let ne
    
    function init(){
        ne=new NCACE_Explorer()
        ne.init()
    }
    
    function run(){
        ne.run()
    }

    function click(){
        ne.click()
    }

    return {
        init:init,
        run:run,
        click:click
    }



    function NCACE_Explorer(){
        const content={
            chapters:[
                //0
                {
                    name: "Welcome",
                    subname: "Find out about NCACE and the Ideas Pool2 event in 2023",
                    label: "Welcome",
                    themeID: 0,
                    chapterText:[
                        "NCACE is the National Centre for Academic and Cultural Exchange",
                        "This digital explorer tells you about some of NCACE's work...",
                        "...and the value and impact of the Ideas Pool & Micro-Commission programme",
                        "Follow the story, chapter by chapter, using the buttons below.",
                        "Some elements can be explored further",
                        "We hope you find it useful and illuminating"
        
        
                        // "NCACE is the National Centre for Academic and Cultural Exchange",
                        // "This digital explorer tells you about NCACE's work...",
                        // "...and the value and impact of the Ideas Pool programme",
                        // "Follow the story, chapter by chapter",
                        // "Some elements can be explored further",
                        // "We hope you find it useful and illuminating"
                    ]
                },
                //1
                {
                    name: "How NCACE Helps",
                    subname: "",
                    label: "NCACE",
                    themeID: 0,
                    chapterText:[
                        "Higher Educational Institutions, and arts or cultural organisations ...",
                        "... have much to offer one another",
                        "HEIs and cultural organisations often inhabit different worlds.",
                        "They may have different ways of seeing, thinking and behaving.",
                        "Sometimes they share goals, but speak different languages.",
                        "This means that they need thoughtful spaces to meet, talk and experiment",
                        "A little help and creating the right circumstances can make a difference",
                        "This is where NCACE helps."
                      
        
                        // "This means that they are unlikely to meet without help",
                        // "A little help and creating the right circumstances can make a difference",
                        // "This is where NCACE can help"
                    ]
                },
                //2
                {
                    name: "NCACE Ideas Pool 2",
                    subname: "Learn who signed up and what they hoped to achieve",
                    label: "Before IP2",
                    themeID: 1,
                    chapterText:[
                        "The Ideas Pool creates the space, time and circumstances for these encounters",
                        "Four contemporary themes are presented to potential attendees",
                        "Theme one: Environment and Climate Emergency",
                        "Theme two: Health and Wellbeing",
                        "Theme three: Place-making and Levelling Up",
                        "Theme four: Technology for Social Good",
                        "Attendees shared their hopes for the Ideas Pool",
                    ],
                    chapterData:{
                        questions:[
                            {
                              question:["who", "are we?"],
                              questionViewerFuncName:"viewRenderWhoAreWe",
                              data:{
                                title:"Who we are",
                                blobs:[
                                  {name: "Higher Education", count:28, a:-0.125, cr:0.25, r:0.3, c:4},
                                  {name: "Arts & Culture", count:61, a: 0.1, cr:0.25, r:0.6, c:1},
                                  {name: "Both", count:26, a:-0.05, cr:0.2, r:0, c:3},
                                  {name: "other", count:9, a: -0.4, cr:0.25, r:0.1, c: 6}
                                ]
                              }
                            },
                            {
                              question:["chosen","workshops"],
                              questionViewerFuncName:"viewRenderInterestedIn",
                              data:{
                                title:"Workshop sign-ups",
                                blobs:[
                                    {name: ["Health &","Wellbeing"], count:15, a:-0.25, cr:0.22, r:0.3, c:4},
                                    {name: ["6"], count:0, a:-0.16, cr:0.17, r:0.3, c:4},
                                    {name: ["Placemaking","& levelling up"], count:38, a: 0, cr:0.22, r:0.6, c:1},
                                    {name: ["2"], count:0, a:0.2, cr:0.12, r:0.3, c:4},
                                    {name: ["Technology","for social good"], count:7, a:0.275, cr:0.17, r:0.2, c:5},
                                    {name: ["6"], count:0, a:0.35, cr:0.14, r:0.3, c:4},
                                    {name: ["Environment","& Climate"], count:26, a: 0.5, cr:0.22, r:0.1, c: 2},
                                    {name: ["4"], count:0, a:-0.35, cr:0.15, r:0.3, c:4},
                                    {name: ["Other","Combinations"], count:14, a: -0.09, cr:0.6, r:0.1, c: 6},
                                  ]
                              }
                            },
                            {
                              question:["our", "interests"],
                              questionViewerFuncName:"viewRenderAboutUs",
                              data:{
                                label:"We are interested in ...",
                                statements:[
                                    "Stakeholders working within the creative industries, health and technology",
                                    "I'm interested in fostering an appreciation for the past, making it meaningful to people's lives today",
                                    "The role of culture and cultural heritage in place-making/Measuring social impact in cultural planning",
                                    "There is work in the Faculty on arts and wellbeing which I would like to help develop",
                                    "... looking for opportunities to expand extend our areas of work",
                                    "We are also interested in academic collaboration on ceramics practice with improved environmental sustainability",
                                    "The intersections between science/scientist's ideas/passions/insights and visual art languages",
                                    "I am interested in the roles of nonhuman actors in worldmaking",
                                    "I am particularly interested in nonlinear and innovative forms of narrative",
                                    "I am strong believer in design thinking in higher education to help solve problems within institutions",
                                    "For us to succeed in humanity surviving over the coming centuries we need a cultural shift in the west",
                                    "create long-term opportunities and support for visual artists working in creative health and social care",
                                    "Imagination and Creativity, Social and Environmental Justice, Climate Education",
                                    "exploring our tendency to synchronise with others and our environment",
                                    "staff and maker welfare, environmental policy and objectives as well as our youth and community programme",
                                    "Storytelling and theatre particularly in relation to climate adaptation and climate justice",
                                    "We are interested in how stories are told, specifically how those who are marginalised are able to tell their own stories",
                                    "...through theatre and drama ... our previous work has focussed on the environmental concerns including climate change",
                                    "socially engaged design practices where collaboration and participation are fundamental ingredients",
                                    "the challenge of cultural exchange in an increasingly global world",
                                    "get a better sense of how dance can contribute to place",
                                    "developing healthy communities, contributing to placemaking and deepening understanding of climate justice",
                                    "Our vision is for everyone to be able to live their lives as works of art",
                                    "I'm interested in artist led action to create change.",
                                    "taking creative/immersive tech projects into a more progressive space",
                                ]
                              }
                            },
                            {
                              question:["who", "will we meet?"],
                              questionViewerFuncName:"viewRenderWhyHere",
                              data:{
                                label:"Who we want to meet ...",
                                statements:[
                                    "a specific interest in archaeology and heritage",
                                    "Others with similar interests",
                                    "Potential partners and collaborators from arts and culture and higher education organisations",
                                    "Stakeholders working within the creative industries, health and technology",
                                    "People who are also interested in health and ageing",
                                    "socially-engaged arts practice with a relationship to industrial/ceramics heritage",
                                    "People working on projects and networks across cities highlighting citizens voice",
                                    "I don't know yet what will happen on the day I have an open mind",
                                    "understanding what other people are doing in relation to the environment ... and storytelling",
                                    "Potential collaborators from cultural institutions such as museums and galleries",
                                    "Anyone who is working in design thinking in higher education",
                                    "A diverse range of researchers up for testing ideas with a Local Authority",
                                    "meeting other researchers ... and learning more about the NCACE's work",
                                    "a cross section of organisations and higher education institutions who can help us to deliver our ambitions",
                                    "Organisations interested in ... the role of indigenous traditional knowledge in climate adaptation",
                                    "grassroots organisations who share our aims and researchers working in the area of nature and innovation",
                                    "Researchers who are interested in working collaboratively with artists and young people",
                                    "Potential funders and collaborators",
                                    "partners that can host and accommodate a performance developed by migrant theatre students",
                                    "people who are interested in wellbeing and environmental issues/climate changes",
                                    "People who are interested in using dance within various projects to make a difference",
                                    "Those who are interested in co-produced and creative evaluation and sustainable development",
                                    "Collaborators who work within climate justice, health and placemaking agendas",
                                    "Potential collaborators and co-creators for research and development work",
                                    "Academics with similar interests and stakeholders with a shared vision with whom we can collaborate",
                                    "Ideas people - folk who want to make things better and are prepared to have a go....",
                                    "Anyone that resonates!",
                                    "I'm not sure"
                                ]
                              }
                            }
                          ]
                    }
                },
                //3
                {
                    name: "Ideas Pool 2: What happened?",
                    subname: "",
                    label: "IP2 Event",
                    themeID: 2,
                    chapterText:[
                        "The Ideas Pool event was an online event in February 2023",
                        "with a series of themed breakouts and speed networking sessions.",
                        "It offered the chance to meet around common interests, ...",
                        "Make lots of new connections across disciplines, ...",
                        "and enable promising new partnerships to develop.",
                        "Click the questions on the left to explore the themes and outcomes."
                    ],
                    chapterData:{
                        questions:[
                            {
                              question:["Did you", "have good conversations?"],
                              questionViewerFuncName:"viewRenderQ1",
                              data:{
                                label:"Did you have good conversations?",
                                statements:[
                                    `"Networking was full on but met some people I'd like to connect with"`,
                                    `"Great contacts made in the networking session"`,
                                    `"so many people in such a short time!"`,
                                    `"defintiely some interesting potential directions to explore"`,
                                    `"very much appreciated the speed dating"`,
                                    `"Intense but lots of connections made"`,
                                    `"looking forward to potentially developing new connections"`,
                                    `"good range of attendees"`,
                                    `"networking session was great for opening up new conversations"`,
                                    `"keen to make contact with a number of people I met today"`
                                ]
                              }
                            },
                            {
                              question:["Did you", "learn something new?"],
                              questionViewerFuncName:"viewRenderQ1",
                              data:{
                                label:"Did you learn something new?",
                                statements:[
                                  `"Useful to know more about UKRI & AHRC priorities"`,
                                  `"Learnt about some new organisations and projects"`,
                                  `"That research pathways are not set in stone"`,
                                  `"to share what we are doing as there is a clear demand"`,
                                  `"It confirmed the struggle artists face in applying for funding"`,
                                  `"sometimes artists are not taken seriously as researchers"`,
                                  `"the more open and inclusive UKRI/AHRC approaches"`,
                                  `"the struggle for organisations to access research opportunities"`,
                                  `"to reflect on the challenges encountered by artists"`,
                                  `"Learnt how many people and organisation are doing fascinating work"`,
                                  `"I also realised how hard HEI can be to access"`,
                                  `"that I am not alone in finding that navigating university partnerships is daunting"`,
                                  `"Interesting to hear how UKRI and AHRC work"`,
                                  `"Useful to know about focus of UKRI & AHRC"`,
                                  `"I learned about some really interesting projects"`,
                                  `"discovered lots of new people and organisations"`,
                                  `"I have the beginnings of ideas for connections that could develop"`,
                                  `"Great to meet new people"`
                                ]
                              }
                            },{
                              question:["How Many", "new connections made?"],
                              questionViewerFuncName:"viewRenderQ2",
                              data:{
                                label:"Did you make new connections?",
                                statements:[
                                  `"More than a dozen"`,
                                  `"5 or 6 good ones"`,
                                  `"I met about 25"`,
                                  `"20 good, but very brief, connections"`,
                                  `"Too many to count! I hope to follow up a good 6-8"`,
                                  `"Over 20 people!"`,
                                  `"lots but probably 7 or 8 to follow up"`,
                                  `"a dozen or so, half of whom I want to reconnect with"`,
                                  `"three or four I want to follow up with"`,
                                  `"14+ with 5 I want to chat with further"`,
                                  `"Not sure, so many!"`,
                                  "Quite a few conversations I would like to continue",
                                  "approx 15 and several id like to talk to again",
                                  "I have around 3 connections I hope to follow up with"
                                ]
                              }
                            },{
                              question:["What was", "your best outcome?"],
                              questionViewerFuncName:"viewRenderQ1",
                              data:{
                                label:"What was your best outcome?",
                                statements:[
                                  `"I heard some great ideas"`,
                                  `"loved hearing about commitments to community engagement and creativity"`,
                                  `"heard and had lots of new ideas!"`,
                                  `"great new connections and links to relevant projects"`,
                                  `"people, organisations and thoughts to look up and potentially follow up"`,
                                  `"Some good potential connections"`,
                                  `"Seeded thoughts about potential organisations to connect with"`,
                                  `"interesting things to think about, useful advice on project creation"`,
                                  `"Potential connections, learning about others' research"`,
                                  `"Learning about funding opportunities"`,
                                  `"interesting people, great to hear about other projects happening"`,
                                  `"Lots of people to follow up and hopefully connect with further."`,
                                  `"I met some people who might collaborate with me"`,
                                  `"Learned about some exciting projects"`,
                                  `"New connections with arts and cultural orgs"`,
                                  `"new thoughts about some themes I'm exploring"`,
                                  `"thinking of ways to engage with smaller arts organisations and freelancers"`,
                                  `"New ways of thinking about finding collaborators and partners"`,
                                  `"Very interesting & lots to learn from other projects/arts orgs' work"`,
                                  `"great energy from individuals"`,
                                  `"breadth of interest and work "`
        
                                ]
                              }
                            },{
                              question:["What will", "you do next?"],
                              questionViewerFuncName:"viewRenderQ1",
                              data:{
                                label:'"What will you do next?"',
                                statements:[
                                  `"some seeds of ideas to follow up on"`,
                                  `"we will see what happens! :)"`,
                                  `"I will be contacting a few people from today"`,
                                  `"A few people I want to follow up with"`,
                                  `"consider how to be more findable within my HEI"`,
                                  `"I aim to make contact with some of the attendees after the session"`,
                                  `"It sounds like there is potential for collaboration with a few people"`,
                                  `"I've a couple of other projects I'm going to look up"`
                                ]
                              }
                            },
                          ]
                    }
                },
                //4
                {
                    name: "Micro-Commissions",
                    subname: "",
                    label: "Commissions 1",
                    themeID: 3,
                    chapterText:[
                        "Ideas Pool attendees who met potential partners,",
                        "with an HEI and an arts or cultural group,",
                        "were invited to apply for small funds.",
                        "This was to seed an early idea",
                        "so that new partnerships and collaborations could develop,",
                        "and hopefully flourish into full research projects.",
                        "13 partnerships applied for micro-commissions.",
                        "5 were awarded funds."
                    ]
                },
                //5
                {
                    name: "About the five funded projects",
                    subname: "click a flower to find out more about a project",
                    label: "Commissions 2",
                    themeID: 3,
                    positions: [
                      {x: 0.2, y:0.3},
                      {x: 0.35, y:0.75},
                      {x: 0.5, y:0.3},
                      {x: 0.65, y:0.75},
                      {x: 0.8, y:0.3}
                    ],
                    chapterText:[
                        
                    ],
                    chapterData:[
                      {
                        projectNum: 1,
                        name: "Planting and Playmaking",
                        phrases: [
                          "Participants: Sociology lecturer and actor/storyteller",
                          "Next: expanding collaborators and seeking further funding",
                          "Outcome: sharing of skills, and forming a friendship",
                          "connecting an imagined past with Bristol's neglected Green spaces",
                          "by caring for plants alongside a human sense of belonging",
                          "Aims: galvanise human connection with non-human neighbours",
                          "Responding to the theme: Climate Emergency",
                          
                        ]
                      },{
                        projectNum: 4,
                        name: "History of Health & Arts",
                        phrases: [
                          "Participants: Researchers in Health & Arts, Creativity & wellbeing",
                          "Next: We are working together on another, broader project",
                          "The outputs will form a great foundation for both engaging with the public",
                          "Aim: to produce blog posts encouraging discussion and debate on art and wellbeing",
                          "by identifying key artefacts central to the story of health and the arts",
                          "Exploring: Histories and narratives around health and the arts",
                          "Responding to the theme: Health and Wellbeing",
                        ]
                      },{
                        projectNum: 2,
                        name: "Digital Storytelling for Heritage",
                        phrases: [
                          "Participants: Arts/heritage venue, STEAM academics",
                          "Next: we plan to seek out further funds to deliver tailored technological solutions",
                          "Outcome: we have built a relationship and began to deliver and test new ideas",
                          "we will test innovation on new audiences, who may not engage with the arts",
                          "by identifying the creative possibilities for use of immersive technology",
                          "Aim: digital storytelling to present artefacts and experiences",
                          "Responding to the theme: Tech for Social Good",
                        ]
                      },{
                        projectNum: 5,
                        name: "Body positivity and Wellbeing",
                        phrases: [
                          "Participants: Artist/researcher, and Social producer",
                          "Next: Our work is going from strength to strength",
                          "Outcome: It has been so important in allowing my partner to dedicate time to this",
                          "We are proposing a set of engagement events focusing on different communities",
                          "We exchange approaches in creativity, lived experiences, barriers, for vulnerable communities",
                          "Aim: A collaboration to start important conversations around breasts",
                          "Responding to the theme: Tech for Social Good",
                        ]
                      },{
                        projectNum: 3,
                        name: "Incarceration and Wellbeing",
                        phrases: [
                          "Participants: Prison researcher and socially engaged artist",
                          "Next: our collaboration feels extremely valuable and we continue to work together",
                          "Outcome: valuable as a way to structure conversations around impact and methodology",
                          "and how impacts on health and wellbeing can be best communicated and shared",
                          "understanding of how interventions in prisons can be effectively measured,",
                          "Aim: examining impacts of creative interventions on prisoner wellbeing",
                          "Responding to the theme: Health and Wellbeing",
                        ]
                      }
                    ]
                },
                //6
                {
                    name: "Epilogue",
                    subname: "Thoughts from the NCACE team",
                    label: "Epilogue",
                    themeID: 3,
                    chapterText:[
                        "We seek to foster and support excellent Knowledge Exchange and collaboration ...",
                        "between Higher Education and the arts and cultural sector, ...",
                        "and to support ambition around the wider potential and impacts.",
                        "We work hard to make events meaningful, valuable and worthwhile.",
                        "We provide the conditions and seed funds when ever we can to nurture collaborations.",
                        "Outcomes can be so broad, and are all valuable. These include ...",
                        "... access to major funding, books, articles, exhibitions, performances, ...",
                        "... works of art, consulting opportunities, and policy changes.",
                        "Many people become active members of our networks and community."
                    ]
                }
            ],
        }

        const options={
            numChapters:6+1, //in addition to the intro/entry one
        }
        const font0='sculpin'
        const font1='clarendon-text-pro'

        let chapters=[]
        let currentChapter=0
        let nextChapter=0
        let garden
        let breadcrumb
        let dw,dh
        let ar=16/9

        let colsRGB=[]
        let colsHSB=[]
        makeCols()
        let nextButton, prevButton

        this.init=function(){
            let canvDiv=select("#animation")
            dh=canvDiv.elt.offsetHeight  //el.offsetWidth //windowWidth
            dw=dh*ar //windowHeight
            console.log(dw, dh)
            let canv=createCanvas(dw,dh)
            canv.parent(canvDiv)
            breadcrumb=new Breadcrumb(dh*0.2,dh*0.9,dw*0.8,dh*0.1,content,options)
            for(let i=0; i<options.numChapters; i++){
                // chapters.push(new Chapter(i,dw*0.05,dh*0.05,dw*0.9,dh*0.85,content.chapters[i],options))
                chapters.push(new Chapter(i,dw*0,dh*0,dw*1,dh*0.9,content.chapters[i],options))

            }
            garden=new Garden(dw*0.05,dh*0.05,dw*0.9,dh*0.85,content,options)
            controls = createGraphics(width, height);
            chapters[currentChapter].init()
            garden.setState(currentChapter)
            prevButton=new NavButton(dw*0.075,dh*0.95,dw*0.05,"<")
            nextButton=new NavButton(dw*0.925,dh*0.95,dw*0.05,">")
        }

        this.run=function(){
            background(colsRGB[8][0],colsRGB[8][1],colsRGB[8][2])
            chapters[currentChapter].showBack()
            chapters[currentChapter].run(mouseX, mouseY)
            if(!chapters[currentChapter].active){
                let wasChapter=currentChapter
                currentChapter=nextChapter
                chapters[currentChapter].init()
                garden.setState(currentChapter)
            }
            breadcrumb.show(currentChapter)
            garden.run()
            garden.runner()
            chapters[currentChapter].showFront()
            // tint(255,200)
            nextButton.show()
            prevButton.show()
            nextButton.run(mouseX,mouseY)
            prevButton.run(mouseX,mouseY)
        }

        this.click=function(){
            let clickedBreakCrumb=breadcrumb.click()
            if(clickedBreakCrumb>-1){
                nextChapter=clickedBreakCrumb
                chapters[currentChapter].startClosing()
            }
            if(prevButton.click()){
                nextChapter=constrain(nextChapter-1,0,options.numChapters-1)
                chapters[currentChapter].startClosing()
            }
            if(nextButton.click()){
                nextChapter=(nextChapter+1)%options.numChapters
                chapters[currentChapter].startClosing()
            }
            chapters[currentChapter].click()
        }

        function makeCols(){
            colsRGB=[
                [46,80,163],//[0,32,85],//0 dark blue
                [247,215,25],//1 yellow
                [8,173,178],//[0,71,187],//2 bright blue
                [73,80,87],//3 grey
                [220,88,160],//4 pink
                [243,113,33],//5 orange
                [8,101,63],//6 green
                [96,187,70],//7 bright green
                [178,30,124],//8 dark pink
                // color(0,32,85),//dark blue
                // color(247,215,25),//yellow
                // color(0,71,187),//bright blue
                // color(73,80,87),//grey
                // color(178,9,120),//pink
                // color(247,114,25),//orange
                // color(3,100,64),//green
            ]
            colSky=[150,150,150]//[175, 221, 250]
            colsHSB=colsRGB.map(rgbCol=>RGBToHSB(rgbCol))
            console.log(colsHSB)
        }

        function RGBToHSB(rgbCol) {
            let r =rgbCol[0]/255;// /= 255;
            let g =rgbCol[1]/255;// /= 255;
            let b =rgbCol[2]/255;// /= 255;
            const v = Math.max(r, g, b),
                n = v - Math.min(r, g, b);
            const h =
                n === 0 ? 0 : n && v === r ? (g - b) / n : v === g ? 2 + (b - r) / n : 4 + (r - g) / n;
            return [60 * (h < 0 ? h + 6 : h), v && (n / v) * 100, v * 100];
        };

        function NavButton(x,y,s,t){
            let hover=false

            this.run=function(mx, my){
                hover=dist(mx, my, x, y)<s/2
            }

            this.show=function(){
                push()
                translate(x,y)
                stroke(255)
                strokeWeight(s*0.1)
                fill(128,150)
                if(hover){
                    fill(255,255)
                }
                ellipse(0,0,s)
                fill(255)
                if(hover){
                    fill(128,255)
                }
                noStroke()
                textAlign(CENTER,CENTER)
                textSize(s*0.8)
                text(t,0,s*0.1)
                pop()
            }

            this.click=function(){
                // if(hover){
                //     isOpen=!isOpen
                // }
                return hover
            }
        }

        function Breadcrumb(x,y,w,h,content, options){
            const geom={
                x: w*0.1,
                y: h*0.7,
                w: w*0.8,
                s: h*0.35,
                hStep: w*0.8/(options.numChapters)
            }

            let crumbs=[]
            let crumbID=0
            for(let i=0; i<options.numChapters+1; i++){
                if(i!=1){
                crumbs.push(new Crumb(crumbID,x+geom.x+i*geom.hStep,y+geom.y,geom.s, content.chapters[crumbID++].label))
                }
            }

            this.click=function(){
                didClick=-1
                crumbs.forEach(function(crumb,i){
                if(crumb.click()){
                    didClick=i
                }
                })
                return didClick
            }

            this.show=function(currentChapter){
                push()
                translate(x,y)
                stroke(255)
                strokeWeight(geom.s*0.1)
                line(geom.x, geom.y, geom.x+geom.w, geom.y)
                pop()
                crumbs.forEach(function(crumb){
                crumb.show(currentChapter)
                crumb.run(mouseX, mouseY)
                })
            }
        }

        function Crumb(id,x,y,s,name){
            let hover=false

            this.show=function(current){
                fill(128)
                stroke(255)
                strokeWeight(s*0.1)
                if(current>id){
                fill(255)
                }
                if(hover){
                strokeWeight(s*0.5)
                }
                ellipse(x,y,s)
                if(current==id){
                noFill()
                stroke(255)
                strokeWeight(s*0.2)
                ellipse(x,y,s*1.3)
                }
                fill(255,160)
                if(hover){
                fill(255,200)
                }
                if(current==id){
                fill(255)
                }
                noStroke()
                textSize(s*0.5)
                if(hover){
                textSize(s*0.8)
                }
                if(current==id){
                textSize(s*0.6)
                }
                textAlign(CENTER, CENTER)
                textFont(font0)
                text(name,x,y-s*1.2)
            }

            this.click=function(){
                return hover
            }

            this.run=function(mx, my){
                hover=dist(mx, my, x,y)<=s/2
            }
        }

    


        //Chapters
        const ChapterThemes=[
            //0 Introduction
            function (id, x,y,w,h,content,options){
                let a=0
                let rot=0.01
                
        
        
                this.init=function(){
        
                }
        
                function init(){
        
                }
        
                this.click=function(){
        
                }
        
                this.run=function(mx, my){
                    a+=rot
                }
        
                this.show=function(){
                    // fill(255)
                    // ellipse(x+w/2, y+h/2,h/2)
                    // push()
                    // translate(x+w/2,y+h/2)
                    // rotate(a)
                    // stroke(0)
                    // strokeWeight(h*0.02)
                    // // noFill()
                    // fill(255,170)
                    // ellipse(0,-h*0.3,h*0.25)
                    // pop()
                }
            },
            //1 Case for NCACE and IP2
            function (id, x,y,w,h,content,options){
                let a=0
                let rot=0.01
                
        
        
                this.init=function(){
        
                }
        
                function init(){
        
                }
        
                this.click=function(){
        
                }
        
                this.run=function(mx, my){
                    a+=rot
                }
        
                this.show=function(){
                    // fill(255)
                    // ellipse(x+w/2, y+h/2,h/2)
                    // push()
                    // translate(x+w/2,y+h/2)
                    // rotate(a)
                    // stroke(0)
                    // strokeWeight(h*0.02)
                    // // noFill()
                    // fill(255,170)
                    // ellipse(0,-h*0.3,h*0.25)
                    // pop()
                }
            },
            //2 About the Ideas Pool
            function (id, x,y,w,h,content,options){
                let a=0
                let rot=0.01
                
                let viewRenderFunctions={
                    viewRenderWhoAreWe: function (x,y,w,h,data){
                    let cx=x+w/2
                    let cy=y+h/2
                    let cr=h*0.45
                    let myBlobs=[]
                    // console.log(data.blobs)
                    data.blobs.forEach(function(db){
                        let relA=db.count/119
                        let effRad=db.r>0?sqrt(relA/PI)*h*1.5:0 //db.r*h
                        myBlobs.push(new Blob(cx+cos(TWO_PI*db.a)*db.cr*h,
                                        cy+sin(TWO_PI*db.a)*db.cr*h,
                                        effRad,db.name,db.count,colsRGB[db.c]))
                    })
                
                    this.run=function(){
                
                    }
                
                    this.show=function(rel){
                        let rel1=0
                        if(rel>0.6){
                        rel1=(rel-0.6)/0.4
                        fill(0,200*rel1)
                        noStroke()
                        textFont(font0)
                        textAlign(LEFT,CENTER)
                        textSize(height*0.05)
                        text(data.title,x+w*0.1,y+h*0.07)
                        myBlobs.forEach(function(b){
                            b.show(rel, rel1)
                        })
                        }
                    }
                
                    function Blob(x,y,s,t,tc,c){
                
                        this.show=function(rel0,rel){
                        // console.log(c)
                        fill(c[0],c[1],c[2],120*rel)
                        noStroke()
                        ellipse(x,y,s*rel0)
                        fill(0,255*rel)
                        textAlign(CENTER, CENTER)
                        textSize(h*0.05)
                        text(t,x,y)
                        textSize(h*0.07*rel0)
                        text(tc,x,y-h*0.05)
                        }
                    }
                    },
                    viewRenderInterestedIn: function (x,y,w,h,data){
                        let cx=x+w/2
                        let cy=y+h/2
                        let cr=h*0.45
                        let myBlobs=[]
                        // console.log(data.blobs)
                        data.blobs.forEach(function(db){
                        let relA=db.count/119
                        let effRad=db.r>0?sqrt(relA/PI)*h*1.5:0 //db.r*h
                        myBlobs.push(new Blob(cx+cos(TWO_PI*db.a)*db.cr*h,
                                        cy+sin(TWO_PI*db.a)*db.cr*h,
                                        effRad,db.name,db.count,colsRGB[db.c]))
                        })
                
                        this.run=function(){
                
                        }
                
                        this.show=function(rel){
                        let rel1=0
                        if(rel>0.6){
                            rel1=(rel-0.6)/0.4
                            fill(0,200*rel1)
                            noStroke()
                            textFont(font0)
                            textAlign(LEFT,CENTER)
                            textSize(height*0.05)
                            text(data.title,x+w*0.1,y+h*0.07)
                            myBlobs.forEach(function(b){
                            b.show(rel,rel1)
                            })
                        }
                        }
                
                        function Blob(x,y,s,t,tc,c){
                
                        this.show=function(rel0,rel){
                            // console.log(c)
                            fill(c[0],c[1],c[2],120*rel)
                            noStroke()
                            ellipse(x,y,s*rel0)
                            fill(0,255*rel)
                            textAlign(CENTER, CENTER)
                            textFont(font1)
                            textSize(h*0.05)
                            text(t[0],x,y)
                            textSize(h*0.035)*rel0
                            text(t[1],x,y+h*0.04)
                            textSize(h*0.07*rel0)
                            if(tc>0) text(tc,x,y-h*0.05)
                        }
                        }
                
                    this.run=function(){
                
                    }
                    },
                    viewRenderAboutUs: function (x,y,w,h,data){
                        // console.log(data)
        
                        let ents=[]
                        let numEnts=25
                        let bg=colsRGB[2]
                        let fg=colsRGB[4]
                        let bar={x: x+w*0.4, y0: y+h*0.25, y1:y+h*0.75, r0:h*0.07, r1:h*0.3}
        
                        for(let i=0; i<numEnts; i++){
                            ents.push(new Entity(x,y,w,h,w*0.05,data.statements[i%data.statements.length]))
                        }
        
                        this.show=function(rel){
                            let rel1=0
                            if(rel>0.8){
                                rel1=(rel-0.9)/0.2
                                // stroke(bg[0],bg[1],bg[2],200*rel1)
                                // strokeCap(ROUND)
                                // strokeWeight(height*0.1)
                                // line(bar.x,bar.y0,bar.x,bar.y1)
                                push()
                                translate(bar.x,(bar.y0+bar.y1)/2)
                                // rotate(PI/2)
                                textSize(height*0.05)
                                fill(0,200*rel1)
                                noStroke()
                                textAlign(CENTER,CENTER)
                                text(data.label,0,-h*0.4)
                                pop()
                                rel1=(rel-0.9)/0.2
                                ents.forEach(function(e){
                                    e.show(rel1)
                                    e.run()
                                })
                                ents.forEach(function(e){
                                    e.speak(bar,rel1)
                                })
                            }
                            
                        }
                    
                        this.run=function(rel){
                            // let rel1=0
                            // if(rel>0.8){
                            //     rel1=(rel-0.9)/0.2
                            //     ents.forEach(function(e){
                            //         e.show(rel1)
                            //         e.run()
                            //     })
                            //     ents.forEach(function(e){
                            //         e.speak(bar,rel1)
                            //     })
                            // }
                        }
        
                        function Entity(x,y,w,h,s,phrase){
                            // console.log(phrase)
                            let pos=createVector(x+random(w),y+random(h))
                            let speed=random(0.4,0.7)*w/1000
                            let vel=p5.Vector.random2D().mult(speed)
                            let isOn=false
                            let hDist=0
                            let fade=0
                            let phraseDisps=[]
                            phraseDisps=new PhraseDisplay(w*0.3,w*0.2,phrase)
                            // phraseDisps.push(new PhraseDisplay(w*0.3,w*0.2,phrase1))
                            
                            this.run=function(){
                            pos.add(vel)
                            edges()
                            }
                            
                            this.speak=function(bar,rel){
                            let on=false
                            // console.log(bar)
                            if(pos.y>bar.y0-bar.r0 && pos.y<bar.y1+bar.r0){
                                if(pos.x>bar.x-bar.r1 && pos.x<bar.x+bar.r1){
                                on=true
                                hDist=abs(pos.x-bar.x)
                                if(hDist<bar.r0){
                                    fade=1
                                } else {
                                    fade=1-((hDist-bar.r0)/(bar.r1-bar.r0))
                                }
                                }
                            }
                            isOn=on
                            fill(fg[0],fg[1],fg[2],190*rel)
                            // strokeWeight(1+s*0.5*fade)
                            noStroke()
                            ellipse(pos.x, pos.y, s*0.6+s**fade)
                            if(isOn){
                                phraseDisps.show(pos.x,pos.y,fade,rel)
                            }
                            }
                            
                            this.show=function(rel){
                            //   fill(255,255*rel)
                            //   noStroke()
                            //   ellipse(pos.x, pos.y, s)
                            }
                            
                            function edges(){
                            if(pos.x+s/2>x+w) pos.x=x+0+s/2
                            if(pos.x-s/2<x+0) pos.x=x+w-s/2
                            if(pos.y+s/2>y+h) pos.y=y+0+s/2
                            if(pos.y-s/2<y+0) pos.y=y+h-s/2
                            }
                        }
                        
                        function PhraseDisplay(w,h,phrase){
                            let ttbMax=100
                            let ttb=ttbMax
                            let ttlMax=50
                            let ttl=ttlMax
                            let ttdMax=100
                            let ttd=ttdMax
                            let rel=0
                            let ts=20
                            let words=phrase.split(' ')
                            ts=h*1/words.length
                        
                            this.run=function(){
                            }
                        
                            this.show=function(x,y,fade,rel){
                            push()
                            translate(x,y)
                            //   fill(255,fade*255)
                            //   stroke(0,fade*255)
                            fill(0,fade*255)
                            noStroke(0)
                            textAlign(LEFT, TOP)
                            textSize(ts)
                            textFont(font1)
                            text(`“${phrase}”`,0,0,w,h)
                            pop()
                            }
                        }
                    },
                    viewRenderWhyHere: function (x,y,w,h,data){
                        let ents=[]
                        let numEnts=25
                        let bg=colsRGB[6]
                        let fg=colsRGB[1]
                        let bar={x: x+w*0.4, y0: y+h*0.25, y1:y+h*0.75, r0:h*0.07, r1:h*0.3}
        
                        for(let i=0; i<numEnts; i++){
                            ents.push(new Entity(x,y,w,h,w*0.05,data.statements[i%data.statements.length]))
                        }
        
                        this.show=function(rel){
                            let rel1=0
                            if(rel>0.8){
                                rel1=(rel-0.9)/0.2
                                // stroke(bg[0],bg[1],bg[2],200*rel1)
                                // strokeCap(ROUND)
                                // strokeWeight(height*0.1)
                                // line(bar.x,bar.y0,bar.x,bar.y1)
                                push()
                                translate(bar.x,(bar.y0+bar.y1)/2)
                                // rotate(PI/2)
                                textSize(height*0.05)
                                fill(0,200*rel1)
                                noStroke()
                                textAlign(CENTER,CENTER)
                                text(data.label,0,-h*0.4)
                                pop()
                                rel1=(rel-0.9)/0.2
                                ents.forEach(function(e){
                                    e.show(rel1)
                                    e.run()
                                })
                                ents.forEach(function(e){
                                    e.speak(bar,rel1)
                                })
                            }
                            
                        }
                    
                        this.run=function(rel){
                            // let rel1=0
                            // if(rel>0.8){
                            //     rel1=(rel-0.9)/0.2
                            //     ents.forEach(function(e){
                            //         e.show(rel1)
                            //         e.run()
                            //     })
                            //     ents.forEach(function(e){
                            //         e.speak(bar,rel1)
                            //     })
                            // }
                        }
        
                        function Entity(x,y,w,h,s,phrase){
                            // console.log(phrase)
                            let pos=createVector(x+random(w),y+random(h))
                            let speed=random(0.4,0.7)*w/1000
                            let vel=p5.Vector.random2D().mult(speed)
                            let isOn=false
                            let hDist=0
                            let fade=0
                            let phraseDisps=[]
                            phraseDisps=new PhraseDisplay(w*0.3,w*0.2,phrase)
                            // phraseDisps.push(new PhraseDisplay(w*0.3,w*0.2,phrase1))
                            
                            this.run=function(){
                            pos.add(vel)
                            edges()
                            }
                            
                            this.speak=function(bar,rel){
                            let on=false
                            // console.log(bar)
                            if(pos.y>bar.y0-bar.r0 && pos.y<bar.y1+bar.r0){
                                if(pos.x>bar.x-bar.r1 && pos.x<bar.x+bar.r1){
                                on=true
                                hDist=abs(pos.x-bar.x)
                                if(hDist<bar.r0){
                                    fade=1
                                } else {
                                    fade=1-((hDist-bar.r0)/(bar.r1-bar.r0))
                                }
                                }
                            }
                            isOn=on
                            fill(fg[0],fg[1],fg[2],190*rel)
                            // strokeWeight(1+s*0.5*fade)
                            noStroke()
                            ellipse(pos.x, pos.y, s*0.6+s**fade)
                            if(isOn){
                                phraseDisps.show(pos.x,pos.y,fade,rel)
                            }
                            }
                            
                            this.show=function(rel){
                            //   fill(255,255*rel)
                            //   noStroke()
                            //   ellipse(pos.x, pos.y, s)
                            }
                            
                            function edges(){
                            if(pos.x+s/2>x+w) pos.x=x+0+s/2
                            if(pos.x-s/2<x+0) pos.x=x+w-s/2
                            if(pos.y+s/2>y+h) pos.y=y+0+s/2
                            if(pos.y-s/2<y+0) pos.y=y+h-s/2
                            }
                        }
                        
                        function PhraseDisplay(w,h,phrase){
                            let ttbMax=100
                            let ttb=ttbMax
                            let ttlMax=50
                            let ttl=ttlMax
                            let ttdMax=100
                            let ttd=ttdMax
                            let rel=0
                            let ts=20
                            let words=phrase.split(' ')
                            ts=h*0.8/words.length
                        
                            this.run=function(){
                            }
                        
                            this.show=function(x,y,fade,rel){
                            push()
                            translate(x,y)
                            //   fill(255,fade*255)
                            //   stroke(0,fade*255)
                            fill(0,fade*255)
                            noStroke(0)
                            textAlign(LEFT, TOP)
                            textSize(ts)
                            textFont(font1)
                            text(`“${phrase}”`,0,0,w,h)
                            pop()
                            }
                        }
                    }
                }
        
                let n=content.chapterData.questions.length
                
                let viewers=content.chapterData.questions.map(function(question,i){
                    return new Viewer(x+w*0.125, y+(i+0.5)*h/n,
                                    x+w*0.25,y+h*0.1,w*0.65,
                                    h*0.8,0.6*h/n,
                                    question.data,
                                    question.questionViewerFuncName)
                                            // viewRenderFunctions[question.data.questionViewerFuncName])
                })
                let qButtons=content.chapterData.questions.map(function(question,i){
                    
                    return new QButton(x+w*0.125,y+(i+0.5)*h/n,0.6*h/n,
                                    question.question)
                })
                let currentSelected=-1
                
                function QButton(x,y,s,q){
                    let hover=false
                
                    this.run=function(mx, my){
                        hover=dist(mx, my, x, y)<s/2
                    }
                
                    this.show=function(){
                        push()
                        translate(x,y)
                        noStroke()
                        fill(255,150)
                        if(hover){
                            fill(255,255)
                        }
                        ellipse(0,0,s)
                        stroke(255)
                        strokeWeight(s*0.1*(+sin(frameCount*0.05+5*y/h)*0.5+0.5))
                        noFill()
                        // arc(0,0,s,s,PI*0.25,PI*1.75)
                        ellipse(0,0,s)
                        fill(0,150)
                        noStroke()
                        textAlign(CENTER,CENTER)
                        textSize(s*0.25)
                        text(q[0],0,-s*0.1)
                        textSize(s*0.14)
                        text(q[1],0,s*0.1)
                        pop()
                    }
                
                    this.click=function(){
                        // if(hover){
                        //     isOpen=!isOpen
                        // }
                        return hover
                    }
                }
                
                function Viewer(qx,qy,x,y,w,h,s,data,vw){
                    let open=0
                    let isOpening=false
                    let isClosing=false
                    let ex=qx
                    let ey=qy
                    let ew=0, eh=0, er=0
                    let viewRenderer=new viewRenderFunctions[vw](x,y,w,h,data)
                
                    this.open=function(){
                        isOpening=true
                        isClosing=false
                    }
                
                    this.close=function(){
                        isClosing=true
                        isOpening=false
                    }
                
                    this.run=function(){
                        if(isOpening){
                        if(open<0.995){
                            open+=(1-open)/20
                        } else {
                            open=1
                            isOpening=false
                        }
                        }
                        if(isClosing){
                        if(open>0.005){
                            open+=(0-open)/20
                        } else {
                            open=0
                            isClosing=false
                        }
                        }
                        ex=lerp(qx-er/2,x,open)
                        ey=lerp(qy-er/2,y,open)
                        ew=lerp(s,w,open)
                        eh=lerp(s,h,open)
                        er=lerp(s,w*0.1,open)
                        viewRenderer.run(open)
                    }
                
                    this.show=function(){
                        stroke(0,255*open)
                        strokeWeight(s*0.1)
                        fill(255,255*open)
                        rectMode(CORNER)
                        rect(ex,ey,ew,eh,er)
                        viewRenderer.show(open)
                    }
                }
        
                this.init=function(){
        
                }
        
                function init(){
        
                }
        
                this.click=function(){
                    let selected=-1
                    qButtons.forEach(function(qb,i){
                        if(qb.click()){
                            if(currentSelected==i){
                                selected=-1
                            } else {
                                selected=i
                            }
                        }
                    })
                    currentSelected=selected
                }
            
                this.run=function(mx, my){
                    a+=rot
                    qButtons.forEach(function(qb){
                        qb.run(mx, my)
                    })
                    viewers.forEach(function(v){
                        v.run()
                    })
                    viewers.forEach(function(v,i){
                        if(currentSelected==i){
                            v.open()
                        } else {
                            v.close()
                        }
                    })
                }
            
                this.show=function(){
                    push()
                    translate(x+w*0.05,y+0.5*h)
                    rotate(-PI/2)
                    textAlign(CENTER, CENTER)
                    noStroke()
                    fill(255,170)
                    textFont(font0)
                    textSize(h*0.06)
                    text("click an aspect to explore",0,0)
                    pop()
        
                    qButtons.forEach(function(qb){
                        qb.show()
                    })
                    viewers.forEach(function(v){
                        v.show()
                    })
                }
            },
            //3 what happened at IP2
            function (id, x,y,w,h,content,options){
                let a=0
                let rot=0.01
                
                let viewRenderFunctions={
                
                    viewRenderQ1: function (x,y,w,h,data){
                    let dq=new DriftQuotes(x,y,w,h, 5, data)
                    let cBlob=colsRGB[2]
                    
                    this.run=function(rel){
                        
                    }
        
                    this.show=function(rel){
                        let rel1=0
                        if(rel>0.8){
                        rel1=(rel-0.9)/0.2
                        dq.run(rel, rel1)
                        }
                    }
        
                    function DriftQuotes(x,y,w,h,n,data){
                        let quotes=[]
                        let currentQuote=0
                        // for(let i=0; i<n;i++){
                        //   quotes.push(new QuoteViewer(x,y,w,h,w*0.23,h*0.23))
                        // }
                        
                        this.run=function(rel,rel1){
                        push()
                        translate(x+w/2, y+h/2)
                        textFont(font0)
                        textSize(h*0.1)
                        fill(0,200*rel1)
                        noStroke()
                        textAlign(CENTER,CENTER)
                        text(data.label,0,-h*0.4)
                        pop()
                        fill(0,200*rel1)
                        noStroke()
                        textFont(font0)
                        textAlign(LEFT,CENTER)
                        textSize(40)
                        text(data.title,x+w*0.1,y+h*0.07)
                        if(quotes.length<n && random(100)<1.33){
                            let px=random(0.1,0.8)*w
                            let py=random(0.4,0.75)*h
                            quotes.push(new QuoteViewer(px, py,w,h,w*0.25,w*0.2,data.statements[currentQuote]))
                            currentQuote=(currentQuote+1)%data.statements.length
                        }
                        // console.log(quotes.length)
                        for(let i=quotes.length-1; i>=0; i--){
                            if(quotes[i].run()){
                            quotes[i].show()
                            } else {
                            quotes.splice(i,1)
                            }
                        }
                        
                        }
                    }
        
                    function QuoteViewer(px, py,w,h,tw,th,quote){
                        // let px=random(0.4,0.6)*w
                        // let py=random(0.4,0.6)*h
                        let driftX=random(-0.5,0.5)*w/1000
                        let driftY=-0.05*h/700//random(0.5,1)*(random(10)<5?-1:1)
                        let driftMult=1.02 
                        let active=0
                        let activating=true
                        let deactivating=false
                        let waitMax=50
                        let wait=0
                        let rel=0
                        let twNom=tw*2
                        let tsNom=th
                        textFont(font1)
                        textSize(tsNom)
                        let tew=textWidth(quote)
                        let ts=tsNom* twNom/tew
                        
                        let triggerH=w*0.7
                        let prox=w*0.05
                        
                        
                        this.run=function(){
                        // if(!activating && abs(px-triggerH)<prox){
                        //   activating=true
                        // }
                        if(wait>0){
                            wait--
                        }
                        px=(px+w+driftX)%w
                        py=(py+driftY)
                        driftY*=driftMult
                        if(activating){
                            deactivating=false
                            if(active<0.99){
                            active+=(1-active)/30
                            rel+=(1-rel)/20
                            } else {
                            wait=waitMax
                            deactivating=true
                            activating=false
                            }
                            
                        }
                        if(deactivating && wait==0){
                            driftY*=driftMult
                            if(active>0.01){
                            active+=(0-active)/10
                            } else {
                            return false
                            }
                            
                        }
                        return true
                        }
                        
                        this.show=function(){
                        noStroke()
                        fill(cBlob[0],cBlob[1],cBlob[2],180*active)
                        ellipse(x+px,y+py,th*rel)
                        // rectMode(CORNER)
                        // rect(px,py,tw,th,tw*0.1)
                        textFont(font1)
                        textSize(ts)
                        fill(0,active*255)
                        noStroke()
                        text(quote,x+px,y+py-th*0.3,tw,th)
                        }
                    }
        
                    },
                    viewRenderQ2: function (x,y,w,h,data){
                    let dq=new DriftQuotes(x,y,w,h, 5, data)
                    let cBlob=colsRGB[2]
                    
                    this.run=function(rel){
                        
                    }
        
                    this.show=function(rel){
                        let rel1=0
                        if(rel>0.8){
                        rel1=(rel-0.9)/0.2
                        dq.run(rel, rel1)
                        }
                    }
        
                    function DriftQuotes(x,y,w,h,n,data){
                        let quotes=[]
                        let currentQuote=0
                        // for(let i=0; i<n;i++){
                        //   quotes.push(new QuoteViewer(x,y,w,h,w*0.23,h*0.23))
                        // }
                        
                        this.run=function(rel,rel1){
                        push()
                        translate(x+w/2, y+h/2)
                        textFont(font0)
                        textSize(h*0.1)
                        fill(0,200*rel1)
                        noStroke()
                        textAlign(CENTER,CENTER)
                        text(data.label,0,-h*0.4)
                        pop()
                        fill(0,200*rel1)
                        noStroke()
                        textFont(font0)
                        textAlign(LEFT,CENTER)
                        textSize(40)
                        text(data.title,x+w*0.1,y+h*0.07)
                        if(quotes.length<n && random(100)<1.33){
                            let px=random(0.1,0.8)*w
                            let py=random(0.4,0.75)*h
                            quotes.push(new QuoteViewer(px, py,w,h,w*0.25,w*0.15,data.statements[currentQuote]))
                            currentQuote=(currentQuote+1)%data.statements.length
                        }
                        // console.log(quotes.length)
                        for(let i=quotes.length-1; i>=0; i--){
                            if(quotes[i].run()){
                            quotes[i].show()
                            } else {
                            quotes.splice(i,1)
                            }
                        }
                        
                        }
                    }
        
                    function QuoteViewer(px, py,w,h,tw,th,quote){
                        // let px=random(0.4,0.6)*w
                        // let py=random(0.4,0.6)*h
                        // let driftX=random(-0.5,0.5)
                        // let driftY=-0.05//random(0.5,1)*(random(10)<5?-1:1)
                        let driftX=random(-0.5,0.5)*w/1000
                        let driftY=-0.05*h/700//random(0.5,1)*(random(10)<5?-1:1)
                        let driftMult=1.02 
                        let active=0
                        let activating=true
                        let deactivating=false
                        let waitMax=50
                        let wait=0
                        let rel=0
                        let twNom=tw*1.3
                        let tsNom=th
                        textFont(font1)
                        textSize(tsNom)
                        let tew=textWidth(quote)
                        let ts=tsNom* twNom/tew
                        
                        let triggerH=w*0.7
                        let prox=w*0.05
                        
                        
                        this.run=function(){
                        // if(!activating && abs(px-triggerH)<prox){
                        //   activating=true
                        // }
                        if(wait>0){
                            wait--
                        }
                        px=(px+w+driftX)%w
                        py=(py+driftY)
                        driftY*=driftMult
                        if(activating){
                            deactivating=false
                            if(active<0.99){
                            active+=(1-active)/30
                            rel+=(1-rel)/20
                            } else {
                            wait=waitMax
                            deactivating=true
                            activating=false
                            }
                            
                        }
                        if(deactivating && wait==0){
                            driftY*=driftMult
                            if(active>0.01){
                            active+=(0-active)/10
                            } else {
                            return false
                            }
                            
                        }
                        return true
                        }
                        
                        this.show=function(){
                        noStroke()
                        fill(cBlob[0],cBlob[1],cBlob[2],180*active)
                        ellipse(x+px,y+py,th*rel)
                        // rectMode(CORNER)
                        // rect(px,py,tw,th,tw*0.1)
                        textFont(font1)
                        textSize(ts)
                        fill(0,active*255)
                        noStroke()
                        text(quote,x+px,y+py-th*0.3,tw,th)
                        }
                    }
                    }  
                }
        
                let n=content.chapterData.questions.length
                
                let viewers=content.chapterData.questions.map(function(question,i){
                    return new Viewer(x+w*0.125, y+(i+0.5)*h/n,
                                    x+w*0.25,y+h*0.1,w*0.65,
                                    h*0.8,0.6*h/n,
                                    question.data,
                                    question.questionViewerFuncName)
                                            // viewRenderFunctions[question.data.questionViewerFuncName])
                })
                let qButtons=content.chapterData.questions.map(function(question,i){
                    
                    return new QButton(x+w*0.125,y+(i+0.5)*h/n,0.6*h/n,
                                    question.question)
                })
                let currentSelected=-1
                
                function QButton(x,y,s,q){
                    let hover=false
                
                    this.run=function(mx, my){
                        hover=dist(mx, my, x, y)<s*0.75//s/2
                    }
                
                    this.show=function(){
                        push()
                        translate(x,y)
                        noStroke()
                        fill(255,150)
                        stroke(255)
                        strokeWeight(s*0.1*(+sin(frameCount*0.05+5*y/h)*0.5+0.5))
                        if(hover){
                            fill(255,255)
                        }
                        rectMode(CENTER)
                        rect(0,0,s*2,s,s*0.5)
                        // ellipse(0,0,s)
                        // stroke(0)
                        // strokeWeight(s*0.1)
                        // noFill()
                        // arc(0,0,s,s,PI*0.25,PI*1.75)
                        
                        // ellipse(0,0,s)
                        fill(0,150)
                        noStroke()
                        textAlign(CENTER,CENTER)
                        textSize(s*0.25)
                        text(q[0],0,-s*0.1)
                        textSize(s*0.14)
                        text(q[1],0,s*0.1)
                        pop()
                    }
                
                    this.click=function(){
                        // if(hover){
                        //     isOpen=!isOpen
                        // }
                        return hover
                    }
                }
                
                function Viewer(qx,qy,x,y,w,h,s,data,vw){
                    let open=0
                    let isOpening=false
                    let isClosing=false
                    let ex=qx
                    let ey=qy
                    let ew=0, eh=0, er=0
                    let viewRenderer=new viewRenderFunctions[vw](x,y,w,h,data)
                
                    this.open=function(){
                        isOpening=true
                        isClosing=false
                    }
                
                    this.close=function(){
                        isClosing=true
                        isOpening=false
                    }
                
                    this.run=function(){
                        if(isOpening){
                        if(open<0.995){
                            open+=(1-open)/20
                        } else {
                            open=1
                            isOpening=false
                        }
                        }
                        if(isClosing){
                        if(open>0.005){
                            open+=(0-open)/20
                        } else {
                            open=0
                            isClosing=false
                        }
                        }
                        ex=lerp(qx-er/2,x,open)
                        ey=lerp(qy-er/2,y,open)
                        ew=lerp(s,w,open)
                        eh=lerp(s,h,open)
                        er=lerp(s,w*0.1,open)
                        viewRenderer.run(open)
                    }
                
                    this.show=function(){
                        stroke(0,255*open)
                        strokeWeight(s*0.1)
                        fill(255,255*open)
                        rectMode(CORNER)
                        rect(ex,ey,ew,eh,er)
                        viewRenderer.show(open)
                    }
                }
        
                this.init=function(){
        
                }
        
                function init(){
        
                }
        
                this.click=function(){
                    let selected=-1
                    qButtons.forEach(function(qb,i){
                        if(qb.click()){
                            if(currentSelected==i){
                                selected=-1
                            } else {
                                selected=i
                            }
                        }
                    })
                    currentSelected=selected
                }
            
                this.run=function(mx, my){
                    a+=rot
                    qButtons.forEach(function(qb){
                        qb.run(mx, my)
                    })
                    viewers.forEach(function(v){
                        v.run()
                    })
                    viewers.forEach(function(v,i){
                        if(currentSelected==i){
                            v.open()
                        } else {
                            v.close()
                        }
                    })
                }
            
                this.show=function(){
                    push()
                    translate(x+w*0.05,y+0.5*h)
                    rotate(-PI/2)
                    textAlign(CENTER, CENTER)
                    noStroke()
                    fill(255,170)
                    textFont(font0)
                    textSize(h*0.06)
                    text("click an aspect to explore",0,0)
                    pop()
        
                    qButtons.forEach(function(qb){
                        qb.show()
                    })
                    viewers.forEach(function(v){
                        v.show()
                    })
                }
            },
            //4 Microcommisions 1
            function (id, x,y,w,h,content,options){
                let a=0
                let rot=0.01
        
                this.init=function(){
        
                }
        
                function init(){
        
                }
        
                this.click=function(){
        
                }
            
                this.run=function(){
                    a+=rot
                }
            
                this.show=function(){
                    // push()
                    // translate(x+w/2,y+h/2)
                    // rotate(a)
                    // stroke(0)
                    // strokeWeight(h*0.02)
                    // // noFill()
                    // fill(255,170)
                    // push()
                    // translate(0,-h*0.3)
                    // rotate(-a*2)
                    // rectMode(CENTER)
                    // rect(0,0,h*0.25,h*0.25)
                    // pop()
                    // pop()
                }
            },
            //5 Microcommisions 2
            function (id, x,y,w,h,content,options){
                let a=0
                let rot=0.01
                let data=content.chapterData
                //["I want to break free","the colour of love","the bunny spoke","you want this badly","and another thing","they were so hopeful","if only they could tell us"]
                let wordFlowers=[]
                let flowers=[]
                let positions=content.positions
                let n=positions.length
                for(let i=0; i<n; i++){
                wordFlowers.push(new WordFlower(x+positions[i].x*w,y+positions[i].y*h,w*0.075,7,data[i]))
                let flower=new Flower(w*0.135, 7, x+positions[i].x*w,y+positions[i].y*h)
                flower.open()
                flowers.push(flower)
                }
                this.init=function(){
                init()
                }
        
                function init(){
                
                }
        
                this.click=function(){
                wordFlowers.forEach(function(wf){
                    wf.click()
                })
                }
            
                this.run=function(mx, my){
                    a+=rot
                    flowers.forEach(function(f){
                    f.runStatic()
                    })
                    wordFlowers.forEach(function(wf){
                    wf.run(mx, my)
                    })
                
                }
            
                this.show=function(){
                    // push()
                    // translate(x+w/2,y+h/2)
                    // rotate(a)
                    // stroke(0)
                    // strokeWeight(h*0.02)
                    // // noFill()
                    // fill(255,170)
                    // push()
                    // translate(0,-h*0.3)
                    // rotate(-a)
                    // rectMode(CENTER)
                    // rect(0,0,h*0.25,h*0.25,(sin(a*2)*0.5+0.55)*h*0.1)
                    // pop()
                    // pop()
                    
                }
        
                
        
                function WordFlower(x,y,s,n,data){
                let phrases=data.phrases
                let petals=[]
                let hover=false
                let aTarget=0
                let aStep=TWO_PI/n
                let rotCount=0
                let a=0
                console.log("hello flowers")
                
                for(let i=0; i<n; i++){
                    petals.push(new Petal(x,y,s*1.2,n,i*aStep,phrases[i]))
                }
                
                this.run=function(mx,my){
                    hover=dist(mx,my,x,y)<s*1.5
                    push()
                    translate(x,y)
                    push()
                    rotate(a)
                    // if(hover){
                    //   fill(255,150)
                    //   noStroke()
                    //   ellipse(0,0,s*3)
                    // }
                    petals.forEach(function(p){
                    p.show(hover)
                    p.run(a)
                    })
                    pop()
                    textFont(font1)
                    textAlign(CENTER, CENTER)
                    fill(colsRGB[0][0],colsRGB[0][1],colsRGB[0][2])
                    fill(255)
                    stroke(0)
                    // stroke(colsRGB[1][0],colsRGB[1][1],colsRGB[1][1])
                    strokeWeight(s*0.01)
                    // textSize(s*0.5)
                    // text(data.projectNum,0,0)
                    textSize(s*0.2)
                    text(data.name,0,-s*0.75)
                    pop()
                    a+=(aTarget-a)/12
                }
                
                this.click=function(){
                    if(hover){
                    this.advance()
                    }
                }
                
                this.advance=function(){
                    rotCount++
                    aTarget=rotCount*aStep
                }
                }
                
                function Petal(x,y,s,n,a,phrase){
                let relPre=0
                let relPost=0
                let rel=0
                let twNom=s*2
                let tsNom=s
                textSize(tsNom)
                let tw=textWidth(phrase)
                let ts=tsNom* twNom/tw
                
                this.run=function(aBase){
                    // ea=aBase
                    relPre=TWO_PI-(aBase+a)%TWO_PI
                    relPost=(aBase+a)%TWO_PI
                    rel=2*(max(relPre,relPost)/TWO_PI) -1
                }
                
                
                
                this.show=function(hover){
                    push()
                    rotate(a)
                    translate(s/2,0)
                    let rel2=rel>0.9?(rel-0.9)/0.1:0
                    if(rel>0.9 && hover){
                    scale(1+0.9*rel2)
                    } else {
                    scale(0.8)
                    }
                    translate(-s*0.05,-s*0.2)
                    
                    fill(255,100*hover+150*rel2*hover)
                    noStroke()
                    rectMode(CORNER)
                    rect(0,0,s,s*0.5,s*0.2)
                    textFont(font1)
                    textSize(ts*1.1)
                    textAlign(LEFT, CENTER)
                    fill(0,rel*255*hover)
                    noStroke()
                    text(phrase,0+s*0.05,s*0.05,s*0.9,s*0.4)
                    pop()
                }
                }
            },
            //6 Epilogue
            function (id, x,y,w,h,content,options){
                let a=0
                let rot=0.01
        
                this.init=function(){
        
                }
        
                function init(){
        
                }
        
                this.click=function(){
        
                }
            
                this.run=function(){
                    a+=rot
                }
            
                this.show=function(){
                    // push()
                    // translate(x+w/2,y+h/2)
                    // rotate(a)
                    // stroke(0)
                    // strokeWeight(h*0.02)
                    // // noFill()
                    // fill(255,170)
                    // push()
                    // translate(0,-h*0.3)
                    // rotate(-a)
                    // rectMode(CENTER)
                    // rect(0,0,h*0.25,h*0.25,(sin(a*2)*0.5+0.55)*h*0.1)
                    // pop()
                    // pop()
                }
            }
        ]
        
        function Chapter(id,x,y,w,h,content,options){
            let isOpening=true
            let open=0
            let isClosing=false
            let closed=0
            let rel=0
            let ttt=100
            let hover=false
            this.active=true
            // let theme=new ChapterThemes[content.themeID](id,x+w*0.1,y+h*0.1,w*0.8,h*0.8,content,options)
            let theme;//=new ChapterThemes[id](id,x+w*0.1,y+h*0.1,w*0.8,h*0.8,content,options)
            let bg0=colsRGB[3]
            let bg0c=color(bg0[0],bg0[1],bg0[2])
            let bg1=colsRGB[0]
            let bg1c=color(bg1[0],bg1[1],bg1[2])
            let bgc=color(0,0,0)
            let bg=bg1//[0,0,0]
        
            this.init=function(){
                isOpening=true
                open=0
                isClosing=false
                closed=0
                rel=0
                this.active=true
                // theme=new ChapterThemes[content.themeID](id,x+w*0.1,y+h*0.1,w*0.8,h*0.8,content,options)
                theme=new ChapterThemes[id](id,x+w*0,y+h*0.2,w*1,h*0.8,content,options)
            }
        
            this.run=function(mx, my){
                hover=mx>x && mx<x+w && my>y && my<y+h
                if(isOpening){
                    if(open<1){
                        open+=1/ttt
                    } else {
                        open=1
                        isOpening=false
                    }
                }
                if(isClosing){
                    if(closed<1){
                        closed+=1/ttt
                    } else {
                        closed=1
                        isClosing=false
                        this.active=false
                    }
                }
                rel=open-closed
                // bgc=lerpColor(bg0c,bg1c,rel)
                // bg=[red(bgc),green(bgc),blue(bgc)]
                theme.run(mx,my)
            }
        
            this.click=function(){
                theme.click()
            }
        
            this.startClosing=function(){
                isClosing=true
                isOpening=false
                closed=1-open
            }
        
        
            this.showBack=function(){
                fill(bg[0],bg[1],bg[2])
                noStroke()
                rectMode(CORNER)
                rect(x,y,w,h)
                fill(255,255*rel)
                noStroke()
                textFont(font0)
                textAlign(LEFT,CENTER)
                textSize(h*0.1)
                text(content.name,x+w*0.1,y+h*0.125)
                textSize(h*0.05)
                text(content.subname,x+w*0.1,y+h*0.2)
            }
        
            this.showFront=function(){
                theme.show(rel)
                fill(bg0[0],bg0[1],bg0[2],(1-rel)*255)
                noStroke()
                rectMode(CORNER)
                rect(x,y,w,h)
            }
        }
        
        
        //Garden and Seeds
        function Garden(x,y,w,h,content, options){
            let numStates=options.numChapters
            let stateDidChange=false
            /*states
            0 - Welcome - Flowerfield
            1 - Case for NCACE - seedfield - separate
            2 - Ideas Pool purpose - seedfield - meeting
            3 - Ideas Pool outcomes - seedsGerminate
            4 - Microcommisions 1 - Flowersgrow
            5 - Microcommisions 2 - separate flowers
            6 - outcomes and reflections - Flowerfield
            */
            let state=-1
            let flowers=new Flowers(x,y,w,h,3,5)
            let seedField=new SeedField(x,y,w,h,50)
            let seedsGerminate=new SeedsGerminate(x,y,w,h,50)
            let storyText=null
            let flowerField=new FlowerField(x,y,w,h,15)
            let staticFlowers=new StaticFlowers(x,y,w,h,content.chapters[5].positions)
        
            this.setState=function(ns){
                state=ns
                // console.log(content.chapters[state])
                if(content.chapters[state].chapterText.length!=0){
                storyText=new StoryText(x,y,w,h,content.chapters[state].chapterText)
                } else {
                storyText=null
                }
                stateDidChange=true
            }
        
            this.run=function(){
                if(stateDidChange){
                //handle stateChange
                // elements.forEach(function(el){
                //     el.run()
                //     el.setTarget(h-h*state*0.8/numStates)
                // })
                if(state==0){
                    flowerField.init()
                } else if(state==1){
                    seedField.init()
                } else if(state==2){
                    if(!seedField.wasInitialised){
                        seedField.init()
                    }
                    seedField.setBehaviour(false, true)
                } else if(state==3){
                    seedsGerminate.init()
                } else if(state==4){
                    flowers.init()
                } else if(state==5){
                    staticFlowers.init()
                } else if(state==6){
                    flowerField.init()
                }
                    stateDidChange=false
                }
            }
        
            let elements=[]
            let numElements=30
        
            for(let i=0; i<numElements; i++){
                elements.push(new Element(x+random(0.1,0.9)*w,y+h*0.8,h*0.05))
            }
        
            this.runner=function(){
                // elements.forEach(function(el){
                //     el.run()
                //     if(state==0) el.show()
                // })
                if(state==0){
                flowerField.run()
                } else if(state==1 || state==2){
                seedField.run()
                } else if(state==3){
                seedsGerminate.run()
                } else if(state==4){
                flowers.run()
                } else if(state==5){
                // staticFlowers.run()
                } else if(state==6){
                flowerField.run()
                }
                if(storyText!=null){
                    storyText.run()
                }
            }
        
            function Element(x,y,s){
                let ex=x
                let ey=y
                let rot=random(-PI/50,PI/50);
                let a=random(TWO_PI)
                let disp=random(0.01,0.1)*s*10
                let ease=random(60,150)
                let col=random(colsRGB)
        
                this.setTarget=function(ty){
                    y=ty
                }
        
                this.run=function(){
                    ey+=(y-ey)/ease
                    a+=rot
                }
        
                this.show=function(){
                    push()
                    translate(x,ey)
                    rotate(a)
                    // fill(255,150)
                    fill(col[0],col[1],col[2],150)
                    noStroke()
                    ellipse(0,disp,s)
                    pop()
                }
            }
        }
        
        function StoryText(x,y,w,h,phrases){
            let currentText=null
            let currentPhrase=0
            let bg=colsRGB[0]
        
            this.run=function(){
            if(currentText==null){
                currentText=new PhraseDisplay(
                    x+w*0.7,y+h*0.25+(currentPhrase+0.5)*(h*0.7)/(phrases.length),
                    w*0.4,h*0.25, 
                    phrases[currentPhrase]
                    )
        
                //(x+w/2+cos(frameCount*0.003)*w*0.25,
                //   y+h/2+sin(frameCount*0.003)*h*0.25,
                                            
                currentPhrase=(currentPhrase+1)%phrases.length
            } else {
                if(currentText.run()){
                currentText.show()
                } else {
                currentText=null
                }
            }
            }
        
            function PhraseDisplay(x,y,w,h,phrase){
            let ttbMax=100
            let ttb=ttbMax
            let ttlMax=120
            let ttl=ttlMax
            let ttdMax=60
            let ttd=ttdMax
            let rel=0
            let ts=20
            let words=phrase.split(' ')
            ts=h*1.3/words.length
            
            this.run=function(){
                if(ttb>0){
                ttb--
                } else {
                if(ttl>0){
                    ttl--
                } else {
                    if(ttd>0){
                    ttd--
                    }
                }
                }
                rel=(1-ttb)/ttbMax-(1-ttd)/ttdMax
                return ttd>0
            }
            
            this.show=function(){
                push()
                translate(x,y)
                fill(bg[0],bg[1],bg[2],rel*220)
                noStroke()
                rectMode(CENTER)
                rect(0,0,w,h,h*0.1)
                fill(255,rel*255)
                stroke(0,rel*255)
                // rect(x,y,w,h)
                fill(255,rel*255)
                noStroke(0)
                textAlign(CENTER, CENTER)
                textSize(ts)
                textFont(font1)
                text(phrase,0,0,w,h)
                pop()
            }
            }
        }

        function SeedsGerminate(x,y,w,h,n){
            let seeds=[]
            this.wasInitialised=false
        
            this.init=function(){
            this.wasInitialised=true
            seeds=[]
        }
            
            this.run=function(){
            push()
            translate(x,y)
            if(seeds.length<n && random(100)<3){
                seeds.push(new SeedPlant(random(0.1,0.9)*w, random(0.1,0.9)*h, w*0.025))
            }
            for(let i=seeds.length-1; i>=0; i--){
                if(seeds[i].run()){
                seeds[i].show()
                } else {
                seeds.splice(i,1)
                }
            }
            pop()
            // console.log(seeds.length)
            }
        }
        
        function SeedPlant(x,y,s){
            let ttbMax=50
            let ttb=ttbMax
            let ttlMax=200
            let ttl=ttlMax
            let ttl2=ttlMax
            let ttdMax=100
            let ttd=ttdMax
            let rel=0, rel1=0, rel2=0, reld=0
            let a=0
            let rot=random(PI/100,PI/200)*(random(10)<5?-1:1)
            let cs=colsRGB[7]
            let cs1=colsRGB[1]
            let cs2=colsRGB[4]
            let cGrow=colsRGB[2]
            
            this.run=function(){
            if(ttb>0){
                ttb--
            } else {
                if(ttl>0){
                ttl--
                } else {
                if(ttl2>0){
                    ttl2--
                } else {
                    if(ttd>0){
                    ttd--
                    }
                }
                }
            }
            rel=constrain((1-ttb/ttbMax)-(1-ttd/ttdMax),0,1)
            rel1=ttl/ttlMax
            rel2=(1-ttl2/ttlMax)-(1-ttd/ttdMax)
            reld=ttd/ttdMax
            a+=rot
            return ttd>0
            }
            
            this.show=function(){
            fill(0,255,0)
            stroke(0)
            noFill()
            // ellipse(x,y,100)
            noStroke()
            push()
            translate(x,y)
            rotate(a)
            fill(cGrow[0],cGrow[1],cGrow[2],rel2*200)
            ellipse(0,0,s*2*rel+rel2*s*2)
            fill(cs[0],cs[1],cs[2])
            ellipse(0,0,s*2*rel)
            fill(255)
            ellipse(-s*0.5*rel1*rel,0,s*rel)
            ellipse(s*0.5*rel1*rel,0,s*0.9*rel)
            fill(cs1[0],cs1[1],cs1[2],180)
            ellipse(-s*0.5*rel1*rel,0,s*rel)
            fill(cs2[0],cs2[1],cs2[2],180)
            ellipse(s*0.5*rel1*rel,0,s*0.9*rel)
            pop()
            }
        }
        
        function SeedField(x,y,w,h,n){
            let field//=new Field(x,y,w,h,n)
            this.wasInitialised=false
        
            this.init=function(){
                this.wasInitialised=true
                field=new Field(x,y,w,h,n)
            }
        
            this.setBehaviour=function(separate, meet){
                field.setBehaviour(separate, meet)
            }
        
            this.run=function(){
                field.run()
            }
        }
        
        function Field(x,y,w,h,n){
            let airSeeds=[]
            let numSeeds=n
            for(let i=0; i<numSeeds; i++){
            let type=floor(random(2))
            airSeeds.push(new AirSeed(i,x,y,w,h,type,w*0.02))
            }
        
            this.setBehaviour=function(separate, meet){
            airSeeds.forEach(function(as){
                as.setBehaviour(separate, meet)
                })
            }
            
            this.run=function(){
            airSeeds.forEach(function(as){
                as.attract(airSeeds)
                as.run()
                as.showMeet()
            })
            airSeeds.forEach(function(as){
                as.show()
                })
            }
        }
        
        function AirSeed(id,ox,oy,w,h,type,s){
            this.id=id
            this.type=type
            let x=ox+random(-0.1,0.1)*w+((type==0)?w*0.2:w*0.8)
            let y=oy+random(0.1,0.3)*h
            this.pos=createVector(x,y)
            let maxVel=w/1000
            let vel=p5.Vector.random2D().mult(maxVel/2)
            let strength=0.03
            let attractStrength=0.2
            let repelStrength=0.01
            let slow=0.997
            
            let near=false
            let acc=createVector(0,0)
            let toOther=createVector(0,0)
            let fromOther=createVector(0,0)
            let nOff=random(99)
            let es=0
            let esEase=random(30,100)
            let relProx=0
            let partner=null
            let ct0=colsRGB[1]
            let ct1=colsRGB[4]
            let cProx=colsRGB[7]
            
            let separateTypes=true
            let canMeet=false
            let prox=s*2
            let separateStrength=0.015
            
            this.link=function(other){
            let diff=p5.Vector.sub(other.pos.this.pos)
            let dm=prox-diff.mag()
            
            }
        
            this.setBehaviour=function(separate, meet){
            separateTypes=separate
            canMeet=meet
            }
            
            this.attract=function(others){
            relProx=0
            partner=null
            near=false
            others.forEach(o=>{
                if(o.id!=this.id){
                d=o.pos.dist(this.pos)
                
                if(d<prox){
                    relProx=1-d/prox
                    partner=o
                    if(this.type!=o.type){
                    near=true
                    toOther=p5.Vector.sub(o.pos,this.pos).mult(attractStrength*(1-d/prox))
                    acc.add(toOther)
                    }
                    fromOther=p5.Vector.sub(this.pos, o.pos).mult(attractStrength*(1-d/prox))
                    acc.add(fromOther)
                }
                }
            })
            }
            
            this.run=function(){
            es+=(s-es)/esEase
            let na=noise(nOff+this.pos.x*w*0.0005, this.pos.y*w*0.0001+frameCount/100)
            acc.add(p5.Vector.fromAngle(na*PI*8).mult(strength))
            let vd=h*0.8-this.pos.y
            acc.y+=0.003*(vd)/h
            if(separateTypes){
                if(type==0){
                hd=((ox+w*0.3)-this.pos.x)/w
                acc.x+=separateStrength*hd
                } else if(type==1){
                hd=((ox+w*0.7)-this.pos.x)/w
                acc.x+=separateStrength*hd
                }
            } else {
                hd=((ox+w*0.5)-this.pos.x)/w
                acc.x+=separateStrength*hd
                vd=((oy+h*0.5)-this.pos.y)/h
                acc.y+=separateStrength*(vd)
            }
            
            vel.add(acc)
            vel.mult(slow)
            vel.limit(maxVel)
            this.pos.add(vel)
            edges(this.pos)
            acc.mult(0)
            }
            
            let edgeMargin=-es*0.5
            function edges(pos){
            if(pos.x<ox-edgeMargin) pos.x=ox+w+edgeMargin
            if(pos.x>ox+w+edgeMargin) pos.x=ox-edgeMargin
            if(pos.y<oy-edgeMargin) pos.y=oy+h+edgeMargin
            if(pos.y>oy+h+edgeMargin) pos.y=oy-edgeMargin
            // pos.x=(pos.x+w)%w
            // pos.y=(pos.y+h)%h
            }
        
            this.showMeet=function(){
            if(near && relProx>0.2){
                if(canMeet){
                    strokeWeight(es*2)
                    stroke(cProx[0],cProx[1],cProx[2],relProx*255)
                    strokeCap(ROUND)
                    if(abs(this.pos.x-partner.pos.x)<w*0.5 && 
                    abs(this.pos.y-partner.pos.y)<h*0.5){
                        line(this.pos.x,this.pos.y,partner.pos.x, partner.pos.y)
                    }
                } else {
                    noStroke()
                    fill(cProx[0],cProx[1],cProx[2],relProx*255)
                    // strokeWeight(es*0.2)
                    ellipse(this.pos.x,this.pos.y,es*2)
                }
            }
            }
            
            this.show=function(){
            noStroke()
            if(this.type==0){
                fill(ct0[0],ct0[1],ct0[2])
            } else if(this.type==1){
                fill(ct1[0],ct1[1],ct1[2])
            }
            ellipse(this.pos.x, this.pos.y,es)
            }
        }

        //Flowers
        function Flowers(x,y,w,h,nr,ns){
            let stems=[]
            let numStemsPerRow=ns
            let numRows=nr
        
            let vStep=h*0.1/numRows
            let hStep=w*0.8/numStemsPerRow
        
            this.init=function(){
            stems=[]
            // let vStep=h*0.2/numRows
            // let hStep=w*0.8/numStemsPerRow
            for(let j=0; j<numRows; j++){
                for(let i=0; i<numStemsPerRow; i++){
                stems.push(new Stem(
                    x+w*0.1+(i+random(1))*hStep,
                    y+h*0.85+(j)*vStep,
                    w,
                    h,
                    h*0.1,
                    h*random(0.35,0.5)
                ))
                }
            }
            }
        
            this.run=function(){
            // stroke(255,0,0)
            // fill(0,100)
            // rect(x,y,w,h)
                stems.forEach(function(stem){
                    stem.show()
                    stem.run()
                })
            }
        }
        
        function StaticFlowers(x,y,w,h,positions){
            let flowers=[]
            let n=positions.length
            
            this.init=function(){
                flowers=[]
                for(let i=0; i<n; i++){
                let flower=new Flower(w*0.15,4,x+positions[i].x*w, y+positions[i].y*h)
                flower.open()
                flowers.push(flower)
                }
            }
            
            this.run=function(){
                flowers.forEach(function(flower){
                // flower.show()
                flower.runStatic()
                })
            }
        }
        
        function Stem(x,y,w,h,s,mlnom){
            let ml=random(0.8,1.1)*mlnom
            let growth=0
            let bend=ml*0.4
            let grow=1/random(250,400)
            let noiseRel=1/w //width/300000
            let nOff=random(99)
            let th=3
            let cHue=colsHSB[7][0];//120+random(-20,20)
            let cSat=colsHSB[7][1];//random(60,80)
            let cBri=colsHSB[7][2];//random(60,70)
            let delayMax=random(10,650)
            let delay=delayMax
            
            let leaves=new Cluster(x,y,ml*1,8)
            let flower=new Flower(ml*0.3,9)
            
            let vb={
                p:{x:x, y:y},
                cpn:{x:x, y:y-growth*0.3*ml}
            }
            let vt={
                p:{x:x+20, y:y-growth*ml},
                cpp:{x:x+20, y:y+(-growth+growth*0.3)*ml}
            }
            
            this.show=function(){
                colorMode(HSB)
                stroke(cHue, cSat, cBri)
                strokeWeight(th)
                noFill()
                beginShape()
                vertex(vb.p.x, vb.p.y)
                bezierVertex(vb.cpn.x,vb.cpn.y,
                            vt.cpp.x, vt.cpp.y,
                            vt.p.x, vt.p.y)
                endShape()
                fill(cHue, cSat, cBri+10)
                ellipse(vt.p.x, vt.p.y,growth*ml*0.1)
                // leaves.run()
                noStroke()
                
                colorMode(RGB)
                // flower.run(vt.p.x, vt.p.y)
            }
            
            this.run=function(){
                if(delay>0){
                delay--
                } else {
                leaves.run()
                flower.run(vt.p.x, vt.p.y)
                if(growth<1){
                    growth+=grow
            
                } else {
                    flower.open()
                }
                }
                let n=(noise(vt.p.x*noiseRel,vt.p.y*noiseRel+frameCount/600)*2-1)
                let na=PI/6*(noise(vt.p.x*noiseRel,vt.p.y*noiseRel*4+frameCount/300)*2-1)
                
                
                vt.p.x=x+cos(na-PI/2)*growth*ml
                vt.p.y=y+sin(na-PI/2)*growth*ml
                vt.cpp.x=x+cos(na/3-PI/2)*growth*0.7*ml
                vt.cpp.y=y+sin(na/3-PI/2)*growth*0.7*ml
                
                // vt.p.x=x+n*bend*growth
                // vt.p.y=y-growth*ml
                // vt.cpp.x=x+n*bend*growth
                // vt.cpp.y=y+(-growth+growth*0.3)*ml
                
            }
        }
        
        function Cluster(x,y,s,n){
            let sprouts=[]
            let numSprouts=n
            let hueRoot=random(100,150)
            let delay=0;//random(100)
            
            this.run=function(){
                if(frameCount>delay && sprouts.length<numSprouts && random(100)<20){
                sprouts.push(new Sprout(x,y,-PI/2+random(-PI/12,PI/12), random(0.7,1.1)*s,hueRoot))
                }
                sprouts.forEach(function(sprout){
                sprout.run()
                sprout.show()
                })
            }
        }
        
        function Sprout(x,y,an,ml,hueRoot){
            let a=an
            var ttgMax=200
            let ttg=ttgMax
            var l=0
            let aEnd=a
            var d=random(10)<5?-1:1
            // var verts=[]
            var p1={}
            var p0={}
            let fat1=PI/5
            let fat0=PI/50
            let off=random(100)
            // let cHue=hueRoot+random(-20,20)
            // let cSat=random(50,70)
            // let cBri=random(50,70)
            let cHue=colsHSB[7][0];//120+random(-20,20)
            let cSat=colsHSB[7][1]+random(-10,10);//random(60,80)
            let cBri=colsHSB[7][2]+random(-10,10);
            
            this.run=function(){
                let aDrift=(noise((x+off)/100,y/100+frameCount/300)-0.5)*PI/8
                if(ttg>0){
                ttg--
                let xn=x+cos(a)*l
                let yn=y+sin(a)*l
                a+=d*0.003
                aEnd+=d*0.009
                // verts.push({x:xn, y:yn})
                l+=(ml-l)/160
                }
                p0={
                p:{x:x,y:y},
                pn:{x:x+cos(an+aDrift)*l*0.5, y:y+sin(an+aDrift)*l*0.5},
                pn0:{x:x+cos(an-fat0+aDrift)*l*0.5, y:y+sin(an-fat0+aDrift)*l*0.5},
                pn1:{x:x+cos(an+fat0+aDrift)*l*0.5, y:y+sin(an+fat0+aDrift)*l*0.5}
                }
                let end={x:x+cos(a+aDrift)*l, y:y+sin(a+aDrift)*l}
                p1={
                p:{x:end.x,y:end.y},
                pp:{x:end.x-cos(aEnd+aDrift)*l*0.1, y:end.y-sin(aEnd+aDrift)*l*0.1},
                pp0:{x:end.x-cos(aEnd+fat1+aDrift)*l*0.2, y:end.y-sin(aEnd+fat1+aDrift)*l*0.2},
                pp1:{x:end.x-cos(aEnd-fat1+aDrift)*l*0.2, y:end.y-sin(aEnd-fat1+aDrift)*l*0.2}
                }
            }
            
            this.show=function(){
                colorMode(HSB)
                fill(cHue,cSat,cBri,0.7)
                noStroke()
                // ellipse(p1.p.x, p1.p.y, 5)
            
                beginShape()
                vertex(p0.p.x,p0.p.y)
                bezierVertex(p0.pn0.x, p0.pn0.y,
                            p1.pp0.x, p1.pp0.y,
                            p1.p.x, p1.p.y)
                vertex(p1.p.x,p1.p.y)
                bezierVertex(p1.pp1.x, p1.pp1.y,
                            p0.pn1.x, p0.pn1.y,
                            p0.p.x, p0.p.y)
                endShape()
                colorMode(RGB)
            }
        }
        
        function Flower(s,n,x,y){
            let rings=[]
            let isOpen=false
            for(let i=0; i<n; i++){
                rings.push(new FlowerRing(s,9))
            }
            
            this.open=function(){
                isOpen=true
            }
            
            this.close=function(){
                rings.forEach(function(ring){
                ring.close()
                })
            }
            
            this.run=function(xGiven,yGiven){
                x=xGiven
                y=yGiven
                if(isOpen){
                for(let i=rings.length-1; i>=0; i--){
                    if(rings[i].run()){
                    rings[i].show(x,y)
                    } else {
                    rings.splice(i,1)
                    }
                }
                // rings.forEach(function(ring){
                //   ring.show(x,y)
                //   ring.run()
                // })
                } else {
            //       
                }
                return rings.length>0
            }
            
            this.runStatic=function(){
                if(isOpen){
                for(let i=rings.length-1; i>=0; i--){
                    if(rings[i].run()){
                    rings[i].show(x,y)
                    } else {
                    rings.splice(i,1)
                    }
                }
                }
                return rings.length>0
            }
        
        }
        
        function FlowerField(x,y,w,h,n){
            let flowers=[]
            let ttlMax=200
            
            this.init=function(){
                flowers=[]
            }
            
            this.run=function(){
                if(flowers.length<n && random(10)<1){
                let f=new Flower(w*0.15,5)
                f.open()
                if(random(10)<5){
                    flowers.push({x:x+random(0,0.2)*w,
                    y:y+random(0.2,0.85)*h,
                    ttl:floor(random(0.3,1)*ttlMax),
                    f: f  
                    })
                } else {
                    flowers.push({x:x+random(0.05,0.95)*w,
                                y:y+random(0.75,0.85)*h,
                                ttl:floor(random(0.3,1)*ttlMax),
                                f: f  
                    })
                }
                }
                for(let i=flowers.length-1; i>=0; i--){
                // console.log(flowers[i])
                if(flowers[i].ttl>0){
                    flowers[i].ttl--
                } else {
                    flowers[i].f.close()
                }
                if(flowers[i].f.run(flowers[i].x, flowers[i].y)){
                    // flowers[i].f.show()
                } else {
                    flowers.splice(i,1)
                }
                }
            }
        }
        
        function FlowerRing(s,n){
            let types=[0,0,0,0,1,1,1,1,0,2]
            let type=random(types)//floor(random(3))
            let r=s*random(0.15,0.75)
            let rel=0
            let th=random(0.1,0.5)*r
            let ease=random(120,150)
            let aStep=TWO_PI/n
            let aOff=random(10)<5?0:0.5
            let pulseA=0
            let pulseRot=random(PI/400,PI/200)
            let pulse=1
            let pulsePhase=random(TWO_PI)
            let open=true
            let cols=[
                colsRGB[1],
                colsRGB[2],
                colsRGB[4],
                colsRGB[5],
                // [235,0,135],
                // [100,135,235]
                ]
            let eCol=random(cols)
            
            this.show=function(x,y){
                // colorMode(RGB)
                push()
                translate(x,y)
                scale(pulse)
                rotate(aOff*aStep)
                ringRenders[type]()
                pop()
                // colorMode(HSB)
            }
            
            this.run=function(){
                if(open){
                rel+=(1-rel)/ease
                } else {
                rel+=(0-rel)/ease
                }
                pulseA+=pulseRot
                pulse=1+sin(pulseA+pulsePhase)*0.1
                return open || rel>0.1
            }
            
            this.close=function(){
                open=false
            }
            
            let ringRenders=[
                function(){
                    stroke(eCol[0],eCol[1],eCol[2],150)
                    strokeWeight(rel*th)
                    noFill()
                    ellipse(0,0,rel*r)
                },
                function(){
                    for(let i=0; i<n; i++){
                        noStroke()
                        fill(eCol[0],eCol[1],eCol[2],150)
                        ellipse(cos(i*aStep)*rel*r, sin(i*aStep)*rel*r, th)
                    }
                },
                function(){
                    for(let i=0; i<n; i++){
                        // noStroke()
                        noFill()
                        stroke(eCol[0],eCol[1],eCol[2],150)
                        strokeWeight(th*0.3)
                        line(cos(i*aStep)*rel*(r-th/2), sin(i*aStep)*rel*(r-th/2),
                            cos(i*aStep)*rel*(r+th/2), sin(i*aStep)*rel*(r+th/2))
                        strokeWeight(th*0.1)
                        ellipse(cos(i*aStep)*rel*(r+th), sin(i*aStep)*rel*(r+th), th/2)
                    }
                }
            ]
        }   
}
    
})();


