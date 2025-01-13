import TopAlbumsPage from "../pages/TopAlbumsPage";
import TopArtistsPage from "../pages/TopArtistsPage";
import SettingsPage from "../pages/SettingsPage";
import NotFoundPage from "../pages/NotFoundPage";
import AlbumPage from "../pages/AlbumPage";
import {
  ALBUMS_PAGE_ROUTE,
  ARTISTS_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
  SINGLE_ALBUM_PAGE_ROUTE,
  SINGLE_ARTIST_PAGE_ROUTE
} from "./consts";
import ArtistPage from "../pages/ArtistPage";

export const routes = [
  {
    path: ALBUMS_PAGE_ROUTE,
    element: TopAlbumsPage
  },
  {
    path: ARTISTS_PAGE_ROUTE,
    element: TopArtistsPage
  },
  {
    path: SETTINGS_PAGE_ROUTE,
    element: SettingsPage
  },
  {
    path: SINGLE_ALBUM_PAGE_ROUTE,
    element: AlbumPage
  },
  {
    path: SINGLE_ARTIST_PAGE_ROUTE,
    element: ArtistPage
  },
  {
    path: "*",
    element: NotFoundPage
  }
];
