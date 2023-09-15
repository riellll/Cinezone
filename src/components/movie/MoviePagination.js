"use client";
import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

const MoviePagination = ({ popularPage }) => {
  const { resolvedTheme, setTheme } = useTheme();
  // console.log(popularPage)
  const [countPage, pageValue] = popularPage;
  const router = useRouter();

  const handlePage = (e, p) => {
    console.log(e, p);
    router.push(`/movie?page=${p}`);
  };
  const color1 = resolvedTheme === "dark" ? "#bf360c" : "#212121";

  return (
    <Stack spacing={2}>
      <Pagination
        count={500}
        defaultPage={pageValue && pageValue}
        onChange={handlePage}
        size="large"
        sx={{ button: { color: color1 } }}
      />
    </Stack>
  );
};

export default MoviePagination;
