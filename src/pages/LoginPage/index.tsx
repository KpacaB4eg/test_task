import React, {useEffect} from "react";
import {Col, Divider, Row, Tabs, TabsProps} from "antd";
import {CheckCircleOutlined} from '@ant-design/icons'
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import LogInForm from "../../components/LogInForm";
import RegistrationForm from "../../components/RegistrationForm";
import FullScreenModal from "../../components/FullScreenModal";
import LoginSider from "../../components/LoginSider";
import OtherAuthButton from "../../components/OtherAuthButton";
import GoogleIcon from '../../assets/images/google.svg'
import FacebookIcon from '../../assets/images/facebook.svg'
import LinkedinIcon from '../../assets/images/linkedin.svg'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {AuthInitialValuesTypes} from "../../types/AuthTypes";
import './style.less'


const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const {t} = useTranslation()
    const {token} = useTypedSelector<AuthInitialValuesTypes>(state => state.AuthReducer)

    useEffect(() => {

        if (token) {
            navigate('/')
        }
    }, [token, navigate])

    const items: TabsProps['items'] = [
        {
            key: 'tab_1',
            label: <div className='login-page-tabs'>
                {t('login_tab_login_label')}
            </div>,
            children:
                <Row style={{marginTop: '48px'}}>
                    <Col span={24}>
                        <LogInForm/>
                    </Col>
                </Row>
        },
        {
            key: 'tab_2',
            label: <div className='login-page-tabs'>
                {t('login_tab_registration_label')}
            </div>,
            children: <Row style={{marginTop: '48px'}}>
                <Col span={24}>
                    <RegistrationForm/>
                </Col>
            </Row>,
        },
    ];

    return (
        <div className='loginPageWrapper'>
            <div className='loginSider'>
                <LoginSider/>
            </div>
            <div className='loginContent'>
                <div className="tabContainer">
                    <Tabs defaultActiveKey="1" items={items}/>
                    <Divider className="login-page-divider" plain>{t('login_divider_text')}</Divider>
                    <div className="login-other-auth">
                        <OtherAuthButton value="google" icon={GoogleIcon}/>
                        <OtherAuthButton value="facebook" icon={FacebookIcon}/>
                        <OtherAuthButton value="linkedin" icon={LinkedinIcon}/>
                    </div>
                </div>
            </div>

            <FullScreenModal>
                <div className="confirm-registration">
                    <div className="confirm-registration-icon">
                        <CheckCircleOutlined style={{color: "white"}}/>
                    </div>
                    <div className="confirm-registration-text">
                        <span>{t('registration_confirm_message_texts.text_1')}</span>
                        <span>{t('registration_confirm_message_texts.text_2')}</span>
                    </div>
                </div>
            </FullScreenModal>
        </div>
    )
}

export default LoginPage
