function Footer() {
    return (
        <footer
            style={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "20px",
                backgroundColor: "#f5f5f5",
                textAlign: "center",
                zIndex: 100,
                boxShadow: "0 -2px 5px rgba(0,0,0,0.1)",
            }}
        >
            <p>© {new Date().getFullYear()} Jonica | Frontend Mentor</p>
        </footer>
    );
}

export default Footer;
