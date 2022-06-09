import { BaseTimer } from "./BaseTimer"
// import fakeSetInterval from "./setinterval"

export type TimerKeys = string | number | symbol;
export interface TimerRecord {
    timeout: number;
    handler: () => void;
    taskId?: number | NodeJS.Timer;
}

export class Timer extends BaseTimer<TimerKeys, TimerRecord> {
    runTimer(timerKeys: TimerKeys): void {
        const that = this;
        function fakeSetInterval() {
            const record = that.getRecord(timerKeys);
            if (record) {
                record.taskId = setTimeout(() => {
                    record.handler();
                    clearTimeout(record.taskId);
                    fakeSetInterval();
                }, record.timeout);
            }
        }
        fakeSetInterval();
    }

    addTimer(timerKeys: TimerKeys, record: TimerRecord): void {
        this.addRecord(timerKeys, record);
        this.runTimer(timerKeys);
    }

    clearTimer(timerKeys: TimerKeys): void {
        const record = this.getRecord(timerKeys);
        if (record && record.taskId !== -1) {
            clearTimeout(record.taskId);
            this.removeRecord(timerKeys);
        }
    }
}