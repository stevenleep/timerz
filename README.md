# timerz

use setInterval safely in your application

## Usage

#### register
```typescript
const timer = new Timer();

timer.addTimer(taskName, { 
    timeout: 1000,
    handler() {
        // do something ...
    }
});
```

#### cancel
```typescript
timer.clearTimer(taskName);
```

## Example
#### Simple Example
```typescript
import { Timer } from 'timerz';

// string | number | symbol
const task1 = Symbol('task'); 

const timer = new Timer();

// register a timer with task1
timer.addTimer(task1, { 
    timeout: 1000, // setInterval timeout: ms
    handler() {
        // do something ...
    }
});

// cancel the timer
timer.clearTimer(task1);
````

#### CustomTimer Example
```typescript
import { BaseTimer } from "timerz";

type Key = string | number | symbol;
interface Record {}

class CustomTimer extends BaseTimer<Key, Record> {
  runTimer(key: Key): void {}
  addTimer(key: Key, record: Record): void {}
  clearTimer(key: Key): void {}
}

const customTimer = new CustomTimer();
```

#### Advanced Custom
```typescript
import { BaseStore } from "timerz";

type Key = string | number | symbol;
interface Record {}

// 方式一
abstract class ATimer<K, R> extends BaseStore<K, R> {
  abstract append(): void;
}
class AdvancedTimer extends ATimer<Key, Record> {
  append() {
    // ...
  }
}
const aTimer = new AdvancedTimer();

// 方式二
interface BTimer {
  append(): void;
}
class AdvancedTimer2 extends BaseStore<Key, Record> implements BTimer {
  append() {}
}
const bTimer = new AdvancedTimer2();

// interface 和 abstract class 根据你自己的场景，这不是这个库研究的问题
```
