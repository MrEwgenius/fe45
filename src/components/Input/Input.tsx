import React, { ChangeEvent, FC, LegacyRef, forwardRef } from "react";
import classNames from "classnames";

import { useThemeContext } from "src/context/Theme";
import { Theme } from "src/@types";

import styles from "./Input.module.scss";

type InputProps = {
    title: string;
    placeholder: string;
    onChange: (value: string) => void;
    value: string;
    disabled?: boolean;
    errorText?: string;
    isTextarea?: boolean;
};



const Input = forwardRef<(HTMLInputElement | null) | (LegacyRef<HTMLTextAreaElement> | undefined), InputProps>(
    (
        props, ref
    ) => {
        const {
            title,
            errorText,
            placeholder,
            onChange,
            disabled,
            value,
            isTextarea,
        } = props

        const { themeValue } = useThemeContext();

        const onInputChange = (
            event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
            onChange(event.target.value);
        };

        const inputProps = {
            onChange: onInputChange,
            value,
            placeholder,
            className: classNames(styles.input, {
                [styles.disabled]: disabled,
                [styles.errorInput]: errorText,
            }),
        };

        return (
            <div className={classNames(styles.container, {
                [styles.darkContainer]: themeValue === Theme.Dark,
            })}>
                <div className={styles.title}>{title}</div>
                {isTextarea ? (
                    <textarea
                        // тут мы присваиваем ref, полученный от родителя нашему DOM узлу
                        ref={ref as LegacyRef<HTMLTextAreaElement> | null}
                        {...inputProps}
                    />
                ) : (
                    <input
                        // тут мы присваиваем ref, полученный от родителя нашему DOM узлу
                        ref={ref as LegacyRef<HTMLInputElement> | null}
                        {...inputProps}
                    />
                )}
                {errorText && <div className={styles.errorText}>{errorText}</div>}
            </div>
        );

    }
)

export default Input;
