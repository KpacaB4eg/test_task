import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import {ConfigProvider} from 'antd'
import {BrowserRouter} from "react-router-dom";
import {store} from "./store";
import {customAntdTheme} from './customAntd'
import RoutesWrapper from "./routes/RoutesWrapper";
import LanguageSwitcher from "./components/LanguageSwitcher";
import './settings/axiosConfig';
import './translate'
import './index.less';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ConfigProvider theme={customAntdTheme}>
        <Provider store={store}>
            <BrowserRouter>
                <LanguageSwitcher/>
                <RoutesWrapper/>
            </BrowserRouter>
        </Provider>
    </ConfigProvider>
);
