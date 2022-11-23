import Pusher from 'pusher'
import ClientPusher from 'pusher-js'

export const serverPusher = new Pusher({
    appId: "1512248",
    key: "7cfc7356127c7db88b5e",
    secret: "06f46ffca3ed1da96f62",
    cluster: "us2",
    useTLS: true
})

export const clientPusher = new ClientPusher('7cfc7356127c7db88b5e', {
    cluster: 'us2'
}); 