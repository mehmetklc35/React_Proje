import ResimCek from "./ResimCek";

function index ({arkaplan}) {
    return (
        <div className="arkaplan">
            <div className="overlay"></div>
            <ResimCek durum={arkaplan} />
        </div>
    );
}

export default index;
