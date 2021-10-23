import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

export default function HeaderTabs() {
    return (
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <HeaderButton text='delivery' />
            <HeaderButton text='Pickup' />
        </View>
    )
}

const HeaderButton = (props) => (
    <TouchableOpacity style={{
        backgroundColor: 'black',
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30
    }}
    >
        <Text style={{ color: 'white', fontSize: 15, fontWeight: '900' }}>
            {props.text}
        </Text>
    </TouchableOpacity>
);