import "./App.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function App() {
    return (
        <>
            <div className="main min-h-screen ">
                <div className="flex w-full max-w-sm  space-x-2 justify-center items-center">
                    <Input type="email" placeholder="Email" />
                    <Button type="submit">Subscribe</Button>
                </div>
            </div>
        </>
    );
}

export default App;
