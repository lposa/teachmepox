import {
    postBooking,
    updateSchedule,
    fetchPostSchedule,
} from "./fetchEndpoints";

export async function addBooking(booking) {
    await postBooking(booking);
}

export async function createBooking(id, booking) {
    await updateSchedule(id, booking);
}

export async function postSchedule(schedule) {
    console.log(schedule);
    await fetchPostSchedule(schedule);
}