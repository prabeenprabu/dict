import { useEffect } from "react";

function Content(props) {
    const datas = props.datas;

    useEffect(() => {}, [props.word]);
    return (
        <div className="min-w-full ">
            <div className="names flex justify-center items-baseline">
                <h1 className="text-5xl inline  text-slate-700 hover:text-cyan-900">
                    {props.word.toUpperCase()}
                </h1>
                <span className="text-slate-400 ml-1">{props.phonetic}</span>
            </div>
            <div className="content flex flex-col items-center justify-center bg:red-300 mt-4 text-zinc-900">
                {datas.map((data, index) => {
                    return (
                        <p
                            key={index}
                            className="w-full md:w-1/2 mt-3 text-left">
                            {data["definition"]}
                        </p>
                    );
                })}
            </div>
        </div>
    );
}

export default Content;
