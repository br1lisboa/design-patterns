import { CompoundWhitContext as CompoundWhitContextHOC } from "./CompoundContext";
import { Title } from "./components/Title";
import { Paragraph } from "./components/Paragraph";

export const CompoundCardWhitContext = Object.assign(CompoundWhitContextHOC, {
  Title,
  Paragraph,
});
