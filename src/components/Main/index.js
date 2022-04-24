
import styles from './style.module.scss';

import {map} from '../../assets/index';

const Main = () => {

    return(
        <main>
            <section>
                <div className={styles.contact_wrapper}>
                    <p className={styles.contact_heading}>
                        We are always in touch and will be happy to resolve any of your questions.
                    </p>
                    <div className={styles.form_wrapper}>
                        <img className={styles.form_map} src={map} alt='map' />
                        <form className={styles.form}>
                            <input />
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main;
