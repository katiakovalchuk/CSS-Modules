import {Link} from 'react-router-dom';

import ContactButton from '../Contact-Button';
import {
    facebookLogo,
    footerLogo,
    footerMarker,
    footerPhoneLogo,
    instagramLogo,
    linkedinLogo,
    messageLogo,
    questionLogo,
    star,
    youtubeLogo
} from '../../assets/index';

import styles from './style.module.scss';
import header_styles from '../Header/style.module.scss';


const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div className={styles.footer_inner}>
                <img className={styles.footer_logo} src={footerLogo} alt='logo'/>
                <div className={styles.footer_text}>
                    <span className={styles.font_bold}>the best</span> real estate in Spain
                </div>
                <nav className={header_styles.menu}>
                    <ul className={`${header_styles.menu_list} ${styles.list}`}>
                        <li className={header_styles.menu_item}>
                            <Link to='#' className={`${header_styles.menu_link} ${styles.link}`}>All cities</Link>
                        </li>
                        <li className={header_styles.menu_item}>
                            <Link to='#' className={`${header_styles.menu_link} ${styles.link}`}>Blog</Link>
                        </li>
                        <li className={header_styles.menu_item}>
                            <Link to='#' className={`${header_styles.menu_link} ${styles.link}`}>Video</Link>
                        </li>
                        <li className={header_styles.menu_item}>
                            <Link to='#' className={`${header_styles.menu_link} ${styles.link}`}>Contacts</Link>
                        </li>
                    </ul>
                </nav>
                <div className={styles.footer_info}>
                    <div className={styles.footer_contacts}>
                        <h2 className={styles.footer_heading}>Contacts:</h2>
                        <ContactButton
                            location='tel:+34965020784'
                            contactItem='+34 (965) 020 - 784'
                            src={footerPhoneLogo}
                        />
                        <ContactButton
                            location='mailto:sales@wtgspain.com'
                            contactItem='sales@wtgspain.com'
                            src={messageLogo}
                        />
                        <div className={styles.address}>
                            <img className={styles.footer_marker} src={footerMarker} alt='logo'/>
                            <div className={styles.address_text}>
                                Centro Comercial «Playa Flamenca» C/ Niagara, 63 Local 60/PB, first floor,
                                03189 - Orihuela Costa (Alicante), Spain
                            </div>
                        </div>
                        <div className={styles.rating}>
                            <div>Rating 4.9/5:</div>
                            <div>
                                <img className={styles.star} src={star} alt='star'/>
                                <img className={styles.star} src={star} alt='star'/>
                                <img className={styles.star} src={star} alt='star'/>
                                <img className={styles.star} src={star} alt='star'/>
                                <img className={styles.star} src={star} alt='star'/>
                            </div>
                            <div className={styles.votes}>820 votes</div>
                        </div>
                    </div>
                    <div className={styles.type}>
                        <h2 className={styles.footer_heading}>Type:</h2>
                        <div>Appartaments</div>
                        <div>Penthousses</div>
                        <div>Townhouses</div>
                        <div>Commercial</div>
                        <div>Bungalows</div>
                        <div>Duplexes</div>
                        <div>Villas</div>
                    </div>
                    <div className={styles.footer_follow_us}>
                        <h2 className={styles.footer_heading}>Follow us:</h2>
                        <div className={styles.footer_follow_items}>
                            <div className={styles.footer_follow_item}>
                                <ContactButton
                                    location='https://uk-ua.facebook.com/'
                                    contactItem='Facebook'
                                    src={facebookLogo}
                                    logoBiggerSize={true}
                                />
                            </div>
                            <div className={styles.footer_follow_item}>
                                <ContactButton
                                    location='https://www.youtube.com/'
                                    contactItem='Youtube'
                                    src={youtubeLogo}
                                    logoBiggerSize={true}
                                />
                            </div>
                            <div className={styles.footer_follow_item}>
                                <ContactButton
                                    location='https://www.instagram.com/'
                                    contactItem='Instagram'
                                    src={instagramLogo}
                                    logoBiggerSize={true}
                                />
                            </div>
                            <div className={styles.footer_follow_item}>
                                <ContactButton
                                    location='https://ua.linkedin.com/'
                                    contactItem='Linkedin'
                                    src={linkedinLogo}
                                    logoBiggerSize={true}
                                />
                            </div>
                        </div>
                        <div className={styles.subscribe}>Subscribe to new objects
                            <img className={styles.questionLogo} src={questionLogo} alt='logo'/>
                            <form className={styles.footer_form}>
                                <input className={styles.form_input} type='email' placeholder='Your email'/>
                                <button className={styles.form_btn}>Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
                <p className={styles.footer_bottom}>The company "WTG Spain" specializes in the investment and sale of
                    real estate in Spain, and the
                    provision of legal and consulting services. All rights reserved. "WTG Spain" - The Best Real
                    Estate in Spain. © Copyright 2007 - 2020.
                </p>
            </div>
        </footer>
    )
}

export default Footer;
