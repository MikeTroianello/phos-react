import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { source } from "../../../source";

import { connect } from "react-redux";

import "../collections.css";

const EditCollection = (props) => {
  const [collection, setCollection] = useState({});
  const [tags, setTags] = useState([]);
  const [checked, setChecked] = useState(false);
  const [newTag, setNewTag] = useState("");
  const [tagExists, setTagExists] = useState(null);
  const [name, setName] = useState("");
  const [editName, setEditName] = useState(false);

  useEffect(() => {
    //GetRoute
    const fetchCollection = async () => {
      let results = await fetch(
        `${source}/collections/${props.match.params.collectionId}/view`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "omit",
        }
      );
      results = await results.json();
      setCollection(results);
      setTags(results.tags);
      setChecked(results.private);
      setName(results.name);
    };
    fetchCollection();
  }, []);

  const TagMap = ({ tags }) => {
    return (
      <div className="tag-map">
        {tags.map((tag, i) => {
          return (
            <div
              className="tag"
              key={i}
              onClick={() => {
                setTags(tags.filter((allTags) => allTags !== tag));
              }}
            >
              <p className={tag === tagExists ? "tag-exists" : ""}>{tag}</p>
            </div>
          );
        })}
      </div>
    );
  };

  const deleteCard = async () => {
    let results = await fetch(
      `${source}/collections/${props.match.params.collectionId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": props.user.token,
        },
        credentials: "omit",
      }
    );
    results = await results.json();
    console.log(results);
    props.history.goBack();
  };

  const changeCard = async () => {
    let results = await fetch(
      `${source}/collections/${props.match.params.collectionId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": props.user.token,
        },
        credentials: "omit",
        body: JSON.stringify({ name, tags, private: checked }),
      }
    );
    results = await results.json();
    console.log(results);
    props.history.goBack();
  };

  const createNewTag = () => {
    setTagExists(false);
    if (!newTag) return;
    else if (tags.includes(newTag)) {
      setTagExists(newTag);
    } else {
      setTags(tags.concat(newTag));
      setNewTag("");
    }
  };

  return (
    <div>
      <div className="item-and-icon">
        <h1>Edit collection</h1>
        <FontAwesomeIcon
          icon={faWindowClose}
          onClick={props.history.goBack}
          onMouseOver={() => console.log(props)}
        />
      </div>
      <div className="item-and-icon">
        <FontAwesomeIcon
          icon={faPen}
          onClick={() => setEditName(!editName)}
          onMouseOver={() => console.log("Moused")}
        />
        {editName ? (
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        ) : (
          <h2 onClick={() => setEditName(!editName)}>{name}</h2>
        )}
      </div>
      <h2>Tags</h2>
      <TagMap tags={tags} />
      <div>
        <label htmlFor="newTag">Add a new Tag</label>
        <input
          name="newTag"
          onChange={(e) => setNewTag(e.target.value)}
          value={newTag}
        />
        <button type="button" onClick={createNewTag}>
          Add
        </button>
        {tagExists && <p>This is already a tag!</p>}
      </div>
      <label htmlFor="private">Private:</label>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <br />
      <button type="button" onClick={changeCard}>
        Save Changes
      </button>
      <button
        type="button"
        className="delete-collection"
        onClick={() => {
          if (window.confirm("ARE YOU SURE YOU WANT TO DELETE THIS?")) {
            deleteCard();
          } else console.log("Cancelled");
        }}
      >
        Delete Collection
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.userReducer,
});

export default connect(mapStateToProps)(EditCollection);
