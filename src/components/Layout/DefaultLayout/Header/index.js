import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                {/* Logo */}
                <Link to="/">
                    <img
                        className={cx('image')}
                        src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/header-builder-logo-common.png"
                        alt="logo"
                    />
                </Link>
                {/* Navigation */}
                <nav className={cx('navi')}>
                    <Link className={cx('text', 'blue')} to="/">
                        Home+
                    </Link>
                    <Link className={cx('text')} to="/about">
                        About
                    </Link>
                    <Link className={cx('text')} to="/service">
                        Service
                    </Link>
                    <Link className={cx('text')} to="/gallery">
                        Gallery
                    </Link>
                    <Link className={cx('text')} to="/blog">
                        Blog
                    </Link>
                </nav>
                {/* Button */}
                <div className={cx('btn')}>
                    <Link className={cx('link')} to="/contact">
                        <button className={cx('btn-contact')}>Contact</button>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
