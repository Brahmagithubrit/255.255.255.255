import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const divRef = useRef(null);
  const [query, setquery] = useState("");
  const [match, setMatch] = useState([]);
  const [SearchItemShow, setSearchItemShow] = useState(false);
  const navigate = useNavigate();

  const pagelist = ["contact", "dashboard", "about", "skill", "blogs"];
  const handleQuery = () => {
    setSearchItemShow(true);
    if (query == "") {
      setMatch([]);
      return;
    }
    const res = pagelist.filter((val) => {
      return val.includes(query.toLowerCase());
    });
    if (res.length === 0) {
      setMatch([
        "Page Not Found!",
        "\n",
        "\n",
        "Present pages are : ",

        "  \n contact, dashboard, about, skill, blogs",
      ]);
      return;
    } else {
      setMatch(res);
    }
  };

  const handleItemClick = (val) => {
    console.log(val);
    switch (val) {
      case "about":
        navigate("/");
        break;
      case "dashboard":
        navigate("/dashboard");
        break;
      case "contact":
        navigate("/contact");
        break;
      case "skill":
        navigate("/");
        break;
      case "blogs":
        navigate("/blog");
        break;
      default:
        navigate("/");
    }
    setSearchItemShow(false);
  };
  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setSearchItemShow(false);
    }
  };
  document.addEventListener("mousedown", handleClickOutside);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    handleQuery();
  }, [query]);
  return (
    <>
      <div className="flex flex-col">
        <input
          className="hidden p-2 font-bold font-mono lg:block border-white h-10 w-[500px] border border-r-2 m-4 rounded "
          type="text"
          onChange={(e) => setquery(e.target.value)}
          placeholder="Search pages"
        />
        {match.length > 0 && SearchItemShow && (
          <div
            ref={divRef}
            className="h-[400px] w-[400px] block bg-white text-blue-800 text-2xl font-bold absolute mt-[90px] z-10 rounded"
          >
            <ul className="m-2 p-2  uppercase">
              {match.map((val, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => handleItemClick(val)}
                    className="hover:bg-blue-300 font-mono"
                  >
                    {val}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
