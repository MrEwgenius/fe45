import React from "react";
import classNames from "classnames";
import { useNavigate, useParams } from "react-router-dom";

import FormPagesContainer from "src/components/FormPagesContainer/FormPagesContainer";
import { Theme } from "src/@types";

import styles from './RegistrationConfirmation.module.scss'
import { useDispatch } from "react-redux";
import { activateUser } from "src/redux/reducers/authSlice";
import { RoutesList } from "../Router";


const RegistrationConfirmation = () => {

  const { uid, token } = useParams()

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onSubmit = () => {
    if (uid && token) {
      dispatch(activateUser({ data: { uid, token }, callback: () => navigate(RoutesList.SignIn) }))
      console.log(uid, token);

    } else {
      console.log(uid, token);

    }
  }


  return (
    <FormPagesContainer
      title={"Registration Confirmation"}
      btnTitle={"Activate"}
      onSubmit={onSubmit}
    >
      <div className={classNames(styles.container, { [styles.darkText]: Theme.Dark })}>
        {
          "Please activate your account with click on button"
        }
      </div>
    </FormPagesContainer>
  );
};

export default RegistrationConfirmation;
