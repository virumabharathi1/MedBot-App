import { useEffect } from "react";

export default function BotpressChat() {
  useEffect(() => {
    // Load bot config only when this component mounts
    const script = document.createElement("script");
    script.src = "https://files.bpcontent.cloud/2025/09/18/09/20250918091141-K4HHFQ5N.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Optional cleanup: hide/remove widget when unmounting
      window.botpress?.webchat?.sendEvent({ type: 'hide' });
    };
  }, []);

  return null;
}
