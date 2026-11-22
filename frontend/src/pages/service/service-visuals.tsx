import type { ComponentType } from "react";
import type { ServiceSlug } from "@data/services";
import { AutomationsVisual } from "./visuals/visual-automations";
import { CrmVisual } from "./visuals/visual-crm";
import { ErpVisual } from "./visuals/visual-erp";
import { CustomVisual } from "./visuals/visual-custom";
import { WebVisual } from "./visuals/visual-web";
import { WebsitesVisual } from "./visuals/visual-websites";

export const SERVICE_VISUALS: Record<ServiceSlug, ComponentType> = {
  web: WebVisual,
  medida: CustomVisual,
  erp: ErpVisual,
  crm: CrmVisual,
  automacoes: AutomationsVisual,
  websites: WebsitesVisual,
};
