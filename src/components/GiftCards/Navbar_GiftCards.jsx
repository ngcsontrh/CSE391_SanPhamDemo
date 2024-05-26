import { Nav } from "../../constants/Navbar_gc";
export default function Navbar() {
  return (
    <div className="flex items-center border-b text-black">
      {Object.entries(Nav).map(([key,value])=>(
        <a href={value} className="m-3 hover:text-orange-400 hover:underline">{key}</a>
      ))}
    </div>
  );
}
