import { LayoutGuest } from "../../../src/components/Layout";
import { CountriesDropdown } from "../../../src/components/Forms";
import { Button, Input } from "antd";
import Link from "next/link";

export default function RegisterCountry() {
  return (
    <LayoutGuest>
      <div className="">
        <img
          src="/images/send-mail.png"
          alt="Send mail"
          className={"h-24 mx-auto"}
        />
        <div className="">
          <h2 className="w-3/5 text-center mx-auto pt-2 text-2xl font-semibold">
            Verification Email Sent!
          </h2>
          <h2 className="w-3/5 text-center mx-auto pt-2 mb-4 text-lg">
            We’ve sent an email to pamilerinogundayo@gmail.com
          </h2>

          <div className="w-2/3 mx-auto mt-6">
            <div className="mb-4">
              <Input size="large" placeholder="Email" />
            </div>

            <div className="my-8 flex justify-center">
              <Link href="/accounts/register/bio">
                <Button type="primary" size="large">
                  Submit Verification Code
                </Button>
              </Link>
            </div>

            <p className="text-center">If you did not receive the email</p>
          </div>
        </div>
      </div>
    </LayoutGuest>
  );
}
