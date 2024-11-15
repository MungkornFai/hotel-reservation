export interface AdminDashboardProps {
  name: string;
  email: string;
  role: string
}
export default function AdminDashboard({ name, email,role }: AdminDashboardProps) {
  return (
    <div>
      AdminDashboard
      <h1>{name}</h1>
      <p>{email}</p>
      <p>{role}</p>
    </div>
  );
}
