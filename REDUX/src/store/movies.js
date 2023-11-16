import { createSlice } from '@reduxjs/toolkit';


export const moviesSlice = createSlice({
    name:'movies',
    initialState:{
        list:[
            {id:1,title:'Pulp fiction'},
            {id:2,title:'Rambo'}
        ],
        name:'sadasd',
        date:'saasf'
    },
    reducers:{

    }
});

export default moviesSlice.reducer;