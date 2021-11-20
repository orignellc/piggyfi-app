import { LayoutGuest } from "../../src/components/Layout";
import { Button, DatePicker, Input } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import routes from "../../routes";
import Link from "next/link";

export default function KYC() {
  return (
    <LayoutGuest>
      <div className="w-5/6 mx-auto">
        <ArrowLeftOutlined />
        <h2 className="text-gray-400 text-2xl mb-3 text-center font-light">
          KYC Information
        </h2>
        <div className="text-gray-400 bg-gray-400 bg-opacity-40 text-center rounded-md py-3 mb-6">
          <p className="w-2/3 mx-auto">
            Upload image of Valid ID (Intl. passport, Drivers license or
            National ID)
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <Input placeholder="First Name" size="large" />
          <Input placeholder="Middle Name" size="large" />
          <Input placeholder="Last Name" size="large" />
        </div>

        <div className="mb-4">
          <div className="text-gray-300">
            Full name as shown on bank details{" "}
            <span className="text-gray-400">
              (N.B you cannot change name after it has been added)
            </span>
          </div>
          <Input size="large" />
        </div>

        <div className="mb-4">
          <div className="text-gray-300">Date of birth</div>
          <DatePicker
            size="large"
            className="w-full"
            onChange={(e) => {
              console.log(e);
            }}
          />
        </div>

        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="">
            <div className="text-gray-300">State of Residence</div>
            <Input placeholder="Lagos" size="large" />
          </div>
          <div className="col-span-2">
            <div className="text-gray-300">State of Residence</div>
            <Input size="large" />
          </div>
        </div>

        <div className="text-center">
          <Link href={routes.home}>
            <Button type="primary" size="large">
              Update KYC
            </Button>
          </Link>
        </div>
      </div>
    </LayoutGuest>
  );
}
