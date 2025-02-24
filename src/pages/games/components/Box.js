
export const Box = ({ i, writeX }) => {
    return (
      <div
        className="w-[85px] h-[85px] border border-black rounded-md cursor-pointer shadow-xs bg-games-100 text-center content-center games-font text-4xl box"
        id={i}
        onClick={writeX}
      ></div>
    );
  };