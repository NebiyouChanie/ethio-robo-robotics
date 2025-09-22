"use client"

import {
  BookOpen,
  Bot,
  SquareTerminal
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

// This is sample data.
const data = {
   
   
  navMain: [
    {
      title: "Teams",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Register Team",
          url: "#",
        },
      ],  
    },
    {
      title: "Blogs & Announcements", 
      url: "/admin/blogs-and-announcements",
      icon: BookOpen,
      items: [
        {
          title: "Create Blog",
          url: "/admin/blogs-and-announcements/create-blog",
        },
        {
          title: "Create Announcement",
          url: "/admin/blogs-and-announcements/create-announcement",
        },
        {
          title: "Blogs",
          url: "/admin/blogs-and-announcements/blogs",
        },
      ],
    },
     
     
  ],
  
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center justify-start gap-4 px-4 border-b border-gray-200 py-4">
          <Image src="/images/logo.png" alt="logo" width={50} height={50} />
          <div className="flex flex-col">
          <h1 className="text-lg font-medium -mb-1">Admin</h1>
          <h1 className="text-sm font-medium">Dashboard</h1>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser  />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
