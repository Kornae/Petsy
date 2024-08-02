import React from "react";
import Nav from "./Nav";
import PetsIcon from '@mui/icons-material/Pets';
import { Button } from "@mui/joy";
import GroupAvatars from "./Avatars";

export default function Box1() {
    return (
        <div id="box1">
            <div id="nav" className="container"> <Nav /></div>
            <div id="text">
                <div id="text-content">
                    <h1 id="title">Find your perfect companion with petsi.</h1>
                    <p id="subtitle">Discover Your Ideal Furry Companion, Anytime, Anywhere.</p>
                    <Button variant="soft" className="btn btn-dark">Get Started<PetsIcon fontSize="small" sx={{ marginLeft: '5px' }} /></Button>
                </div>
            </div>

            <div id="avatars">
                <div id="avatarContent">
                    <p>Recommended by <strong>1800+</strong> people</p>
                    <div id="avGroup"> <GroupAvatars /></div>
                </div>
            </div>
        </div>
    )
}