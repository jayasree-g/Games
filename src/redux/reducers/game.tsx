import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { GameTypes } from "../types";

interface GameState {
  // products?: Array<Product>;
}

const initialState: GameState = {};

export default createReducer(initialState, (builder) => {
  builder.addCase(
    GameTypes.ACTION.START_GAME,
    (state, action: PayloadAction<any>) => {
      if (action.payload.data) return { ...state };
      return { ...state, error: action.payload.message };
    }
  );
});
