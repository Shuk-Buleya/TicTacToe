import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

type iconProps = PropsWithChildren<{
    name: string
}>

const Icons = ({name}:iconProps) => {
    switch (name) {
        case "circle":
            return <Icon name = "circle-thin" size={42} color ="#F7CD2E" />
            break;
        case "cross":
            return <Icon name = "times" size={42} color ="#000" />
            break;

        default:
            return <Icon name = "circle" size={42} color ="#cccccc" />
            break;
    }
}

export default Icons