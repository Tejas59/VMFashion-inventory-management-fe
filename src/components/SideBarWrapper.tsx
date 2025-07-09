import SideBar from "./SideBar";
import { SidebarProvider } from "./ui/sidebar";

const SideBarWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <SidebarProvider>
        <SideBar />
      </SidebarProvider>
      {children}
    </>
  );
};

export default SideBarWrapper;
