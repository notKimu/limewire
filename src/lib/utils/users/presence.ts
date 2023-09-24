import type { ActivityDTO } from "../../discord/dto/activity.dto";


export function sortUserActivities(activities: ActivityDTO[]) {
    if (activities.length === 0) return null;
    return activities.sort((activity1, activity2) => activity2.type - activity1.type);
}