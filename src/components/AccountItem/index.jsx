import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')}  src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/047ecca2ac6e59782a511f1919d46db4.jpeg?lk3s=a5d48078&nonce=46149&refresh_token=06b40172fa2557fa8c6e54cbfb7dc52b&x-expires=1721289600&x-signature=AfIEYc%2BzplHm06wL1T8fWCPeTzg%3D&shp=a5d48078&shcp=81f88b70" alt="" />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>Vi Hiền Đặng</span>
                    <FontAwesomeIcon className={cx('check')}  icon={faCircleCheck} />
                </h4>
                <span className={cx('username')}>@vihiendang</span>
            </div>
        </div>
    )
}

export default AccountItem;