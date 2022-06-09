declare class BaseStore<K, R> {
    private store;
    clearAll(): void;
    removeRecord(timerKeys: K): void;
    getRecord(timerKeys: K): R | undefined;
    addRecord(timerKeys: K, record: R): void;
    updateRecord(timerKeys: K, record: R): void;
    getRecords(): Map<K, R>;
    getRecordsArray(): R[];
}

declare abstract class BaseTimer<K, R> extends BaseStore<K, R> {
    abstract addTimer(timerKeys: K, record: R): void;
    abstract clearTimer(timerKeys: K): void;
    abstract runTimer(timerKeys: K): void;
}

declare type TimerKeys = string | number | symbol;
interface TimerRecord {
    timeout: number;
    handler: () => void;
    taskId?: number | NodeJS.Timer;
}
declare class Timer extends BaseTimer<TimerKeys, TimerRecord> {
    runTimer(timerKeys: TimerKeys): void;
    addTimer(timerKeys: TimerKeys, record: TimerRecord): void;
    clearTimer(timerKeys: TimerKeys): void;
}

interface TaskRecord {
    taskId?: number | NodeJS.Timer;
}
declare let currentRunningTaskId: number | NodeJS.Timer;

export { BaseStore, BaseTimer, TaskRecord, Timer, TimerKeys, TimerRecord, currentRunningTaskId };
