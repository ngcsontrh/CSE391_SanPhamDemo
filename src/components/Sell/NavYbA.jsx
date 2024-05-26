import { yourBrandNav } from "../../constants/Sell";

const NavYbA = () => {
  return (
    <nav className="pt-4 pb-2 bg-white flex justify-around items-center mb-4 top-0 sticky z-10">
      <h2 className="font-bold text-2xl">Your brand + Amazon</h2>
      <div className="flex gap-2">
        {yourBrandNav.map((item, index) => (
          <a
            className={item.color + " p-2 rounded-md font-semibold text-sm"}
            key={index}
            href={item.href}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};
export default NavYbA;
