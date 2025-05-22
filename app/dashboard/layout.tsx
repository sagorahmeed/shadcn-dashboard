// app/dashboard/layout.tsx
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/mode-toggle";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
        
      <AppSidebar />
      <main className="w-full">
       <div className="flex justify-between items-center">
         <SidebarTrigger />
         
         <header className="flex h-16 shrink-0 items-center gap-2 px-4">

          <div>
            <ModeToggle/>
          </div>
        </header>
       </div>
        {children}
      </main>
    </SidebarProvider>
  );
}
