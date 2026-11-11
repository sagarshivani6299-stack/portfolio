
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Contact", "contact"],
];

export function Navigation() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      const marker = window.scrollY + 160;
      let current = "home";

      links.forEach(([, id]) => {
        const section = document.getElementById(id);

        if (section && section.offsetTop <= marker) {
          current = id;
        }
      });

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10;

      if (atBottom) current = "contact";

      setActive(current);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    updateActiveSection();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <header className="nav-wrap">
      <nav className="nav shell">
        <a href="#home" className="brand">
          <span className="brand-mark">S<span>.</span></span>
          <span>SHIVANI SAGAR</span>
        </a>

        <div className={`nav-links ${open ? "is-open" : ""}`}>
          {links.map(([label, id], index) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? "active" : ""}
              aria-current={active === id ? "location" : undefined}
              onClick={() => {
                setActive(id);
                setOpen(false);
              }}
            >
              <span className="nav-number">
                0{index + 1}
              </span>
              {label}
            </a>
          ))}

          <a
            href="#contact"
            className="nav-cta"
            onClick={() => setOpen(false)}
          >
            Let's Talk <ArrowUpRight size={16} />
          </a>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
    </header>
  );
}
