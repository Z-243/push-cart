import ReactDom from "react-dom";

export default function Portal(props) {
  const { handleClosePortal, children } = props;
  return ReactDom.createPortal(
    <div className="fixed inset-0 z-[1001] w-screen h-screen">
      <div
        onClick={handleClosePortal}
        className="absolute inset-0 bg-[#030615]/70 z-0"
      >
        {children}
      </div>
    </div>,
    document.getElementById("portal")
  );
}
