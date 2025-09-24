import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import "../globals.css";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="[--header-height:calc(theme(spacing.14))] bg-gray-900 text-white">
      <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className=" flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 bg-gray-900 border-b border-gray-800">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1 text-white hover:text-cyan-400" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4 bg-gray-700"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#" className="text-gray-300 hover:text-cyan-400">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block text-gray-600" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-white">Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 bg-gray-900">
            {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
      </body>
    </html>
  );
}
