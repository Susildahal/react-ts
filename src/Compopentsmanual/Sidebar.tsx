import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Page() {
  return (
    
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex  h-16 bg-black text-white shrink-0 items-center  w-full fixed gap-2 border-b px-4">
          <SidebarTrigger className="pl-2  fixed  text-9xl"/>
          <Separator orientation="vertical" className="mr-2 h-4" />
          
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#" className=" pl-4">
                 Welcome to test webside
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage className="pl-5">  Welcome to test webside</BreadcrumbPage>
                
              </BreadcrumbItem>
            </BreadcrumbList>
          
          </Breadcrumb>
        </header>
      
      </SidebarInset>
    </SidebarProvider>
  )
}
