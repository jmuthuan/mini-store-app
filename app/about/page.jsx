import { Red_Hat_Display } from 'next/font/google';
import styles from '@/styles/about.module.css';
import Image from 'next/image';
import avatar from '@/public/avatar.jpg';
import nextjs from '@/public/logos/next.svg';
import css from '@/public/logos/css.svg';
import github from '@/public/logos/github.svg';
import html from '@/public/logos/html.svg';
import jsx from '@/public/logos/jsx.png';
import linkedin from '@/public/logos/linkedin.svg';
import nodejs from '@/public/logos/nodejs.svg';
import react from '@/public/logos/react.png';

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
                            {`The site was developed for mobile devices and it's not optimized for other devices yet.`}
                        </p>
                        <p>
                            {`On the site you'll find three main components:  a search bar, a list for results after pressing 
                            the search button, and a detail product page if you chose any product of the list.`}
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
                            <a href="https://nextjs.org/"><Image className={styles['img-logo']} src={nextjs} alt='next logo' height={48} width={48}/></a>
                            <a href="https://react.dev/"><Image className={styles['img-logo']} src={react} alt='react logo' height={48} width={48}/></a>
                            <a href="https://nodejs.org/en"><Image className={styles['img-logo']} src={nodejs} alt='node logo' height={48} width={48}/></a>
                            <a href="https://react.dev/learn/writing-markup-with-jsx"><Image className={styles['img-logo']} src={jsx} alt='jsx logo' height={48} width={48}/></a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><Image className={styles['img-logo']} src={html} alt='html logo' height={48} width={48}/></a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><Image className={styles['img-logo']} src={css} alt='css logo' height={48} width={48}/></a>
                        </div>
                    </div>
                </section>

                <section className={styles['about-developers']}><span className={styles.span}>Developers Team</span>

                    <div className={styles['about-developers-info']}>
                        <div className={styles['about-developer-avatar-name']}>
                            <Image className={styles['about-avatar']} src={avatar} alt="developer" width={150} height={150}/>
                            <div className={styles['developer-name']}>José Muthuan</div>
                            <div className={styles['developer-titles']}>Full Stack Developer <br />& <br /> Electronic Engineer</div>
                            <div className={styles['developer-social-media']}>
                                <a href='https://www.linkedin.com/in/jos%C3%A9-muthuan/'><Image src={linkedin} alt="link to linkedin" width={32} height={32}/></a>
                                <a href='https://github.com/jmuthuan'><Image src={github} alt="link to github" width={32} height={32}/></a>
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


