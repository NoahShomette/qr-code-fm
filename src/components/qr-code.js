import styles from './qr-code.module.css'
import qrCode from '../images/image-qr-code.png'

export default function QrCode() {
    return (
        <div className={styles.qrCard}>
            <div className={styles.qrCard__qrCode}>
                <img className={styles.qrCard__qrCode} src={qrCode} alt="Qr code for web link: frontendmentor.io"/>
            </div>
            <div className={styles.qrCard__qrText}>
                <h2 className={styles.qrCard__headerText}>
                    Improve your front-end skills by building projects
                </h2>
                <p className={styles.qrCard__bodyText}> Scan the QR code to visit Frontend Mentor
                    and take your coding skills to the next level
                </p>
            </div>
        </div>
    );
}