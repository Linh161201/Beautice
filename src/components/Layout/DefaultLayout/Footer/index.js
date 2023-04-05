import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
const cx = classNames.bind(styles);

function Footer({ children }) {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('content')}>
                    <div className={cx('contact')}>
                        <img
                            className={cx('mb2')}
                            src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/header-builder-logo.png"
                            alt="logo"
                        />
                        <p className={cx('text', 'mb2')}>
                            <strong>Beautice </strong>
                            is a Beauty Clinic WordPress Theme.
                        </p>

                        <p className={cx('text-small')}>Baker Steet 101, NY, United States.</p>
                        <p className={cx('text-small')}>
                            <span className={cx('pr5')}>
                                <Link to="" className={cx('link')}>
                                    +521 569 8966
                                </Link>
                            </span>
                            <span className={cx('pr5')}>
                                <Link to="" className={cx('link')}>
                                    mail@company.com.
                                </Link>
                            </span>
                        </p>
                    </div>
                    <div className={cx('page-info')}>
                        <div className={cx('page')}>
                            <h3 className={cx('text-large', 'mb1-5')}>Pages</h3>
                            <ul>
                                <li className={cx('mb1-5')}>
                                    <Link to="/" className={cx('text')}>
                                        <span className={cx('pr1-5')}>
                                            <FontAwesomeIcon className={cx('link')} icon={faCircleArrowRight} />
                                        </span>
                                        <span className={cx('link')}>Home</span>
                                    </Link>
                                </li>
                                <li className={cx('mb1-5')}>
                                    <Link to="/about" className={cx('text')}>
                                        <span className={cx('pr1-5')}>
                                            <FontAwesomeIcon className={cx('link')} icon={faCircleArrowRight} />
                                        </span>
                                        <span className={cx('link')}>About</span>
                                    </Link>
                                </li>
                                <li className={cx('mb1-5')}>
                                    <Link to="/service" className={cx('text')}>
                                        <span className={cx('pr1-5')}>
                                            <FontAwesomeIcon className={cx('link')} icon={faCircleArrowRight} />
                                        </span>
                                        <span className={cx('link')}>Service</span>
                                    </Link>
                                </li>
                                <li className={cx('mb1-5')}>
                                    <Link to="/gallery" className={cx('text')}>
                                        <span className={cx('pr1-5')}>
                                            <FontAwesomeIcon className={cx('link')} icon={faCircleArrowRight} />
                                        </span>
                                        <span className={cx('link')}>Gallery</span>
                                    </Link>
                                </li>
                                <li className={cx('mb1-5')}>
                                    <Link to="/team" className={cx('text')}>
                                        <span className={cx('pr1-5')}>
                                            <FontAwesomeIcon className={cx('link')} icon={faCircleArrowRight} />
                                        </span>
                                        <span className={cx('link')}>Team</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('info')}>
                            <h3 className={cx('text-large', 'mb1-5')}>Infomation</h3>
                            <ul>
                                <li className={cx('mb1-5')}>
                                    <Link to="/" className={cx('text')}>
                                        <span className={cx('pr1-5')}>
                                            <FontAwesomeIcon className={cx('link')} icon={faCircleArrowRight} />
                                        </span>
                                        <span className={cx('link')}>Terms & conditions</span>
                                    </Link>
                                </li>
                                <li className={cx('mb1-5')}>
                                    <Link to="/" className={cx('text')}>
                                        <span className={cx('pr1-5')}>
                                            <FontAwesomeIcon className={cx('link')} icon={faCircleArrowRight} />
                                        </span>
                                        <span className={cx('link')}>Privacy policy</span>
                                    </Link>
                                </li>
                                <li className={cx('mb1-5')}>
                                    <Link to="/blog" className={cx('text')}>
                                        <span className={cx('pr1-5')}>
                                            <FontAwesomeIcon className={cx('link')} icon={faCircleArrowRight} />
                                        </span>
                                        <span className={cx('link')}>Blog</span>
                                    </Link>
                                </li>
                                <li className={cx('mb1-5')}>
                                    <Link to="/contact" className={cx('text')}>
                                        <span className={cx('pr1-5')}>
                                            <FontAwesomeIcon className={cx('link')} icon={faCircleArrowRight} />
                                        </span>
                                        <span className={cx('link')}>Contact</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Arrow up */}
                    <div className={cx('arrow-top')}>
                        <Link to={{ children }}>
                            <div className={cx('bg-arrow')}>
                                <FontAwesomeIcon icon={faArrowUp} />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={cx('inner')}>
                <div className={cx('footer')}>
                    <div className={cx('footer-left')}>
                        <div className={cx('icon-socical')}>
                            <div>
                                <FontAwesomeIcon className={cx('pink-icon')} icon={faFacebookF} />
                            </div>
                            <div>
                                <FontAwesomeIcon className={cx('pink-icon')} icon={faTwitter} />
                            </div>
                            <div>
                                <FontAwesomeIcon className={cx('pink-icon')} icon={faLinkedinIn} />
                            </div>
                            <div>
                                <FontAwesomeIcon className={cx('pink-icon')} icon={faYoutube} />
                            </div>
                            <div>
                                <FontAwesomeIcon className={cx('pink-icon')} icon={faInstagram} />
                            </div>
                        </div>
                    </div>
                    <div className={cx('footer-right')}>
                        <p>© AltDesain Studio 2021 – All right reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
