import Bar from "../components/Bar";
import { languages, tools } from "../data";

const Resume = () => {
    return (
        <div className="px-6 py-2">
            {/* //! Education & Experience */}
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-bold">UTDANNING</h5>
                    <div className="">
                        <h5 className="my-2 text-xl font-bold ">
                            Bachelorstudium i informasjonssystemer
                        </h5>
                        <p className="font-semibold text-gray-700">HØGSKOLEN I ØSTFOLD  (2019-2022)</p>
                        <p className="my-3">
                            Til våren 2022 fullfører jeg et bachelorstudium i informasjonssystemer.
                        </p>
                    </div>
                </div>
                <div>
                    <h5 className="my-3 text-2xl font-bold">ARBEIDSERFARING </h5><br/>
                    <div className="">
                        <h5 className="my-2 text-xl font-bold">Selvstendig næringsdrivende</h5>
                        <p className="font-semibold text-gray-700">MEDIATRAFIKK</p>
                        <p className="my-3">Ideutvikling, innovativ markedsføring, optimalisering av informasjonsarkitektur.</p>
                    </div>
                </div>
            </div>

            {/*Languages & Tools */}
            <h5 className="my-3 text-2xl font-bold">Språk, rammeverk og verktøy jeg jobber mest med akkurat nå:</h5>
            <div className="grid gap-9 md:grid-cols-2">
                <div>

                    <div className="my-2">
                        {languages.map((language, i) => (
                            <Bar value={language} key={i} />
                        ))}
                    </div>
                </div>

                <div>
                    <div className="my-2">
                        {tools.map((tool, i) => (
                            <Bar value={tool} key={i} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;