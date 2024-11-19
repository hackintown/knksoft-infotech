import Link from 'next/link';
import DesktopMenu from './DesktopMenu';
import MobMenu from './MobMenu';
import { NAVIGATION_MENUS, type NavigationMenu,  } from '@/constants/navigation/menu-items';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps): JSX.Element => {
  return (
    <header 
      className={`sticky top-0 z-50 w-full border-b border-foreground/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${className ?? ''}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-foreground font-bold text-xl hover:opacity-80 transition-opacity"
            aria-label="Home"
          >
            <span className="sr-only">Home</span>
            KNK Soft Infotech
          </Link>

          <nav 
            className="hidden lg:block" 
            aria-label="Main navigation"
          >
            <ul className="flex items-center gap-8">
              {NAVIGATION_MENUS.map((menu: NavigationMenu) => (
                <DesktopMenu 
                  key={menu.name} 
                  menu={menu} 
                />
              ))}
            </ul>
          </nav>

          <MobMenu Menus={NAVIGATION_MENUS} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;