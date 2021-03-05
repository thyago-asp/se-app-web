import MinhaSaude from "views/MinhaSaude.js";
import Agendar from "views/Agendar.js";
import AgendarConsulta from "views/AgendarConsulta.js";
import AtividadesCompartilhadas from "views/AtividadesCompartilhadas.js";
import AtividadesAtribuidas from "views/AtividadesAtribuidas.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";

const dashboardRoutes = [
 
  {
    path: "/dashboard",
    name: "Minha saúde",
    icon: "nc-icon nc-chart-pie-35",
    component: MinhaSaude,
    layout: "/admin",
  },
  {
    path: "/agendar",
    name: "Agendar",
    icon: "nc-icon nc-notes",
    component: Agendar,
    layout: "/admin",
  },
  {
    path: "/consulta",
    name: "Agendar Consulta",
    icon: "nc-icon nc-notes",
    component: AgendarConsulta,
    layout: "/admin",
  },
  {
    path: "/compartilhadas",
    name: "Atividades Compartilhadas",
    icon: "nc-icon nc-paper-2",
    component: AtividadesCompartilhadas,
    layout: "/admin",
  },
  {
    path: "/atribuidas",
    name: "Atividades Atribuídas",
    icon: "nc-icon nc-atom",
    component: AtividadesAtribuidas,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Emergência",
    icon: "nc-icon nc-pin-3",
    component: MinhaSaude,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Contatos",
    icon: "nc-icon nc-bell-55",
    component: MinhaSaude,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Perfil",
    icon: "nc-icon nc-bell-55",
    component: MinhaSaude,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Grupos",
    icon: "nc-icon nc-bell-55",
    component: MinhaSaude,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Configurações",
    icon: "nc-icon nc-bell-55",
    component: MinhaSaude,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Sair",
    icon: "nc-icon nc-bell-55",
    component: MinhaSaude,
    layout: "/admin",
  },
];

export default dashboardRoutes;
