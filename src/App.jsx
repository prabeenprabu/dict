import "./App.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Content from "./components/Content";
import Error from "./components/Error";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";

function App() {
    const [searchValue, setSearchValue] = useState("");
    const [phonetic, setphonetic] = useState("");
    const [word, setWord] = useState("");
    const [datas, setDatas] = useState({}, []);
    const [statusCode, setStatusCode] = useState(true);

    useEffect(() => {}, [setStatusCode]);

    const getMeaning = async (word) => {
        //* getting api call
        let response = await fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        )
            .then((res) => {
                if (res.ok) {
                    setStatusCode(true);
                    return res.json();
                } else {
                    setStatusCode(false);
                    return res.json();
                }
            })
            .then((resJson) => {
                /*
                    ? validating a word is found ?
                    * if found it will save the meaning of the word
                    ! if word not found it will save a not found value in datas
                */
                if (statusCode) {
                    let defintions = resJson[0]["meanings"][0]["definitions"];
                    setDatas(defintions);
                    setWord(resJson[0]["word"]);
                    setphonetic(resJson[0]["phonetic"]);
                } else {
                    setDatas(resJson);
                }
            });
    };

    return (
        <>
            <div className="main min-h-full ">
                <div className="container mx-auto">
                    <div className="flex w-full my-6  space-x-2 justify-center items-center">
                        <Input
                            className="w-full sm:w-3/5"
                            type="text"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            placeholder="Enter a Word"
                        />
                        <Button
                            type="submit"
                            onClick={() => {
                                getMeaning(searchValue);
                            }}>
                            Search
                        </Button>
                    </div>
                    {statusCode && Object.keys(datas).length !== 0 ? (
                        <Content
                            word={word}
                            datas={datas}
                            phonetic={phonetic}
                        />
                    ) : (
                        <Error error={datas["title"]} />
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default App;
