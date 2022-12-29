import React from "react";

import { LoginContainer, LoginCard, Logo, Title, LoginText, Policy, LoginLink, LoginButton, Icon } from "./LoginStyled";
import { useLocales } from "~/hooks/useLocales";
import logoSvg from "~/assets/logo.svg";
import googleSvg from "~/assets/google-icon.svg";
import facebookSvg from "~/assets/facebook-icon.svg";
import Link from "next/link";

const Login: React.FC = () => {
  return (
    <LoginContainer>
      <LoginCard>
        <Link href="/" aria-label="Quay về" rel="prev">
          <Logo src={logoSvg} alt="logo" priority />
        </Link>
        <Title>{useLocales("login.title")}</Title>
        <LoginButton aria-label="Đăng nhập với Google">
          <Icon src={googleSvg} alt="google-icon" />
          <LoginText>{useLocales("login.google")}</LoginText>
        </LoginButton>
        <LoginButton aria-label="Đăng nhập với Facebook">
          <Icon src={facebookSvg} alt="facebook-icon" />
          <LoginText>{useLocales("login.facebook")}</LoginText>
        </LoginButton>
        <Policy>
          {useLocales("login.policy")}
          <LoginLink href="/me/terms-of-service" aria-label="Điều khoản sử dụng" rel="license">
            {useLocales("footer.termsOfService")}
          </LoginLink>
          {useLocales("login.and")}
          <LoginLink href="/me/privacy-policy" aria-label="Chính sách bảo mật" rel="license">
            {useLocales("footer.privacyPolicy")}
          </LoginLink>
        </Policy>
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;
