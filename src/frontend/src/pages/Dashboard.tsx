import { createActor } from "@/backend";
import type { ContactSubmission } from "@/backend.d";
import { useActor, useInternetIdentity } from "@caffeineai/core-infrastructure";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import {
  Calendar,
  Clock,
  Inbox,
  LayoutDashboard,
  LogOut,
  Mail,
  Search,
  TrendingUp,
  User,
} from "lucide-react";
import { motion } from "motion/react";
import { useMemo, useState } from "react";

function formatDate(timestamp: bigint): string {
  const ms = Number(timestamp / 1_000_000n);
  return new Date(ms).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function getWeekStart(): number {
  const now = new Date();
  const day = now.getDay();
  const diff = now.getDate() - day + (day === 0 ? -6 : 1);
  return new Date(now.setDate(diff)).setHours(0, 0, 0, 0);
}

function StatCard({
  icon: Icon,
  label,
  value,
  subtitle,
  color,
  delay,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  subtitle?: string;
  color: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="relative rounded-2xl p-5 overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.035)",
        border: "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          background: `radial-gradient(circle at top right, ${color}, transparent 65%)`,
        }}
      />
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[11px] font-body tracking-[0.15em] uppercase text-muted-foreground mb-2">
            {label}
          </p>
          <p className="text-3xl font-display font-bold text-foreground leading-none">
            {value}
          </p>
          {subtitle && (
            <p className="text-xs text-muted-foreground/70 mt-1.5">
              {subtitle}
            </p>
          )}
        </div>
        <div
          className="flex items-center justify-center w-10 h-10 rounded-xl"
          style={{
            background: `${color}18`,
            border: `1px solid ${color}30`,
          }}
        >
          <Icon className="w-4.5 h-4.5" style={{ color }} />
        </div>
      </div>
    </motion.div>
  );
}

export default function Dashboard() {
  const { actor, isFetching: actorLoading } = useActor(createActor);
  const { clear, identity } = useInternetIdentity();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const { data: contacts = [], isLoading } = useQuery<ContactSubmission[]>({
    queryKey: ["contacts"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getContacts();
    },
    enabled: !!actor && !actorLoading,
  });

  const weekStart = getWeekStart();
  const newThisWeek = contacts.filter(
    (c) => Number(c.timestamp / 1_000_000n) >= weekStart,
  ).length;

  const lastSubmission = contacts.length
    ? formatDate(
        contacts.reduce((a, b) => (a.timestamp > b.timestamp ? a : b))
          .timestamp,
      )
    : "—";

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return contacts;
    return contacts.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.email.toLowerCase().includes(q) ||
        c.projectType.toLowerCase().includes(q),
    );
  }, [contacts, search]);

  const handleLogout = () => {
    clear();
    navigate({ to: "/" });
  };

  const principalStr = identity?.getPrincipal().toText() ?? "";
  const shortPrincipal = principalStr
    ? `${principalStr.slice(0, 6)}...${principalStr.slice(-4)}`
    : "—";

  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      {/* ── Header ──────────────────────────────────────── */}
      <div
        className="sticky top-[64px] md:top-[72px] z-30 border-b border-border/40"
        style={{
          background: "rgba(5,5,15,0.85)",
          backdropFilter: "blur(16px)",
        }}
        data-ocid="dashboard.header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="flex items-center justify-center w-8 h-8 rounded-lg"
              style={{
                background:
                  "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(59,130,246,0.2))",
                border: "1px solid rgba(124,58,237,0.4)",
              }}
            >
              <LayoutDashboard className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h1 className="font-display font-semibold text-foreground text-base leading-none">
                Admin Dashboard
              </h1>
              <p className="text-[11px] text-muted-foreground mt-0.5 leading-none">
                flowebdesign · Contact Leads
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs text-muted-foreground"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <User className="w-3 h-3" />
              <span className="font-mono text-[11px]">{shortPrincipal}</span>
            </div>
            <button
              type="button"
              data-ocid="dashboard.logout_button"
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-body tracking-wider uppercase text-muted-foreground border border-border/40 hover:text-foreground hover:border-border transition-smooth"
            >
              <LogOut className="w-3 h-3" />
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* ── Stats Row ──────────────────────────────────── */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
          data-ocid="dashboard.stats_cards"
        >
          <StatCard
            icon={Inbox}
            label="Total Leads"
            value={isLoading ? "—" : String(contacts.length)}
            subtitle="All time submissions"
            color="#7C3AED"
            delay={0}
          />
          <StatCard
            icon={TrendingUp}
            label="New This Week"
            value={isLoading ? "—" : String(newThisWeek)}
            subtitle="Since Monday"
            color="#3B82F6"
            delay={0.1}
          />
          <StatCard
            icon={Clock}
            label="Last Submission"
            value={isLoading ? "—" : lastSubmission}
            subtitle="Most recent lead"
            color="#06B6D4"
            delay={0.2}
          />
        </div>

        {/* ── Table Panel ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-2xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
          data-ocid="dashboard.leads_panel"
        >
          {/* Panel header */}
          <div className="px-6 py-4 border-b border-border/30 flex flex-col sm:flex-row sm:items-center gap-3 sm:justify-between">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <h2 className="font-display font-semibold text-foreground text-sm">
                Contact Leads
              </h2>
              {!isLoading && (
                <span
                  className="px-2 py-0.5 rounded-full text-[10px] font-mono"
                  style={{
                    background: "rgba(124,58,237,0.15)",
                    color: "#a78bfa",
                    border: "1px solid rgba(124,58,237,0.25)",
                  }}
                >
                  {filtered.length}
                </span>
              )}
            </div>
            {/* Search */}
            <div className="relative" data-ocid="dashboard.search_input">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by name, email, project…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 pr-4 py-2 text-xs rounded-xl bg-transparent border border-border/40 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-purple-500/60 transition-smooth w-full sm:w-[260px]"
              />
            </div>
          </div>

          {/* Loading state */}
          {(isLoading || actorLoading) && (
            <div
              className="flex flex-col items-center justify-center py-20 gap-4"
              data-ocid="dashboard.loading_state"
            >
              <div
                className="w-10 h-10 rounded-full border-2 border-transparent animate-spin"
                style={{
                  borderTopColor: "#7C3AED",
                  borderRightColor: "#3B82F620",
                }}
              />
              <p className="text-sm text-muted-foreground">
                Fetching leads from canister…
              </p>
            </div>
          )}

          {/* Empty state */}
          {!isLoading && !actorLoading && contacts.length === 0 && (
            <div
              className="flex flex-col items-center justify-center py-20 gap-4"
              data-ocid="dashboard.empty_state"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{
                  background: "rgba(124,58,237,0.1)",
                  border: "1px solid rgba(124,58,237,0.2)",
                }}
              >
                <Inbox className="w-7 h-7 text-primary/60" />
              </div>
              <div className="text-center">
                <p className="font-display font-medium text-foreground/80 text-sm">
                  No leads yet
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Contact form submissions will appear here
                </p>
              </div>
            </div>
          )}

          {/* No search results */}
          {!isLoading &&
            !actorLoading &&
            contacts.length > 0 &&
            filtered.length === 0 && (
              <div
                className="flex flex-col items-center justify-center py-16 gap-3"
                data-ocid="dashboard.no_results_state"
              >
                <Search className="w-8 h-8 text-muted-foreground/40" />
                <p className="text-sm text-muted-foreground">
                  No results for "{search}"
                </p>
              </div>
            )}

          {/* Table */}
          {!isLoading && filtered.length > 0 && (
            <div className="overflow-x-auto" data-ocid="dashboard.leads_table">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/20">
                    {["Name", "Email", "Project Type", "Message", "Date"].map(
                      (col) => (
                        <th
                          key={col}
                          className="px-6 py-3 text-left text-[10px] font-body tracking-[0.15em] uppercase text-muted-foreground/70 font-normal"
                        >
                          {col}
                        </th>
                      ),
                    )}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((row, i) => (
                    <motion.tr
                      key={String(row.id)}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.03 }}
                      data-ocid={`dashboard.leads_table.item.${i + 1}`}
                      className="border-b border-border/10 hover:bg-white/[0.02] transition-smooth group"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div
                            className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-display font-semibold"
                            style={{
                              background:
                                "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(59,130,246,0.15))",
                              border: "1px solid rgba(124,58,237,0.25)",
                              color: "#a78bfa",
                            }}
                          >
                            {row.name.charAt(0).toUpperCase()}
                          </div>
                          <span className="text-foreground font-body text-sm truncate max-w-[120px]">
                            {row.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-muted-foreground text-xs font-mono truncate block max-w-[180px]">
                          {row.email}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className="px-2.5 py-1 rounded-full text-[10px] font-body tracking-wider uppercase whitespace-nowrap"
                          style={{
                            background: row.projectType
                              .toLowerCase()
                              .includes("full")
                              ? "rgba(6,182,212,0.12)"
                              : row.projectType.toLowerCase().includes("back")
                                ? "rgba(59,130,246,0.12)"
                                : "rgba(124,58,237,0.12)",
                            color: row.projectType
                              .toLowerCase()
                              .includes("full")
                              ? "#22d3ee"
                              : row.projectType.toLowerCase().includes("back")
                                ? "#60a5fa"
                                : "#a78bfa",
                            border: `1px solid ${
                              row.projectType.toLowerCase().includes("full")
                                ? "rgba(6,182,212,0.2)"
                                : row.projectType.toLowerCase().includes("back")
                                  ? "rgba(59,130,246,0.2)"
                                  : "rgba(124,58,237,0.2)"
                            }`,
                          }}
                        >
                          {row.projectType}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-muted-foreground text-xs line-clamp-1 max-w-[220px] block">
                          {row.message.length > 80
                            ? `${row.message.slice(0, 80)}…`
                            : row.message}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1.5 text-muted-foreground/60 text-xs whitespace-nowrap">
                          <Calendar className="w-3 h-3 flex-shrink-0" />
                          {formatDate(row.timestamp)}
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
