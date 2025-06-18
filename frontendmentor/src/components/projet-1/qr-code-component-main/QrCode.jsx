import React from "react";
import styles from "./style-qr-code.module.css";
import imageQrCode from "../../../assets/projet-1-qr-code/images/image-qr-code.png";

const QrCode = () => {
    return (
        <>
            <div className={styles["container"]}>
                <main className={styles["content"]}>
                    <div className={styles["image-qr-code"]}>
                        <img src={imageQrCode} alt="image-qr-code" />
                    </div>
                    <div className={styles["content-text"]}>
                        <p className={styles["first-text"]}>
                            Improve your front-end skills by building projects
                        </p>
                        <p className={styles["second-text"]}>
                            Scan the QR code to visit Frontend Mentor and take
                            your coding skills to the next level
                        </p>
                    </div>
                </main>
            </div>
        </>
    );
};

export default QrCode;
