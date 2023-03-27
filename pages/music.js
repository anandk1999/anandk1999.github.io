import {Container, Box, Heading, useColorModeValue, Button, Input, Stack} from "@chakra-ui/react"
import Paragraph from "../components/paragraph"
import useSWR from 'swr';
import {SiSpotify} from "react-icons/si"
import { useState } from "react";
import { useRef } from "react";
import { searchTracks } from "./api/suggestions";
import { addTracks } from "./api/suggestions";

const Music = () => {
    const fetcher = (url) => fetch(url).then((r) => r.json());
    const { data } = useSWR('https://anandk1999-music.onrender.com/', fetcher);
    if (!data){
        const data = false
    }
    const [show, setShow] = useState(false);
    const [response, setResponse] = useState(false);
    const artistRef = useRef(false)
    const songRef = useRef(false)

    const handleSubmit = async () => {
        if(artistRef.current.value && songRef.current.value){
            const search = await searchTracks(songRef.current.value, artistRef.current.value);
            addTracks(search.tracks.items[0].uri)
            artistRef.current.value = null;
            songRef.current.value = null;
            setResponse(true);
            alert("You successfully added the song to the playlist :)")
        }
        else{
            alert("Input both Artist name and Song name please")
        }
    };
    return (
        <Container>
            <Heading as="h1" variant="section-title" align="center" fontSize={50}>
                Explore My Music
            </Heading>
            <Heading as="h3" variant="section-title"> Currently Playing </Heading>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={10} align="center">
                <link rel="stylesheet" href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" />
                <a
                    target='_blank'
                    rel='noopener noreferer'
                    href={
                        data?.isPlaying
                            ? data?.songUrl
                            : 'https://open.spotify.com/user/snhcsnwrhzbkf3x6ls36nz7hh?si=ad63024631b64f4a'
                    }
                    className='relative flex items-center p-5 space-x-4 transition-shadow rounded-md hover:shadow-md'
                >
                    <div className='w-32'>
                        {data?.isPlaying ? (
                            <img
                                className='w-32 shadow-sm'
                                src={data?.albumImageUrl}
                                alt={data?.album}
                            />
                        ):
                            (<SiSpotify size={64} color={'#1ED760'} />)
                        }
                    </div>

                    <div className='flex-1 text-2xl'>
                        <p className='font-bold component'>
                            {data?.isPlaying ? data?.title : 'Not Listening'}
                        </p>
                        <p className='text-sm font-dark'>
                            {data?.isPlaying ? data?.artist : 'Spotify'}
                        </p>
                    </div>
                    <div className='absolute bottom-0 right-0'>
                        <SiSpotify size={20} color={'#1ED760'} />
                    </div>
                </a>
            </Box>
            <h1 align="center" >
            {
                data?.isPlaying? null:(data ? <Button onClick={()=>setShow(!show)} >Recently Played</Button> : <Button>No Recently Played Song :{"("}</Button>)
                
            }
            {
                !show || data?.isPlaying ? null:(
                    <>
                        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.1000', 'whiteAlpha.200')} p={3} mb={10} align="center">
                        <link rel="stylesheet" href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" />
                        <a
                            target='_blank'
                            rel='noopener noreferer'
                            href={data?.isPlaying
                                ? data?.songUrl
                                : 'https://open.spotify.com/user/snhcsnwrhzbkf3x6ls36nz7hh?si=ad63024631b64f4a'}
                            className='relative flex items-center p-5 space-x-4 transition-shadow rounded-md hover:shadow-md'
                        >
                            <div className='w-32'>
                                <img
                                    className='w-32 shadow-sm'
                                    src={data?.albumImageUrl}/>
                            </div>

                            <div className='flex-1 text-2xl'>
                                <p className='font-bold component'>
                                    {data?.title}
                                </p>
                                <p className='text-sm font-dark'>
                                    {data?.artist}
                                </p>
                            </div>
                            <div className='absolute bottom-0 right-0'>
                                <SiSpotify size={20} color={'#1ED760'} />
                            </div>
                        </a>
                        </Box>
                    </>
                )

            }
            </h1>
            <Stack spacing={2}>
                <Heading as="h3" variant="section-title" alignItems={"center"}> Suggest Some Music </Heading>
                <Paragraph>
                        You can submit the artist name and the song name and the song will be entered into my spotify playlist, hope you have some good suggestions :)
                </Paragraph>
                <Stack spacing={0.1}>
                    <Input ref={artistRef} placeholder={"Artist Name"} bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}/>
                    <br />
                    <Input ref={songRef} placeholder={"Song Name"}  bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}/>
                    <br />
                    <Button onClick={handleSubmit}>Submit</Button>
                </Stack>
            </Stack>
        </Container>
    )
}

export default Music
