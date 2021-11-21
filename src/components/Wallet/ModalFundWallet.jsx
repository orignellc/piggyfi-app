import { LayoutGuest } from "../Layout";
import { Button, Input } from "antd";
import Link from "next/link";
import routes from "../../../routes";
import { CloseOutlined } from "@ant-design/icons";
import {useState} from "react";

let show, setShow;

export function ModalFundWallet() {
  [show, setShow] = useState(false);

  return (
    {show &&
        <div className="px-8 py-8 absolute w-full h-full top-0 bg-gray-dark">
        <div className="flex items-center mb-8">
          <CloseOutlined className="cursor-pointer pr-2 py-2" />
          <h3 className="text-center font-semibold text-xl ml-4">Fund Wallet</h3>
        </div>
        <p className="text-base mb-4">
          Enter an amount you want to add to your fund wallet
        </p>

        <div className="text-gray-400 bg-gray-600 bg-opacity-40 rounded-md py-3 px-4 mb-6">
          <p className="text-base mb-4 text-white">Total amount</p>

          <Input placeholder="Above N 1,000" size="large" />

          <p className="mt-3 mb-1 text-base">Minimum of $5 &#126; 2,800</p>
          <p className="text-base mb-6">Reference price 560.00NGN per USD</p>

          <div className="text-center">
            <Link href={routes.home}>
              <Button type="primary" size="large">
                Update KYC
              </Button>
            </Link>
          </div>
        </div>
      </div>}
  );
}

export function toggleModalFundWallet(wallet) {

}
