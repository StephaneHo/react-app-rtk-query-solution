import { useDispatch } from "react-redux";
import { removeRentalCategory, useFetchRentalCategoriesQuery } from "../store";
import { RentalSubCategories } from "./RentalSubCategories";
import { useRef, useState } from "react";
import { RentalCategoryModal } from "./RentalCategoryModal";

export const RentalCategories = () => {
  const dispatch = useDispatch();
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);
  const dialog = useRef();

  const { data, error, isLoading } = useFetchRentalCategoriesQuery();
  console.log(isModalDisplayed);

  const handleRentalCategoryAdd = () => {
    setIsModalDisplayed(true);
    dialog.current.showModal();
  };
  const handleCategoryRemove = (category) => {
    dispatch(removeRentalCategory(category));
  };

  let renderedRentalCategories;

  if (data) {
    renderedRentalCategories = data.map((category) => {
      return (
        <div key={category.id} className="mb-2 border rounded">
          <div className="flex p-2 justify-between items-center cursor-pointer">
            {category.name}
          </div>
          <button
            onClick={() => handleCategoryRemove(category)}
            className="button is-danger"
          >
            X
          </button>
          <RentalSubCategories category={category} />
        </div>
      );
    });
  }
  return (
    <div className="content">
      <RentalCategoryModal ref={dialog} />
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">Locations</h1>
        <div className="buttons">
          <button onClick={() => handleRentalCategoryAdd()} className="">
            + Ajouter une categorie de location
          </button>
        </div>
      </div>
      {renderedRentalCategories}
    </div>
  );
};
