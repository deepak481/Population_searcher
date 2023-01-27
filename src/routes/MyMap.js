import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Map, Marker } from "pigeon-maps";
import { HOME } from "../utils/constants";
import "../sass/global.sass";
export default function MyMap() {
  const { index, searchKey } = useParams();
  const [data, setData] = useState([]);
  const [markerColor, setMarkerColor] = useState("");
  const [searchKeyword, setSearchKeyword] = useState(searchKey ?? "");
  const [selectedIndex, setSelectedIndex] = useState(index ?? "");
  const [markerLocation, setMarkerLocation] = useState({
    lat: 42.3554,
    lon: -71.0605,
  });
  const [Population, setPopulation] = useState("");
  const [textCopied, setTextCopied] = useState(false);

  async function fetchData(keyword) {
    var search = "";
    if (keyword) {
      search = keyword;
    } else {
      search = searchKeyword;
    }
    return fetch(
      `https://nominatim.openstreetmap.org/?addressdetails=1&q=${search}&format=json&limit=5`
    )
      .then((response) => response.json())
      .then((data) => {
        const reqFormat = data
          .filter((ele) => ele.type === "administrative")
          .map((element) => {
            return {
              displayName: element.display_name,
              lat: element.lat,
              lon: element.lon,
            };
          });

        localStorage.getItem("historySearches") &&
        JSON.parse(localStorage.getItem("historySearches")).searches
          ? JSON.parse(
              localStorage.getItem("historySearches")
            ).searches.indexOf(searchKeyword) === -1
            ? localStorage.setItem(
                "historySearches",
                JSON.stringify({
                  searches: [
                    ...JSON.parse(localStorage.getItem("historySearches"))
                      .searches,
                    searchKeyword,
                  ],
                })
              )
            : ""
          : localStorage.setItem(
              "historySearches",
              JSON.stringify({
                searches: [searchKeyword],
              })
            );
        setData([...reqFormat]);
      });
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTextCopied(false);
    }, 20000);
    return () => clearTimeout(timer);
  }, [textCopied]);

  useEffect(() => {
    if (data.length && selectedIndex && selectedIndex < data.length) {
      setMarkerLocation({
        lat: parseInt(data[parseInt(selectedIndex)].lat),
        lon: parseInt(data[parseInt(selectedIndex)].lon),
      });
      setPopulation(Math.floor(Math.random() * 10000000));
    }
  }, [data, selectedIndex]);

  useEffect(() => {
    if (index && searchKey) {
      setSearchKeyword(searchKey);
      fetchData();
      // setSelectedIndex(index);
    }
  }, []);

  return (
    <Map
      height="100vh"
      center={[markerLocation.lat, markerLocation.lon]}
      defaultZoom={5}
    >
      <Marker
        width={50}
        color={markerColor}
        anchor={[markerLocation.lat, markerLocation.lon]}
      />
      <div className="p-3 mt-2 mx-auto searchBox">
        <span className="blackFont">SEARCH A PLACE</span>
        <br />
        <div className="d-flex align-items-center justify-content-center mt-2">
          <input
            type="text"
            autoFocus
            onChange={(event) => setSearchKeyword(event.target.value)}
            onKeyDownCapture={(event) => {
              if (event.key === "Enter" && searchKeyword !== "") {
                fetchData();
              } else {
                setData([]);
                setPopulation("");
              }
            }}
            value={searchKeyword}
          />
          <button className="button" onClick={() => fetchData()}>
            🔍
          </button>
        </div>
      </div>
      <div
        className="p-3"
        style={{
          display: Population !== "" ? "" : "none",
          position: "fixed",
          bottom: 100,
          right: 100,
          backgroundColor: "white",
          borderRadius: "4px",
          boxShadow: "0px 0px 7px 0px rgba(204,194,204,1)",
        }}
      >
        Population: {Population}
        <br />
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            color: "blue",
            borderBottom: "blue 1px solid",
            cursor: "pointer",
          }}
          onClick={() => {
            navigator.clipboard.writeText(
              `${HOME}/${searchKeyword}/${selectedIndex}`
            );
            setTextCopied(true);
          }}
        >
          Share
        </div>
      </div>
      {textCopied ? <span class="tooltiptext">Link Copied!</span> : ""}

      {data &&
        data.map((element, index) => (
          <div className="d-flex align-items-center justify-content-center resultSearches mx-auto">
            <div className="ml-2">
              <Marker
                style={{ position: "", cursor: "default" }}
                width={30}
                color="red"
              />
            </div>
            <div
              className="flex-grow-1 ml-2 result"
              id={index}
              onClick={(event) => {
                setSelectedIndex(event.target.id);
              }}
              style={{
                cursor: "pointer",
                color: parseInt(selectedIndex) === index ? "#dc2727" : "",
              }}
            >
              {element.displayName}
            </div>
          </div>
        ))}
      {searchKeyword === "" &&
        localStorage.getItem("historySearches") &&
        JSON.parse(localStorage.getItem("historySearches")).searches &&
        JSON.parse(localStorage.getItem("historySearches")).searches.map(
          (element, index) => (
            <div className="d-flex align-items-center justify-content-center resultSearches mx-auto">
              <div className="ml-2" style={{ color: "gray" }}>
                ...
              </div>
              <div
                className="flex-grow-1 ml-2 result"
                id={index}
                onClick={(event) => {
                  setSelectedIndex(null);
                  setSearchKeyword(event.target.innerText);
                  fetchData(event.target.innerText);
                }}
                style={{ cursor: "pointer" }}
              >
                {element}
              </div>
            </div>
          )
        )}
    </Map>
  );
}
