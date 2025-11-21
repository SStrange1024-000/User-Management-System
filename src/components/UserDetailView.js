import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import './UserListStyle.scss';

function UserDetailView({ users }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = users.find((u) => u.id == id);

  if (!user) return <h2>User Not Found</h2>;

  return (
    <div className="addUserMain" >
      <h1 className="title">User Details</h1>

      <div className="view">
        <h2>{user.name}</h2>
        <p><b>Email:</b> {user.email}</p>
        <p><b>Phone:</b> {user.phone}</p>
        <p><b>Website:</b> {user.website}</p>

      <button onClick={() => navigate(-1)}>Back</button>
      </div>

      <br />
    </div>
  );
}

export default UserDetailView;
