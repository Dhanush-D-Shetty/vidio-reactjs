import React, { useEffect, useState } from "react";
import useFetchDetails from "../hooks/useFetchDetails";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";
import HorizontalScrollbar from "../components/HorizontalScrollbar";
import useFetch from "../hooks/useFetch";
import VideoPlayer from "../components/VideoPlayer";

const DetalsPage = () => {
  const param = useParams();
  const imageURL = useSelector((state) => state.vidioData.imageURL);
  const { data } = useFetchDetails(`/${param?.explore}/${param?.id}`);
  const { data: castData } = useFetchDetails(
    `/${param?.explore}/${param?.id}/credits`
  );
  const { data: similarData } = useFetch(
    `/${param?.explore}/${param?.id}/similar`
  );
  const { data: recomendedData } = useFetch(
    `/${param?.explore}/${param?.id}/recommendations`
  );
  // const { data: tvSeason } = useFetch(`/tv/${param?.id}/season/${season_number}`);

  //  for playing trailer
  const { data: videoDataInfo } = useFetchDetails(
    `/${param?.explore}/${param?.id}/videos`
  );
  const [playVedio, setPlayVedio] = useState(false);
  const [playVideoData, setPlayVideoData] = useState();

  // play video button
  const handlePlayVedio = () => {
    setPlayVideoData(videoDataInfo);
    setPlayVedio(true);
  };
  const duration = Number(data.runtime / 60)
    .toFixed(1)
    .split(".");

  // console.log("param =  ", param);
  // console.log("data = ", data);
  console.log("castData = ", castData);
  // console.log("similarData = ", similarData);
  // console.log("sa = ", similarData);

  return (
    <main>
      <section className="w-full h-[40vh] relative hidden lg:block">
        <div className="lg-screen-bg-image relative w-full h-full">
          <img
            src={imageURL + data.backdrop_path}
            alt="bacground mage"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent"></div>
        </div>
      </section>

      <section className="movie_data_container  container mx-auto px-5 pt-24 lg:py-0 flex flex-col gap-5 lg:flex-row">
        <div className="movie_poster  lg:-mt-32 h-80 w-60   relative mx-auto">
          <a href={data.homepage} target="_blank">
            <img
              src={imageURL + data.poster_path}
              alt="poster"
              className="rounded h-80 min-w-60 "
            />
          </a>
          <button
            onClick={handlePlayVedio}
            className="w-full h-11 bg-slate-600 text-white rounded my-5 transition-all hover:scale-90"
          >
            Play Trailer
          </button>
        </div>

        <div className="movie_info flex flex-col gap-1 lg:gap-3">
          <h2 className="movie_title text-2xl lg:text-5xl w-full font-bold mt-14 lg:mt-5">
            {" "}
            {data.title || data.original_name}
            {data.tagline ? (
              <span className="text-xl lg:text-3xl"> - {data.tagline} </span>
            ) : (
              " "
            )}
          </h2>

          <div className="flex gap-3 my-2  flex-wrap lg:my-0  items-center lg:gap-10 text-lg  text-neutral-400  ">
            <span className="w-12 h-12 rounded-full bg-neutral-600 text-white flex justify-center items-center">
              {" "}
              {Number(data.vote_average).toFixed(1)}
            </span>
            <span>•</span>
            <span>{moment(data.release_date).format("MMMM Do YYYY")}</span>
            {param?.explore === "movie" && (
              <span className="flex gap-3 lg:gap-10">
                <span>• </span>
                <span>
                  {" "}
                  {duration[0]} hr {duration[1]} min
                </span>
              </span>
            )}
            <span>•</span>
            <span>{data?.spoken_languages?.length} languages</span>
          </div>

          {param?.explore === "tv" && (
            <div className="flex gap-2 lg:gap-4 text-lg my-2 text-neutral-400 ">
              <span>
                {data?.seasons?.length > 1
                  ? data?.seasons?.length - 1
                  : data?.seasons?.length}{" "}
                Seasons
              </span>
              <span> • </span>
              <span> {data?.number_of_episodes} episodes </span>
              {!data?.episode_run_time && (
                <span>
                  <span> • </span>
                  <span> {data?.number_of_episodes} episodes </span>
                </span>
              )}
            </div>
          )}

          <div className="overview text-xl">
            <h3 className=" text-white text-xl my-2 pb-1 font-bold">Overview :</h3>
            <p className="text-xl text-neutral-400">{data.overview}</p>
          </div>

          <div className="genres flex flex-wrap gap-3 text-base lg:gap-10 lg:text-lg  text-neutral-400 my-5 lg:my-1">
            {data?.genres?.map((genre, index) => {
              return (
                <span
                  key={index}
                  className="border px-5 py-1 rounded-full text-center flex justify-center items-center transition-all hover:bg-neutral-700 "
                >
                  {genre.name}
                </span>
              );
            })}
          </div>

          <div className="castborder-t-[1px]py-4 lg:py-0">
            {castData?.cast?.length > 0 && (
              <div>
                <h2 className="font-bold text-lg lg:text-2xl mb-2">Cast : </h2>
                <div className="grid grid-cols-[repeat(auto-fit,112px)]  gap-1 lg:gap-8 lg:mt-5">
                  {castData?.cast?.slice(0, 14).map((cast, i) => {
                    return (
                      <div key={cast.id} className="">
                        <div className="w-28 h-28 lg:min-w-32 lg:h-32 rounded-full ">
                          {cast?.profile_path ? (
                            <img
                              src={imageURL + cast?.profile_path}
                              alt={cast.name}
                              loading="lazy"
                              className="w-24 h-24 lg:min-w-32 lg:h-32 rounded-full  transition-all  hover:scale-110 "
                            />
                          ) : (
                            <div className="w-full h-full rounded-full bg-gray-900/95 flex justify-center items-center">
                              no image{" "}
                            </div>
                          )}
                        </div>
                        <h2 className="text-sm lg:text-base text-neutral-500 font-bold -pt-8 lg:pt-3  text-center">
                          {cast.character}
                        </h2>
                        <h2 className="text-base lg:text-lg text-neutral-300 text-center ">
                          {" "}
                          {cast.original_name}{" "}
                        </h2>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <div className="crew">
            {castData?.crew?.length > 0 && (
              <div className="crew  border-t-[1px] border-t-neutral-800 py-1">
                <h2 className="font-bold text-lg lg:text-2xl my-3">Crew : </h2>
                <div className="grid grid-cols-[repeat(auto-fit,112px)]  gap-1 lg:gap-8">
                  {castData?.crew?.slice(0, 8)?.map((crew) => {
                    return (
                      <div key={crew.id} className="my-1">
                        <div className="w-24 h-24 lg:min-w-32 lg:h-32 mx-auto ">
                          {crew?.profile_path ? (
                            <img
                              src={imageURL + crew?.profile_path}
                              alt={crew.name}
                              className="w-24 h-24 lg:min-w-32 lg:h-32 rounded-full object-fill hover:scale-110 transition-all "
                            />
                          ) : (
                            <div className="w-full h-full rounded-full bg-gray-900/95 flex justify-center items-center">
                              no image{" "}
                            </div>
                          )}
                        </div>
                        <h2 className="text-sm lg:text-base pt-2 text-neutral-500 text-center">
                          {" "}
                          {crew?.job}{" "}
                        </h2>
                        <h2 className="text-base lg:text-lg text-neutral-300 text-center">
                          {" "}
                          {crew?.original_name}
                        </h2>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="my-3 pb-12">
        <HorizontalScrollbar
          data={similarData}
          heading={"Similar  " + param?.explore}
          media_Type={param?.explore}
        />
        <HorizontalScrollbar
          data={recomendedData}
          heading={"Recommended  " + param?.explore}
          media_Type={param?.explore}
        />
      </div>

      {/* video player component */}
      {playVedio && (
        <VideoPlayer
          playVideoData={videoDataInfo}
          close={() => setPlayVedio(false)}
        />
      )}
    </main>
  );
};

export default DetalsPage;
