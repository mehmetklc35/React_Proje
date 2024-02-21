import yagmurlu from "../../Resimler/yağmurlu.jpg";
import bulutlu from "../../Resimler/bulutlu.jpg";
import sisli from "../../Resimler/sisli.webp";
import karli from "../../Resimler/karlı.jpg";
import gokkusagi from "../../Resimler/gökkuşağı.webp";
import firtinali from "../../Resimler/fırtınalı.jpg";
import gunesli from "../../Resimler/güneşli.jpg";

function ResimCek({durum}) {
    switch (durum) {
        case "Rain":
            return <img className="arkaplan-resim" src={yagmurlu} alt="yagmurlu" />;
        case "Drizzle":
            return <img className="arkaplan-resim" src={yagmurlu} alt="yagmurlu" />;
        case "Clear":
            return <img className="arkaplan-resim" src={gunesli} alt="gunesli" />;
        case "Mist":
            return <img className="arkaplan-resim" src={sisli} alt="sisli" />;
        case "Snow":
            return <img className="arkaplan-resim" src={karli} alt="karli" />;
        case "Storm":
            return <img className="arkaplan-resim" src={firtinali} alt="firtinali" />;
        case "Clouds":
            return <img className="arkaplan-resim" src={bulutlu} alt="bulutlu" />;
        default:
            return <img className="arkaplan-resim" src={gokkusagi} alt="gokkusagi" />;
    }
}

export default ResimCek;