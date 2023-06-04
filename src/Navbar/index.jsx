import './index.css';

function Navbar({ downloadJson, uploadJson }) {

  return (
    <div className="navbar">
        <nav>
          <ul>
            <li><a onClick={() => uploadJson()}>Upload Sheet</a></li>
            <li><a onClick={() => downloadJson()}>Download Sheet</a></li>
          </ul>
        </nav>
    </div>
  );
}

export default Navbar;
