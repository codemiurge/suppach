import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import type { RootState } from "@app/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlask, faBox, faHourglass, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

import "./DashboardPage.scss";

export default function DashboardPage() {
  const batches = useSelector((state: RootState) => state.batch.list);
  const recipes = useSelector((state: RootState) => state.recipe.list);

  // Статистика партий по статусам
  const totalRecipes = recipes.length;
  const inWork = batches.filter(b => b.status === "В работе").length;
  const waiting = batches.filter(b => b.status === "Ожидание проверки").length;
  const approved = batches.filter(b => b.status === "Допущена").length;
  const rejected = batches.filter(b => b.status === "Отклонена").length;

  return (
    <div className="dashboard">
      <div className="pageHeader">
        <h1>Обзор</h1>
      </div>

      {/* KPI Cards */}
      <div className="kpi-grid">
        <div className="kpi-card">
          <div className="kpi-icon"><FontAwesomeIcon icon={faFlask} /></div>
          <div>
            <div className="kpi-value">{totalRecipes}</div>
            <div className="kpi-label">Всего рецептур</div>
            <div className="kpi-change positive">+12 за неделю</div>
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-icon"><FontAwesomeIcon icon={faBox} /></div>
          <div>
            <div className="kpi-value">{inWork}</div>
            <div className="kpi-label">Партии в работе</div>
            <div className="kpi-change positive">+5 за неделю</div>
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-icon"><FontAwesomeIcon icon={faHourglass} /></div>
          <div>
            <div className="kpi-value">{waiting}</div>
            <div className="kpi-label">Ожидают проверки</div>
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-icon success"><FontAwesomeIcon icon={faCheck} /></div>
          <div>
            <div className="kpi-value">{approved}</div>
            <div className="kpi-label">Допущено</div>
            <div className="kpi-change positive">+7 за неделю</div>
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-icon danger"><FontAwesomeIcon icon={faTimes} /></div>
          <div>
            <div className="kpi-value">{rejected}</div>
            <div className="kpi-label">Отклонено</div>
            <div className="kpi-change">+1 за неделю</div>
          </div>
        </div>
      </div>

      <div className="dashboard-tables">
        <div className="table-card">
          <div className="table-header">
              <span>Последние партии</span>
              <Link to="/batches" className="toBatchesLink">
                <span>К партиям...</span>
              </Link>
          </div>
          
          <div className="batchTableWrapper">
                      <table>
                          <thead>
                              <tr>
                                  <th>Название</th>
                                  <th>Статус</th>
                                  <th>Единицы</th>
                                  <th>Капсулы</th>
                              </tr>
                          </thead>
          
                          <tbody>
                              {batches.map(batch => (
                                  <tr key={batch.id}>
                                      <td>{batch.name}</td>
          
                                      <td>
                                          <span className="status">
                                              {batch.status}
                                          </span>
                                      </td>
          
                                      <td>
                                          {batch.quantity_units}
                                      </td>
          
                                      <td>
                                          {batch.total_capsules}
                                      </td>
                                  </tr>
                              ))}
                          </tbody>
                      </table>
                  </div>
        </div>

      </div>
    </div>
  );
}