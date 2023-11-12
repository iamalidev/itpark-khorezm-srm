import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Checkbox, Form, Input, message, Spin } from "antd";
import { UserContext } from "@/context/userContext";
import { usePostRequest } from "@/hooks/request";
import { loginUrl } from "@/utils/urls";
import { Logo } from "@/assets/icons";

const LoginPage = () => {
  const loginRequest = usePostRequest({ url: loginUrl });

  const { setTokens } = useContext(UserContext);

  async function onFinish(params) {
    const { success, response } = await loginRequest.request({
      data: { login: params.login, password: params.password },
    });

    if (success && !!response) {
      const { refreshToken, accessToken } = response;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      setTokens(accessToken, refreshToken);
    } else {
      message.error("Incorrect username or password");
    }
  }

  return (
    <div className="login">
      <div className="login__card">
        <div className="login__top">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="login__bottom">
          <h4 className="login__title">Log in !</h4>

          <Form
            autoSave="login"
            className="login__form"
            autoComplete="off"
            initialValues={{ remember: true }}
            layout="vertical"
            onFinish={onFinish}
          >
            <Form.Item
              name="login"
              autoComplete="off"
              rules={[
                {
                  required: true,
                  message: "Iltimos, loginingizni kiriting",
                },
                {
                  whitespace: true,
                  message: "Login bo'sh bo'lishi mumkin emas",
                },
              ]}
              hasFeedback
            >
              <Input
                autoFocus={true}
                className="login__input"
                placeholder="Loginingizni kiriting"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Iltimos, parolingizni kiriting",
                },
                {
                  whitespace: true,
                  message: "Parol bo'sh bo'lishi mumkin emas",
                },
              ]}
              hasFeedback
            >
              <Input.Password
                className="login__input"
                placeholder="Parolingizni kiriting"
              />
            </Form.Item>
            <Form.Item
              name="remember"
              valuePropName="checked"
              className="login__checkbox"
            >
              <Checkbox>Parolni saqlash</Checkbox>
            </Form.Item>
            <Button className="login__submit" htmlType="submit">
              Kirish
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
