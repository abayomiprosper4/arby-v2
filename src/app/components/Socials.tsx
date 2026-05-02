"use client";
import { useState } from "react";
import { ExternalLink } from "lucide-react";

const Socials = () => {
  const [theme] = useState("dark");

  const isDark = theme === "dark";
  const muted = isDark ? "text-[#666666]" : "text-[#888888]";
  const border = isDark ? "border-white/10" : "border-black/10";
  const secondaryBg = isDark ? "bg-[#111111]" : "bg-[#FFFFFF]";

  return (
    <footer className={`border-t px-6 py-16 ${border}`}>
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <h3 className="mb-3 text-2xl font-bold tracking-tight">
              Abisola Jegede
            </h3>
            <p className={`max-w-sm text-sm leading-7 ${muted}`}>
              Product Designer, Innovation Lead & Facilitator building products
              that deliver real impact.
            </p>
          </div>

          {[
            {
              title: "Navigation",
              links: ["Work", "Strategy", "Facilitation", "About"],
            },
            {
              title: "Connect",
              links: ["LinkedIn", "Twitter / X", "Dribbble", "Behance"],
            },
            {
              title: "Resources",
              links: ["Resume", "Case Studies", "Design System", "Speaking"],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.08em]">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className={`text-sm transition hover:text-[#FF6A2A] ${muted}`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 flex flex-col items-center justify-between gap-6 border-t pt-8 md:flex-row ${border}`}
        >
          <p className={`text-sm ${muted}`}>
            © 2026 Abisola Jegede. All rights reserved.
          </p>
          <div className="flex gap-3">
            {[
              { label: "LinkedIn", href: "#" },
              { label: "Twitter", href: "#" },
              { label: "Dribbble", href: "#" },
              { label: "Behance", href: "#" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className={`flex h-10 w-10 items-center justify-center rounded-xl border transition hover:-translate-y-0.5 hover:bg-[#FF6A2A] hover:text-white ${secondaryBg} ${border} ${muted}`}
              >
                <ExternalLink className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Socials;
