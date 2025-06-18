import React from "react";
import styles from "./style-home.module.css";
import { Link } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const pages = [
    {
        id: 1,
        nomProjet: "projet1-qr-code",
        description: "QR Code Component",
    },
];

const HomePage = () => {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <ul className={styles.liste}>
                    {pages.map((page) => (
                        <li key={page.id} className={styles.item}>
                            <p>projet N° {page.id}</p>
                            <Link
                                to={`/${page.nomProjet}`}
                                className={styles.link}
                            >
                                {page.description}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <Footer />
        </>
    );
};

export default HomePage;
