import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/shared/Container";
import { CONTACT_DETAILS, FOOTER_GROUPS } from "@/data/navigation";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-white border-t-2 border-amber">
      <Container size="wide" className="py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-5 text-white/60 text-sm leading-relaxed max-w-xs">
              Building automation systems and websites for small business
              owners who are tired of manual work.
            </p>
          </div>

          {FOOTER_GROUPS.map((group) => (
            <div key={group.heading}>
              <h3 className="text-xs uppercase tracking-label font-semibold text-amber mb-5">
                {group.heading}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => {
                  const external = link.href.startsWith("http");
                  return (
                    <li key={link.href}>
                      {external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/75 hover:text-white transition text-sm"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-white/75 hover:text-white transition text-sm"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-xs uppercase tracking-label font-semibold text-amber mb-5">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${CONTACT_DETAILS.phoneInternational}`}
                  className="text-white/75 hover:text-white transition"
                >
                  {CONTACT_DETAILS.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_DETAILS.email}`}
                  className="text-white/75 hover:text-white transition break-all"
                >
                  {CONTACT_DETAILS.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_DETAILS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/75 hover:text-white transition"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-white/50 text-xs">
            © {year} Michaelangelo Digital. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Luton, England · Building in public
          </p>
        </div>
      </Container>
    </footer>
  );
}
