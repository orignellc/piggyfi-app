import { LayoutGuest } from "../../../../src/components";
import { Button } from "antd";
import routes from "../../../../routes";
import {
  ArrowLeftOutlined,
  DownOutlined,
  ExclamationCircleOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";
import TextArea from "antd/es/input/TextArea";
import Paragraph from "antd/es/typography/Paragraph";
import Link from "next/link";

export default function Transferred() {
  const router = useRouter();

  return (
    <LayoutGuest>
      <div className="w-full px-8 py-8 text-base bg-gray-dark">
        <div className="flex mb-10">
          <div className="">
            <ArrowLeftOutlined onClick={() => router.back()} />
          </div>
          <div className="w-full ml-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-center font-semibold text-xl">Waiting...</h3>
              <Button type="default" className="inline-flex items-center">
                <PhoneOutlined />
                Contact
              </Button>
            </div>
            <div className="">This vendor has been verified by PiggyFi</div>
          </div>
        </div>

        <h2 className="text-lg mb-2">Fund Wallet</h2>

        <div className="p-4 bg-gray-800 mb-8">
          <div className="flex justify-between mb-4">
            <div className="text-gray-400">Fiat Amount</div>
            <div className="">&#8358; 5,000.00</div>
          </div>

          <div className="flex justify-between mb-4">
            <div className="text-gray-400">Price</div>
            <div className="">&#8358; 560.00</div>
          </div>

          <div className="flex justify-between mb-4">
            <div className="text-gray-400">USD Amount</div>
            <div className="">8.78 USD</div>
          </div>

          <div className="flex justify-between">
            <div className="text-gray-400">Order Number</div>
            <div className="">
              <Paragraph copyable>20210822347898023929</Paragraph>
            </div>
          </div>
        </div>

        <h2 className="text-lg mb-2">Vendor’s Details</h2>

        <div className="p-4 bg-gray-800 mb-8">
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

        <div className="py-4 px-8">
          <div className="flex justify-between mb-4">
            <div className="text-gray-400">Terms</div>
            <div className="text-gray-400">
              <DownOutlined />
            </div>
          </div>
        </div>
        <div className="text-center flex">
          <Link href={routes.transactions.orders.cancel("12432134")}>
            <Button type="default" size="large" className="w-full mr-2">
              Cancel
            </Button>
          </Link>

          <Link href={routes.transactions.orders.transferred("12432134")}>
            <Button type="primary" size="large" className="w-full ml-2">
              Make Complain
            </Button>
          </Link>
        </div>
      </div>
    </LayoutGuest>
  );
}

const faqs = [
  {
    question: "How do I make payment?",
    answer:
      "Log into your bank account and make payment on the account displayed on the “Make Payment” page.",
  },
  {
    question: "What will I do if my payment fails?",
    answer: "Contact PiggFi customer support team",
  },
  {
    question: "What if i do not want to fund my wallet again?",
    answer: "Click on “Cancel Funding”",
  },
];
