import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function GenreListSkeleton() {
  return (
    <Card
      alignItems={"center"}
      background={"none"}
      direction={"row"}
      marginY={"0px"}
    >
      <Skeleton borderRadius={"10px"} boxSize={"32px"} />
      <CardBody paddingX={"10px"}>
        <SkeletonText noOfLines={1} />
      </CardBody>
    </Card>
  );
}

export default GenreListSkeleton;
