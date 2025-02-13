import React from "react";
import PropTypes from "prop-types";

const SideMenu = ({ menuItems, onSelect }) => {
    return (
      <div className="bg-[#b687b4] text-white p-4 flex flex-col items-center lg:w-64 w-16 h-screen max-h-screen transition-all duration-300">

        {/* Opciones del menú */}
        <nav className="flex flex-col space-y-6 flex-grow">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className="flex items-center justify-center lg:justify-start w-full py-2 px-3 hover:bg-purple-600 rounded-md transition-colors"
              onClick={() => onSelect(item.id)}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="hidden lg:inline ml-3">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    );
  };
  
  SideMenu.propTypes = {
    menuItems: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
  };
  
export default SideMenu;

