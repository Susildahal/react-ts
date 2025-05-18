import * as React from "react"
import { Link } from "react-router-dom" // ✅ import Link

import { SearchForm } from "@/components/search-form"
import { VersionSwitcher } from "@/components/version-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// Sample data
const data = {
  versions: [],
  navMain: [
    {
      title: "Getting Started",
      items: [
        { title: "Login", url: "/login" },
        { title: "Project Structure", url: "/structure" },
      ],
    },
    {
      title: "Building Your Application",
      items: [
        { title: "Routing", url: "/routing" },
        { title: "Data Fetching", url: "/fetching", isActive: true },
        { title: "Rendering", url: "/rendering" },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
        <SearchForm />
      </SidebarHeader>

      <SidebarContent>
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((link) => (
                  <SidebarMenuItem key={link.title}>
                    <SidebarMenuButton asChild isActive={link.isActive}>
                      {/* ✅ use Link here */}
                      <Link to={link.url}>{link.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  )
}
