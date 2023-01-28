import { Text, TouchableOpacity, Image } from "react-native";
import { urlFor } from "../sanity";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative mr-2 bg-white">
      <Image
        source={{ uri: urlFor(imgUrl).width(200).url() }}
        className="w-20 h-20 rounded"
      />

      <Text className="absolute font-bold text-white bottom-1 left-1">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
