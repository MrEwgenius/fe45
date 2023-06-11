import React, { useContext, useState } from 'react';
import FormPagesContainer from '../../components/FormPagesContainer/FormPagesContainer';
import styles from "./SignIn.module.scss";
import Input from '../../components/Input/Input';
import { useThemeContext } from 'src/context/Theme';
import classNames from 'classnames';
import { Theme } from 'src/@types';


const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { themeValue } = useThemeContext();

    return (
        <div>
            <FormPagesContainer
                title={"Sign In"}
                btnTitle={"Sign In"}
                onSubmit={() => { }}
                additionalInfo={
                    <div className={styles.additionalInfo}>
                        {"Already have an account?"}
                        <span className={styles.signIn}>Sign In</span>
                    </div>
                }
            >
                <Input
                    title={"Email"}
                    placeholder={"Your email"}
                    onChange={setEmail}
                    value={email}
                />
                <div>
                    <Input
                        title={"Password"}
                        placeholder={"Your password"}
                        onChange={setPassword}
                        value={password}
                    />
                    <div className={classNames(styles.forgotPasword, { [styles.darkForgotPasword]: themeValue === Theme.Dark })}>Forgot password?</div>
                </div>

            </FormPagesContainer>
        </div>
    )
}
export default SignIn