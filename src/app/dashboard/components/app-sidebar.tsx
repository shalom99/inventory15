import { Calendar, Home, Inbox, Search, Settings, User, Warehouse } from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"

  const items = [
    {
      title: "Home",
      url: "../dashboard",
      icon: Home,
    },
    {
      title: "Inventory",
      url: "../dashboard/inventory",
      icon: Warehouse,
    },
    {
      title: "Profile",
      url: "../dashboard/profile",
      icon: User,
    },
    {
      title: "Payments",
      url: "../dashboard/payments",
      icon: Search,
    },
    // {
    //   title: "Settings",
    //   url: "#",
    //   icon: Settings,
    // },
  ]
  
  export function AppSidebar() {
    return (

    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
    )
  }
  