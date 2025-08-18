"use client";
import useAuthentication from "@/hooks/useAuthentication";
import { useEffect, ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { PATHS } from "@/utils/constant";
import storage from "redux-persist/lib/storage";

type RoutingGuardProps = {
  children: ReactNode;
};

const PUBLIC_ROUTES = [PATHS.LOGIN, PATHS.REGISTER];

const RoutingGuard = ({ children }: RoutingGuardProps) => {
  const { isAuthenticated } = useAuthentication();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (isAuthenticated === undefined) return;
    if (!isAuthenticated && !PUBLIC_ROUTES.includes(pathname)) {
      storage.removeItem("persist:root");
      localStorage.removeItem("persist:root");
      router.push(PATHS.LOGIN);
    }

    // If logged in and on login/register, redirect to home
    if (isAuthenticated && PUBLIC_ROUTES.includes(pathname)) {
      router.push(PATHS.HOME);
    }
  }, [isAuthenticated, pathname, router]);

  // Only render children if authenticated
  return <>{children}</>;
};

export default RoutingGuard;
