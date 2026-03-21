// src/components/Footer.tsx
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="mt-0 border-t border-border py-6 text-center text-xs text-meta">
            <p>© 2026 Antonio Coppola</p>
            <p className="mt-1">
                <Link to="/privacy" className="hover:underline">
                    Privacy Policy
                </Link>{" "}
                |{" "}
                <Link to="/impressum" className="hover:underline">
                    Impressum
                </Link>
            </p>
        </footer>
    );
};

export default Footer;