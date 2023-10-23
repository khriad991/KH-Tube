import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Box} from "@mui/material";
import {
    Navbar,
    Feed,
    VideoDetail,
    ChannelDetail,
    SearchTerm,
} from "./componects";

const App = () => (
       <BrowserRouter>
           <Box sx={{backgroundColor:"#000"}}>
               <Navbar/>
               <Routes>
                   <Route path='/' exect element={<Feed/>} />
                   <Route path='/video/:id' element={<VideoDetail/>}/>
                   <Route path='/channel/:id' element={<ChannelDetail/>} />
                   <Route path="/search/:SearchTerm" element={<SearchTerm/>}/>
               </Routes>
           </Box>
       </BrowserRouter>
    );

export default App;