import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
  } from "@/components/ui/sidebar";
  import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import Link from "next/link";

  
export default function AppSidebar() {
    // Menu items.
const items = [
    {
      title: "Home",
      url: "/",
      icon: Home,
    },
    {
      title: "Form Validation",
      url: "/form-validation",
      icon: Inbox      
    },
    {
      title: "Redux",
      url: "/redux-page",
      icon: Calendar,
    },
    {
      title: "File Upload",
      url: "/file-upload",
      icon: Search,
    },
    {
      title: "Server Actions",
      url: "/server-actions",
      icon: Settings,
    },
    {
        title: "Authjs 5",
        url: "/auth",
        icon: Settings,
    },
  ];

    return (
      <Sidebar>
        <SidebarHeader>NextJS Revise</SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    {
                        items.map(item=> (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild>
                                    <Link href={item.url}>{item.title}</Link>
                                </SidebarMenuButton>                               
                            </SidebarMenuItem>
                        ))
                    }
                </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup />
        </SidebarContent>
        <SidebarFooter>
            Training Session
        </SidebarFooter>
      </Sidebar>
    )
  }  