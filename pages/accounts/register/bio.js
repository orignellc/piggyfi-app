import { LayoutGuest } from "../../../src/components/Layout";
import { CountriesDropdown } from "../../../src/components/Forms";
import { Button, Input } from "antd";
import Link from "next/link";

export default function RegisterCountry() {
  return (
    <LayoutGuest>
      <div>
        <div className="w-3/5 mx-auto">
          <div className="text-xl font-semibold mb-6">Create an Account</div>
          <div className="mb-4">
            <Input size="large" placeholder="Email" />
          </div>
          <div className="mb-4">
            <Input.Password size="large" placeholder="Password" />
          </div>
          <div className="mb-4">
            <Input.Password size="large" placeholder="Confirm Password" />
          </div>
          <div className="mt-8 flex justify-center">
            <Link href="/accounts/register/verification">
              <Button type="primary" size="large">
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </LayoutGuest>
  );
}
