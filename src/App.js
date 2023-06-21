import "./App.css";
import { Keyboard, NewMeet } from "./utils/icons";

function App() {
  return (
    <div>
      <div className="flex justify-between px-5 pt-3">
        <img
          className="w-48"
          src="https://www.gstatic.com/meet/google_meet_primary_horizontal_2020q4_logo_be3f8c43950bd1e313525ada2ce0df44.svg"
          alt="logo"
        />
        <div className="flex justify-between items-center">
          <span className="text-sm mr-2">Manpreet Singh</span>
          <img
            className="w-8 rounded-full"
            alt=""
            src="https://lh3.googleusercontent.com/a/AAcHTtccVF8kvTMOKdYT4Ia3aBiikb3lAml1QvrFm9DG8g=s192-c-mo"
          />
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2 px-16 py-4">
          <h1 className="text-3xl pb-4">Premium video meetings. Now free for everyone.</h1>
          <p className="text-stone-600 pb-8">
            We re-engineered the service that we built for secure business meetings, Google Meet, to make it free and
            available for all.
          </p>
          <button className="text-sm text-white rounded-md bg-blue-600 hover:bg-blue-700 py-2.5 px-4 hover:drop-shadow-lg mr-4">
            {NewMeet("20", "20", "#fff", "inline-block mr-1")} New Meeting
          </button>
          <div className="relative rounded-md inline-block mr-1.5">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              {Keyboard("20", "20", "#353535", "inline-block mr-1")}
            </div>
            <input
              type="text"
              name="price"
              id="price"
              className="text-sm rounded-md border-0 py-2.5 pl-10 pr-10 text-gray-900 ring-1 ring-inset ring-stone-500 placeholder:text-stone-500 focus:ring-1 focus:ring-inset focus:ring-blue-700"
              placeholder="Enter a code or link"
            />
          </div>
          <button className="text-sm text-blue-600  rounded-md hover:bg-blue-200 py-2.5 px-4 mr-4">Join</button>
          <p className="text-stone-600 border-t border-stone-300 my-8 py-4">
            <span className="text-blue-700">Learn more </span>about Google Meet
          </p>
        </div>
        <div className="w-1/2 px-16 py-4">
          <img
            className="rounded-full mx-auto"
            alt=""
            src="https://www.gstatic.com/meet/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
