import React from "react";
import {Col, Row} from "antd";
import {useTranslation} from "react-i18next";
import TickSquare from "../../../../assets/images/tick_square.svg";
import './style.less'

const ListItem: React.FC = () => {
    const {t} = useTranslation()

    return (
        <div className="list">
            <Row style={{width: '100%', marginBottom: '24px'}}>
                <Col sm={12} md={12} className="item">
                    <div className='icon'>
                        <img src={TickSquare} alt=""/>
                    </div>
                    <div className="text">
                        <span>{t('sign_in_items.hr_automation')}</span>
                    </div>
                </Col>
                <Col sm={12} md={12} className="item">
                    <div className='icon'>
                        <img src={TickSquare} alt=""/>
                    </div>
                    <div className="text">
                        <span>{t('sign_in_items.integration_with_job_portals')}</span>
                    </div>
                </Col>
            </Row>
            <Row style={{width: '100%', marginBottom: '24px'}}>
                <Col sm={12} md={12} className="item">
                    <div className='icon'>
                        <img src={TickSquare} alt=""/>
                    </div>
                    <div className="text">
                        <span>{t('sign_in_items.personal_assessment')}</span>
                    </div>
                </Col>
                <Col sm={12} md={12} className="item">
                    <div className='icon'>
                        <img src={TickSquare} alt=""/>
                    </div>
                    <div className="text">
                        <span>{t('sign_in_items.outlook')}</span>
                    </div>
                </Col>
            </Row>
            <Row style={{width: '100%', marginBottom: '24px'}}>
                <Col sm={12} md={12} className="item">
                    <div className='icon'>
                        <img src={TickSquare} alt=""/>
                    </div>
                    <div className="text">
                        <span>{t('sign_in_items.data_security')}</span>
                    </div>
                </Col>
                <Col sm={12} md={12} className="item">
                    <div className='icon'>
                        <img src={TickSquare} alt=""/>
                    </div>
                    <div className="text">
                        <span>{t('sign_in_items.resume_parsing')}</span>
                    </div>
                </Col>
            </Row>
            <Row style={{width: '100%', marginBottom: '24px'}}>
                <Col sm={12} md={12} className="item">
                    <div className='icon'>
                        <img src={TickSquare} alt=""/>
                    </div>
                    <div className="text">
                        <span>{t('sign_in_items.multilingual')}</span>
                    </div>
                </Col>
                <Col sm={12} md={12} className="item">
                    <div className='icon'>
                        <img src={TickSquare} alt=""/>
                    </div>
                    <div className="text">
                        <span>{t('sign_in_items.reporting')}</span>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ListItem
