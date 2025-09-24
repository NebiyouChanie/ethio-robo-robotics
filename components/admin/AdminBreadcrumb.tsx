"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

function formatLabel(segment: string): string {
  const map: Record<string, string> = {
    admin: "Dashboard",
    post: "Posts",
    add: "Add",
    edit: "Edit",
    registrations: "Registrations",
  }
  return map[segment] || segment.replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase())
}

export default function AdminBreadcrumb() {
  const pathname = usePathname() || "/admin"
  const parts = pathname.split("/").filter(Boolean)

  // Only show crumbs starting from "admin"
  const adminIndex = parts.findIndex((p) => p === "admin")
  const crumbs = adminIndex >= 0 ? parts.slice(adminIndex) : ["admin"]

  const items = crumbs.map((seg, idx) => {
    const href = "/" + crumbs.slice(0, idx + 1).join("/")
    const label = formatLabel(seg)
    const isLast = idx === crumbs.length - 1
    return { href, label, isLast }
  })

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, i) => (
          <>
            <BreadcrumbItem key={item.href}>
              {item.isLast ? (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link href={item.href}>{item.label}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {i < items.length - 1 && <BreadcrumbSeparator />}
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}


