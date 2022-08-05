import React, {ChangeEvent, KeyboardEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";
import styles from './SuperInput.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperInputPropsType = DefaultInputPropsType & {
    onChangeText: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
}

export const SuperInput = (props: SuperInputPropsType) => {

    const {
        type,
        onChange,
        onChangeText,
        onKeyPress,
        onEnter,
        error,
        className,
        spanClassName,
    } = props


    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange
        && onChange(e)

        onChangeText && onChangeText(e.currentTarget.value)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);

        onEnter
        && e.key === 'Enter'
        && onEnter()
    }

    const finalSpanClassName = `${styles.error} ${spanClassName ? spanClassName : ''}`
    const finalInputClassName = `${error ? styles.errorInput : ''} ${className ? className : ''} ${styles.superInput}`
    const placeholderText = `${error ? 'Enter text' : ''}`

    return (
        <>
            <input
                type={'text'}
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                className={finalInputClassName}
                placeholder={placeholderText}
                {...props}
            />
            {error && <span className={finalSpanClassName}><br/>{error}</span>}
        </>
    )
}