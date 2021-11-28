import { LayoutGuest, Stars } from "../../../../src/components";
import Paragraph from "antd/es/typography/Paragraph";
import { Button } from "antd";
import Link from "next/link";
import routes from "../../../../routes";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

export default function OrderReview() {
  const router = useRouter();

  return (
    <LayoutGuest>
      <div className="w-full px-8 py-8 text-base bg-gray-dark">
        <div className="grid grid-cols-3">
          <div className="">
            <ArrowLeftOutlined onClick={() => router.back()} />
          </div>
          <h3 className="text-center font-semibold text-xl ml-4 ">
            Pay amount
          </h3>
        </div>

        <div className="">
          <p className="mb-8 text-center">
            Estimated Time <span className="text-yellow">15:00</span>
          </p>

          <div className="bg-purple-dark py-4 px-8 rounded-sm mb-10">
            <div className="flex justify-between mb-7">
              <div className="flex justify-center">
                <svg
                  width={25}
                  height={27}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx={12.5} cy={12.5} r={12.5} fill="#8913C0" />
                  <circle
                    cx={21}
                    cy={23}
                    r={4}
                    fill="#4ADA4F"
                    fillOpacity={0.93}
                  />
                  <path
                    d="M9.58 21.068h1.257v-4.325h.107c.277.447.81 1.428 2.386 1.428 2.046 0 3.473-1.641 3.473-4.24 0-2.579-1.427-4.22-3.494-4.22-1.598 0-2.088.98-2.365 1.407h-.15v-1.3H9.58v11.25zm1.236-7.159c0-1.832.81-3.068 2.344-3.068 1.598 0 2.386 1.342 2.386 3.068 0 1.747-.81 3.132-2.386 3.132-1.513 0-2.344-1.278-2.344-3.132z"
                    fill="#fff"
                  />
                </svg>
                <span className="pl-2"> Piggy Vendor</span>
              </div>

              <div className="flex justify-center items-center">
                <span className="pr-2">4.5</span>
                <Stars height={15} width={83} />
                <span className="pl-2"> (220 ratings)</span>
              </div>
            </div>
            <p className={"flex mb-2"}>
              <img
                className="h-5 mr-1"
                src="/images/verified.png"
                alt="verified"
              />
              <span className="">PiggyFi holds the currency in an account</span>
            </p>
            <p className={"flex"}>
              <img
                className="h-5 mr-1"
                src="/images/support.png"
                alt="verified"
              />
              <span className="">PiggyFi 24/7 customer support</span>
            </p>
          </div>
        </div>

        <div className="">
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

          <div className="flex justify-between mb-4">
            <div className="text-gray-400">Order Number</div>
            <div className="">
              <Paragraph copyable>20210822347898023929</Paragraph>
            </div>
          </div>
        </div>

        <div className="text-center flex">
          {/*<Link href={routes.transactions.orders.review("12432134")}>*/}
          <Button type="default" size="large" className="w-full mr-2">
            Cancel
          </Button>
          {/*</Link>*/}
          <Link href={routes.transactions.orders.payment("12432134")}>
            <Button type="primary" size="large" className="w-full ml-2">
              Proceed
            </Button>
          </Link>
        </div>
      </div>
    </LayoutGuest>
  );
}
