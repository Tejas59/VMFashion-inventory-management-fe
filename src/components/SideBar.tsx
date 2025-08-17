"use client";
import {
  Home,
  PackageSearch,
  ShoppingBasket,
  ShoppingCart,
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
import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/redux/authSlice";

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
  const dispatch = useAppDispatch();
  const handleLogoutClick = () => {
    dispatch(logout());
  };

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
            <SidebarMenu className="mt-[400px]">
              <SidebarMenuItem>
                <SidebarMenuButton onClick={handleLogoutClick}>
                  <span>Logout</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default SideBar;
