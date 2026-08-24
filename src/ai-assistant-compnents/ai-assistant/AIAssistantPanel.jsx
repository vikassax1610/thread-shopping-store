import AssistantHeader from "./AssistantHeader";
import ChatContainer from "../ChatContainer";

function AIAssistantPanel({ onClose }) {
  return (
    <>
      {/* Mobile backdrop */}
      <div
        className="
          fixed inset-0
          z-40
          bg-black/60
          backdrop-blur-sm
          md:hidden
        "
      />

      {/* Panel */}
      <aside
        className="
          fixed
          z-50

          inset-0
          w-full

          md:inset-y-0
          md:right-0
          md:left-auto
          md:w-[460px]
          lg:w-[500px]

          flex flex-col

          bg-zinc-950/95
          md:bg-zinc-950/90
          backdrop-blur-2xl

          border-l border-white/10

          shadow-2xl
          shadow-black/40

          overflow-hidden
        "
      >
        <AssistantHeader onClose={onClose} />

        {/* Chat */}
        <div className="flex-1 min-h-0">
          <ChatContainer />
        </div>
      </aside>
    </>
  );
}

export default AIAssistantPanel;