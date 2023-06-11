import React from "react";
import classNames from "classnames";

import FormPagesContainer from "src/components/FormPagesContainer/FormPagesContainer";
import { Theme } from "src/@types";

import styles from './RegistrationConfirmation.module.scss'


const RegistrationConfirmation = () => {
  return (
    <FormPagesContainer
      title={"Registration Confirmation"}
      btnTitle={"Go to home"}
      onSubmit={() => { }}
    >
      <div className={classNames({ [styles.darkText]: Theme.Dark })}>
        {
          "Please activate your account with the activation link in the email example@gmail.com.\n Please, check your email"
        }
      </div>
    </FormPagesContainer>
  );
};

export default RegistrationConfirmation;
