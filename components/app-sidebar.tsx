"use client"

import {
  BookOpen,
  Bot,
  SquareTerminal,
  FileText,
  Plus,
  List,
  Users,
  Settings
} from "lucide-react"
import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import Image from "next/image"
import Link from "next/link"

// Navigation data for admin sidebar
const data = {
  navMain: [
    {
      title: "Posts Management", 
      url: "/admin/post",
      icon: BookOpen,
      items: [
        {
          title: "All Posts",
          url: "/admin/post",
        },
        {
          title: "Create New Post",
          url: "/admin/post/add",
        },
      ],
    },
    {
      title: "Registrations",
      url: "/admin/registrations",
      icon: Users,
      items: [
        {
          title: "View Registrations",
          url: "/admin/registrations",
        },
        {
          title: "Add Registration",
          url: "/admin/registrations/add",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" className="bg-gray-900 border-r border-gray-800 group" {...props}>
      <SidebarHeader>
        {/* Logo and title */}
        <Link href="/admin">  
        <div className="flex items-center justify-start gap-4 px-4 border-b border-gray-800 py-4 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-2">
          <Image src="/images/logo.png" alt="logo" width={50} height={50} />
          <div className="flex flex-col group-data-[collapsible=icon]:hidden">
          <h1 className="text-lg font-medium -mb-1 text-white">Admin</h1>
          <h1 className="text-sm font-medium text-gray-300">Dashboard</h1>
          </div>
        </div>
        </Link>
      </SidebarHeader>
      <SidebarContent className="bg-gray-900">
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter className="bg-gray-900 border-t border-gray-800">
        <NavUser  />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
