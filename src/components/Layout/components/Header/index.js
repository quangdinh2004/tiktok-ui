import style from './Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import image from '../../../../assets/images';

const cx = classNames.bind(style);

function Header() {
    return (
        <header className={cx('wapper')}>
            <div className={cx('inner')}>
                <img src={image.logo} alt='tiktiok' />
                <div className={cx('search')}>
                    <input placeholder='Tìm kiếm' spellCheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </div>
        </header>
    )

}

export default Header;