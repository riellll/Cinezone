"use client";
import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/navigation";

const MoviePagination = ({ popularPage }) => {
  // console.log(popularPage)
  const [countPage, pageValue] = popularPage;
  const router = useRouter();

  const handlePage = (e, p) => {
    console.log(e, p);
    router.push(`/movie?page=${p}`);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={500}
        defaultPage={pageValue && pageValue}
        onChange={handlePage}
        size="large"
      />
    </Stack>
  );
};

export default MoviePagination;
