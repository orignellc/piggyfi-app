import { LayoutGuest } from "../Layout";
import { Button, Input } from "antd";
import Link from "next/link";
import routes from "../../../routes";
import {
  CloseOutlined,
  FileTextOutlined,
  SwapOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { Stars } from "../Icons";

let show, setShow;
let showGuide, setShowGuide;
let showConfirm, setShowConfirm;

export function ModalFundWallet() {
  [show, setShow] = useState(false);
  [showGuide, setShowGuide] = useState(false);
  [showConfirm, setShowConfirm] = useState(false);

  return (
    show && (
      <div className="absolute w-full h-full top-0 bg-gray-dark">
        <div className="relative">
          <div className="px-8 py-8 ">
            <div className="flex items-center mb-8">
              <CloseOutlined
                className="cursor-pointer pr-2 py-2"
                onClick={() => setShow(false)}
              />
              <h3 className="text-center font-semibold text-xl ml-4">
                Fund Wallet
              </h3>
            </div>
            <div className="flex justify-end ml-auto mb-3">
              <button className="bg-purple-dark px-4 py-2 flex items-center">
                <div className="text-white mr-3">NGN</div>
                <SwapOutlined />
              </button>
              <button className="py-2 px-4 align-middle">
                <FileTextOutlined />
              </button>
            </div>
            <p className="text-base mb-4">
              Enter an amount you want to add to your fund wallet
            </p>

            <div className="text-gray-400 bg-gray-600 bg-opacity-40 rounded-md py-3 px-4 mb-6">
              <p className="text-base mb-4 text-white">Total amount</p>

              <Input placeholder="Above N 1,000" size="large" />

              <p className="mt-3 mb-1 text-base">Minimum of $5 &#126; 2,800</p>
              <p className="text-base mb-6">
                Reference price 560.00NGN per USD
              </p>

              <div className="text-center">
                <Button
                  type="primary"
                  size="large"
                  onClick={() => setShowConfirm(true)}
                >
                  Proceed
                </Button>
              </div>
            </div>
          </div>
          {showGuide && (
            <div className="absolute w-full h-full top-0 bg-gray-dark bg-opacity-80 flex items-end">
              <div className="w-full bg-purple-dark rounded-md px-8 py-8 text-base">
                <h3 className="text-center font-semibold text-xl ml-4 mb-8">
                  Fund Wallet
                </h3>

                <img
                  src="/images/steps-to-fund.png"
                  alt="Steps to Fund"
                  className="mb-6"
                />

                <ol className="list-decimal list-inside mb-8">
                  <li>Click “fund” to fund wallet.</li>
                  <li>Enter amount and proceed.</li>
                  <li>Log in to your mobile bank app to make transfer.</li>
                  <li>Click on “transferred” after making payment.</li>
                </ol>

                <div className="text-center">
                  <Button
                    type="primary"
                    size="large"
                    onClick={() => setShowGuide(false)}
                  >
                    I Understand
                  </Button>
                </div>
              </div>
            </div>
          )}
          {showConfirm && (
            <div className="absolute w-full h-full top-0 bg-gray-dark bg-opacity-80 flex items-center justify-center">
              <div className="text-center bg-purple-dark rounded-md px-8 py-8 text-base">
                <h3 className="font-semibold text-xl ml-4 mb-8">
                  Confirm Purchase
                </h3>

                <p className="">I am about to fund my wallet with</p>
                <p className="text-lg font-semibold">&#8358; 5,000.00</p>
                <p className="mb-6">I will receive 8.78 USD</p>

                <div className="text-center">
                  <Link href={routes.transactions.orders.review("12432134")}>
                    <Button type="primary" size="large">
                      Confirm
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  );
}

export function toggleModalFundWallet(wallet) {
  setShow(!show);
}
