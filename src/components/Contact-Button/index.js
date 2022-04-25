import {Link} from 'react-router-dom';

import styles from '../Contact-Button/style.module.scss';

const ContactButton = ({location, contactItem, src, fontColor, logoBiggerSize}) => {
    const logoStyle = logoBiggerSize ? `${styles.contact_logo} ${styles.contact_logo_bigger_size}` : styles.contact_logo

    return (
        <Link
            className={styles.contact_link}
            to='#'
            onClick={e => {
                window.open(location, '_blank');
                e.preventDefault();
            }}
        >
            <img className={logoStyle} src={src} alt='logo'/>
            <div className={`${styles.contact_text} ${styles[fontColor]}`}>{contactItem}</div>
        </Link>
    )
}

export default ContactButton;
