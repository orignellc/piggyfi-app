import {
  LayoutGuest,
  WalletCard,
  toggleModalFundWallet,
} from "../src/components";

export default function Home() {
  return (
    <LayoutGuest>
      <div className="flex justify-between items-center mb-4">
        <div className="">ACTIVE BALANCE</div>
        <img src="/images/profile.png" alt="profile" className="h-8" />
      </div>

      <div className="flex mb-6">
        <div className="w-2/3 mr-4">
          <WalletCard
            size="2"
            bg={"primary"}
            wallet={{
              name: "Funding Wallet",
              amount: "$0.00",
              action: { text: "Fund", handler: toggleModalFundWallet },
            }}
          />
        </div>
        <div className="w-2/3">
          <WalletCard
            size="2"
            bg={"yellow"}
            wallet={{
              name: "Savings Wallet",
              amount: "$0.00",
              action: { text: "Add", handler: toggleModalFundWallet },
            }}
          />
        </div>
      </div>

      <div className="flex justify-between items-center w-4/5 mx-auto mb-6 text-2xl">
        <div className="text-center">
          <span className="h-16 w-16 flex items-center justify-center bg-gray-500 rounded-full">
            <img src="/images/save.png" alt="Save" className="h-8" />
          </span>
          <span className="text-sm">Save</span>
        </div>
        <div className="text-center">
          <span className="h-16 w-16 flex items-center justify-center bg-gray-500 rounded-full">
            <img src="/images/transfer.png" alt="Transfer" className="h-8" />
          </span>
          <span className="text-sm">Transfer</span>
        </div>
        <div className="text-center">
          <span className="h-16 w-16 flex items-center justify-center bg-gray-500 rounded-full">
            <img src="/images/receive.png" alt="Transfer" className="h-8" />
          </span>
          <span className="text-sm">Receive</span>
        </div>
        <div className="text-center">
          <span className="h-16 w-16 flex items-center justify-center bg-gray-500 rounded-full">
            <img src="/images/pay-bills.png" alt="Transfer" className="h-8" />
          </span>
          <span className="text-sm">Pay Bills</span>
        </div>
      </div>

      <div className="">
        <h3 className="text-xl">Transactions</h3>

        <div className="text-center">
          <img
            src="/images/find-transaction.png"
            alt="No transaction"
            className="h-14 mx-auto mt-9 mb-4"
          />
          <span className="text-gray-500">No transaction history</span>
        </div>
      </div>
    </LayoutGuest>
  );
}
