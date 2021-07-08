import * as React from 'react';
import {Screen} from '@nativescript/core/platform'
import Theme from '../../../utils/theme';
import IconSet from '../../../utils/fonts';
import { PartialMovie } from '../../../utils/types';
import { imageUrl } from '../../../utils/constants';

interface ContentsProps {
  isLoading: boolean;
  movies: PartialMovie[]
}

const BANNER_HEIGHT = Screen.mainScreen.heightDIPs - Screen.mainScreen.heightDIPs / 2
const Contents = ({
  isLoading,
  movies
} : ContentsProps) => {
  const firstMovie = movies[1];
  return (
    <stackLayout top={0} left={0} width={Screen.mainScreen.widthDIPs} height={Screen.mainScreen.heightDIPs}>
      <scrollView height={Screen.mainScreen.heightDIPs} visibility={!isLoading && movies.length > 0 ? "visible" : "hidden"}>
        <stackLayout paddingBottom={70}>
          {firstMovie && (
            <absoluteLayout height={BANNER_HEIGHT}>
              <image top={0} left={0} src={imageUrl(firstMovie.poster_path)} height="100%" width="100%" stretch="aspectFill" />
              <flexboxLayout flexDirection="column" paddingBottom={36} justifyContent="center" alignItems="center" height="100%" width="100%" background="linear-gradient(to bottom, rgba(0, 0, 0, 0) , rgba(0, 0, 0, 1))">
                <label marginTop={20} textWrap textAlignment="center" verticalAlignment="middle" text={firstMovie.title} style={{
                  fontSize: 36,
                  fontWeight: 'bold',
                  color: '#fff',
                }}/>
                <flexboxLayout style={{
                  background: Theme[500],
                  padding: 16,
                  borderRadius: 16,
                  alignItems: 'center',
                  color: '#fff'
                }}>
                  <label marginRight={8} className="AntDesign size30" text={IconSet.AntDesign.playcircleo} />
                  <label fontSize={18} text={`Play Now`}/>
                </flexboxLayout>
              </flexboxLayout>
            </absoluteLayout>
          )}
          {movies.length === 20 && (
            <>
              <MovieList title="Popular Movies" items={movies.slice(2, 7)} />
              <MovieList title="Continue Watching" items={movies.slice(8, 15)} />
              <MovieList title="New Movies" items={movies.slice(15, 20)} />
            </>
          )}
        </stackLayout>
      </scrollView>
      <flexboxLayout visibility={isLoading ? "visible" : "hidden"} alignItems="center" justifyContent="center" height={Screen.mainScreen.heightDIPs}>
        <activityIndicator busy color={Theme[500]} />
      </flexboxLayout>
    </stackLayout>
  )
}

interface MovieListProps {
  title: string;
  items: PartialMovie[];
}

const MovieList = ({
  items,
  title
}: MovieListProps) => {
  return (
    <stackLayout padding={16}>
      <label style={{
        color: '#fff',
        fontSize: 26
      }}>{title}</label>
      <scrollView orientation="horizontal" height={Screen.mainScreen.heightDIPs / 4}>
        <stackLayout orientation="horizontal">
          {items.map((item) => {
            return (
              <gridLayout key={item.id} marginRight={8} width={Screen.mainScreen.widthDIPs / 4} rows="*, auto">
                <image borderRadius={8} row={0} src={imageUrl(item.poster_path)} />
                <label row={1} style={{
                  color: '#fff',
                  fontSize: 10,
                  padding: 4,
                  textAlignment: 'center',
                }}>{item.title}</label>
              </gridLayout>
            )
          })}
        </stackLayout>
      </scrollView>
    </stackLayout>
  )
}

export default Contents;
