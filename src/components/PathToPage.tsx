// Routing
import { Link, useParams } from "react-router";

export default function PathToPage() {
  const params = useParams<{ [key: string]: string }>();
  const paramValues = Object.values(params)[0];
  const parsedValues = paramValues?.split("/");

  let parsedUrl = "";

  if (!paramValues) {
    return (
      <div className="mt-[80px]">
        <div className="customContainer">
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="text-black/50 transition duration-75 ease-in hover:text-black"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-[80px]">
      <div className="customContainer">
        <div className="flex items-center gap-2">
          {parsedValues &&
            parsedValues.length &&
            parsedValues.map((url, index) => {
              parsedUrl += "/" + url;
              const displayText = url.charAt(0).toUpperCase() + url.slice(1);
              if (index === 0) {
                return (
                  <Link
                    className="text-black/50 text-sm transition duration-75 ease-in hover:text-black"
                    to={parsedUrl}
                    key={url}
                  >
                    {displayText}
                  </Link>
                );
              } else {
                return (
                  <Link
                    className="text-black text-sm transition duration-75 ease-in hover:text-black"
                    to={parsedUrl}
                    key={url}
                  >
                    / {displayText}
                  </Link>
                );
              }
            })}
        </div>
      </div>
    </div>
  );
}
