"use client";
import {
  Home,
  PackageSearch,
  ShoppingBasket,
  ShoppingCart
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { PATHS } from "@/utils/constant";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: PATHS.HOME,
    icon: Home,
  },
  {
    title: "Inventory",
    url: PATHS.INVENTORY,
    icon: PackageSearch,
  },
  {
    title: "Products",
    url: PATHS.PRODUCT,
    icon: ShoppingBasket,
  },
  {
    title: "Orders",
    url: PATHS.ORDERS,
    icon: ShoppingCart,
  },
];

const SideBar = () => {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>TrendyFash</SidebarGroupLabel>
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
  );
};

export default SideBar;
