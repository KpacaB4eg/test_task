import React, {useEffect} from "react";
import i18next from 'i18next';
import {Select} from "antd";
import {DownOutlined} from '@ant-design/icons'
import {LanguageKeys, LanguageSettings} from "../../types/LanguageSwitcherTypes";
import {useTypedSelector, useLanguageSwitcherActions} from "../../hooks/useTypedSelector";
import './style.less'

const {Option} = Select

const LanguageSwitcher: React.FC = () => {
    const {languageKey} = useTypedSelector(state => state.LanguageSwitcherReducer)
    const {setLanguageKey} = useLanguageSwitcherActions()

    useEffect(() => {
        i18next.changeLanguage(languageKey)
    }, [languageKey])

    const languageSettings: LanguageSettings[] = [
        {
            key: 'en',
            value: 'English',
            shortValue: 'En',
        },
        {
            key: 'ru',
            value: 'Русский',
            shortValue: 'Ру',
        }, {
            key: 'ua',
            value: 'Український',
            shortValue: 'Укр',
        },
    ]

    const handleChangeLanguage = (value: LanguageKeys) => {
        setLanguageKey({languageKey: value})
    }

    return (
        <div className='language-rapper'>
            <Select
                className='language-selector'
                defaultValue={languageKey}
                optionLabelProp="label"
                style={{width: "100%"}}
                popupMatchSelectWidth={false}
                placement={"bottomRight"}
                suffixIcon={<DownOutlined style={{ color: '#6D6BE5'}}/>}
                onChange={handleChangeLanguage}
            >
                {languageSettings.map(item => (
                    <Option key={item.key} value={item.key} label={item.shortValue}>
                        <div>
                            {item.value}
                        </div>
                    </Option>
                ))}
            </Select>
        </div>
    )
}

export default LanguageSwitcher
