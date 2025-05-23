// app/dashboard/layout.tsx
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import { DropdownMenuDemo } from "@/components/dropdown-demo";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
        
      <AppSidebar />
      <main className="w-full pl-4">
       <div className="flex justify-between items-center">
         <SidebarTrigger />
         
         <header className="flex h-16 shrink-0 items-center gap-2 px-4">

          <div className="flex items-center gap-2">
            <ModeToggle/>
            <DropdownMenuDemo/>
          </div>
        </header>
       </div>
        {children}
      </main>
    </SidebarProvider>
  );
}
