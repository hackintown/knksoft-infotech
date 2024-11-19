
export type GridColumns = 1 | 2 | 3;

export interface SubMenuItem {
  name: string;
  desc?: string;
  href: string;
  iconName: keyof typeof import("lucide-react");
}

export interface MenuItem {
  name: string;
  href?: string;
  subMenuHeading?: string[];
  subMenu?: SubMenuItem[];
  gridCols?: GridColumns;
} 