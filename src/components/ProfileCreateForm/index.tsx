import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {Col, DatePicker, Form, Input, InputNumber, Row, Select} from 'antd';
import {LoginUserRequestFields} from "../../types/AuthTypes";
import {useAuthActions, disableFormButtonIfEmptyFields} from "../../hooks/useTypedSelector";
import {useForm} from "antd/lib/form/Form";
import './style.less'

const ProfileCreateForm: React.FC = () => {
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
            className="profile-create-wrapper"
            form={form}
            name="RegistrationForm"
            layout={"vertical"}
            onFinish={onFinish}
            onChange={onChange}
            autoComplete="off"
        >
            <Row gutter={24}>
                <Col xs={24} sm={12} md={8}>
                    <Form.Item
                        label={t('profile.form.surname')}
                        name="sname"
                        rules={[{required: true, message: t('profile.form.surname_validate')}]}
                    >
                        <Input size="large" placeholder={t('profile.form.surname_placeholder')}/>
                    </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={8}>
                    <Form.Item
                        label={t('profile.form.name')}
                        name="name"
                        rules={[{required: true, message: t('profile.form.name_validate')}]}
                    >
                        <Input size="large" placeholder={t('profile.form.name_placeholder')}/>
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={8}>
                    <Form.Item
                        label={t('profile.form.last_name')}
                        name="lname"
                        rules={[{required: true, message: t('profile.form.last_name_validate')}]}
                    >
                        <Input size="large" placeholder={t('profile.form.last_name_placeholder')}/>
                    </Form.Item>
                </Col>
            </Row>

            <Form.Item
                label={t('profile.form.date_of_birth')}
                name="birth_date"
                rules={[{required: true, message: t('profile.form.date_of_birth_validate')}]}
            >
                <DatePicker
                    inputReadOnly
                    size="large"
                    format='DD/MM/YYYY'
                    style={{width: '100%'}}
                    placeholder={t('profile.form.date_of_birth_placeholder')}
                />
            </Form.Item>

            <Form.Item
                label={t('profile.form.gender')}
                name="gender_id"
                rules={[{required: true, message: t('profile.form.gender_validate')}]}
            >
                <Select
                    size="large"
                    style={{width: '100%'}}
                    options={[
                        {value: 1, label: t('profile.form.gender_select.gender_male')},
                        {value: 2, label: t('profile.form.gender_select.gender_female')},
                        {value: 3, label: t('profile.form.gender_select.gender_another')},
                    ]}
                    placeholder={t('profile.form.gender_placeholder')}
                />
            </Form.Item>

            <Form.Item
                label={t('profile.form.phone')}
                name="phone"
                rules={[{required: true, message: t('profile.form.phone_validate')}]}
            >
                <InputNumber
                    size="large"
                    style={{width: '100%'}}
                    placeholder={t('profile.form.phone_placeholder')}
                />
            </Form.Item>
        </Form>
    )
}

export default ProfileCreateForm
