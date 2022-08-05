import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import styles from './SuperButton.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
}

export const SuperButton: React.FC<SuperButtonPropsType> = (props) => {

    const {
        red,
        className
    } = props

    const finalClassName = `${red ? styles.red : styles.default} ${className} ${styles.common_class}`

    return (
        <button
            className={finalClassName}
            {...props}
        />
    )
}
