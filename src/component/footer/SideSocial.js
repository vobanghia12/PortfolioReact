import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
const SideSocial = () => {
  return (
    <div className="w-full flex mt-10 justify-center items-center mb-5 md:fixed md:left-0 md:top-1/3 md:block md:w-10 md:z-10">
      <ul className="flex md:block">
        <li>
          <a target="_blank" href="https://github.com/vobanghia12" rel="noreferrer">
            <SideBar item={<FaGithub size="30" />} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/nghia-vo-449456207/"
            rel="noreferrer"
          >
            <SideBar item={<FaLinkedin size="30" />} />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://twitter.com/VoNghia31309183" rel="noreferrer">
            <SideBar item={<FaTwitterSquare size="30" />} />
          </a>
        </li>
      </ul>
    </div>
  );
};

const SideBar = ({ item }) => {
  return <div className="sidebar">{item}</div>;
};

export default SideSocial;
