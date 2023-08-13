import React, { useEffect, useState } from "react";
import Card from "./Components/Card";
import PaginationTest from "./Components/PaginationTest";
import Loader from "../Loader/Loader";
import blogAPI from "../../utils/Api/blogAPI";
// import UseSeo from "../../utils/customHooks/use-seo";
import {setPage} from "../../store/helpersStore"

export default function Blog() {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await blogAPI.GetAllBlogPagination(currentPage);
        setItems(response.data.items);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
		setPage("blog")
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const excerptList = items?.map((post) => {
    return post.content.split(" ").slice(0, 20).join(" ") + "...";
  });

  if (items.length === 0) {
    return <Loader />;
  } else {
    return (
      <>
        {/* <UseSeo
          title={"The Crazy Prints blog"}
          description={
            "News, views, case studies and ideas to help you along in the world of tech"
          }
          keywords={"printed portrait, Convert Photo, Anime Art"}
        /> */}
        <div className="">
          <div className="flex h-[274px] items-center justify-center bg-blogBg bg-cover text-center">
            <div className="text-center">
              <h1 className="font-mainText text-[32px] leading-[36px] text-regular">
                The Crazy Prints blog
              </h1>
              <p className="font-textSec text-[18px] leading-[26px] text-white">
                News, views, case studies and ideas to help you along in the
                world of tech
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-wrap items-center justify-center gap-[32px] px-[5%] pb-[201px] pt-[100px]">
              {items.map((item, i) => (
                <Card
                  post={item}
                  i={i}
                  excerptList={excerptList}
                  key={Math.random(0, 1)}
                />
              ))}
            </div>
          </div>
          <div className="pb-[164px]">
            <PaginationTest
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </>
    );
  }
}
