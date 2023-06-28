import React, { useState } from 'react';
import FormPagesContainer from '../../components/FormPagesContainer/FormPagesContainer';
import styles from "./SignIn.module.scss";
import Input from '../../components/Input/Input';


const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
                    <div className={styles.forgotPasword}>Forgot password?</div>
                </div>

            </FormPagesContainer>
        </div>
    )
}
export default SignIn