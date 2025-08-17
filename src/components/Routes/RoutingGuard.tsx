"use client"
import useAuthentication from "@/hooks/useAuthentication";
import { useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";

type RoutingGuardProps = {
  children: ReactNode;
};

const RoutingGuard = ({ children }: RoutingGuardProps) => {
  const { isAuthenticated } = useAuthentication();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  // Only render children if authenticated
  return <>{children}</>;
};

export default RoutingGuard;
