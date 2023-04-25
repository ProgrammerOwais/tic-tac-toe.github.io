const Cell = ({ id, cell, setCells, go, setGo, cells, winningMessage }) => {
  const handleClick = (e) => {
    const taken =
      e.target.firstChild.classList.contains("circle") ||
      e.target.firstChild.classList.contains("cross");
    // console.log(e.target);
    if (!taken) {
      if (go === "circle") {
        e.target.firstChild.classList.add("circle");
        handleChange("circle");
        setGo("cross");
      }
      if (go === "cross") {
        e.target.firstChild.classList.add("cross");
        handleChange("cross");
        setGo("circle");
      }
    }
  };
  // Every time user click on cell put the cell data ( circle or cross)
  const handleChange = (className) => {
    const nextCells = cells.map((cell, index) => {
      if (index === id) {
        return className;
      } else {
        return cell;
      }
    });
    setCells(nextCells);
  };
  return (
    <div
      id={id}
      key={id}
      className="square"
      onClick={!winningMessage ? handleClick : undefined}
    >
      {/* onClick function will work until someone wins */}
      <div className={cell}></div>
    </div>
  );
};

export default Cell;
