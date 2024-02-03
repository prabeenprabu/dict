export default Error = (props) => {
    return (
        <div className="min-w-full ">
            <h1 className="text-6xl text-center text-slate-800">
                {props.error}
            </h1>
        </div>
    );
};
