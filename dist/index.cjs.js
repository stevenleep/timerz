'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

class BaseStore {
    store = new Map();
    clearAll() {
        this.store.clear();
    }
    removeRecord(timerKeys) {
        this.store.delete(timerKeys);
    }
    getRecord(timerKeys) {
        return this.store.get(timerKeys);
    }
    addRecord(timerKeys, record) {
        this.store.set(timerKeys, record);
    }
    updateRecord(timerKeys, record) {
        this.addRecord(timerKeys, record);
    }
    getRecords() {
        return this.store;
    }
    getRecordsArray() {
        return Array.from(this.store.values());
    }
}

class BaseTimer extends BaseStore {
}

class Timer extends BaseTimer {
    runTimer(timerKeys) {
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
    addTimer(timerKeys, record) {
        this.addRecord(timerKeys, record);
        this.runTimer(timerKeys);
    }
    clearTimer(timerKeys) {
        const record = this.getRecord(timerKeys);
        if (record && record.taskId !== -1) {
            clearTimeout(record.taskId);
            this.removeRecord(timerKeys);
        }
    }
}

const DefaultTaskId = -1;
let currentRunningTaskId = DefaultTaskId;

exports.BaseStore = BaseStore;
exports.BaseTimer = BaseTimer;
exports.Timer = Timer;
exports.currentRunningTaskId = currentRunningTaskId;
