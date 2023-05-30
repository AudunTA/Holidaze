import React from "react";
import { ErrorContainer } from "./ErrorPage.styled";
import * as S from "../../styles/Text.styled";
import { PrimaryButton } from "../../styles/Buttons.styled";
import { useNavigate } from "react-router-dom";
/**
 * Error component .
 *
 * @component
 * @returns {JSX.Element} The rendered Error component with option to go back and a error message.
 */
function ErrorPage() {
  const navigate = useNavigate();
  return (
    <ErrorContainer>
      <S.TextError>
        Something wrong happend, make sure the URL is correct or try to go back
        home
      </S.TextError>
      <PrimaryButton onClick={() => navigate("/")} className="btn_backHome">
        Back home
      </PrimaryButton>
    </ErrorContainer>
  );
}

export default ErrorPage;
