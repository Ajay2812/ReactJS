import { ChannelContext, UserContext } from "../../App";
import ComponentF from "./contextF"
import React from 'react';
export default function ComponentE(){
    const user=React.useContext(UserContext)
    const channel=React.useContext(ChannelContext)
    return(
        <>
        {user}-{channel}
        </>
    )
}