import Link from "next/link";

export default function Custom404() {
  return (
    <div className="error">
      <div className="error-wrapper">
        <h3 className="error-text">404 | Sorry could not find this page</h3>
        <span className="error-link">
          <Link className="error-link" href="/">
            go back
          </Link>
        </span>
      </div>
    </div>
  );
}
