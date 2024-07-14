import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const DEFAULT_CARDS = [
  { "title": "Look into render bug in dashboard", "column": "backlog" },
  { "title": "SOX compliance checklist", "column": "backlog" },
  { "title": "[SPIKE] Migrate to Azure", "column": "backlog" },
  { "title": "Document Notifications service",  "column": "backlog" },
  {
    "title": "Research DB options for new microservice",
    "column": "todo"
  },
  { "title": "Postmortem for outage", "column": "todo" },
  { "title": "Sync with product on Q3 roadmap", "column": "todo" },

  {
    "title": "Refactor context providers to use Zustand",
    "column": "doing"
  },
  { "title": "Add logging to daily CRON","column": "doing" },
  {
    "title": "Set up DD dashboards for Lambda listener",
    "column": "done"
  }
]


