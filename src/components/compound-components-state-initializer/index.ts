import { CCPStateInitializer as CompoundWhitContextHOC } from "./CCPStateInitializer";
import { Title } from "./components/Title";
import { Paragraph } from "./components/Paragraph";
import { Button } from "./components/Button";

export const CCPStateInitializer = Object.assign(CompoundWhitContextHOC, {
  Title,
  Paragraph,
  Button,
});
