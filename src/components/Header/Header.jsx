import "./Header.css";

function Header() {
  return (
    <>
      <p className="">Hi</p>
      <button className="btn btn-outline btn-primary text-capitalize">
        primary
      </button>
      <button
        className="btn btn-primary btn-lg"
        href="#"
        data-toggle="modal"
        data-options="{'iframeSrc':'https://www.youtube.com/embed/rYQJPhAqOHU', 'size': ''}"
      >
        Click to Open Modal
      </button>
    </>
  );
}

export default Header;
