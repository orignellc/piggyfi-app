import { LayoutGuest } from "../../src/components/Layout";
import Link from "next/link";
import { Button, Input } from "antd";
import routes from "../../routes";

export default function Login() {
  return (
    <LayoutGuest>
      <div className="w-3/5 mx-auto">
        <img
          src="/images/piggyfi-logo.png"
          alt="Logo"
          className={"h-16 mb-8 mx-auto"}
        />
        <div className="text-xl font-semibold mb-6">Welcome!</div>
        <div className="mb-4">
          <Input size="large" placeholder="Email" />
        </div>
        <div className="mb-4">
          <Input.Password size="large" placeholder="Password" />
        </div>
        <div className="mt-8 flex justify-center">
          <Link href={routes.home}>
            <Button type="primary" size="large">
              Login
            </Button>
          </Link>
        </div>
      </div>
    </LayoutGuest>
  );
}
