import React, { useState, useEffect, createContext } from 'react';

//Importing Api
import Api from '../../services/api';

export const ArtistContext = createContext({});

function ArtistProvider({ children }){
    const [artists, setArtists] = useState([]);
    const [loadingArtists, setLoadingArtists] = useState(false);
    const [artistAlbums, setArtistAlbums] = useState([]);
    const [loadingArtistAlbums, setLoadingArtistAlbums] = useState(false);

    async function loadArtistAlbums(artistId){
        setLoadingArtistAlbums(true);

        let res = await Api.get(`album/artist/${artistId}`);

        setArtistAlbums(res.data.response);

        setLoadingArtistAlbums(false);
    }

    useEffect(() => {
        async function loadArtists(){
            setLoadingArtists(true);

            let res = await Api.get('artist/');

            setArtists(res.data.response);

            setLoadingArtists(false);
        }

        loadArtists();
    }, [])

    return(
        <ArtistContext.Provider value={{artists, loadingArtists, artistAlbums, loadingArtistAlbums, loadArtistAlbums}}>
            {children}
        </ArtistContext.Provider>
    )
}

export default ArtistProvider;