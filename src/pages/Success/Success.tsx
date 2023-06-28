import React from 'react';
import FormPagesContainer from '../../components/FormPagesContainer/FormPagesContainer';
import { title } from 'process';
import Input from '../../components/Input/Input';
import styles from './Success.module.scss'

const Success = () => {
    return (
        <div>
            <FormPagesContainer
                title={"Success"}
                btnTitle={"Go to home"}
                onSubmit={() => { }}

            >
                <div className={styles.successMessage}><span>Email confirmed.</span>
                    Your registration is now completed</div>

            </FormPagesContainer>
        </div>
    );
}

export default Success;