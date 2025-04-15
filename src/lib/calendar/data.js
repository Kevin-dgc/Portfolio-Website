// Calendar data management
let calendarData = [];
let count = 0;

export async function fetchJSON() {
    try {
        const response = await fetch('/api/calander/data');
        const data = await response.json();
        calendarData = data;
        return data;
    } catch (error) {
        console.error('Error fetching calendar data:', error);
        return [];
    }
}

export function getData() {
    return calendarData;
}

export function addEvent(org, name, date, time, link, description) {
    const newEvent = {
        org,
        name,
        date,
        time,
        link,
        description
    };
    
    calendarData.push(newEvent);
    count++;

    // To prevent too much data for my website
    while(count > 100){
      calendarData.pop();
    }

    saveData();
    return newEvent;
}

export function removeEvent(eventName) {
    if(calendarData.length === 0){
        return false;
    }

    const initialLength = calendarData.length;
    calendarData = calendarData.filter(event => event.name !== eventName);
    
    if (calendarData.length !== initialLength) {
        saveData();
        return true;
    }
    return false;
}

async function saveData() {
    try {
        await fetch('/api/calander/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(calendarData)
        });
    } catch (error) {
        console.error('Error saving calendar data:', error);
    }
}
