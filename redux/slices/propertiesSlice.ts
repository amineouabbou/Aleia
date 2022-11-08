import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface Property {
  id: number;
  photoUrl: string;
  price: string;
  adress: string;
  liked: boolean;
  style: string;
}

interface PropertiesState {
  entities: Property[];
  loading: boolean;
}

const initialState = {
  entities: [],
  loading: false,
} as PropertiesState;

export const fetchProperties = createAsyncThunk(
  "list/fetchProperties",
  async (_, thunkAPI) => {
    const response = await axios.get("http://localhost:3000/proerties.json");

    return response.data;
  }
);

const propertiesSlice = createSlice({
  name: "properties",
  initialState,
  reducers: {
    likePost: (state, action) => {
      const likedPots = state.entities.map((item) => {
        if (item.id == action.payload) {
          item.liked ? (item.liked = false) : (item.liked = true);
        }
        return item;
      });
      console.log(likedPots);
      state.entities = likedPots;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProperties.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(fetchProperties.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchProperties.rejected, (state, action) => {
      console.log("Failed to Fetch");
      state.loading = false;
    });
  },
});

export const { likePost } = propertiesSlice.actions;

export default propertiesSlice.reducer;
