import { useCallback, useState } from 'react';
import AgentModal from '../components/CharacterCarousel/AgentModal';

/* Keep in sync with --modal-close-dur (also used by CharacterCarousel) */
const MODAL_CLOSE_MS = 150;

/**
 * Shared agent-modal controller. The agent pages reuse the SAME AgentModal +
 * characters.js data as the homepage carousel, so editing a tool's modal
 * content in one place updates it everywhere.
 *
 * Usage:
 *   const { openTool, modal } = useAgentModal(agent);
 *   <FeatureSection onCta={() => openTool(skill)} />
 *   {modal}
 */
export function useAgentModal(agent) {
  const [tool, setTool] = useState(null);
  const [state, setState] = useState('open');

  const openTool = useCallback((skill) => {
    if (!skill) return;
    setTool(skill);
    setState('open');
  }, []);

  const close = useCallback(() => {
    setState('closing');
    setTimeout(() => setTool(null), MODAL_CLOSE_MS);
  }, []);

  const modal =
    tool && agent ? (
      <AgentModal
        key={`${agent.name}-${tool.label}`}
        agent={agent}
        tool={tool}
        state={state}
        onClose={close}
      />
    ) : null;

  return { openTool, modal };
}
