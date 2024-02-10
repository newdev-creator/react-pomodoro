import { useSelector } from "react-redux";

import getFormattedValue from "./utils/getFormattedValue";

import ToggleButton from "./components/ToggleButton";
import UpdateTimeButton from "./components/UpdateTimeButton";

function App() {
  const chronoValues = useSelector((state) => state.chrono);

  return (
    <div className="bg-slate-700 text-slate-100 pt-20 min-h-screen">
      <div className="max-w-xl mx-auto border border-slate-500 rounded p-10">
        <h1 className="text-center text-3xl mb-8">Pomodoro App</h1>
        <div className="flex justify-center mb-8">
          {/* Session Block */}
          <div className="mr-10">
            <p className="text-center mb-1">Session</p>
            <div className="flex">
              <UpdateTimeButton sign={"-"} type={"session"} />
              <p className="mx-4 text-xl">{chronoValues.session.value / 60}</p>
              <UpdateTimeButton sign={"+"} type={"session"} />
            </div>
          </div>

          {/* Pauses Block */}
          <div>
            <p className="text-center mb-1">Pauses</p>
            <div className="flex">
              <UpdateTimeButton sign={"-"} type={"pause"} />
              <p className="mx-4 text-xl">{chronoValues.pause.value / 60}</p>
              <UpdateTimeButton sign={"+"} type={"pause"} />
            </div>
          </div>
        </div>

        {/* Work Pause */}
        <p className="text-center mb-2 text-xl font-semibold">
          {chronoValues.displayedValue.heading}
        </p>
        <p className="text-center flex justify-center mb-1">
          <span className="text-4xl p-4 rounded bg-slate-300 text-slate-900">
            {getFormattedValue(chronoValues.displayedValue.value)}
          </span>
        </p>
        <p className="mb-10 text-center">
          Passed Cycle(s): {chronoValues.cycles}
        </p>
        <ToggleButton />
      </div>
    </div>
  );
}

export default App;
