import sty from "../styles/footer.module.css";
const phase = [
    {
        text: "Geovani Orsoli",
        repeat: 1
    }
];

export default function Footer() {
    return (
        <footer className={sty.footerbody}>
            <p className={sty.copyText}> Developed by Geovani Orsoli</p>
        </footer>
    );
}
