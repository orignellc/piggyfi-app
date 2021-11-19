import { LayoutGuest } from "../../../src/components/Layout";
import { CountriesDropdown } from "../../../src/components/Forms";
import { Button } from "antd";
import Link from "next/link";

export default function RegisterCountry() {
  return (
    <LayoutGuest>
      <div className="">
        <img src="/images/globe.png" alt="Globe" className={"h-24 mx-auto"} />
        <div className="">
          <p className="w-3/5 text-center mx-auto pt-4 text-lg">
            Before we start, let us know your current location of residence
          </p>

          <div className="w-2/3 mx-auto mt-6">
            <CountriesDropdown />
            <div className="text-gray-400 text-sm mt-2">
              The registration process is subject to change based on the
              information you provide.
            </div>

            <div className="mt-8 flex justify-end">
              <Link href="/accounts/register/bio">
                <Button type="primary" size="large">
                  Next
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </LayoutGuest>
  );
}
