import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHome, faFlask, faBox, faVial, faLeaf, 
  faWarehouse, faUsers, faChartBar, faCog 
} from "@fortawesome/free-solid-svg-icons";

import "./Sidebar.scss";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <div className="avatar">👩‍🔬</div>
          <div>
            <div className="logo-title">Supplement Creator</div>
          </div>
        </div>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <FontAwesomeIcon icon={faHome} />
          <span>Главная</span>
        </NavLink>

        <NavLink to="/recipes" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <FontAwesomeIcon icon={faFlask} />
          <span>Рецептуры</span>
        </NavLink>

        <NavLink to="/batches" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <FontAwesomeIcon icon={faBox} />
          <span>Партии</span>
        </NavLink>

        <NavLink to="/ingredients" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <FontAwesomeIcon icon={faLeaf} />
          <span>Ингредиенты</span>
        </NavLink>

        <NavLink to="/warehouses" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <FontAwesomeIcon icon={faWarehouse} />
          <span>Склады</span>
        </NavLink>

        {/* <NavLink to="/tests" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <FontAwesomeIcon icon={faVial} />
          <span>Тесты</span>
        </NavLink>

        <NavLink to="/employees" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <FontAwesomeIcon icon={faUsers} />
          <span>Сотрудники</span>
        </NavLink>

        <NavLink to="/reports" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <FontAwesomeIcon icon={faChartBar} />
          <span>Отчёты</span>
        </NavLink>

        <NavLink to="/settings" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <FontAwesomeIcon icon={faCog} />
          <span>Настройки</span>
        </NavLink> */}
      </nav>

      <div className="sidebar-footer">
        <div className="user-info">
          <div className="avatar-small">👩‍🔬</div>
          <div>
            <div className="user-name">Пользователь</div>
            <div className="user-role">Администратор</div>
          </div>
        </div>
      </div>
    </aside>
  );
}