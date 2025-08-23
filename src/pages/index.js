import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import styles from './index.module.css';

// Dark Mode Toggle Component
function DarkModeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check for saved theme preference or default to light mode
        const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
        const prefersDark = typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)').matches : false;
        const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

        setIsDark(initialTheme === 'dark');
        if (typeof document !== 'undefined') {
            document.documentElement.setAttribute('data-theme', initialTheme);
            // Also set on body for full coverage
            document.body.setAttribute('data-theme', initialTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = isDark ? 'light' : 'dark';
        setIsDark(!isDark);
        if (typeof document !== 'undefined') {
            document.documentElement.setAttribute('data-theme', newTheme);
            // Also set on body for full coverage
            document.body.setAttribute('data-theme', newTheme);
        }
        if (typeof window !== 'undefined') {
            localStorage.setItem('theme', newTheme);
        }
    };

    return (
        <button
            className={styles.darkModeToggle}
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
            <span className={styles.toggleIcon}>
                {isDark ? '☀️' : '🌙'}
            </span>
        </button>
    );
}

// Container Component
function Container({ children, className = '' }) {
    return (
        <div className={`${styles.container} ${className}`}>
            {children}
        </div>
    );
}

// Hero Section Component
function HeroSection() {
    return (
        <div className={styles.heroSection} id="home">
            <div className={styles.heroBackground}>
                <div className={styles.heroBlur1}></div>
                <div className={styles.heroBlur2}></div>
            </div>
            <DarkModeToggle />
            <Container>
                <div className={styles.heroContent}>
                    <div className={styles.heroInner}>
                        <div className={styles.heroLogo}>
                            <img
                                src="./img/logo.svg"
                                alt="Dev-Rebase Logo"
                                className={styles.logoImage}
                            />
                        </div>
                        <h1 className={styles.heroTitle}>
                            Dev-<span className={styles.heroTitleAccent}>Rebase</span>
                        </h1>
                        <p className={styles.heroDescription}>
                            Collection of short guides to help developers learn about modern software development practices covering essential topics that are commonly expected in today's tech industry, especially when working at international companies or applying for remote positions.
                        </p>
                        <div className={styles.heroButtons}>
                            <Link to="/docs" className={styles.heroPrimaryButton}>
                                <span className={styles.buttonText}>Start Reading</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

// Topics Component
function Topics() {
    const topics = [
        {
            title: "Core Skills",
            description: "Essential technical skills that every developer needs including Web Development, Git, and Testing fundamentals.",
            icon: "🎯",
            link: "/docs/web"
        },
        {
            title: "Deployment & Production",
            description: "Tools and practices for deploying applications including Containerization, CI/CD, and Observability.",
            icon: "🚀",
            link: "/docs/containerization"
        },
        {
            title: "Community & Growth",
            description: "Connect with others and build experience through Open Source, Mentorship, and Global Communities.",
            icon: "🤝",
            link: "/docs/open-source"
        }
    ];

    return (
        <Container>
            <div className={styles.featuresHeader}>
                <h2 className={styles.featuresTitle}>
                    What Topics Are Covered?
                </h2>
                <p className={styles.featuresDescription}>
                </p>
            </div>
            <div className={styles.featuresGrid}>
                {topics.map((topic, index) => (
                    <div key={index} className={styles.featureCard}>
                        <div className={styles.featureCardInner}>
                            <div className={styles.featureIcon}>
                                {topic.icon}
                            </div>
                            <div className={styles.featureContent}>
                                <h5 className={styles.featureTitle}>
                                    {topic.title}
                                </h5>
                                <p className={styles.featureDescription}>
                                    {topic.description}
                                </p>
                            </div>
                            <Link to={topic.link} className={styles.featureLink}>
                                <span className={styles.featureLinkText}>Read more</span>
                                <span className={styles.featureArrow}>→</span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
}

// For Who Component
function ForWho() {
    return (
        <Container>
            <div className={styles.statsContent}>
                <div className={styles.statsImage}>
                    <img
                        src="./img/undraw_programming_65t2.png"
                        alt="Programming illustration"
                        loading="lazy"
                        className={styles.forWhoImage}
                    />
                </div>
                <div className={styles.statsText}>
                    <h2 className={styles.statsTitle}>
                        For Who?
                    </h2>
                    <p className={styles.statsDescription}>
                        This guide targets developers who can already program but want to learn modern industry practices and methodologies.
                    </p>
                    <div className={styles.statsFeatures}>
                        <div className={styles.statsFeature}>
                            <div className={styles.statsFeatureIcon}>👨‍💻</div>
                            <div className={styles.statsFeatureContent}>
                                <h3 className={styles.statsFeatureTitle}>Experienced Developers</h3>
                                <p className={styles.statsFeatureText}>Developers and CS graduates with programming knowledge.</p>
                            </div>
                        </div>
                        <div className={styles.statsFeature}>
                            <div className={styles.statsFeatureIcon}>🏢</div>
                            <div className={styles.statsFeatureContent}>
                                <h3 className={styles.statsFeatureTitle}>Industry Professionals</h3>
                                <p className={styles.statsFeatureText}>Frontend, backend, or mobile engineers.</p>
                            </div>
                        </div>
                        <div className={styles.statsFeature}>
                            <div className={styles.statsFeatureIcon}>🌍</div>
                            <div className={styles.statsFeatureContent}>
                                <h3 className={styles.statsFeatureTitle}>International Aspirants</h3>
                                <p className={styles.statsFeatureText}>Anyone seeking modern development practices for global companies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

// How to Contribute Component
function HowToContribute() {
    return (
        <Container>
            <div className={styles.contributeHeader}>
                <h2 className={styles.contributeTitle}>How to Contribute?</h2>
                <p className={styles.contributeDescription}>
                    This is an open source project, and anyone is welcome to contribute! If you find a topic that is missing, contains errors, or could be improved, please feel free to get involved.
                </p>
            </div>
            <div className={styles.contributeGrid}>
                <div className={styles.contributeCard}>
                    <div className={styles.contributeIcon}>🐛</div>
                    <h3 className={styles.contributeCardTitle}>Report Issues</h3>
                    <p className={styles.contributeCardDescription}>
                        Found an error or missing information? Open an issue to let us know.
                    </p>
                    <Link to="https://github.com/dev-rebase/dev-rebase.github.io/issues" className={styles.contributeLink}>
                        Open Issue →
                    </Link>
                </div>
                <div className={styles.contributeCard}>
                    <div className={styles.contributeIcon}>✨</div>
                    <h3 className={styles.contributeCardTitle}>Improve Content</h3>
                    <p className={styles.contributeCardDescription}>
                        Submit pull requests to improve existing guides or add new topics.
                    </p>
                    <Link to="https://github.com/dev-rebase/dev-rebase.github.io/pulls" className={styles.contributeLink}>
                        Submit PR →
                    </Link>
                </div>
                <div className={styles.contributeCard}>
                    <div className={styles.contributeIcon}>💡</div>
                    <h3 className={styles.contributeCardTitle}>Request Topics</h3>
                    <p className={styles.contributeCardDescription}>
                        Have an idea for a new guide? Create an issue to request it.
                    </p>
                    <Link to="https://github.com/dev-rebase/dev-rebase.github.io/issues/new" className={styles.contributeLink}>
                        Request Topic →
                    </Link>
                </div>
            </div>
        </Container>
    );
}

// Footer Component
function Footer() {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.footerContent}>
                    <div className={styles.footerSection}>
                        <div className={styles.footerBrand}>
                            <h3 className={styles.footerBrandTitle}>Dev-Rebase</h3>
                        </div>
                    </div>

                    <div className={styles.footerSection}>
                        <h4 className={styles.footerSectionTitle}>Quick Links</h4>
                        <ul className={styles.footerLinks}>
                            <li><Link to="/docs" className={styles.footerLink}>Getting Started</Link></li>
                            <li><Link to="/docs/web" className={styles.footerLink}>Core Skills</Link></li>
                            <li><Link to="/docs/containerization" className={styles.footerLink}>Deployment & Production</Link></li>
                            <li><Link to="/docs/mentorship" className={styles.footerLink}>Community & Growth</Link></li>
                        </ul>
                    </div>

                    <div className={styles.footerSection}>
                        <h4 className={styles.footerSectionTitle}>Community</h4>
                        <ul className={styles.footerLinks}>
                            <li>
                                <a
                                    href="https://github.com/dev-rebase/dev-rebase.github.io"
                                    className={styles.footerLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/ghanem-mhd/"
                                    className={styles.footerLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <div className={styles.footerBottomContent}>
                        <p className={styles.footerCopyright}>
                            © {new Date().getFullYear()} Dev-Rebase. Licensed under CC BY-SA 4.0.
                        </p>
                        <p className={styles.footerCredit}>
                            Created by <a
                                href="https://www.linkedin.com/in/ghanem-mhd/"
                                className={styles.footerCreditLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Mohammad Ghanem
                            </a>
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

// Main Test Page Component
export default function TestPage() {
    return (
        <>
            <Head>
                <title>Dev-Rebase</title>
                <meta name="description" content="Collection of short guides to help developers learn about modern software development practices" />
            </Head>
            <div>
                <main className={styles.main}>
                    <HeroSection />
                    <ForWho />
                    <Topics />
                    <HowToContribute />
                </main>
                <Footer />
            </div>
        </>
    );
}