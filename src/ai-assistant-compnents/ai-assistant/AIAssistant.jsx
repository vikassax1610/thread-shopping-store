import { useState } from "react";
import AIAssistantButton from "./AIAssistantButton";
import AIAssistantPanel from "./AIAssistantPanel";

function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen && (
        <AIAssistantButton onClick={() => setIsOpen(true)} />
      )}

      {isOpen && (
        <AIAssistantPanel onClose={() => setIsOpen(false)} />
      )}
    </>
  );
}

export default AIAssistant;