import React, { useEffect, useState } from "react";
import { GoHome } from "react-icons/go";

interface NavItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  ariaLabel: string;
}
const Navigation = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems: NavItem[] = [
    {
      id: "home",
      label: "Home",
      icon: <GoHome size={20} aria-hidden="true" />,
      ariaLabel: "Return to homepage",
    },
    {
      id: "projects",
      label: "Projects",
      ariaLabel: "View projects section",
    },
    {
      id: "journal",
      label: "Journal",
      ariaLabel: "Read journal articles",
    },
    {
      id: "contact",
      label: "Contact",
      ariaLabel: "Navigate to contact section",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const shouldBeVisible = window.scrollY > 100;
      setIsNavbarVisible((prev) =>
        prev !== shouldBeVisible ? shouldBeVisible : prev
      );

      // Update active section based on scroll position
      const sections = navItems.map((item) => document.getElementById(item.id));
      const visibleSection = sections.find((section) => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (visibleSection) {
        setActiveSection(visibleSection.id);
      }
    };

    const optimizedScrollHandler = () => {
      window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", optimizedScrollHandler, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", optimizedScrollHandler);
  }, []);

  const handleNavigation = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      setActiveSection(sectionId);
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Update URL without full page reload
      window.history.replaceState(null, "", `#${sectionId}`);
    }
  };

  return (
    <nav
      className={`navigation ${isNavbarVisible ? "visible" : ""}`}
      aria-label="Main navigation"
      role="navigation"
    >
      <ul className="nav-list">
        {navItems.map(({ id, label, icon, ariaLabel }) => (
          <li key={id} className="nav-item">
            <a
              href={`#${id}`}
              onClick={handleNavigation(id)}
              className={activeSection === id ? "active" : ""}
              aria-label={ariaLabel}
              aria-current={activeSection === id ? "page" : undefined}
              role="link"
              tabIndex={0}
            >
              {icon || label}
              {icon && <span className="visually-hidden">{label}</span>}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
