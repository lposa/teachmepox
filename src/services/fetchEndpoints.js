export async function fetchSchedule() {
    const res = await fetch("http://localhost:8000/schedule");
    const data = await res.json();

    return data;
}

export async function updateSchedule(id, newBooking) {
    const res = await fetch(
        `http://localhost:8000/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(newBooking),
        }
    );
    const booking = await res.json();
    console.table("fetch endpoints: ", booking);
}

export async function fetchPostSchedule(schedule) {
    const res = await fetch("http://localhost:8000/admin/addDates", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(schedule),
    });
console.log(res.json())
}