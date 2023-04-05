import { Link } from 'react-router-dom';
import style from './Home2.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

function Home2() {
    return (
        <>
            <div className={cx('background')}></div>
            <div className={cx('wrapper')}>
                <div className={cx('content')}>
                    <div className={cx('main-slider')}>
                        <div className={cx('left')}>
                            <h1 className={cx('title')}>Your beauty center place</h1>
                            <p className={cx('description')}>
                                It is a long established fact that a reader will be by the readable content of a page.
                            </p>
                            <div className={cx('btn-01')}>
                                <Link className={cx('link')} to="/">
                                    <button className={cx('btn-contact')}>More Details</button>
                                </Link>
                            </div>
                        </div>
                        <div className={cx('right')}>
                            <img
                                src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/Frame-1.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home2;
