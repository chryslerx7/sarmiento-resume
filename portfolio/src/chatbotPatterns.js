// chatbotPatterns.js
// =======================================
// 👋 Chrysler AI Personality Patterns
// =======================================

export const isTagalog = (text = "") => {
    const tlWords = [
        "po", "opo", "paano", "pano", "ano", "anong",
        "saan", "san", "asan", "nasan",
        "magkano", "pwede", "puwede", "kelan", "kailan",
        "kailangan", "gusto", "paki", "pakisuyo", "naman",
        "salamat", "kamusta", "kumusta", "musta",
        "wala", "meron", "nandyan", "nandiyan",
        "ba", "ang", "mga", "anong",
        "taga", "dito", "diyan", "dyan",
        "trabaho", "ojt", "intern"
    ];


    const words = text
        .toLowerCase()
        .replace(/[^\p{L}\s]/gu, "") // remove emojis, punctuation
        .split(/\s+/);

    let count = 0;
    for (const w of tlWords) {
        if (words.includes(w)) count++;
    }

    return count >= 1; // 2 or more Tagalog keywords → TL mode
};


// =======================================================
// CHAT PATTERNS (HUMANIZED VERSION)
// =======================================================
export const patterns = [


    // 👋 Greetings
    {
        patterns: [
            // Standard
            "hi", "hello", "hey", "greetings", "good day",
            "good morning", "good afternoon", "good evening",
            "hi po", "hello po",

            // Filipino greetings
            "kamusta", "kumusta", "musta",
            "magandang umaga", "magandang hapon", "magandang gabi",
            "kamusta po", "kumusta po", "musta po",

            // Warm variations
            "hi there", "hello there", "hey there",
            "welcome", "nice to meet you",
            "hi friend", "hello friend", "hello friend po",

            // Filipino add-ons
            "kamusta ka", "kamusta ka na", "kumusta ka",
            "magandang araw sayo", "magandang gabi po",
            "nandito ako", "may tao ba",

            // Typos
            "helo", "heloo", "helloo", "hellooo",
            "hellow", "hillo", "ello",
            "kamuzta", "comusta", "kmsta", "kumzta",
            "goodmorning", "good evening po",
            "gud morning", "gudmrning", "gm", "ge",

            // Casual slang
            "yo", "yow", "sup", "wassup", "whats up",
            "ano meron", "oy", "oi", "hoy",

            // Chatbot specific
            "hi Jhed", "hello Jhed", "hi chatbot", "hello chatbot",
            "hi ai", "hello ai",

            // Question forms
            "hi?", "hello?", "kamusta?", "kumusta?",
            "oy?", "oi?", "nandyan ka?", "online ka?"
        ],
        response: {
            en: [
                "Hello 👋🏻 Thank you for visiting my portfolio. How may I assist you today?",
                "Hi there 👋🏻 I appreciate your time exploring my work. How can I help?",
                "Good day 👋🏻 Feel free to ask about my skills, projects, or resume.",
                "Hello 👋🏻 I’m here to guide you. What would you like to know?"
            ],
            tl: [
                "Magandang araw 👋🏻 Salamat sa pagbisita. Ano po ang maitutulong ko?",
                "Kamusta po 👋🏻 Welcome! May nais po ba kayong tingnan?",
                "Magandang araw po 👋🏻 Sabihin niyo lang kung ano ang kailangan ninyo.",
                "Hello po 👋🏻 Maaari ko po kayong tulungan sa projects o resume ko."
            ]
        }
    },
    // Identity — Who Are You
    {
        patterns: [
            "who are you", "who u", "who is this",
            "who am i talking to", "whos speaking",
            "introduce yourself",
            "describe yourself", "your identity",
            "what are you", "may i know you",

            "who u?", "who r u", "who r u?", "who dis", "who dis?",
            "who this?", "ur identity", "ur identity?",
            "hu u", "hu u?", "hru?",
            "who are u?", "who Jhed", "who is Jhed",

            "sino ka", "sino ikaw", "ikaw ba", "ikaw ba to",
            "ikaw ba si Jhed", "ikaw si Jhed", "ano ka",
            "sinong kausap ko", "pakilala ka",
            "pakilala mo sarili mo", "kilalanin kita",
            "ano identity mo", "sino yan", "sino ito",

            "cno ka", "cno k", "cno k?", "ikaw sino",
            "ikaw sino?", "ikaw cno", "ikaw cno?"
        ],
        response: {
            en: [
                "I am Jhed Chrysler Sarmiento👋🏻 A 1st-year BSIT student specializing in Web Development.",
                "Hello 👋🏻 I’m Jhed Sarmiento, studying Information Technology and building modern digital solutions.",
                "I’m Jhed 👋🏻 A dedicated IT student who enjoys solving real-world problems through tech.",
                "Hi 👋🏻 I’m Jhed, nice to meet you. I focus on creating web and mobile applications."
            ],
            tl: [
                "Ako si Jhed Chrysler Sarmiento 👋🏻 Isang BSIT student na naka-focus sa Web at Mobile Development.",
                "Kamusta 👋🏻 Ako si Jhed Sarmiento, gumagawa ako ng mga digital solutions bilang IT student.",
                "Ako si Jhed 👋🏻 Mahilig akong mag-create ng tech solutions para sa real-life needs.",
                "Hello 👋🏻 Ako si Jhed, ikinagagalak ko po kayong makilala."
            ]
        }
    },

    // About Me — Background
    {
        patterns: [
            "about you", "about you?",
            "tell me about you", "tell me about you?",
            "about Jhed", "about Jhed?", "tell me about yourself",
            "who is Jhed", "who is Jhed?",
            "your background", "your background?",
            "about yourself", "about yourself?",
            "professional background", "professional background?",
            "personal background", "personal background?",
            "background info", "background info?",
            "describe your background", "describe your background?",

            // Filipino
            "anong ginagawa mo", "anong ginagawa mo?",
            "ano ginagawa mo", "ano ginagawa mo?",
            "ano ang ginagawa mo", "ano ang ginagawa mo?",

            "about u", "about u?",
            "background mo", "background mo?"
        ],
        response: {
            en: [
                "I’m Jhed Chrysler Sarmiento, a 19-year-old 1st-year BSIT student from San Pedro City, Laguna, Philippines. I’m passionate about developing modern, user-centered web applications. I enjoy solving real-world problems through functional and well-designed systems. I continuously learn and enhance my skills as I aspire to become a professional Web Developer.",


            ],
            tl: [
                "Ako si Jhed Chrysler Sarmiento, 19 taong gulang at 1st-year BSIT student mula sa San Pedro City, Laguna, Philippines. Mahilig akong gumawa ng makabagong digital solutions na naka-focus sa user. Gusto kong lutasin ang tunay na problema gamit ang maayos at kapaki-pakinabang na systems. Patuloy akong nag-aaral at pinapabuti ang aking skills para maging isang professional Web Developer.",

            ]
        }
    },



    {
        patterns: [
            // 🟦 ENGLISH — direct questions
            "how old are you", "your age", "age u", "ur age",
            "may i know your age", "how young are you",
            "age please", "age info", "how old", "whats your age",
            "what is your age", "age?", "ur age?", "how old r u?",
            "age pls", "age plz", "age rn", "your age now",

            // 🟥 FILIPINO — direct
            "edad mo", "edad mo?", "edad pls", "edad?",
            "ilan taon ka", "ilan taon ka?", "ilan ka na",
            "ilan ka na?", "ilang taon ka", "ilang taon ka?",
            "ilang taon ka na", "ilang taon ka na?", "ilang taon kana",
            "ilang taon kana?", "ilang taon kna", "ilang taon kna?",
            "ilan taon kna", "ilan taon kna?", "edad ng Jhed",
            "edad ng Jhed?", "edad mo ba", "edad mo ba?",

            // 🔄 “ka na ba” forms
            "edad mo na", "edad mo na?", "edad mo naba", "edad mo naba?",
            "ilan taon kana ba", "ilan taon kana ba?", "ilan taon ka na ba",
            "ilan taon ka na ba?", "edad na", "edad na?",
            "ilan taon mo", "ilan taon mo?", "edad mo ngayon", "edad mo ngayon?",

            // 🟪 Taglish / casual
            "age mo", "age mo?", "ur edad", "ur edad?",
            "edad u", "edad u?", "age pls mo?", "ilan age mo",
            "ilan age mo?", "ilang age mo", "ilang age mo?",
            "how old kana", "how old kana?", "how old kna",
            "how old kna?", "age reveal", "age reveal?",

            // 🔥 SLANG / shortcuts
            "ilan ka", "ilan ka?", "ilang taon u",
            "ilang taon u?", "ilan taon u", "ilan taon u?",
            "age n u", "age n u?", "age j", "age j?",
            "ag mo", "ag mo?", "ag pls", "ag plz",
            "old ka", "old ka?", "how old u", "how old u?",

            // ❌ strong typos still recognized
            "ilang taon ka na ba", "ilang taon ka na ba?",
            "ilang taon kaba", "ilang taon kaba?",
            "ilan taong ka", "ilan taong ka?", "ilang taon kana ba",
            "ilang taon kana ba?", "ilan taon kaba"
        ],

        response: {
            en: [

                "I am currently 19, continuously learning as I grow in the IT field.",
                "I’m 19 and focused on building my career as a Software Developer."
            ],
            tl: [

                "Ako po ay 19 taong gulang, pursigido at motivated matuto araw-araw.",
                "Ako po ay 19 taong gulang at tutok sa pag-grow bilang developer."
            ]
        }
    },



    {
        patterns: [
            "when is your birthday", "your birthday",
            "birth date", "date of birth", "dob",
            "bday", "b-day", "when were you born",
            "birthday?", "bday?", "dob?", "ur birthday?",
            "ur birthday", "kelan birthday mo",
            "kailan birthday mo", "kelan ka pinanganak",
            "petsa ng kapanganakan", "birthday ng jhed",
            "birthday mo?", "kelan bday mo?"
        ],
        response: {
            en: [
                "My birthday is on January 8, 2007.",
                "I was born on January 8, 2007.",

            ],
            tl: [
                "Ang birthday ko ay January 8, 2007.",
                "Pinanganak ako noong January 8, 2007.",
            ]
        }
    },


    {
        patterns: [
            // English
            "which barangay", "what barangay", "your barangay",
            "where in san pedro", "what part of san pedro", "what area in san pedro",

            // Filipino + connectors
            "saan ka sa san pedro", "saan sa san pedro", "san sa san pedro",
            "saan banda sa san pedro", "san banda sa san pedro",
            "taga saan sa san pedro", "taga anong barangay", "taga anong brgy",
            "ano barangay mo", "brgy mo", "barangay mo", "brgy saan",
            "saan banda", "saan ka dito sa san pedro", "san sa san pedro",

            // Specific references
            "holiday homes", "phase 2", "holiday", "holiday phase 2",
            "taga phase 2", "taga holiday homes",

            // Typos
            "bgy mo", "baranggay mo", "barngay mo", "saan ka sa malols"
        ],
        response: {
            en: [
                "I’m from Holiday Homes Phase 2, here in San Pedro City ",
                "My barangay is Holiday Homes Phase 2, San Pedro City ",
                "Holiday Homes Phase 2 — that’s where I live in San Pedro City "
            ],
            tl: [
                "Taga Holiday Homes Phase 2 ako sa san Pedro City ",
                "Ang barangay ko ay Holiday Homes Phase 2 dito sa San Pedro City ",
                "Sa Holiday Homes Phase 2 ako nakatira dito sa San pedro City "
            ]
        }
    },


    // 📍 General Location / From
    // 📍 General Location / From
    {
        patterns: [
            // 🟦 ENGLISH — proper and variants
            "where do you live", "where u live", "where r u from",
            "where are you from", "your location", "your hometown", "your place",
            "what city you live", "what city are you in", "where are you based",
            "ur location", "your current location", "your area",

            // English + ?
            "where do you live?", "where u live?", "where r u from?",
            "where are you from?", "ur location?", "your hometown?",

            // Shortcuts / slang
            "location?", "loc?", "loc pls", "loc please",
            "u live where", "u from where", "from where?",

            // 🟥 Filipino — proper
            "taga saan ka", "taga san ka", "taga-saan ka",
            "tiga saan ka", "tiga san ka", "tiga-saan ka",
            "saan ka", "san ka", "asan ka", "nasan ka",
            "saan ka nakatira", "saan ka tumitira",
            "taga laguna ka", "taga Laguna ka", "taga laguna ka ba",
            "saan banda", "san banda", "saan area mo", "saan banda ka",
            "anong lugar mo", "ano location mo",

            // Filipino + ?
            "taga saan ka?", "taga-saan ka?",
            "tiga saan ka?", "tiga-saan ka?",
            "san ka?", "saan ka?", "asan ka?", "nasan ka?",
            "saan banda?", "san banda?", "saan ka nakatira?",
            "ano location mo?", "anong lugar mo?",

            // With NG / NANG connectors
            "taga ng saan ka", "taga nang saan ka", "taga ng laguna ka",
            "taga nang Laguna ka", "tiga ng saan ka", "tiga nang saan ka",

            // PHRASE variants
            "saang lugar ka", "saan ka galing", "saan galing bahay mo",
            "saang part ng Laguna", "saang part ng laguna",
            "saan dito sa laguna", "saan banda dito",

            // Taglish
            "location mo", "saan loc mo", "loc mo saan",
            "where ka", "where k", "where ka now", "asan loc mo",
            "ur area", "ur place", "area mo", "mo area saan",

            // 🟨 Dash versions (lahat ng combos)
            "taga-saan-ka", "tiga-saan-ka", "taga-san-ka",
            "saan-ka", "san-ka", "asan-ka",
            "taga-laguna-ka", "taga-Laguna-ka",
            "saan-banda", "san-banda", "saan-ka-banda",

            // 🟪 Strong typos & shortcuts
            "tagasaan ka", "tagasan ka", "tigasaan ka", "tigasn ka",
            "sn ka", "asan k", "snk", "snka", "snqa",
            "saan ka ba", "saan ka ba?", "san ka ba",
            "lokasyon mo", "lokaysyun mo", "lokaysun mo"
        ],
        response: {
            en: [
                "I live in San Pedro City, Laguna ",
                "I’m from San Pedro City, Laguna ",
                "My hometown is San Pedro City in Laguna "
            ],
            tl: [
                "Taga San Pedro City, Laguna ako ",
                "Sa San Pedro Laguna ako nakatira ",
                "San Pedro City, Laguna ang hometown ko "
            ]
        }
    },

    // 🎓 School / Course
    {
        patterns: [
            // ENGLISH — standard questions
            "what school", "where do you study", "where are you studying",
            "where u study", "which school you study", "what university",
            "your school", "your university", "what school do you attend",
            "are you studying", "you a student", "are you a student",
            "where do you go to school", "where are u schooling",

            // ENGLISH — with ?
            "what school?", "where do you study?", "where u study?",
            "what university?", "are you a student?", "where do u go to school?",
            "your school?", "your university?",

            // Taglish / Filipino — standard
            "school mo", "anong school mo", "saan ka nag aaral",
            "saan ka nag-aaral", "san ka nag aaral", "san ka nag-aaral",
            "college mo", "uni mo", "saang school ka",
            "gang school mo", "anong eskwelahan mo",
            "eskwela mo", "saan school mo", "what course", "what is your course", "what course did you take?",
            "what course?", "what is your course?", "what course did you take",

            // Filipino — Course
            "course mo", "ano course mo", "anong course mo",
            "kurso mo", "ano kurso mo", "anong kurso mo",
            "bsit ka ba", "bsit student ka", "it course mo",
            "nag aaral ka ba", "nag-aaral ka ba", "student ka ba",

            // Filipino + ?
            "school mo?", "saan ka nag aaral?", "san ka nag aaral?",
            "san ka nag-aaral?", "kurso mo?", "course mo?",
            "bsit ka?", "bsit ka ba?", "anong course mo?",

            // With connectors
            "saang school ka nag aaral", "saang school ka nag-aaral",
            "saang university ka", "anong school ang sa iyo",
            "anong course ang kinuha mo", "ano kunin mong course",

            // Very common typos & shortcuts
            "anung course mo", "anung kurso mo", "kurso mo ba",
            "nagaaral kaba", "nag aral ka ba", "nagaaral ka ba",
            "stdnt ka ba", "estudyante ka ba", "studyante ka ba",
            "kurso?", "course?", "skul mo", "eskwela mo",

            // Dash variations
            "anong-school-mo", "kurso-mo", "course-mo",
            "nag-aaral-ka-ba", "saan-ka-nag-aaral",

            // Slang + compressed text
            "school u?", "saan ka study", "saan school u",
            "skl mo", "skl u", "asan scl mo", "san uni mo",
            "bsit?", "bsit student?",
        ],
        response: {
            en: [
                "I am a 1st-year BSIT student at Bataan Peninsula State University, focusing on Web Development.",
                "I am currently taking Bachelor of Science in Information Technology at BPSU as a 1st-year student.",
                "I am pursuing BSIT at Bataan State University, specializing in modern and user-centered digital solutions."
            ],
            tl: [
                "Ako ay 1st-year BSIT student sa Bataan Peninsula State University",
                "Kasalukuyan akong nag-aaral ng Bachelor of Science in Information Technology sa BPSU bilang 1st-year student.",

            ]

        }
    },

    {
        patterns: [
            // English
            "bpsu location",
            "where is bpsu",
            "where bpsu located",
            "bpsu laguna",
            "bpsu in laguna",
            "where is la consolacion",
            "Bataan Peninsula State University",
            "Bataan Peninsula State University philippines",
            "bpsu school",
            "where is bpsu located",
            "where Bataan Peninsula State University",
            "where bpsu in laguna",
            "bpsu university location",

            // English with ?
            "bpsu?",
            "bpsu location?",
            "where is bpsu?",
            "where bpsu located?",
            "where is la consolacion?",
            "where is Bataan Peninsula State University?",
            "where bpsu?",
            "bpsu near capitol?",
            "bpsu laguna?",

            // Filipino — saan / nasaan forms
            "saan bpsu",
            "san bpsu",
            "saan ang bpsu",
            "bpsu saan",
            "bpsu nasaan",
            "nasaan ang bpsu",
            "saan yung bpsu",
            "saan banda ang bpsu",
            "saan banda bpsu",
            "saan banda sa laguna ang bpsu",
            "saan part ng laguna ang bpsu",
            "saan banda sa laguna bpsu",
            "anong barangay bpsu",
            "saan barangay bpsu",
            "saan banda bpsu laguna",
            "saan banda bpsu campus",

            // Filipino with ? 
            "saan bpsu?",
            "san bpsu?",
            "saan ang bpsu?",
            "nasaan ang bpsu?",
            "saan yung bpsu?",
            "saan banda ang bpsu?",
            "saan banda bpsu?",
            "anong barangay bpsu?",
            "saan banda sa laguna ang bpsu?",
            "saan part ng laguna ang bpsu?",
            "saan banda bpsu laguna?",

            // With connectors
            "saan ba ang bpsu",
            "saan ba yung bpsu",
            "saan kaya bpsu",
            "saan makikita ang bpsu",
            "saan kaya yung bpsu",
            "san ba bpsu",
            "saan po ang bpsu",
            "pano pumunta bpsu",
            "paano pumunta bpsu",
            "pano papunta bpsu",
            "paano papunta bpsu",

            // Common typos / phonetic
            "asadn ang bpsu",
            "asan bpsu",
            "asdn ang bpsu",
            "bataan peninsula",
            "bat penin",
            "bpsu univ",
            "bpsu camp",
            "bps u",

            // Nicknames / shortcuts
            "bataan peninsula",
            "bataan peninsula uni",
            "bpsu uni",
            "bpsu campus",
            "college bpsu",
            "uni bpsu",
            "bataan university",

            // With dash
            "la-consolacion",
            "lc-up",
            "bpsu-laguna",
            "la-consolacion-university",

            // Capitol references
            "malapit ba bpsu sa capitol",
            "bpsu malapit capitol",
            "capitol malapit bpsu",
            "near capitol bpsu",
            "bpsu near capitol",

            // Capitol references with ?
            "malapit ba bpsu sa capitol?",
            "bpsu malapit capitol?",
            "capitol malapit bpsu?",
            "bpsu near capitol?"
        ],


        response: {
            en: [
                "bpsu is located in Balanga City, Bataan, near the Provincial Capitol.",
                "Bataan Peninsula State University Philippines is situated in Balanga City, close to the Capitol area.",
                "bpsu is in Balanga City , Bataan — near the Capitol and other key landmarks in the city."
            ],
            tl: [
                "Ang bpsu ay matatagpuan sa Balanga City, Bataan, malapit sa Provincial Capitol.",
                "Ang Bataan Peninsula State University Philippines ay nasa Balanga City — katabi ng Capitol area.",
                "Ang bpsu ay nasa Balanga, Bataan, at malapit sa mga pangunahing lugar sa Capitol vicinity."
            ]

        }
    },


    // 💼 OJT / Internship
    {
        patterns: [
            // OJT / INTERNSHIP — Standard
            "ojt", "internship", "intern", "intern program",
            "seeking internship", "apply internship", "accepting intern",
            "internship status", "ojt status", "ojt placement",
            "company for ojt", "ojt required", "ojt area", "ojt site",
            "ojt malapit", "ojt looking", "ojt naghahanap", "ojt pasok",
            "ojt next sem", "ojt soon", "ojt hunt", "ojt start",

            // ASKING OJT STATUS
            "ojt ka na", "ojt kana", "ojt ka na?", "ojt kana?", "ojt kna",
            "ojt kna?", "ojt knaba", "ojt kaba", "ojt kaba?", "ojt knaba?",
            "nag ojt ka na", "nag ojt ka na?", "nag oojt ka", "nag oojt ka?",
            "ojt mo", "ojt mo?", "ojt status?", "ojt soon?", "ojt next sem?",
            "ojt mo na", "ojt mo na?", "ojt na", "ojt na?", "ojt naba",
            "ojt naba?", "ojt ka ba", "ojt ka ba?", "ojt kaba?",

            // LOCATION / WHEN QUESTIONS
            "saan ojt mo", "saan ojt mo?", "ojt saan", "ojt saan?", "saan ka mag ojt",
            "saan ka mag ojt?", "kailan ojt mo", "kailan ojt mo?",
            "ojt dito", "ojt dito?", "ojt malapit?", "ojt site?", "ojt area?",

            // WORK STATUS (Job-related)
            "may trabaho ka na", "may trabaho kana", "may trabho ka na?",
            "may work ka na", "may work kana", "may work ka na?", "may job ka na",
            "may job ka na?", "working ka na", "working ka na?",
            "anakapaghanap ka na ng work?", "nakahanap ka na ng work?",
            "empleyado ka na", "empleyado ka na?", "nagwowork ka na",
            "nag wowork ka na?", "nag work ka na?", "may w0rk ka na?",

            // WILLING / OPEN FOR INTERNSHIP
            "open ka ba sa ojt", "open ka ba sa ojt?", "open for internship",
            "willing for internship", "willing for internship?",
            "intern kaba", "intern kaba?", "intern ka ba", "intern ka ba?",
            "are you an intern", "are you an intern?", "do you have job", "do you have job?", "do you have a job", "do you have a job?"
            , "do you have work", "do you have work?"
        ]
        ,
        response: {
            en: [
                "I’m currently preparing for my internship while enhancing my skills in Web and Mobile Development.",
                "I am open to upcoming internship opportunities where I can contribute and continue learning in real project environments."
            ],
            tl: [
                "Kasalukuyan akong naghahanda para sa aking OJT habang pinapahusay ang aking Web at Mobile Development skills.",
                "Opo, Bukas ako sa internship opportunities kung saan maaari akong matuto at makatulong sa mga actual project environments."
            ]

        }
    },



    // 🎯 Career / Future Goals
    {
        patterns: [
            "career", "career?", "future", "future?", "goals", "goals?", "your goals", "your goals?",
            "future job", "future job?", "your future", "your future?", "future plans", "future plans?",
            "developer dream", "developer dream?", "your dream in tech", "your dream in tech?",
            "career aim", "career aim?", "what do you want to be", "what do you want to be?",
            "what job do you want?", "what job do you want", "what do you want to be in the future?",
            "what is your future plan?", "what is your career goal?", "what are your goals?",
            "what is your dream job?", "your dream job?", "dream job", "dream job?",
            "future career?", "future career", "tech career?", "tech career", "your career?",
            "your future job?", "your target career?", "target career mo?", "career mo?", "future mo?",
            "ano future mo?", "future plan mo", "future plan mo?", "gusto mo maging ano?",
            "anong gusto mong maging?", "anong work mo future?", "future work mo?", "future work mo",
            "goal mo?", "goal mo", "plano mo sa future", "plano mo sa future?", "plano mo sa buhay?",
            "long-term goal?", "long-term goal mo?", "career path mo?", "career path mo",
            "profession mo?", "profession mo", "profession?", "career goal mo?", "career goal mo",
            "tech plans mo?", "tech plans mo", "balak mo sa tech?", "balak mo sa tech",
            "anong balak mo sa tech?", "anong balak mo sa tech", "pangarap mo?",
            "ano pangarap mo?", "ano pangarap mo", "dev dream mo?", "dev dream mo",
            "bakit tech?", "why tech?", "why developer?", "will you be a developer?",
            "after grad ano work mo?", "after graduation ano mo?", "after grad plano mo?",
            "anong trabaho gusto mo?", "trabaho pangarap mo?", "trabaho pangarap mo", "ano gusto mong job?",
            "where do you want to work?", "what industry you want?", "IT job mo?",
            "IT career mo?", "after grad?", "career mo sa future?", "future mo sa tech?",
            "future mo sa tech", "career mo future?", "ano ang pangarap mo", "ano ang pangarap mo?",
            "anong pangarap mo", "anong pangarap mo?", "ano pangarap mo", "ano pangarap mo?",
            "what is your dream", "what is your dream?", "what is your goal", "what is your goal?"


        ],
        response: {
            en: [
                "I aspire to build a strong career in Web and Mobile Development, creating solutions that are both modern and meaningful.",
                "My long-term goal is to become a professional Software Developer who builds impactful and user-centered applications.",
                "I am committed to continuously improving my skills so I can contribute to innovative technology in the IT industry."
            ],
            tl: [
                "Nais kong magkaroon ng matatag na career sa Web at Mobile Development, na gumagawa ng makabuluhang digital solutions.",
                "Layunin kong maging isang professional Software Developer na nakatuon sa paglikha ng user-centered applications.",
                "Patuloy kong pinauunlad ang aking skills upang makatulong sa pagbuo ng makabagong teknolohiya sa IT industry."
            ]

        }
    },
    {
        patterns: [
            "Who is the goat", "Sino ang goat?", "Who is the goat?", "Sino ang goat",
        ],

        response: {
            en: [
                "Lebron James."
            ],
            tl: [
                "Lebron James."
            ]
        }

    },
    // 🧠 Tech Skills
    {
        patterns: [
            "skills", "skills?", "your skills", "your skills?", "tech skills", "coding skills", "programming skills",
            "skills do you have?", "what can you do", "what can you do?", "what do you know?", "what skills do you have",
            "skill set", "skillset", "your skillset", "what are your skills?", "what are your skills", "what is your tech stack", "what are ur skills?", "can you code?",
            "developer skills", "technical skills", "stack?", "stack mo?", "skills mo", "skills mo?", "ano skills mo?", "anong skills mo?", "what is your tech stack?",
            "tech mo", "tech mo?", "tech stack", "tech stack mo?", "language mo", "languages mo?", "frameworks mo?",
            "kaya mo mag code?", "web developer ka ba?", "mobile dev ka ba?", "ano alam mo?", "anong alam mo?",
            "ano speciality mo?", "tech background mo?", "ano kaya mo sa code?", "coding mo?", "kaya mo js?", "kaya mo react?",
            "what tech do you know?", "what tech can you use?", "what languages do you code?", "languages you know?",
            "what frameworks you know?", "your stack?", "stack please?", "dev ka?", "coder ka?",
            "what tools do you use?", "tools mo?", "what can you build?", "web dev skills?", "mobile dev skills?"
        ],
        response: {
            en: [
                "My current tech stack includes HTML, CSS, JavaScript, for frontend development. For backend, I use JAVA and PHP. I am also familiar with tools such as GitHub, VS Code, and Figma. I’m continuously learning and exploring Flutter, API Integration, Python, and AI development."
            ],
            tl: [
                "Ang ginagamit kong tech stack ay HTML, CSS, JavaScript, para sa frontend development. Sa backend naman ay gumagamit ako ng PHP at JAVA. Pamilyar din ako sa mga tools gaya ng GitHub, VS Code, at Figma. Patuloy kong pinag-aaralan ang Flutter, API Integration, Python, at AI development."
            ]


        }
    },

    // 🔗 GitHub
    {
        patterns: [
            // English — Standard
            "github", "github?", "your github", "your github?", "github link", "github link?",
            "send github", "send github?", "give github", "give github?",
            "github profile", "github profile?", "github account", "github account?",
            "github pls", "github please", "github acc", "github acc?",
            "show github", "show github?", "open github", "open github?",
            "repos", "repos?", "your repos", "your repos?", "repositories", "repositories?",
            "code samples", "code samples?",
            "projects on github", "projects on github?", "github projects", "github projects?",
            "source code", "source code?", "show source",

            // ➕ English — What questions
            "what is your github?", "what's your github?", "what is your github link?",
            "what's your github link?", "what github you have?", "what is your repo?",
            "what are your repos?", "what repos do you have?",
            "what code have you made on github?",

            // English — Short & Slang
            "git", "git?", "git link", "git link?", "ur github", "ur github?",
            "share github", "share github?", "drop github", "drop github?",
            "gh link", "gh profile", "gh profile?", "gh?", "gh pls", "gh plz",

            // Filipino / Taglish
            "github mo", "github mo?", "pahingi github", "pahingi github?",
            "bigay github", "bigay github?", "send github mo", "send github mo?",
            "repo mo", "repo mo?", "repos mo", "repos mo?",
            , "ipakita github mo",
            "github account mo", "github account mo?",
            "github link mo", "github link mo?", "gihub mo ba?", "github pls?", "github paki?",

            // ➕ Filipino — Ano questions
            "ano github mo?", "anong github mo?", "ano github link mo?",
            "ano link ng github mo?", "ano repo mo?", "anong repo mo?",


        ],

        response: {
            en: [
                "You may view my projects and source code on GitHub: github.com/chryslerx7"
            ],
            tl: [
                "Maari ninyong makita ang aking mga projects at source code sa GitHub: github.com/chryslerx7"
            ]

        }
    },
    // 📞 Contact
    {
        patterns: [
            // English — Standard
            "contact", "contact?", "contact info", "contact info?",
            "contact details", "contact details?", "contact details please",
            "how can i contact you", "how can i contact you?",
            "how to contact you", "how to contact you?",
            "how do i contact you", "how do i contact you?",
            "how do i reach you", "how do i reach you?",
            "how can i reach you", "how can i reach you?",
            "how should i reach you", "how should i reach you?",
            "how can i get in touch", "how can i get in touch?",
            "how to get in touch", "how to get in touch?",
            "your contact", "your contact?",
            "give contact", "give contact?",
            "reach you", "reach you?", "connect with you", "connect with you?",
            "how do i connect with you", "how do i connect with you?",
            "may i contact you", "may i contact you?", "can i contact you?", "can i reach you?",
            "get in touch", "get in touch?",

            // English — Email
            "email", "email?", "your email", "your email?", "email address", "email address?",
            "email address mo?", "gmail", "gmail?", "your gmail", "your gmail?",
            "gmail mo?", "email please", "email pls", "email please?",
            "could you share your email", "could you share your email?",
            "where can i email you", "where can i email you?",
            "what is your email", "what is your email?", "what's your email?",
            "which email can i reach you?", "email info", "email info?",

            // English — Phone / Number
            "phone", "phone?", "phone number", "phone number?",
            "your phone", "your phone?", "phone number mo?", "your number", "your number?",
            "mobile number", "mobile number?", "mobile number mo?",
            "contact number", "contact number?", "your contact number?",
            "what is your number", "what is your number?", "what's your number?",
            "may i have your number?", "can i have your number?", "number pls", "number please",
            "share number", "share number?", "give number", "give number?",
            "how can i call you", "how can i call you?",

            // Filipino / Taglish
            "paano ka makontak?", "paano ka ma contact?", "paano ka ma-contact?", "paano ka macontact",
            "kontak mo?", "kontak details mo?", "pahingi number", "pahingi number?",
            "bigay number", "bigay number?", "numero mo", "numero mo?", "pwede contact mo?",
            "pm mo?", "pm kita?", "messenger mo?", "whatsapp mo?",
            "pahingi email", "pahingi email?", "bigay email", "bigay email?",
            "email address mo", "email address mo?",
            "saan kita pwedeng icontact?", "saan kita pwede icontact?",
            "saang app kita macocontact?", "contact mo?",

            // Filipino — Ano questions
            "ano contact mo?", "anong contact mo?",
            "ano email mo?", "anong email mo?", "ano gmail mo?", "anong gmail mo?",
            "anong number mo?", "ano number mo?",
            "ano contact number mo?", "anong contact number mo?",

            // Typos / shortcuts
            "contct", "cntact", "nmbr", "nmbr mo", "number mo", "number mo?",
            "gmail pls", "gml mo", "email pls?"
        ]
        ,
        response: {
            en: [
                "Here are my contact details:\nEmail: chryslrosrmnt@gmail.com\nPhone: 0967-432-0177\nMessenger: m.me/chryslerx.0"
            ],
            tl: [
                "Narito ang aking contact details:\nEmail: chryslrosrmnt@gmail.com\nPhone: 0967-432-0177\nMessenger: m.me/chryslerx.0"
            ]

        }
    },


    {
        patterns: [
            // English — Standard
            "socials", "socials?", "social media", "social media?", "your socials", "your socials?",
            "social links", "social links?", "social accounts", "social accounts?",
            "your social accounts", "your social accounts?", "online presence", "online presence?",
            "follow you", "follow you?", "connect with you", "connect with you?",
            "profiles?", "your profiles", "your profiles?", "public profiles", "public profiles?",

            // ➕ English — What questions
            "what are your socials?", "what socials do you have?", "what social media do you use?",
            "what is your social media?", "what social links do you have?",
            "what accounts do you have online?", "what platforms are you on?",
            "where can I follow you?", "where can I connect with you?",
            "which socials can I visit?", "what is your online presence?",

            // Taglish / Filipino
            "social media mo", "social media mo?", "socials mo", "socials mo?",
            "social links mo", "social links mo?", "social accounts mo", "social accounts mo?",
            "profiles mo", "profiles mo?", "pahingi socials", "pahingi socials?",
            "bigay socials", "bigay socials?", "connect kita?", "pwede follow kita?",
            "saan kita mafofollow?", "saan kita machecheck?", "pahingi links mo",

            // ➕ Filipino — Ano questions
            "ano socials mo?", "anong socials mo?",
            "ano social media mo?", "anong social media mo?",
            "ano links mo?", "anong links mo?",
            "ano social accounts mo?", "anong social accounts mo?",
            "ano profiles mo?", "anong profiles mo?",
            "saan kita pwede ifollow?", "saan kita pwede icontact online?",

            // Slang
            "socmed", "socmed?", "socmed mo", "socmed mo?", "socmed links", "socmed links?",

            // Typos
            "soshals", "social meadia", "social midia", "social meda", "socyals"
        ],

        response: {
            en: [
                "Here are my social media profiles:\nFacebook: facebook.com/chryslerx.0\nInstagram: instagram.com/chryslerx__0\nLinkedIn: linkedin.com/in/jhed-chrysler-sarmiento-257666395\nTikTok: tiktok.com/@chryslrsrmnt_"
            ],
            tl: [
                "Narito ang aking social media profiles:\nFacebook: facebook.com/chryslerx.0\nInstagram: instagram.com/chryslerx__0\nLinkedIn: linkedin.com/in/jhed-chrysler-sarmiento-257666395\nTikTok: tiktok.com/@chryslrsrmnt_"
            ]

        }
    },


    // 📂 Projects
    {
        patterns: [
            // English — Standard
            "projects", "projects?", "your projects", "your projects?",
            "project list", "project list?", "show projects", "show projects?",
            "portfolio projects", "portfolio projects?", "view portfolio", "view portfolio?",
            "featured projects", "featured projects?", "sample projects", "sample projects?",
            "sample works", "sample works?", "apps?", "apps", "websites?", "websites",

            // English — What questions
            "what are your projects?", "what projects do you have?",
            "what apps did you make?", "what apps do you have?",
            "what websites did you build?", "what websites have you made?",
            "what have you developed?", "what did you build?",
            "what work have you done?", "what work did you create?",
            "what portfolio do you have?", "what can i see from your portfolio?",
            "what systems have you made?", "what systems did you build?",

            // Filipino / Taglish
            "projects mo", "projects mo?", "project mo", "project mo?",
            "ano project mo?", "anong project mo?", "ano projects mo?", "anong projects mo?",
            "apps mo?", "websites mo?", "sample works mo?", "anong gawa mo?",
            "project list mo?", "portfolio mo?", "portfolio mo", "ipakita projects mo",
            "ano gawa mong systems?", "anong ginawa mong system?",
            "ano ginawa mo?", "anong ginawa mo?", "ano ginawa mo",
            "may projects ka ba?", "may projects kaba?", "may projects ka ba",
            "may projects ka ba?", // Extra typo + slang + Taglish variants
            "ano ano project mo", "ano ano projects mo", "anu anu project mo",
            "anu anu projects mo", "ano ano gawa mo", "ano ano meron ka",
            "ano ano ginawa mo", "anu anu ginawa mo", "anong meron ka dyan",

            "may projects ka ba", "may project ka ba",
            "may project kaba", "may projects kaba",
            "may proj ka", "may projs ka", "proj meron ka",
            "project meron ka", "projects meron ka", "ano apps mo", "apps mo?", "websites mo?", "website mo?",
            "sample works mo?", "samples mo", "works mo?",

            "ano gawa mong websites", "anong apps ginawa mo",
            "show me projects", "show me ur work", "your works?", "my works?",
            "pwede patingin projects", "pakita works mo", "works mo pakita",
            "open your projects", "your apps?", "your systems",

            // Filipino — Specific Requests
            "ano mga projects mo?", "mga projects mo?",
            "may capstone ka?", "capstone mo", "capstone mo?",
            "portfolio ko tingnan", "tingnan projects mo", "pakita projects mo",
            "ano ginawa mong website?", "anong apps ginawa mo?",

            // Slang / shortcuts
            "proj?", "projs?", "proj mo", "proj mo?", "my work?", "works?"
        ],
        response: {
            en: [
                "As of now they are offline not yet publish to the web." 
                
            ],
            tl: [
                "Sa Ngayon wala hindi pa nakapublic ang aking mga proyekto."
            ]
        }
    },


    {
        patterns: [
            // English — General Info
            "certifications", "certifications?", "your certifications", "your certifications?",
            "certificates", "certificates?", "your certificates", "your certificates?",
            "badges", "badges?", "your badges", "your badges?",
            "achievements", "achievements?", "quals?", "qualifications?", "qualification?",
            "what certifications do you have?", "what are your certifications?",
            "what certificates do you have?", "what badges do you have?",
            "do you have certifications?", "do you have any certificates?",
            "certiport?", "freecodecamp?", "fcc cert?", "fcc certificate?",

            // English — View / Show request
            "show certifications", "show certs", "view certifications",
            "can i see your certificate?", "can i see your certifications?",
            "can you show your certification?", "may i view your certifications?",
            "where can i see your certificates?", "where are your certificates?",
            "open certificates", "show your cert proof",

            // Tagalog — General Info
            // Tagalog / Taglish — Full Variants
            "may cert ka", "may cert ka?", "may cert ka ba", "may cert ka ba?",
            "may sert ka", "may sert ka?", "may sert ka ba", "may sert ka ba?",
            "may certificates ka", "may certificates ka?", "may certificates ka ba",
            "may certificates ka ba?", "may certificate ka", "may certificate ka?",
            "may certificate ka ba", "may certificate ka ba?",

            "may mga cert ka", "may mga cert ka?",
            "may mga cert ka ba", "may mga cert ka ba?",
            "may mga certificate ka", "may mga certificate ka?",
            "may mga certificate ka ba", "may mga certificate ka ba?",

            "may mga achievements ka", "may mga achievements ka?",
            "may mga achievements ka ba", "may mga achievements ka ba?",
            "may mga badges ka", "may mga badges ka?",
            "may mga badges ka ba", "may mga badges ka ba?",

            "cert mo", "cert mo?", "mga cert mo", "mga cert mo?",
            "certifications mo", "certifications mo?", "certification mo",
            "certification mo?", "badges mo", "badges mo?", "qualifications mo",
            "qualifications mo?",

            "mga certificates mo?", "ano certificates mo?", "anong certificates mo?",
            "mga certifications mo?", "ano certifications mo?",
            "anong certifications mo?", "certification pls", "cert pls", "cert plz",

            // Shortcuts / Slang / Typos
            "certs?", "certs mo", "certs mo?", "sert", "sert?",
            "sert mo", "sert mo?", "sertifikasyon mo", "sertipikasyon?",
            "certificate mo", "cert mo ba", "cert mo ba?", "cert kaba", "cert kaba?",
            "may cert kaba", "may cert kaba?", "mga cert ba", "mga cert ba?", "cert u?",
            "achieve mo?", "achvmnts mo", "achvmnts mo?", "achieve mo",
            "certik", "sertif", "sertipikasyon", "sertifikasyon?",


            // Tagalog — View / Show request
            "ipakita certifications mo", "pakita cert mo",
            "pwede makita cert mo?", "patingin cert mo", "asan cert mo?",
            "saan makita certifications mo?", "saan ko makikita cert mo?",
            "open cert mo", "labas cert mo", "pakita badge mo",

            // Typos
            "sert mo", "certfikasyon", "certifikasyon", "sertifications"
        ],

        response: {
         en: [
  "Here are my earned certifications 👇🏻\n\n" +
  "📌 IT Specialist — Java \n" +
  "🔗 Issued by Certiport (A Pearson VUE Business)\n\n" +

  "📌 IC3 Digital Literacy Certification GS6 Level 1\n" +
  "🔗 Issued by Certiport (A Pearson VUE business)\n\n" +

  "📌 Network Defense\n" +
  "🔗 Issued by Cisco Networking Academy \n\n"
],
tl: [
  "Narito ang aking mga nakuha na certifications 👇🏻\n\n" +
  "📌 IT Specialist — Java\n" +
  "🔗 Ibinigay ng Certiport (A Pearson VUE Business)\n\n" +

  "📌 IC3 Digital Literacy Certification GS6 Level 1\n" +
  "🔗 Ibinigay ng Certiport (A Pearson VUE business)\n\n" +

  "📌 Network Defense\n" +
  "🔗 Ibinigay ng Cisco Networking Academy\n\n"
]

        },


    },
    // 🙏 Thanks (Formal)
   // 🙏 Thanks / Appreciation
{
  patterns: [
    // Standard
    "thanks","thank you","thankyou","thankyou!",
    "salamat","maraming salamat","ty","thx","tnx",
    "thank u","thankyou po","thank u po","thanks po",
    "thank you po","salamat po","ty po","thx po",
    "thank you so much","thanks so much","i appreciate it",
    "appreciated","appreciate it","thankyou so much",

    // Short / Slang / Typos
    "tysm","tysm!","thx!","thanks!","ty!","tanks","tanks!","tanx",
    "salmat","slamat","salamit","salamt","tnqs","tnxx",

    // Filipino casual
    "salamat lods","salamat idol","salamat boss",
    "thank u boss","thank u idol","thank u lods",
    "salamat ate","salamat kuya",

    // Emojis / Variants
    "🙏","🤍 thank you","thank you 🤍","thank u 🤍"
  ],
  response: {
    en: "You’re welcome! 🤍 Always happy to assist.",
    tl: "Walang anuman! 🤍 Lagi akong handang tumulong."
  }
},


// 👋 Goodbye / Farewell (Formal)
{
  patterns: [
    // Standard
    "bye","goodbye","ingat","see you","good night",
    "i have to go","gtg","take care",
    "see you soon","see u","see ya","later",
    "have a great day","goodbye for now","bye for now",
    "signing off","log out","logout",

    // Filipino
    "alis na ako","alis muna ako","balik ako mamaya",
    "tulog na ako","pahinga na ako","alis lang ako",
    "paalam","paalam muna","ingat palagi",
    "mag ingat ka","mag-ingat ka","hanggang sa muli",

    // Typos + Casual
    "bye!","goodbye!","inggit","cya","cya!","later!",
    "ok bye","ok bye!","bye bye","byebye","babye","bahbye",
    "afk","tke cre","see yah","c u","cu","see u soon",

    // Slang / Chat style
    "bye na","bye muna","ok ingat","sige ingat","gbye",
    "sige bye","sige babush","out muna ako","out na",
  ],
  response: {
    en: [
      "Thank you for visiting. Have a wonderful day. 🤍",
      "Take care, and see you again soon. 🤍",
      "Goodbye for now. Wishing you all the best. 🤍"
    ],
    tl: [
      "Salamat sa pagbisita. Ingat po lagi. 🤍",
      "Hanggang sa muli. Sana maging maganda ang araw ninyo. 🤍",
      "Paalam po muna. Maraming salamat. 🤍"
    ]
  }
},
// ❤️ Relationship Status
{
  patterns: [
    // ENGLISH
    "are you single","are you taken","do you have a girlfriend",
    "girlfriend","girlfriend?","have gf","have gf?",
    "do you have gf","your gf","your girlfriend",
    "relationship status","in a relationship","taken?",
    "do you have a partner","do you have someone",

    // FILIPINO
    "single ka","single ka?","single kaba","single kaba?",
    "single kaba ba","single kababa","single kana","single kana?",
    "taken ka","taken ka?","taken kaba","taken kaba?",
    "girlfriend mo","girlfriend mo?","gf mo","gf mo?",
    "may gf ka","may gf ka?","may gf kaba","may gf kaba?",
    "may girlfriend ka","may girlfriend ka?","may gf kana",
    "may gf kana?","may girlfriend kana","may girlfriend kana?",
    "in a relationship ka","status mo","rel status mo","rel status",
    "taken kana","taken kana?","taken kana ba","taken ka na ba",
    "taken ka na ba?","may jowa ka","may jowa ka?",
    "may jowa kaba","may jowa kaba?","jowa mo",
    "jowa mo?","may lovelife ka","may lovelife ka?",

    // SLANG / TYPOS / SHORT
    "single k?","taken k?","gf?","may gf?",
    "may jowa?","may jowa k","jowa?",
    "girpren mo","gerlpren mo","jowa kana",
    "gf kaba?","gf kna","gf knaba","kanaba gf",
    "taken kna","taken kba","taken kaba ba"
  ],
  response: {
    en: [
      "I’m currently taken 🤪",
      "Yes, I’m in a happy relationship right now ",
      "I’m not single — already committed "
    ],
    tl: [
      "Taken ako ngayon 🤪",
      "May girlfriend na po ako 🤍",
      "Committed na po ako — hindi na single hahaha 🤪"
    ]
  }
}



];



export const defaultResponse = {
en: "You may ask me anything about my skills, projects, experience, education, or tech stack — I’m here to help. 🤍\n\nSorry, I can only answer questions related to my professional background and portfolio information.",
tl: "Maaari po ninyong itanong ang tungkol sa aking skills, projects, experience, education, o tech stack — handa po akong tumulong. 🤍\n\nPaumanhin po, mga tungkol lamang sa aking professional background at portfolio ang maaari kong sagutin."

};
