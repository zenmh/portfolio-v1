import { NeuButton } from "../ui/neu-button";
import { myFullStackResumePDF } from "@/lib/constants";

export function Resume() {
  return (
    <a href={myFullStackResumePDF} target="_blank" rel="noopener noreferrer">
      <NeuButton text="Resume"></NeuButton>
    </a>
  );
}
