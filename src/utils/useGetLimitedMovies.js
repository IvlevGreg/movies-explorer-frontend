import { useEffect, useState } from 'react';
import { useGetCurrentDevice } from './useDevices';

export const useGetLimitedMovies = (movies, initialLimits) => {
  const [limitMovies, setLimitMovies] = useState([]);
  // const { mobileLimitInitial, desktopLimitInitial, tabletLimitInitial } = limits;
  // const [mobileLimit, setMobileLimit] = useState(mobileLimitInitial);
  // const [desktopLimit, setDesktopLimit] = useState(desktopLimitInitial);
  // const [tabletLimit, setTabletLimit] = useState(tabletLimitInitial);
  const currentDevice = useGetCurrentDevice();
  const [limits, setLimits] = useState(initialLimits);
  const shouldStopLoadNewMovie = limitMovies?.length >= movies?.length;
  const [isAllMoviesShow, setIsAllMoviesShow] = useState(shouldStopLoadNewMovie);

  useEffect(() => {
    setLimitMovies(() => movies.slice(0, initialLimits[currentDevice]));
  }, [currentDevice, movies]);

  useEffect(() => {
    setLimitMovies(() => movies.slice(0, limits[currentDevice]));
  }, [limits]);

  useEffect(() => {
    setIsAllMoviesShow(() => limitMovies?.length >= movies?.length);
  }, [limitMovies]);

  const callback = () => {
    setLimits((state) => ({
      ...state,
      [currentDevice]: state[currentDevice] + initialLimits[currentDevice],
    }));
  };

  return {
    limitMovies, callback, isAllMoviesShow,
  };
};
