/* eslint-disable react/prop-types */
import { useState, useEffect, useCallback } from "react";
import { useSpring, animated, useTransition } from "react-spring";
import { ChevronLeft, ChevronRight, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

const SliderSection = ({ data, layout }) => {
  //   console.log(data);

  //   const Icons = data?.Icon;

  const [index, setIndex] = useState(0);

  const onClick = useCallback((newIndex) => {
    setIndex(newIndex);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % data?.images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [data?.images.length]);

  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 },
  });

  const fadeIn = useSpring({
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    delay: 200,
    config: { tension: 280, friction: 20 },
  });

  const [buttonProps, buttonApi] = useSpring(() => ({
    scale: 1,
    config: { tension: 300, friction: 10 },
  }));

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % data?.images.length);
  };

  const prevSlide = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + data?.images.length) % data?.images.length
    );
  };

  const ImageSlider = () => (
    <div
      className={`relative h-[400px] ${
        data?.sHeight ? data?.sHeight : "md:h-[500px]"
      } ${
        data?.sWidth ? data?.sWidth : "md:w-auto"
      } rounded-2xl shadow-xl overflow-hidden group m-auto`}
    >
      {transitions((style, i) => (
        <animated.img
          style={style}
          src={data?.images[i]}
          alt={`Slide ${i + 1}`}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      ))}
      {data?.images?.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {data?.images?.map((_, i) => (
              <button
                key={i}
                onClick={() => onClick(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === index ? "bg-blue-600 w-4" : "bg-white/60 hover:bg-white"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );

  const Content = () => (
    <animated.div style={fadeIn} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        {data?.Icon && (
          <div className="w-16 lg:w-20 h-16 lg:h-20 p-2 mb-5 flex items-center text-2xl justify-center bg-blue-100 rounded-md">
            <data.Icon className="text-2xl h-10 w-10" />
          </div>
        )}

        <h2 className="text-2xl lg:text-4xl font-bold !leading-snug">
          {data?.title}
        </h2>

        {data?.paragraphs?.length > 0 && (
          <div className="space-y-4">
            {data?.paragraphs?.map((paragraph, index) => (
              <p key={index} className="text-gray-600 text-xl leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </div>

      {data?.pointers && (
        <ul className="space-y-4">
          {data?.pointers?.map((d, i) => {
            return (
              <li key={i} className="lg:text-lg flex gap-3">
                {/* <Minus /> */}
                <MoveRight className="opacity-80" />
                <div className="flex flex-col items-start">
                  <b className="capitalize min-w-max">{d?.name}</b>
                  {d?.desc}
                </div>{" "}
              </li>
            );
          })}
        </ul>
      )}

      {data?.ctaText && (
        <Link to={data?.ctaLink}>
          <animated.button
            style={{
              transform: buttonProps.scale.to((s) => `scale(${s})`),
            }}
            onMouseEnter={() => buttonApi.start({ scale: 1.05 })}
            onMouseLeave={() => buttonApi.start({ scale: 1 })}
            className="bg-blue-600 text-white capitalize px-8 py-3 rounded-lg font-medium text-lg hover:bg-blue-700 transition-colors"
          >
            {data?.ctaText}
          </animated.button>
        </Link>
      )}
    </animated.div>
  );

  return (
    <section className={`container mx-auto px-4 py-10`}>
      <div
        className={`grid md:grid-cols-2 gap-8 items-center ${
          layout ? "md:grid-flow-col-dense" : ""
        }`}
      >
        <div className={`block order-1 ${layout && "lg:order-2"}`}>
          <ImageSlider />
        </div>
        <div className={`block order-2 ${layout && "lg:order-1"}`}>
          <Content />
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
