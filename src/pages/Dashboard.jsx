import React, { useState } from "react";
import SideMenu from "../components/SideMenu";

const Dashboard = () => {
    const [selectedSection, setSelectedSection] = useState("home");
  
    const menuItems = [
      { id: "home", label: "Home", icon: "🏠" },
      { id: "appointments", label: "Citas", icon: "📅" },
      { id: "clients", label: "Clientes", icon: "👤" },
      { id: "reports", label: "Reportes", icon: "📊" },
    ];
  
    return (
      <div className="flex">
        {/* Menú lateral */}
        <SideMenu menuItems={menuItems} onSelect={setSelectedSection} />
  
        {/* Contenido del Dashboard */}
        <div className="flex-1 p-6 bg-white transition-all duration-300">
          {selectedSection === "home" && <p>🏠 Bienvenido al Dashboard</p>}
          {selectedSection === "appointments" && <p>📅 Citas Agendadas</p>}
          {selectedSection === "clients" && <p>👤 Clientes</p>}
          {selectedSection === "reports" && <p>📊 Reportes</p>}
        </div>
      </div>
    );
  };

export default Dashboard;

