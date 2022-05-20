import { updateSchedule, fetchPostSchedule } from "./fetchEndpoints";

export async function createBooking(id, booking) {
    await updateSchedule(id, booking);
}

export async function postSchedule(schedule) {
    console.log(schedule);
    await fetchPostSchedule(schedule);
}