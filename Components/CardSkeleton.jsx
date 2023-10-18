import { Skeleton, Stack } from "@mui/material";

const CardSkeleton = () => {
  return (
    <Stack padding={2} spacing={2} sx={{ boxShadow: 10, borderRadius: 3 }}>
      <Skeleton variant="rounded" height={140} />
      <Skeleton variant="rectangular" sx={{ height: 20, width: 1 / 2 }} />
      <Skeleton variant="rectangular" sx={{ height: 60 }} />
    </Stack>
  );
};

export default CardSkeleton;
