export class BaseStore<K, R> {
    private store: Map<K, R> = new Map();

    clearAll(): void {
        this.store.clear();
    }
    removeRecord(timerKeys: K): void {
        this.store.delete(timerKeys);
    }
    getRecord(timerKeys: K): R | undefined {
        return this.store.get(timerKeys);
    }
    addRecord(timerKeys: K, record: R): void {
        this.store.set(timerKeys, record);
    }
    updateRecord(timerKeys: K, record: R): void {
        this.addRecord(timerKeys, record);
    }
    getRecords(): Map<K, R> {
        return this.store;
    }
    getRecordsArray(): R[] {
        return Array.from(this.store.values());
    }
}
