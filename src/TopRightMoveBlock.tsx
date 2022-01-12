import React from 'react'
import { useStyle } from './hooks'
import withContext from './withContext'

interface TRMBProps {
    w : number,
    h : number, 
    scale : number, 
    onClick : Function 
}
const TopRightMoveBlock = (props: TRMBProps)  => {
    const {blockStyle} = useStyle(props.w, props.h, props.scale)
    return (
        <React.Fragment>
            <div style = {blockStyle()} onClick = {() => props.onClick()}> </div>
        </React.Fragment>
    )
}

export default withContext(TopRightMoveBlock)

