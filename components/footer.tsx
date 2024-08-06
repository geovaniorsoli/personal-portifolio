import sty from "../styles/footer.module.css";
import { Link } from "@nextui-org/link";
const phase = [
    {
        text: "Geovani Orsoli",
        repeat: 1
    }
];

export default function Footer() {
    return (
        <footer className={sty.footerbody}>
            <h1 className="text-small"> Developed by <Link className="text-small" underline="always" href="/contato"> Geovani Orsoli </Link> </h1>
        </footer>
    );
}
