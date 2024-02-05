import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import Loading from "../Loading/Loading";
import SearchBar from "../SearchBar/SearchBar";
import RecipeCard from "../RecipeCard/RecipeCard";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState("vegan");
    const [limit, setLimit] = useState(20);
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="w-full">
            <div className="w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10">
                <form className="w-full lg:w-2/4">
                    <SearchBar
                        handleInputChange={handleChange}
                        rightIcon={<IoSearch className="text-gray-600" />}
                        placeholder="Search category..."
                    />
                </form>
            </div>

            {recipes?.length > 0 ? (
                <>
                    <div className="w-full flex flex-wrap gap-10 px-0 lg:px-10 py-10">
                        {
                            recipes?.map((item, index) => <RecipeCard recipe={item} key={index} />)
                        }
                    </div>
                </>
            ) : (
                <div className="text-white w-full items-center justify-center py-10">
                    <p className="text-center">No Recipe Found</p>
                </div>
            )}
        </div>
    );
};

export default Recipes;
