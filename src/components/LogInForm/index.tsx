import React, {useState} from "react";
import {useForm} from "antd/lib/form/Form";
import {useTranslation} from "react-i18next";
import {Button, Form, Input} from 'antd';
import {LoginUserRequestFields} from "../../types/AuthTypes";
import {useAuthActions, disableFormButtonIfEmptyFields} from "../../hooks/useTypedSelector";

const LogInForm: React.FC = () => {
    const {t} = useTranslation()
    const [form] = useForm();
    const {fetchLoginData} = useAuthActions()

    const [disableButton, setDisableButton] = useState(true)

    const onFinish = (values: LoginUserRequestFields) => {
        fetchLoginData(values)
    };

    const onChange = () => {
        setDisableButton(disableFormButtonIfEmptyFields(form))
    };

    return (
        <Form
            form={form}
            name="loginForm"
            layout={"vertical"}
            onFinish={onFinish}
            onChange={onChange}
            autoComplete="off"
            requiredMark={false}
        >
            <Form.Item
                label={t('login_email_text')}
                name="email"
                rules={[{required: true, message: t('login_email_validate_text')}]}
            >
                <Input size="large" placeholder={t('login_email_placeholder')}/>
            </Form.Item>

            <Form.Item
                label={t('login_password_text')}
                name="password"
                rules={[{required: true, message: t('login_password_validate_text')}]}
            >
                <Input.Password size="large" placeholder={t('login_password_placeholder')}/>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" size={"large"} style={{width: '100%'}}
                        disabled={disableButton}>
                    {t('login_button_text')}
                </Button>
            </Form.Item>
        </Form>
    )
}

export default LogInForm
