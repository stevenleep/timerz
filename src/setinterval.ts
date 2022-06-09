export interface TaskRecord {
    taskId?: number | NodeJS.Timer;
}
const DefaultTaskId = -1;
export let currentRunningTaskId: number | NodeJS.Timer = DefaultTaskId;

export default function fakeSetinterval(callHandler: (...args: any[]) => void, timeout: number,
    taskRecord: TaskRecord = {
        taskId: DefaultTaskId
    }) {

    taskRecord.taskId = setTimeout(() => {
        if (callHandler) { callHandler(); }
        clearTimeout(taskRecord.taskId);
        fakeSetinterval(callHandler, timeout, taskRecord);
    }, timeout);

    // 补充功能
    currentRunningTaskId = taskRecord.taskId;

    return {
        cancel: () => clearTimeout(taskRecord.taskId),
        taskId: taskRecord.taskId
    };
}
