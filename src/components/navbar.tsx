import { Link, useLocation } from "react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { ModeToggle } from "./ui/mode-toggle";
import cx from "classnames";

const Navbar = () => {
  const navs = [
    { text: "Home", to: "/" },
    { text: "Personnages", to: "/characters" },
    { text: "Paramètres", to: "/settings" },
  ];

  const location = useLocation();

  return (
    <NavigationMenu className='p-4 flex justify-between'>
      <div className='flex gap-2'>
        {navs.map((nav) => {
          const isActive = location.pathname === nav.to;
          return (
            <NavigationMenuItem key={nav.text}>
              <Link to={nav.to}>
                <NavigationMenuLink
                  className={cx(
                    navigationMenuTriggerStyle(),
                    isActive &&
                      "bg-foreground text-muted hover:bg-foreground hover:text-muted"
                  )}
                >
                  {nav.text}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          );
        })}
      </div>
      <ModeToggle />
    </NavigationMenu>
  );
};

export default Navbar;
