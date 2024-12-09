import "../globals.css";
import "../footer.css";

const Footer = () => {
  return (
    <footer className="flex justify-between mx-[150px] my-[10px]">
      <div className="flex flex-col">
        <a href="" className="font-bold text-xl">
          Forside
        </a>
        <a href="" className="text-xl">
          Line-up
        </a>
        <a href="" className="text-xl">
          Program
        </a>
      </div>
      <div>
        <a href="" className="font-bold text-xl">
          Biletter
        </a>
      </div>
      <div>
        <a href="" className="font-bold text-xl">
          Om os
        </a>
      </div>
    </footer>
  );
};

export default Footer;
