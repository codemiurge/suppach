import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Topbar.scss";

export default function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-left"> </div>

      <div className="topbar-right">
        <button className="icon-button">
          <FontAwesomeIcon icon={faBell} />
          <span className="notification-badge">3</span>
        </button>
        
        <button className="create-btn">
          <FontAwesomeIcon icon={faPlus} />
          Создать
        </button>

        <div className="user-avatar">
          👩‍🔬
        </div>
      </div>
    </header>
  );
}