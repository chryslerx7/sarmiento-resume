import { useState, useEffect, useRef } from "react";
import { FaRegImage } from "react-icons/fa";
import { MdOutlineTrackChanges } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import "./App.css"; import { FaReact } from "react-icons/fa";
import VirielleLogo from "./assets/logo.png";
import { FiExternalLink, FiPaperclip } from "react-icons/fi";
import profile from './assets/resume2x2.png';
import profileDark from './assets/dark.jpg';
import { CiLocationOn } from "react-icons/ci";
import { MdVerified } from "react-icons/md";
import { HiOutlineDocumentText, HiOutlineMail } from "react-icons/hi";
import { PiFlask } from "react-icons/pi";
import { IoBriefcaseOutline } from "react-icons/io5";
import { MdOutlineVerified } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";
import { FaSun, FaMoon } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaMobileAlt, FaFacebookMessenger, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import { GoPaperclip } from "react-icons/go";
import { MdPhoneInTalk } from "react-icons/md";
import ha from "./assets/gallery/ha.jpg";
import ha1 from "./assets/gallery/ha1.jpg";
import ha2 from "./assets/gallery/ha2.jpg";
import ha3 from "./assets/gallery/be.jpg";
import ha4 from "./assets/gallery/ha4.jpg";
import ha7 from "./assets/gallery/1.jpg";
import ha5 from "./assets/gallery/ha5.jpg";
import ha6 from "./assets/gallery/ako.jpg";
import { FaLaptopCode } from "react-icons/fa";
import resumePDF from "./assets/resume.pdf";
import { PiHandWaving } from "react-icons/pi";
import ChatbotPortfolio from "./ChatbotPortfolio";

export default function Portfolio() {
    const [darkMode, setDarkMode] = useState(false);
    const galleryRef = useRef(null);
    const [paused, setPaused] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const [selectedCert, setSelectedCert] = useState(null);
    const [resumeOpen, setResumeOpen] = useState(false);
    const [currentText, setCurrentText] = useState("Software Engineer");
    const jobTitles = [
        "Software Engineer",
        "Graphic Designer",
        "Video Editor",

    ];

    // Function to handle the typewriting loop
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText((prev) => {
                const currentIndex = jobTitles.indexOf(prev);
                const nextIndex = (currentIndex + 1) % jobTitles.length;
                return jobTitles[nextIndex];
            });
        }, 2000); // Switch every 4 seconds

        return () => clearInterval(interval); // Clean up on unmount
    }, []);

    const openModal = (img) => {
        setSelectedCert(img);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedCert(null);
    };


    useEffect(() => {
        const slider = galleryRef.current;
        if (!slider) return;

        let scrollAmount = 0;

        const autoScroll = () => {
            if (!paused) {
                slider.scrollLeft += 1;
                scrollAmount += 1;

                if (scrollAmount >= slider.scrollWidth / 2) {
                    slider.scrollLeft = 0;
                    scrollAmount = 0;
                }
            }
            requestAnimationFrame(autoScroll);
        };

        autoScroll();
    }, [paused]);

    return (
        <div className={darkMode ? "container dark-mode" : "container"}>
            <header className="profile-header">
                <button
                    className="theme-toggle"
                    onClick={() => setDarkMode(!darkMode)}
                >
                    <div className={`toggle-circle ${darkMode ? "active" : ""}`}>
                        {darkMode ? <FaMoon className="theme-icon" /> : <FaSun className="theme-icon" />}
                    </div>
                </button>


                <img
                    src={darkMode ? profileDark : profile}
                    alt="Profile"
                    className="profile-photo"
                />
                <div className="profile-details">
                    <div className="name-badge">
                        <h1>Jhed Chrysler Sarmiento</h1>
                        <MdVerified className="verified-badge" />

                    </div>
                    <p className="location">
                        <CiLocationOn className="location-icon" />
                        San Pedro City, Philippines
                    </p>


                    <div className="job-title">BSIT Student / Aspiring Web & Front-End Developer</div>
                    <div className="job-titles">

                    </div>

                    <div className="action-buttons">
                        <div className="action-buttons">


                            <a
                                className="btn btn-black"
                                href={resumePDF}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <HiOutlineDocumentText className="btn-icon" />
                                View Resume
                            </a>


                        </div>


                        <a className="btn btn-white" href="mailto:chryslrosrmnt@gmail.com">
                            <HiOutlineMail className="btn-icon" />
                            Send Email
                        </a>


                    </div>
                </div>

            </header>



            {/* MAIN CONTENT */}
            <div className="main-grid">
                {/* LEFT COLUMN */}
                <div className="left-column">
                    {/* ABOUT */}
                    <section className="card">
                        <h2 className="section-title">
                            <IoBriefcaseOutline className="section-icon" />
                            About
                        </h2>

                        <p className="text-content">
                            A passionate Information Technology student with 3 years of development experience as a programmer. I'm looking for
                            an opportunity to apply my knowledge and skills as a programmer, to assist and support your team in achieving company
                            success. As well as gain new knowledge and skills. With the help or your company I know that I will learn new things not
                            only in programming but all the capabilities that an employee should have. Displayed strong positive attitude towards
                            colleagues. Participated in activities while producing significant outcomes. Gained programming experience as an Full
                            Stack Dev for a capstone project and as a freelance web developer for a startup company.
                        </p>


                    </section>

                    {/* TECH STACK */}
                    <section className="card">
                        <div className="section-header">
                            <h2 className="section-title">
                                <PiFlask className="section-icon" />
                                Tech Stack
                            </h2>


                        </div>
                        <div className="tech-category">
                            <h3 className="category-title">Frontend Development</h3>
                            <div className="tag-group">
                                <span className="tag">HTML5</span>
                                <span className="tag">CSS3</span>
                                <span className="tag">JavaScript</span>
                                <span className="tag">Responsive Web Design</span>
                                <span className="tag">Component-Based UI</span>
                            </div>
                        </div>

                        <div className="tech-category">
                            <h3 className="category-title">Frameworks & Libraries</h3>
                            <div className="tag-group">
                                <span className="tag">React.js (Vite)</span>
                                <span className="tag">Node.js</span>
                            </div>
                        </div>

                        <div className="tech-category">
                            <h3 className="category-title">Backend & Database</h3>
                            <div className="tag-group">
                                <span className="tag">PHP</span>
                                <span className="tag">MySQL</span>
                                <span className="tag">JAVA</span>

                            </div>
                        </div>

                        <div className="tech-category">
                            <h3 className="category-title">Tools & Workflow</h3>
                            <div className="tag-group">
                                <span className="tag">Git & GitHub</span>
                                <span className="tag">Visual Studio Code</span>
                                <span className="tag">Figma</span>
                                <span className="tag">Visual Studio</span>
                                <span className="tag">Eclipse</span>
                                <span className="tag">Netbeans</span>
                            </div>
                        </div>

                        <div className="tech-category">
                            <h3 className="category-title">Foundational Skills</h3>
                            <div className="tag-group">
                                <span className="tag">UI Design Basics</span>
                                <span className="tag">API Integration(Learning)</span>
                                <span className="tag">PHP(Intermediate)</span>
                                <span className="tag">Python Learning</span>
                                <span className="tag">Responsive Web Design</span>
                                <span className="tag">AI Integration(Learning)</span>
                            </div>
                        </div>



                    </section>
                </div>

                {/* RIGHT COLUMN */}
                <div className="right-column">
                    {/* EXPERIENCE */}
                    <section className="card">
                        <h2 className="section-title section-animate">
                            <IoBriefcaseOutline className="section-icon" />
                            Experience
                        </h2>

                        <div className="experience-list">

                            {/* EDUCATION */}
                            <div className="exp-item" >
                                <div className="exp-dot active-dot"></div>
                                <div className="exp-content">
                                    <h3 className="exp-title">BS Information Technology - 1st Year</h3>
                                    <p className="exp-company">Bataan Peninsula State University</p>
                                </div>
                                <span className="exp-year">2029</span>
                            </div>
                            <div className="exp-item" >
                                <div className="exp-dot"></div>
                                <div className="exp-content">
                                    <h3 className="exp-title">Science Technology Engineering and Mathematics</h3>

                                    <p className="exp-company">St. Peter of Verona Academy Inc.</p>

                                </div>
                                <span className="exp-year">2025</span>
                            </div>

                            {/* WEB DESIGN & UI/UX */}
                            <div className="exp-item" >
                                <div className="exp-dot"></div>
                                <div className="exp-content">
                                    <h3 className="exp-title">Web Design & UI/UX Practice</h3>
                                    <p className="exp-company">
                                        Practicing UI/UX principles, responsive design, and interactive animations with GSAP, Figma, and Framer.
                                    </p>

                                </div>
                                <span className="exp-year">2026</span>
                            </div>

                            {/* INTERNSHIP – REPLACED */}
                            <div className="exp-item" >
                                <div className="exp-dot"></div>
                                <div className="exp-content">
                                    <h3 className="exp-title">Frontend Developer Intern</h3>
                                    <p className="exp-company">
                                        Certicode
                                    </p>
                                </div>
                                <span className="exp-year">2026</span>
                            </div>
                           
                            {/* CAPSTONE – UPDATED */}
                            <div className="exp-item" >
                                <div className="exp-dot"></div>
                                <div className="exp-content">
                                    <h3 className="exp-title">Full-Stack Web Developer (Project)</h3>
                                    <p className="exp-company">
                                        Online Appointing System for School Records Office
                                    </p>
                                </div>
                                <span className="exp-year">2025</span>
                            </div>
                            {/* MANUAL TESTING EXPERIENCE */}

                            {/* BRANDING & COLLABORATION */}
                            


                            {/* CLOCKEDIN – ADDED */}
                            
                            {/* TECH STACK */}
                            <div className="exp-item" >
                                <div className="exp-dot"></div>
                                <div className="exp-content">
                                    <h3 className="exp-title">Tech Stack & Programming Experience</h3>
                                    <p className="exp-company">
                                        HTML5, CSS3, JavaScript, PHP, Java, MySQL
                                    </p>
                                </div>
                                <span className="exp-year">2025</span>
                            </div>

                            {/* CERTIFICATION */}


                            {/* FOUNDATIONS */}
                            <div className="exp-item">
                                <div className="exp-dot"></div>
                                <div className="exp-content">
                                    <h3 className="exp-title">Programming Foundations</h3>
                                    <p className="exp-company">
                                        Self-learning, online courses, mini-projects
                                    </p>
                                </div>
                                <span className="exp-year">2024</span>
                            </div>

                            {/* START */}
                            <div className="exp-item" >
                                <div className="exp-dot"></div>
                                <div className="exp-content">
                                    <h3 className="exp-title">
                                        Hello World! <PiHandWaving className="wave-icon" />
                                    </h3>
                                    <p className="exp-company">Started learning programming</p>
                                </div>
                                <span className="exp-year">2022</span>
                            </div>

                        </div>
                    </section>
                </div></div>

            {/* NEW HORIZONTAL SECTION */}
            <div className="projects-cert-grid">

                {/* Recent Projects */}
                <section className="card">
                    <div className="section-header">
                        <h2 className="section-title"><MdOutlineDashboard className="section-icon" /> Recent Projects</h2>

                    </div>

                    <div className="project-list">

                        <div className="project-item">
                            <a
                                href="https://github.com/chryslerx7/Coffee-POS-System"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                <h3 className="project-title">Backend</h3>
                                <p className="project-desc">Coffee Shop POS System</p>
                                <span className="project-tag">github.com/chryslerx7/Coffee-POS-System</span>
                            </a>
                        </div>

                        <div className="project-item">
                            <a
                                href="https://github.com/chryslerx7/SPVAI-Appointment-System-for-School-Records"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                <h3 className="project-title">Full-Stack</h3>
                                <p className="project-desc">Online Appointment System for School Records Office</p>
                                <span className="project-tag">github.com/chryslerx7/SPVAI-Appointment-System-for-School-Records</span>
                            </a>
                        </div>

                         <div className="project-item">
                            <a
                                href="tech-it-easy.netlify.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                <h3 className="project-title">Full-Stack</h3>
                                <p className="project-desc">Tech IT Easy (E-Commerce Website) </p>
                                <span className="project-tag">Tech-IT-Easy.netlify.app</span>
                            </a>
                        </div>

                    </div>




                </section>


                {/* Recent Certifications */}
                <section className="card">
                    <div className="section-header">
                        <h2 className="section-title"><MdOutlineVerified className="section-icon" /> Recent Certifications</h2>

                    </div>

                    <div className="cert-list">

                        <div className="cert-item">
                            <a
                                href="https://www.credly.com/badges/cc6c24ae-202b-45fc-97d9-d1038d652f19/public_url"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cert-link"
                            >
                                <h3 className="cert-title">IC3 Digital Literacy Certification</h3>
                                <p className="cert-org">Certiport, a Pearson VUE Business</p>
                            </a>
                        </div>

                        <div className="cert-item">
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cert-link"
                            >
                                <h3 className="cert-title">Legacy Responsive Web Design V8</h3>
                                <p className="cert-org">freeCodeCamp</p>
                            </a>
                        </div>

                        <div className="cert-item">
                            <a
                                href="https://www.freecodecamp.org/certification/klntaglr/javascript-v9"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cert-link"
                            >
                                <h3 className="cert-title">JavaScript</h3>
                                <p className="cert-org">freeCodeCamp</p>
                            </a>
                        </div>


                    </div>
                </section>

            </div>
            <div className="connect-wrapper">
                <section className="card connect-container">
                    <div className="connect-grid">


                        <div className="connect-group">
                            <h3 className="connect-title"><MdOutlineTrackChanges className="icon" /> Goals</h3>

                            <a className="connect-item" href="#" target="_blank">
                                Develop my skills in web development and UI/UX by building user-centered and well-structured web systems.
                            </a>

                            <a className="connect-item" href="#" target="_blank">
                                Gain hands-on experience in development and manual testing while contributing to reliable, real-world web projects.
                            </a>


                        </div>

                        {/* Social Links */}
                        <div className="connect-group">
                            <h3 className="connect-title">
                                <GoPaperclip className="icon" /> Social Links
                            </h3>

                            <a className="connect-item" href="https://www.linkedin.com/in/jhed-chrysler-sarmiento-257666395/" target="_blank" rel="noopener noreferrer">
                                <BsLinkedin className="connect-icon" /> LinkedIn
                            </a>

                            <a className="connect-item" href="https://github.com/chryslerx7" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="connect-icon" /> GitHub
                            </a>

                            <a className="connect-item" href="https://www.facebook.com/chryslerx.0/" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="connect-icon" /> Facebook
                            </a>

                            <a className="connect-item" href="https://www.tiktok.com/@chryslrsrmnt_" target="_blank" rel="noopener noreferrer">
                                <FaTiktok className="connect-icon" /> Tiktok
                            </a>
                        </div>


                        {/* Speaking */}

                        <div className="connect-group contact-box">

                            {/* Title */}
                            <h3 className="connect-title">
                                <AiOutlineMessage className="icon" /> Contact
                            </h3>

                            {/* Card Body */}
                            <div className="contact-card">
                                <p className="connect-desc">
                                  Open to collaborations on web design and development projects.

                                </p>

                                <a className="connect-action">
                                    Get in touch →
                                </a>
                            </div>

                        </div>

                        {/* Contact */}
                        <div className="contact-layout">


                            <div className="contact-links">

                                <a className="contact-item" href="mailto:chryslrosrmnt.com">
                                    <HiOutlineMail className="contact-icon" />
                                    <div className="contact-info">
                                        <span className="contact-title">Email</span>
                                        <span className="contact-sub">chryslrosrmnt@gmail.com</span>
                                    </div>
                                    <span className="contact-arrow">›</span>
                                </a>

                                <a className="contact-item">
                                    <MdPhoneInTalk className="contact-icon" />
                                    <div className="contact-info">
                                        <span className="contact-title">Let’s Talk</span>
                                        <span className="contact-sub">967-432-0177</span>
                                    </div>
                                    <span className="contact-arrow">›</span>
                                </a>

                                <a className="contact-item" href="https://m.me/chryslerx.0/">
                                    <FaFacebookMessenger className="contact-icon" />
                                    <div className="contact-info">
                                        <span className="contact-title">Messenger</span>
                                        <span className="contact-sub">Chat with me</span>
                                    </div>

                                    <span className="contact-arrow">›</span>
                                </a>

                            </div>

                        </div>



                    </div>
                </section>

            </div>

            <section className="card connect-container gallery-section">
                <h2 className="section-title"><FaRegImage className="icon" />Gallery</h2>

                <div className="gallery-scroll" ref={galleryRef}>
                    {[ha, ha1, ha7, ha2, ha3, ha4, ha5, ha6, ha, ha1, ha7, ha2, ha3, ha4, ha5, ha6,].map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            className="gallery-img"
                            alt="Gallery Image"
                            onMouseEnter={() => setPaused(true)}
                            onMouseLeave={() => setPaused(false)}
                        />
                    ))}
                </div>
            </section>

            {/* FOOTER */}
            <footer className="footer">
                <div className="footer-line"></div>

                <p className="footer-text">
                    © {new Date().getFullYear()} Jhed Chrysler Sarmiento — All rights reserved.
                </p>
            </footer>
            {showModal && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content">
                        <img src={selectedCert} alt="Certificate" className="modal-img" />
                    </div>
                </div>
            )}
            <ChatbotPortfolio />

        </div>
    );
}
