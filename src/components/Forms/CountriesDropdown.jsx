import { Dropdown, Menu } from "antd";

export function CountriesDropdown({}) {
  return (
    <Dropdown overlay={menu}>
      <div className="flex py-3 px-3 bg-purple-dark rounded-md">
        <img
          src="https://flagcdn.com/w40/ng.png"
          className="w-7 h-7 rounded-full"
          alt="South Africa"
        />
        <span className="text-base ml-4">Nigeria</span>
      </div>
    </Dropdown>
  );
}

const countries = [
  { code: "ng", country: "Nigeria" },
  { code: "gh", country: "Ghana" },
  { code: "za", country: "South Africa" },
  { code: "bw", country: "Botswana" },
  { code: "zw", country: "Zimbabwe" },
  { code: "ke", country: "Kenya" },
];

function handleMenuClick(event) {
  console.log(event);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    {countries.map((country) => (
      <Menu.Item
        key={country.code}
        icon={
          <img
            src={`https://flagcdn.com/w40/${country.code}.png`}
            className="w-7 h-7 rounded-full"
            alt={country.country}
          />
        }
      >
        {country.country}
      </Menu.Item>
    ))}
  </Menu>
);
