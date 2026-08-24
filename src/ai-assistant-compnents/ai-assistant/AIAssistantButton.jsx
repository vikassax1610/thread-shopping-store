import { Bot, Sparkles } from "lucide-react";

function AIAssistantButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="AI shopping assistant"
      className="
        fixed
        right-5 bottom-5
        md:right-7 md:bottom-7
        z-50
        group
      "
    >
      {/* Glow */}
      <div
        className="
          absolute inset-0
          rounded-full
          bg-pink-500/30
          blur-xl
          opacity-60
          group-hover:opacity-100
          transition-opacity
        "
      />

      {/* Button */}
      <div
        className="
          relative
          flex items-center gap-2
          px-4 py-3
          rounded-full
          bg-gradient-to-r from-[#27482F] to-green-700
          border border-white/20
          shadow-2xl shadow-green-500/20
          text-white
          transition-all duration-300
          group-hover:scale-105
          group-active:scale-95
        "
      >
        <div
          className="
            w-8 h-8
            rounded-full
            bg-white/15
            border border-white/20
            flex items-center justify-center
          "
        >
          <Bot className="w-4 h-4" />
        </div>

        <div className="hidden sm:block text-left">
          <p className="text-xs font-medium text-white/70">
            Need help?
          </p>

          <p className="text-sm font-semibold">
            Ask AI
          </p>
        </div>

        <Sparkles className="w-4 h-4 text-white/80" />
      </div>
    </button>
  );
}

export default AIAssistantButton;