import React from "react";
import {Modal} from "antd";
import {CloseOutlined} from '@ant-design/icons'
import {FullScreenModalComponent} from "../../types/FullScreenModal";
import {useFullScreenModalActions, useTypedSelector} from "../../hooks/useTypedSelector";
import './style.less'

const FullScreenModal: React.FC<FullScreenModalComponent> = ({children}) => {
    const {visibility} = useTypedSelector(state => state.FullScreenModalReducer)
    const {setVisibilityFullScreenModal} = useFullScreenModalActions()
    const onCancel = () => {
        setVisibilityFullScreenModal({visibility: false})
    }

    return (
        <Modal
            className="full-screen-modal"
            footer={null}
            open={visibility}
            onCancel={onCancel}
            centered
            width={'100vw'}
            closeIcon={<CloseOutlined style={{color: "white"}}/>}
        >
            {children}
        </Modal>
    )
}

export default FullScreenModal
