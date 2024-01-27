export type MessageType = {
    id: number,
    sender: string,
    senderAvatar: string,
    message: string,
    time: string,
    receiver: string,
    type: string,
    status: boolean,
    amount?: number,
    currency?: string
    caller: string
}

export type UserType = {
    id: string,
    name: string,
    avatar: string
}