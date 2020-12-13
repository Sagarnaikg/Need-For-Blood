import React, { useState } from "react";
import "./active_users_card.css";

const ActiveUsersCard = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="usersCard">
      <h4>Active Users</h4>
      <h3>1,56,789</h3>
    </div>
  );
};

export default ActiveUsersCard;
