import { Button } from "@/components/ui/button"

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
  SidebarMenuItem,
} from "@/components/ui/sidebar.tsx"
import {
  groupA11yChecks,
  useA11yChecksListQuery,
} from "@/hooks/use-a11y-checks-list-query"
import { cn } from "@/lib/utils"
import { MessageCircle } from "lucide-react"
import { useMemo } from "react"
import { Link, useLocation } from "react-router"

export function AppSidebar() {
  const { data } = useA11yChecksListQuery()

  const groupedA11yChecks = useMemo(() => {
    return Object.values(groupA11yChecks(data?.data ?? []))
  }, [data])

  const location = useLocation()

  return (
    <Sidebar>
      <SidebarHeader className="pt-6">
        <Link to="/a11y-checks/new">
          <Button className="w-full">
            <MessageCircle />
            New a11y check
          </Button>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent></SidebarGroupContent>
        </SidebarGroup>
        {groupedA11yChecks.map((group) => (
          <SidebarGroup key={group.name}>
            <SidebarGroupLabel>{group.name}</SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((a11yCheck) => (
                  <SidebarMenuItem
                    key={a11yCheck?.id}
                    className={cn({
                      "bg-muted rounded-md": location.pathname.includes(
                        a11yCheck.id
                      ),
                    })}
                  >
                    <Link to={`/a11y-checks/${a11yCheck?.id}`}>
                      <SidebarMenuButton className="truncate overflow-ellipsis">
                        {a11yCheck?.name}
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
