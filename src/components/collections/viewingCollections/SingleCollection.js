import React from "react";
import CollectionOptions from "../collectionActions/CollectionOptions";

import "../collections.css";

//THERE MAY BE AN ISSUE HERE WITH COLLECTION._ID
//collection.userCreated DOES NOT EXIST

const Collection = ({ collection }) => {
  return (
    <div className="collection">
      <h4>{collection.name}</h4>
      <h3>
        Created by: {collection.creatorUsername}
        {collection.userCreated ? " YOURS" : ""}
      </h3>
      <h5>Tags:</h5>
      <div className="tags">
        {collection.tags.map((tag, i) => {
          return <p key={i}>{tag}</p>;
        })}
      </div>
      <CollectionOptions
        userCreated={collection.userCreated}
        collectionId={collection._id}
      />
    </div>
  );
};

export default Collection;
