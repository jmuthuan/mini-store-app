import { Red_Hat_Display } from 'next/font/google';
import styles from '@/styles/about.module.css';

const red_hat = Red_Hat_Display({
    weight: ['400', '700'],
    subsets: ['latin'],
})

const About = () => {

    return (
        <main className={`${red_hat.className} ${styles.main}`}>
            <div className={styles['about-page-wrapper']}>
                <section className={styles['about-page']}><span className={styles.span}>About Page</span>
                    <div className="about-page-info">
                        <p>
                            This site was created as a technical challenge
                            from <a href='https://github.com/midudev/pruebas-tecnicas/blob/main/pruebas/02-bazar-universal/README.md'>
                                @midudev</a>.
                        </p>
                        <p>
                            The site was developed for mobile devices and it's not optimized for other devices yet.
                        </p>
                        <p>
                            On the site you'll find three main components:  a search bar, a list for results after pressing 
                            the search button, and a detail product page if you chose any product of the list.
                        </p>
                        <p>
                            Hope you enjoy it!!!
                        </p>
                    </div>
                </section>

                <section className={styles['about-technoligies']}><span className={styles.span}>Technologies</span>
                    <div className={styles['about-technologies-info']}>
                        <p>
                            This site was built using Next.js (React) and Node.js with Express.js. In addition, JSX, HTML and CSS were used.
                        </p>

                        <div className={styles['about-technologies-logos']}>
                            <a href="https://nextjs.org/"><img className={styles['img-logo']} src="../logos/next.svg" alt='next logo' /></a>
                            <a href="https://react.dev/"><img className={styles['img-logo']} src="../logos/react.png" alt='react logo' /></a>
                            <a href="https://nodejs.org/en"><img className={styles['img-logo']} src="../logos/nodejs.svg" alt='node logo' /></a>
                            <a href="https://react.dev/learn/writing-markup-with-jsx"><img className={styles['img-logo']} src="../logos/jsx.png" alt='jsx logo' /></a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img className={styles['img-logo']} src="../logos/html.svg" alt='html logo' /></a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img className={styles['img-logo']} src="../logos/css.svg" alt='css logo' /></a>
                        </div>
                    </div>
                </section>

                <section className={styles['about-developers']}><span className={styles.span}>Developers Team</span>

                    <div className={styles['about-developers-info']}>
                        <div className={styles['about-developer-avatar-name']}>
                            <img className={styles['about-avatar']} src="../avatar.jpg" alt="developer" />
                            <div className={styles['developer-name']}>José Muthuan</div>
                            <div className={styles['developer-titles']}>Full Stack Developer <br />& <br /> Electronic Engineer</div>
                            <div className={styles['developer-social-media']}>
                                <a href='https://www.linkedin.com/in/jos%C3%A9-muthuan/'><img src="../logos/linkedin.svg" alt="link to linkedin" /></a>
                                <a href='https://github.com/jmuthuan'><img src="../logos/github.svg" alt="link to github" /></a>
                            </div>
                        </div>
                        <div className={styles['about-developers-person']}>
                            <p>I am an Electronic Engineer with years of experience in industrial maintenance
                                management. I always liked the programming environment: from programming microcontrollers in assembler,
                                industrial PLCs in various languages, to software development. A few years ago I began to explore in
                                languages like Java, mobile development with Android Studio and web development,
                                always learning new tools, libraries and frameworks.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </main>

    )
}

export default About;


