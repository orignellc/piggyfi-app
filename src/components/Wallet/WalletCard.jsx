import { PlusCircleOutlined } from "@ant-design/icons";

export function WalletCard({ wallet, bg }) {
  const { name, amount, action } = wallet;

  return (
    <div className={`rounded-md px-4 py-3 bg-${bg}`}>
      <div className="mb-2">{name}</div>
      <div className="text-2xl font-semibold mb-4">{amount || "$0.00"}</div>
      <div
        className="inline-flex align-center text-lg cursor-pointer"
        onClick={action.handler}
      >
        <span className="">
          <PlusCircleOutlined />
        </span>
        <span className="pl-2 pt-1">{action.text}</span>
      </div>
    </div>
  );
}
