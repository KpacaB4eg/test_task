import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {Button, Form, Input} from 'antd';
import {useForm} from "antd/lib/form/Form";
import {RegistrationRequestFields} from "../../types/AuthTypes";
import {useAuthActions, disableFormButtonIfEmptyFields} from "../../hooks/useTypedSelector";

const RegistrationForm: React.FC = () => {
    const {t} = useTranslation();
    const [form] = useForm();
    const {registrationUser} = useAuthActions();

    const [disableButton, setDisableButton] = useState(true);


    const onFinish = (values: RegistrationRequestFields) => {
        const newPrams = {
            email: values.email,
            password: values.password,
            ref: `${window.location.host}/registration/confirm`,
        }
        registrationUser(newPrams);
    };

    const onChange = () => {
        setDisableButton(disableFormButtonIfEmptyFields(form));
    };

    return (
        <Form
            form={form}
            name="RegistrationForm"
            layout={"vertical"}
            onFinish={onFinish}
            onChange={onChange}
            autoComplete="off"
            requiredMark={false}
        >
            <Form.Item
                label={t('registration_email_text')}
                name="email"
                rules={[{required: true, message: t('registration_email_validate_text')}]}
            >
                <Input size="large" placeholder={t('registration_email_placeholder')}/>
            </Form.Item>

            <Form.Item
                label={t('registration_password_text')}
                name="password"
                rules={[{required: true, message: t('registration_password_validate_text')}]}
            >
                <Input.Password size="large" placeholder={t('registration_password_placeholder')}/>
            </Form.Item>

            <Form.Item
                label={t('registration_confirm_password_text')}
                name="confirm_password"
                dependencies={['password']}
                rules={[
                    {
                        required: true,
                        message: t('registration_confirm_password_validate_text_empty'),
                    },
                    ({getFieldValue}) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error(t('registration_confirm_password_validate_text_not_equal')));
                        },
                    }),
                ]}
            >
                <Input.Password size="large" placeholder={t('registration_confirm_password_placeholder')}/>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" size={"large"} style={{width: '100%'}}
                        disabled={disableButton}>
                    {t('registration_button_text')}
                </Button>
            </Form.Item>
        </Form>
    )
}

export default RegistrationForm
