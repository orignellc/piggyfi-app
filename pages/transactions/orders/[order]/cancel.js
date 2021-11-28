import { LayoutGuest } from "../../../../src/components";
import { Button } from "antd";
import routes from "../../../../routes";
import {
  ArrowLeftOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";
import TextArea from "antd/es/input/TextArea";

export default function Cancel() {
  const router = useRouter();

  return (
    <LayoutGuest>
      <div className="w-full px-8 py-8 text-base bg-gray-dark">
        <div className="grid grid-cols-5 mb-8">
          <div className="">
            <ArrowLeftOutlined onClick={() => router.back()} />
          </div>
          <h3 className="text-center font-semibold text-xl ml-4 col-span-3">
            Cancel Funding
          </h3>
        </div>

        <p className="flex items-center mb-2">
          <ExclamationCircleOutlined className="text-yellow mr-1" />
          Please read through before canceling
        </p>
        <div className="py-4 px-8 bg-gray-800 mb-8">
          <ol className="list-decimal list-outside">
            <li className="mb-3">
              If you have made transfer to the vendor, do not cancel
            </li>
            <li>
              If you cancel more than 3 times in 24hrs, you will be banned for
              24 hrs
            </li>
          </ol>
        </div>

        <div className="">
          <h2 className="text-lg font-semibold mb-3">
            Why do you want to cancel?
          </h2>

          <div className="mb-10">
            <div className="text-gray-200 hover:text-yellow bg-gray-800 px-4 py-3 flex items-center mb-3">
              <img src="/images/radio-selected.png" className="mr-2 h-4" />
              <span>I do not want to fund my wallet anymore</span>
            </div>
            <div className="text-gray-200 hover:text-yellow bg-gray-800 px-4 py-3 flex items-center mb-3">
              <img src="/images/radio.png" className="mr-2 h-4" />
              <span>I am having problems with my payment method</span>
            </div>
            <div className="text-gray-200 hover:text-yellow bg-gray-800 px-4 py-3 flex items-center mb-3">
              <img src="/images/radio.png" className="mr-2 h-4" />
              <span>Other reasons</span>
            </div>
            <TextArea />
          </div>
        </div>
        <div className="text-center w-2/3 mx-auto">
          <Button type="primary" size="large" className="w-full mb-2">
            Ok
          </Button>
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
