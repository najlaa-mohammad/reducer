// import React, { useState } from 'react'
import { memo } from "react";

export default memo(function RenderName({ name }) {

    console.log("RenderName Component");

    return <h1>Name:{name}</h1>;
});


