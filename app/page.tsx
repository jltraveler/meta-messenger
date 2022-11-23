import MessageList from './MessageList'
import ChatInput from './ChatInput'

function HomePage() {
  return (
    <main >
        {/* Message List */}
<MessageList />

        {/* Chat input */}
        <ChatInput />
    </main>
  )
}

export default HomePage