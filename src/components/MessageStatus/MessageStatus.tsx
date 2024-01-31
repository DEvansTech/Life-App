import React from 'react'
import { Ionicons } from '@expo/vector-icons'

type IProps = {
    message_status: 'sending' | 'sent' | 'read'
    color: string
}

const MessageStatus: React.FC<IProps> = ({ message_status, color }) => {
    switch (message_status) {
        case 'sending':
            return (
                <Ionicons name="time-outline" size={12} color={color} />
            )
        case 'sent':
            return (
                <Ionicons name="ios-checkmark" size={15} color={color} />
            )
        case 'read':
            return (
                <Ionicons name="ios-checkmark-done" size={12} color={color} />
            )
        default:
            return null;
    }
}

export default MessageStatus