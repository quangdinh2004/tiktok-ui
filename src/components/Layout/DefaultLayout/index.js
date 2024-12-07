import style from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

import Header from "../components/Header";
import Slidebar from "./Slidebar";

const cx = classNames.bind(style);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wapper')}>
            <Header />
            <div className={cx('container')}>
                <Slidebar />
                <div className="content">{children}</div>
            </div>

        </div>
    );
}

export default DefaultLayout;