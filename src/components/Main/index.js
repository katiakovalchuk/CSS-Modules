import {Link} from 'react-router-dom';

import ContactButton from '../Contact-Button';
import {
    line,
    map,
    marker,
    messageLogoStyled,
    messengerLogo,
    phoneLogoStyled,
    telegramLogo,
    viberLogo,
    whatsAppLogoStyled
} from '../../assets/index';

import styles from './style.module.scss';

const Main = () => {

    return (
        <main className={styles.main}>
            <section className={styles.contact}>
                <p className={styles.contact_heading}>
                    We are always in touch and will be happy to resolve any of your questions.
                </p>
                <div className={styles.contact_items}>
                    <div className={styles.contact_map}>
                        <img className={styles.contact_marker} src={marker} alt='marker'/>
                        <img className={styles.contact_map_image} src={map} alt='map'/>
                    </div>
                    <form className={styles.contact_form}>
                        <div className={styles.contact_form_inner}>
                            <h2 className={styles.contact_form_heading}>Contact us</h2>
                            <input className={styles.input} type='text' placeholder='Name' required/>
                            <input className={styles.input} type='tel' placeholder='Phone' required/>
                            <input className={styles.input} type='email' placeholder='E-mail' required/>
                            <textarea className={`${styles.input} ${styles.textarea}`} placeholder='Message' required/>
                            <button className={styles.btn} type='submit'>Send</button>
                            <div className={styles.contact_bottom_text}>
                                <Link className={styles.contact_link} to='#'>Privacy policy</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <section className={styles.contacts}>
                <img className={styles.line} src={line} alt='Line'/>
                <div className={styles.contacts_inner}>
                    <div className={styles.contacts_element}>
                        <h3 className={styles.contacts_element_heading}>Phone</h3>
                        <ContactButton
                            location='tel:+34965020784'
                            contactItem='+34 965 020784'
                            src={phoneLogoStyled}
                            fontColor='grey'
                        />
                    </div>
                    <div className={`${styles.contacts_element} ${styles.contacts_element_wide}`}>
                        <h3 className={styles.contacts_element_heading}>Office in Spain</h3>
                        <p className={styles.contacts_element_text}>Centro Comercial Playa Flamenca C / Niagara, 63
                            Local 60/PB, first floor, 03189 - Orihuela
                            Costa (Alicante), Spain
                        </p>
                    </div>
                    <div className={styles.contacts_element}>
                        <h3 className={styles.contacts_element_heading}>E-mail</h3>
                        <ContactButton
                            location='mailto:sales@wtgspain.com'
                            contactItem='sales@wtgspain.com'
                            src={messageLogoStyled}
                            fontColor='grey'
                        />
                    </div>
                </div>
                <div className={styles.contacts_social}>
                    <img className={styles.line} src={line} alt='Line'/>
                    <h3 className={styles.contacts_element_heading}>We are online</h3>
                    <div className={styles.contacts_items}>
                        <div className={styles.contacts_item}>
                            <ContactButton
                                location='https://wa.me/+34965020784'
                                contactItem='WhatsApp'
                                src={whatsAppLogoStyled}
                                fontColor='grey'
                                logoBiggerSize={true}
                            />
                        </div>
                        <div className={styles.contacts_item}>
                            <ContactButton
                                location='viber://chat?number=%2B34965020784'
                                contactItem='Viber'
                                src={viberLogo}
                                fontColor='grey'
                                logoBiggerSize={true}
                            />
                        </div>
                        <div className={styles.contacts_item}>
                            <ContactButton
                                location='https://www.messenger.com/'
                                contactItem='Messenger'
                                src={messengerLogo}
                                fontColor='grey'
                                logoBiggerSize={true}
                            />
                        </div>
                        <div className={styles.contacts_item}>
                            <ContactButton
                                location='https://web.telegram.org'
                                contactItem='Telegram'
                                src={telegramLogo}
                                fontColor='grey'
                                logoBiggerSize={true}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main;
