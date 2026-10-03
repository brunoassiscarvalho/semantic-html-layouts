import { useNavigate } from "react-router";
import { VerticalCenter } from "@semantic-html-layouts/ui";
export function Login() {
  const navigate = useNavigate();

  return (
    <VerticalCenter title="Login" subtitle="Please enter your credentials">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button onClick={() => navigate("/onboarding")}>Login</button>
    </VerticalCenter>
  );
}
