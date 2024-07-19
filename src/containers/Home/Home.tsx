import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTvShowsThunk } from "../../slices/tvShows";
import { AppDispatch, RootState } from "../../store/store";
import { Show } from "../../types";
import {Link, Outlet} from "react-router-dom";

const Home = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { shows, loading, error } = useSelector((state: RootState) => state.tvShows);
    const [autocomplete, setAutocomplete] = useState<Show[]>([]);


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value.toLowerCase();
        const filteredShows = shows.filter(show =>
            show.name.toLowerCase().startsWith(query) // Changed includes to startsWith
        );
        setAutocomplete(filteredShows);
    };

    useEffect(() => {
        dispatch(fetchTvShowsThunk());
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <div className="row">
                <form className="d-flex flex-column align-items-center">
                    <div className='d-flex align-items-center justify-content-center mt-3'>
                        <div className="d-flex align-items-center">
                            <input
                                onChange={handleChange}
                                className="py-1"
                                type="text"
                                id="field"
                                placeholder="Enter TV Show name!"
                                required
                            />
                            <button className="btn btn-primary ms-1">SEARCH</button>
                        </div>
                    </div>
                    <div>
                        {autocomplete.map((show) => (
                            <Link to={`show/${show.id}`} className="d-block text-info text-decoration-none"
                                  key={show.id}>{show.name}</Link>
                        ))}
                    </div>
                </form>
            </div>

            <div>
                <Outlet/>
            </div>
        </>
    );
};

export default Home;
