import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Show = () => {
    const { id } = useParams<{ id: string }>();
    const { shows } = useSelector((state: RootState) => state.tvShows);

    const showPage = id ? shows.find((show) => show.id === Number(id)) : undefined;

    if (!showPage) {
        return <div>Show not found</div>;
    }

    return (
        <div>
            {showPage.image && <img src={showPage.image} alt={showPage.name} />}
            <h1>{showPage.name}</h1>
            <p><strong>Language:</strong> {showPage.language}</p>
            <div dangerouslySetInnerHTML={{ __html: showPage.summary }} />
        </div>
    );
};

export default Show;
