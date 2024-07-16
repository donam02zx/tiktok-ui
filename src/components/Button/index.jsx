import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from '../Button/Button.module.scss';

const cx = classNames.bind(styles)

function Button({to, href, leftIcon, rightIcon, outline=false, text=false, rounded=false, disabled=false, small=false, large=false, primary, children, onClick, className, ...passProps}) {
    let Comp = 'button'

    const props ={
        onClick,
        ...passProps
    }

    // Remove event listener when button disabled
    if(disabled){
        Object.keys(props).forEach(key=>{
            if(key.startsWith('on') && typeof props[key] === 'function'){
                delete props[key];
            }
        })
    }

    if(to){
        props.to=to
        Comp = Link
    }else if(href){
        props.href = href
        Comp = 'a'
    }

    const classes = cx('wrapper', {
        primary,
        rounded,
        disabled,
        outline,
        text,
        small,
        large,
        [className]: className,
    })

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    )
}

export default Button;