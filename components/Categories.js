import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";
import sanityClient from "../sanity";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "category"] 
        `
      )
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* CategoryCard */}
      {categories?.map((category) => (
        <CategoryCard
          key={category._id}
          id={category._id}
          title={category.name}
          imgUrl={category.image}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
