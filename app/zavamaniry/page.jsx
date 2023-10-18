import CardItem from "@/Components/CardItem";
import CardSkeleton from "@/Components/CardSkeleton";
import { client } from "@/sanity/lib/client";
import { Stack } from "@mui/material";

const Plant = async () => {
  // const [plantsData, setPlantsData] = useState();

  // useEffect(() => {
  const plantsData = await client.fetch('*[_type == "plant"]{_id,name,imgUrl,description}');
  // .then((data) => {
  //   setPlantsData(data);
  // });
  // }, []);
  return (
    <Stack spacing={2}>
      {plantsData?.length ? plantsData.map((plant) => <CardItem content={plant} key={plant._id} />) : <CardSkeleton />}
    </Stack>
  );
};

export default Plant;
