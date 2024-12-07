import style from './Slidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);
function Slidebar() {
    return (
        <div className={cx('wapper')}>
            <h1>slidebar</h1>
        </div>
    );
}

export default Slidebar;