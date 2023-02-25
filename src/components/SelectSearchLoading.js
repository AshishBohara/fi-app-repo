import React from "react"
import { Spin } from "antd"

import { FlexDiv } from './Xcomponent'



const SelectSearchNotFound = props => {
    return (
        <FlexDiv align="left">
            <Spin size="small" />
            <span style={{ marginLeft: "5px" }}>Loading ...</span>
        </FlexDiv>
    )
}

export default SelectSearchNotFound