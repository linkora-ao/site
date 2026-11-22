import {
  AppWindow,
  ArrowRight,
  Banknote,
  Bell,
  Blocks,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChartNoAxesColumn,
  ClipboardCheck,
  Clock,
  CodeXml,
  Download,
  FileText,
  Funnel,
  Globe,
  LayoutPanelLeft,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Pause,
  Phone,
  Play,
  Server,
  Shield,
  TextAlignStart,
  Users,
  X,
  Zap,
  type LucideProps,
} from "lucide-react";

/**
 * Registo único de ícones de interface (Lucide).
 * Para usar um ícone novo: importar acima e acrescentar aqui.
 * Assim só os ícones listados entram no bundle.
 */
const ICONS = {
  "app-window": AppWindow,
  "arrow-right": ArrowRight,
  banknote: Banknote,
  bell: Bell,
  blocks: Blocks,
  check: Check,
  "chevron-down": ChevronDown,
  "chevron-left": ChevronLeft,
  "chevron-right": ChevronRight,
  "chart-no-axes-column": ChartNoAxesColumn,
  "clipboard-check": ClipboardCheck,
  clock: Clock,
  "code-xml": CodeXml,
  download: Download,
  "file-text": FileText,
  funnel: Funnel,
  globe: Globe,
  "layout-panel-left": LayoutPanelLeft,
  mail: Mail,
  "map-pin": MapPin,
  menu: Menu,
  "message-circle": MessageCircle,
  pause: Pause,
  phone: Phone,
  play: Play,
  server: Server,
  shield: Shield,
  "text-align-start": TextAlignStart,
  users: Users,
  x: X,
  zap: Zap,
} as const;

export type IconName = keyof typeof ICONS;

type IconProps = Omit<LucideProps, "ref"> & { name: IconName };

export function Icon({ name, size = 20, strokeWidth = 1.75, ...rest }: IconProps) {
  const Component = ICONS[name];
  return <Component size={size} strokeWidth={strokeWidth} aria-hidden="true" {...rest} />;
}
