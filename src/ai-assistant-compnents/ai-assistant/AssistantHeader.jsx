import { Bot, Circle, X } from "lucide-react";

function AssistantHeader({ onClose }) {
  return (
    <header
      className="
        shrink-0
        flex items-center justify-between
        px-4 py-3
        border-b border-white/10
        bg-zinc-950/70
        backdrop-blur-xl
      "
    >
      {/* Brand */}
      <div className="flex items-center gap-3">
        <div
          className="
            w-9 h-9
            rounded-xl
            flex items-center justify-center
            bg-gradient-to-br from-pink-500 to-violet-600
            shadow-lg shadow-pink-500/10
          "
        >
          <Bot className="w-4.5 h-4.5 text-white" />
        </div>

        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-sm font-semibold text-white">
              Shopping Assistant
            </h2>

            <span
              className="
                px-1.5 py-0.5
                rounded-md
                text-[10px]
                font-medium
                text-pink-300
                bg-pink-500/10
                border border-pink-500/20
              "
            >
              AI
            </span>
          </div>

          <div className="flex items-center gap-1.5 mt-0.5">
            <Circle className="w-2 h-2 fill-emerald-400 text-emerald-400" />

            <span className="text-[11px] text-zinc-500">
              Online
            </span>
          </div>
        </div>
      </div>

      {/* Close */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close AI shopping assistant"
        className="
          w-9 h-9
          rounded-full
          flex items-center justify-center
          text-zinc-400
          bg-white/[0.04]
          border border-white/[0.08]
          hover:bg-white/[0.08]
          hover:text-white
          transition-all
        "
      >
        <X className="w-4 h-4" />
      </button>
    </header>
  );
}

export default AssistantHeader;