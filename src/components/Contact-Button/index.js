import {Link} from 'react-router-dom';

import styles from '../Contact-Button/style.module.scss';

const ContactButton = ({location, contactItem, src}) => {
    return(
        <Link
            className={styles.contact_link}
            to='#'
            onClick={e => {
                window.open(location, '_blank');
                e.preventDefault();
            }}
        >
            <img className={styles.contact_logo} src={src} alt='logo' />
            <div className={styles.contact_text}>{contactItem}</div>
        </Link>
    )
}

export default ContactButton;
