import React from 'react';
import classNames from 'classnames';

import FormPagesContainer from 'src/components/FormPagesContainer/FormPagesContainer';
import { useThemeContext } from 'src/context/Theme';
import styles from './Success.module.scss'
import { Theme } from 'src/@types';

const Success = () => {

    const { themeValue } = useThemeContext()
    return (
        <div className={classNames({ [styles.darkcContent]: themeValue === Theme.Dark })}>
            <FormPagesContainer
                title={"Success"}
                btnTitle={"Go to home"}
                onSubmit={() => { }}

            >
                <div className={(styles.successMessage)}><span>Email confirmed.</span>
                    Your registration is now completed</div>

            </FormPagesContainer>
        </div>
    );
}

export default Success;