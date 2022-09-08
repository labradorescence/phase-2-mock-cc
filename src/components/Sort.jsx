function Sort({setSortValue}) {
    return (
        <>
            <p >Sort By: </p>
            <select onChange={(e) => setSortValue(e.target.value)} name="cars" id="cars">
                <option value="none" selected disabled hidden>Select</option>
                <option value="description">Description</option>
                <option value="location">Location</option>
            </select>

            <select onChange={(e) => setSortValue(e.target.value)} name="cars" id="cars">
                <option value="none" selected disabled hidden>Order</option>
                <option value="description">Ascending</option>
                <option value="location">Descending</option>
            </select>
        </>
    );
}

export default Sort;