interface UserDashboard {
  name: string;
  email: string;
  role: string;
}
export default function UserDashboard({ name, email, role }: UserDashboard) {
  return (
    <div>
      <h1>UserDashboard</h1>
      <p>{name}</p>
      <p>{email}</p>
      <p>{role}</p>
    </div>
  );
}
