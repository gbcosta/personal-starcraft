import "./App.css";
import { ControlHeader } from "./components/controlHeader";
function App() {
    return <div className="text-red-[#0D0017] w-full h-[]">
        <ControlHeader />
        <div className="flex">
            <div className="w-[400px] bg-[#0D0017] h-screen"></div>
            <div className="w-full bg-[#11011F] h-screen"></div>
        </div>
    </div>;
}

export default App;
