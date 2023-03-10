import { defineStore } from "pinia";
import { HubConnectionBuilder, HttpTransportType, LogLevel, HubConnection } from '@microsoft/signalr';


interface State {
    connection: HubConnection,
}

export const useChatIndexStore = defineStore('chatIndex', {
    state: (): State => ({
        connection: new HubConnectionBuilder().withUrl('http://localhost:5298/hub', {
            skipNegotiation: true,
            transport: HttpTransportType.WebSockets
        }).withAutomaticReconnect().build()
    })
})