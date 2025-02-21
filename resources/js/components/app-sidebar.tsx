import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Droplets,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  Truck,
  FolderPlus,
  Folder,
  CirclePlus,
  UserRoundPlus,
  ChartColumnStacked,
  CircleHelp,
  MapPlus,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {  //usuario
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  unidades: [
    {
      name: "SPT-25",
      logo: Droplets,
      plan: "Assistente",
    },
    {
      name: "SPT-32",
      logo: Droplets,
      plan: "Assistente",
    },
    {
      name: "UCOQ",
      logo: Droplets,
      plan: "Principal",
    },
  ],
  navMain: [
    {
      title: "Criar um novo Qrcode", //Aqui ele Criar e fica sem pasta vai para  ''meus qrcodes'' onde ira ficar todos
      url: "#",
      icon:  CirclePlus,
      
    },
    {
      title: "Meus Qrcodes",
      url: "#",
      icon: Folder,
      items: [
        {
          title: "Criar nova pasta", //ao clicar vai pedir somente o nome da pasta e logo em cima embaixo vai ser adicionado a pasta
          url: "#",
          //tentar colocar icons aqui
        }
      ]
    },
    {
      title: "Estatiscas",
      url: "#",
      icon: ChartColumnStacked ,
    },
    {
      title: "Criar Usuário", // somente para masters
      url: "#",
      icon: UserRoundPlus,
    },
    {
      title: "Criar Unidade", // somente para masters
      url: "#",
      icon: MapPlus,
    },
    {
      title: "Ajuda",
      url: "#",
      icon: CircleHelp,
    },
    
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher unidades={data.unidades} /> 
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
