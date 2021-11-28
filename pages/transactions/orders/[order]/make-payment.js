import { LayoutGuest } from "../../../../src/components";
import Paragraph from "antd/es/typography/Paragraph";
import { Button } from "antd";
import Link from "next/link";
import routes from "../../../../routes";
import {
  ArrowLeftOutlined,
  DownOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";

export default function MakePayment() {
  const router = useRouter();

  return (
    <LayoutGuest>
      <div className="w-full px-8 py-8 text-base bg-gray-dark">
        <div className="grid grid-cols-4">
          <div className="">
            <ArrowLeftOutlined onClick={() => router.back()} />
          </div>
          <h3 className="text-center font-semibold text-xl ml-4 col-span-2">
            Make Payment
          </h3>
        </div>

        <div className="">
          <div className="text-center mb-8">
            <p className="mb-2">
              Estimated Time <span className="text-yellow">15:00</span>
            </p>
            <p className={"mb-4 text-xl font-semibold"}>&#8358; 5,000.00</p>
            <Button type="default" className="inline-flex items-center">
              <PhoneOutlined />
              Contact
            </Button>
          </div>

          <div className="bg-purple-dark py-4 px-8 rounded-sm mb-3">
            <div className="flex">
              <div className="mr-1 pt-2">
                <div className="rounded-full h-5 w-5 flex items-center justify-center bg-yellow text-gray-700 text-sm">
                  1
                </div>
              </div>
              <div className="ml-1">
                <p className="text-lg mb-4">
                  Open your own bank application or platform to transfer to the
                  account provided below
                </p>

                <div className="">
                  <div className="mb-3 px-3 border-l-4 leading-none border-primary">
                    Bank Transfer
                  </div>

                  <div className="flex justify-between mb-3">
                    <span className="text-gray-400">Account Name</span>
                    <span>ADEBAYO KAYODE</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-400">Account Number</span>
                    <Paragraph copyable>213847390</Paragraph>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-400">Bank Name</span>
                    <Paragraph copyable>Zenith Bank</Paragraph>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="mr-1 pt-2">
                <div className="rounded-full h-5 w-5 flex items-center justify-center bg-yellow text-gray-700 text-sm">
                  2
                </div>
              </div>
              <div className="ml-1">
                <p className="text-lg mb-4">
                  After transferring, click on “Transferred” button below.
                </p>
              </div>
            </div>
          </div>
          <div className="py-4 px-8">
            <div className="flex justify-between mb-4">
              <div className="text-gray-400">Terms</div>
              <div className="text-gray-400">
                <DownOutlined />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center flex">
          <Link href={routes.transactions.orders.help("12432134")}>
            <Button type="default" size="large" className="w-full mr-2">
              Help Me
            </Button>
          </Link>

          <Link href={routes.transactions.orders.transferred("12432134")}>
            <Button type="primary" size="large" className="w-full ml-2">
              Transferred
            </Button>
          </Link>
        </div>
      </div>
    </LayoutGuest>
  );
}
