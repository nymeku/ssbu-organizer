import { Link, useLocation } from "react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
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
            <Link to={nav.to} key={nav.text}>
              <NavigationMenuItem>
                <span
                  className={cx(
                    navigationMenuTriggerStyle(),
                    isActive &&
                      "bg-foreground text-muted hover:bg-foreground hover:text-muted"
                  )}
                >
                  {nav.text}
                </span>
              </NavigationMenuItem>
            </Link>
          );
        })}
      </div>
      <ModeToggle />
    </NavigationMenu>
  );
};

export default Navbar;
