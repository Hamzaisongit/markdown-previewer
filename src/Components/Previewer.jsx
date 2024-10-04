import React, { useContext, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Context from "../Context/creator";

export const Previewer = () => {
    const { data } = useContext(Context);

    return (
      <Card sx={{ minWidth: 275 }}>
         <CardContent>
         <div style={{textAlign:'center'}}>
         <h1>Preview</h1>
            <div dangerouslySetInnerHTML={{__html:data}} style={{ margin: '10px' }}>
            </div>
         </div>
         </CardContent>
      </Card>
    );
};
