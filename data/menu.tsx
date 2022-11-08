interface menuItem {
  label: String;
  isActive: boolean;
}

type MenuItems = menuItem[];

export const MENU: MenuItems = [
  {
    label: "About us",
    isActive: true,
  },
  {
    label: "Projects",
    isActive: false,
  },
  {
    label: "Career",
    isActive: false,
  },
  {
    label: "Contacts",
    isActive: false,
  },
];
