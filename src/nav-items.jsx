import { HomeIcon, FolderIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import AnimeCollections from "./components/AnimeCollections.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Collections",
    to: "/collections",
    icon: <FolderIcon className="h-4 w-4" />,
    page: <AnimeCollections />,
  },
];
