import "./App.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function App() {
  return (
    <>
      <div className="main min-h-screen ">
        <div className="container mx-auto">
          <div className="flex w-full my-6  space-x-2 justify-center items-center">
            <Input
              className="w-full sm:w-3/5"
              type="text"
              placeholder="Enter a Word"
            />
            <Button type="submit">Search</Button>
          </div>
          <div className="min-w-full">
            <div className="names justify-center">
              <h1 className="text-5xl text-slate-700 hover:text-cyan-900">
                Hello
              </h1>
              <span className="text-slate-400">Hello</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
