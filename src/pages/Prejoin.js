import { Mic, Video } from "./utils/icons";

function Prejoin() {
  return (
    <div className="flex flex-col h-screen">
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
      <div className="flex flex-col lg:flex-row flex-grow justify-center items-center m-4">
        <div className="max-w-3xl w-full mb-4">
          <div className="aspect-video bg-stone-900 rounded-xl drop-shadow-xl relative">
            <div className="text-xl text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Camera is off
            </div>
            <div className="absolute bottom-0 mb-2 left-1/2 transform -translate-x-1/2 ">
              <button className="border-2 rounded-full p-2 m-2 hover:bg-stone-600">{Mic}</button>
              <button className="border-2 rounded-full p-2 m-2 hover:bg-stone-600">{Video}</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center m-4 w-96">
          <h3 className="text-2xl">Ready to join?</h3>
          <p className="text-sm my-4">No one else is here</p>
          <button class="text-sm text-white rounded-full bg-blue-600 hover:bg-blue-700 px-4 py-2">Join now</button>
        </div>
      </div>
    </div>
  );
}

export default Prejoin;
