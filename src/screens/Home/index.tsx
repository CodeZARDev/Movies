import * as React from 'react';
import { useState, useCallback, useEffect } from 'react';
import useLoading from '../../hooks/useLoading';
import Footer from './Footer';
import Header from './Header';
import Contents from './Contents/index';
import { allMoviesURL } from '../../utils/constants';
import { ApiResponseAll, PartialMovie } from '../../utils/types';

const HomeScreen: React.FC = () => {
  const [movies, setMovies] = useState<PartialMovie[]>([]);
  const { isLoading, setIsLoading } = useLoading(true);
  const getData = useCallback(async () => {
    const req = await fetch(allMoviesURL(1));
    const {results}: ApiResponseAll = await req.json();
    if (results) {
      setIsLoading(false);
      setMovies(results);
    } else {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData])

  return (
    <absoluteLayout background="black" style={{
      height: '100%'
    }}>
      <Contents isLoading={isLoading} movies={movies} />
      <gridLayout top={0} left={0} width="100%" height="100%" rows='auto, *, 70'>
        <Header />
        <Footer />
      </gridLayout>
    </absoluteLayout>
  )
}

export default HomeScreen;
