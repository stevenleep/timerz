import { BaseStore } from "./BaseStore";

export abstract class BaseTimer<K, R> extends BaseStore<K, R> {
    abstract addTimer(timerKeys: K, record: R): void;
    abstract clearTimer(timerKeys: K): void;
    abstract runTimer(timerKeys: K): void;
}
