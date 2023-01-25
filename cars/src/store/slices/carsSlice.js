import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name:'cars',
    initialState: {
        searchTerm: '',
        data: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            // Assumption: action.payload === { name: 'example', cost: 123.45 }
            state.searchTerm = action.payload;
        },
        addCar(state, action) {
            state.data.push({
                id: nanoid(),
                name: action.payload.name,
                cost: action.payload.cost
            });
        },
        removeCar(state, action) {
            // Assumption: payload is the ID of the item to be removed
            const updatedCars = state.data.filter((car) => {
                return action.payload !== car.id
            })

            state.data = updatedCars;
        }
    }
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;