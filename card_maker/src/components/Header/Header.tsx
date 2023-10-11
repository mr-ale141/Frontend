import css from "./Header.module.css";

function Header() {
    return (
        <div className={css.header}>
            <div className={css.logo}>
                <span>Card Maker</span>
            </div>
        </div>
    );
}
export default Header;
