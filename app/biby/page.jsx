import CardItem from "@Components/CardItem";
import CardSkeleton from "@Components/CardSkeleton";
import { client } from "@sanity/lib/client";
import Stack from "@mui/material/Stack";

const Animal = async () => {
  const animalsData = await client.fetch('*[_type == "animal"]{_id,name,imgUrl,description}');
  return (
    <Stack spacing={2}>
      {animalsData.length ? (
        animalsData.map((animal) => <CardItem content={animal} key={animal._id} />)
      ) : (
        <CardSkeleton />
      )}
    </Stack>
  );
};

export default Animal;
