import { LayoutGuest, Stars } from "../../../../src/components";
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

export default function NeedHelp() {
  const router = useRouter();

  return (
    <LayoutGuest>
      <div className="w-full px-8 py-8 text-base bg-gray-dark">
        <div className="grid grid-cols-5">
          <div className="">
            <ArrowLeftOutlined onClick={() => router.back()} />
          </div>
          <h3 className="text-center font-semibold text-xl ml-4 col-span-3">
            Need help with payment?
          </h3>
        </div>
        <p className="mb-10 text-center">
          Estimated Time <span className="text-yellow">15:00</span>
        </p>

        {faqs.map((faq) => (
          <div className="text-lg mb-6">
            <p className="text-gray-400 mb-2">Question: {faq.question}</p>
            <p className="">
              <span className="text-gray-400">Answer: </span>
              {faq.answer}
            </p>
          </div>
        ))}

        <div className="text-center w-2/3 mx-auto">
          <Button type="primary" size="large" className="w-full mb-2">
            Contact PiggyFi Support
          </Button>

          <Link href={routes.transactions.orders.cancel("12432134")}>
            <Button type="default" size="large" className="w-full mt-2">
              Cancel Funding
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
