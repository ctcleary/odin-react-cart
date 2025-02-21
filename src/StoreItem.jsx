// import { useEffect } from "react";
import { useParams } from "react-router-dom";

function StoreItem({
        storeItems,
    }) {
    const params = useParams();

    console.log('StoreItem storeItems', storeItems);
    const item = storeItems.find((item) => {
        return item.id === parseInt(params.itemId, 10);
    });
    console.log('StoreItem item', item);

    return (
        <>
            <h1>Store Item</h1>
            { !item ? (
                <p>Item not found!</p>
            ) : (
                <>
                    <p>{item.title}</p>
                    <p>{item.description}.</p>
                </>
            )}
        </>
    )
}

export default StoreItem;
