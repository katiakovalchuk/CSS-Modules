import {Link} from 'react-router-dom';

import ContactButton from '../Contact-Button';
import {heartLogo, langLogo, messageLogo, phoneLogo, primaryLogo, whatsAppLogo} from '../../assets/index';

import styles from './style.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header_inner}>
                <div className={styles.contact_wrapper}>
                    <div className={styles.contact_info}>
                        <ContactButton
                            location='mailto:sales@wtgspain.com'
                            contactItem='sales@wtgspain.com'
                            src={messageLogo}
                        />
                        <ContactButton
                            location='tel:+34965020784'
                            contactItem='+34 965 020784'
                            src={phoneLogo}
                        />
                        <ContactButton
                            location='https://wa.me/+34965020784'
                            contactItem='WhatsApp'
                            src={whatsAppLogo}
                        />
                    </div>
                    <div className={styles.logo}>
                        <img className={styles.heartLogo} src={heartLogo} alt='Heart logo'/>
                        <img className={styles.langLogo} src={langLogo} alt='Language logo'/>
                    </div>
                </div>
            </div>
            <div className={styles.navigation_wrapper}>
                <div className={styles.navigation}>
                    <Link to='/'><img className={styles.primary_logo} src={primaryLogo} alt='Logo'/></Link>
                    <div className={styles.menu_wrapper}>
                        <nav className={styles.menu}>
                            <ul className={styles.menu_list}>
                                <li className={styles.menu_item}>
                                    <Link to='#' className={styles.menu_link}>Cities</Link>
                                </li>
                                <li className={styles.menu_item}>
                                    <Link to='#' className={styles.menu_link}>Properties</Link>
                                </li>
                                <li className={styles.menu_item}>
                                    <Link to='#' className={styles.menu_link}>Blog</Link>
                                </li>
                                <li className={styles.menu_item}>
                                    <Link to='#' className={styles.menu_link}>Video</Link>
                                </li>
                                <li className={styles.menu_item}>
                                    <Link to='#' className={styles.menu_link}>Contacts</Link>
                                </li>
                            </ul>
                        </nav>
                        <div>
                            <ul className={styles.menu_list}>
                                <li className={styles.menu_item}>
                                    <Link to='#' className={styles.menu_link}>Log in</Link>
                                </li>
                                <li className={styles.menu_item}>
                                    <Link to='#' className={styles.menu_link}> Sign up</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.image}/>
        </header>
    )
}


export default Header;
